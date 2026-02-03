import { NextResponse } from 'next/server';
import getDb from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

/*
  Phase-1: Early Access API (minimal lead pipeline)

  Collection: early_access_requests

  Strict schema (fields only listed here - NO extra fields):
  - businessName: string (required)
  - contactName: string | null
  - businessEmail: string (required, normalized lowercase)
  - phone: string | null
  - whatsappNumber: string | null
  - numOutlets: string (required) — e.g. "1", "2-5", "6-10", "11+"
  - usesGBP: boolean (required, must be true)
  - platformsUsed: string[] (optional)
  - currentManagement: string | null (optional short text)
  - whyInterested: string | null (optional)
  - language: 'en' | 'hi' (required)
  - status: enum (see below) — default 'new'
  - notes: Array<{ text: string; author?: string; date: string }> (manual notes only)
  - createdAt: Date
  - updatedAt: Date

  Index recommendations (manual steps in Atlas):
  - Single-field index on `businessEmail` (fast duplicate lookups)
  - Single-field index on `status` (filtering for review queues)
  - Compound index { status:1, createdAt:-1 } for review lists sorted by newest

  Status enum (Phase-1 only):
  - new: just created (default)
  - reviewed: human reviewed and notes added
  - approved: accepted for onboarding (manual)
  - paid: payment confirmed (manual)
  - onboarded: manual onboarding completed
  - rejected: manual reject

  Important constraints / privacy
  - Data collected only for Early Access eligibility review.
  - Do NOT store passwords, OAuth tokens, Google/Instagram credentials, or payment information.
  - All transitions are manual and done through MongoDB Atlas or internal scripts.

  Phase-2 notes (comments only):
  - Approved records become the source-of-truth for later onboarding flows.
  - When moving to Phase-2, you'll create a separate `customers` collection and copy minimal fields.
  - We intentionally keep no auth or admin UI in Phase-1.

*/

type ReqBody = {
    businessName?: unknown;
    contactName?: unknown;
    businessEmail?: unknown;
    phone?: unknown;
    whatsappNumber?: unknown;
    numOutlets?: unknown;
    usesGBP?: unknown;
    platformsUsed?: unknown;
    currentManagement?: unknown;
    whyInterested?: unknown;
    language?: unknown;
    honeypot?: unknown; // simple spam trap — should be empty
};

function isString(v: unknown): v is string {
    return typeof v === 'string' && v.trim().length > 0;
}

function isEmail(v: string) {
    // simple email regex — enough for server-side validation here
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
}

export async function POST(request: Request) {
    try {
        const body: ReqBody = await request.json();

        // Honeypot spam check
        if (body.honeypot && String(body.honeypot).trim() !== '') {
            return NextResponse.json({ error: 'spam' }, { status: 400 });
        }

        const errors: Array<{ field: string; message: string }> = [];

        if (!isString(body.businessName)) {
            errors.push({ field: 'businessName', message: 'Business name is required' });
        }

        if (!isString(body.businessEmail) || !isEmail(String(body.businessEmail))) {
            errors.push({ field: 'businessEmail', message: 'Valid business email is required' });
        }

        if (!isString(body.numOutlets)) {
            errors.push({ field: 'numOutlets', message: 'Number of outlets is required' });
        }

        if (body.usesGBP !== true) {
            // Strict: must be boolean true (applicant must confirm GBP usage)
            errors.push({ field: 'usesGBP', message: 'You must confirm you use Google Business Profile' });
        }

        const language = String(body.language || 'en');
        if (!(language === 'en' || language === 'hi')) {
            errors.push({ field: 'language', message: 'Language must be "en" or "hi"' });
        }

        if (errors.length > 0) {
            return NextResponse.json({ errors }, { status: 400 });
        }

        // Normalize fields
        const businessEmail = String(body.businessEmail).trim().toLowerCase();
        const businessName = String(body.businessName).trim();
        const contactName = isString(body.contactName) ? String(body.contactName).trim() : null;
        const phone = isString(body.phone) ? String(body.phone).trim() : null;
        const whatsappNumber = isString(body.whatsappNumber) ? String(body.whatsappNumber).trim() : null;
        const numOutlets = String(body.numOutlets).trim();
        const platformsUsed = Array.isArray(body.platformsUsed)
            ? (body.platformsUsed as unknown[]).filter((p) => typeof p === 'string').map(String)
            : [];
        const currentManagement = isString(body.currentManagement) ? String(body.currentManagement).trim() : null;
        const whyInterested = isString(body.whyInterested) ? String(body.whyInterested).trim() : null;

        // Connect to DB
        const db = await getDb();
        const col = db.collection('early_access_requests');

        // Duplicate check: same email already submitted and not rejected
        const existing = await col.findOne({ businessEmail });
        if (existing) {
            // If there is an existing record, we do not create a duplicate.
            return NextResponse.json(
                {
                    error: 'duplicate',
                    message: 'An application with this email already exists',
                },
                { status: 409 }
            );
        }

        const now = new Date();

        const doc = {
            businessName,
            contactName,
            businessEmail,
            phone,
            whatsappNumber,
            numOutlets,
            usesGBP: true,
            platformsUsed,
            currentManagement,
            whyInterested,
            language,
            status: 'new' as const,
            notes: [] as Array<{ text: string; author?: string; date: string }>,
            createdAt: now,
            updatedAt: now,
        };

        const result = await col.insertOne(doc);

        // Return safe success response — do not echo applicant's full data
        return NextResponse.json({ success: true, id: String(result.insertedId) }, { status: 201 });
    } catch (err) {
        // Structured error response
        // Note: in production you may hide internal error details
        return NextResponse.json(
            { error: 'internal_error', message: (err as Error).message || 'Server error' },
            { status: 500 }
        );
    }
}

/*
  Error handling & edge cases covered:
  - Duplicate submissions by `businessEmail` respond 409 and are not stored
  - Invalid or missing required fields return 400 with structured `errors` array
  - Spam detection via a hidden `honeypot` field; any non-empty value is rejected
  - Rate limiting: recommend using a lightweight proxy or Vercel rate-limiter or Cloudflare; do not implement heavy limits in Phase-1

  Admin: To review entries, open MongoDB Atlas, find `early_access_requests` in the configured DB, and use filters like:
    { status: 'new' }  -- to list new applicants
    { businessEmail: 'foo@bar.com' } -- lookup by email

  Manual status updates: use Atlas UI or mongo shell to `updateOne({ _id: ObjectId("...") }, { $set: { status: 'reviewed' }, $push: { notes: { text: 'Checked GBP', author: 'founder', date: new Date().toISOString() } } })`

  Do NOT add admin UI or scheduling — Phase-2 only.
*/
