# Pragati360 V1 PRD (Website Scope Only)

This document defines only the **Public Website + Acquisition Layer** scope for V1.

## Scope Boundary

- In scope: Public marketing pages, tools acquisition layer, SEO guides, internal linking, tool data model, performance and exclusions.
- Out of scope: Dashboard workflows, dashboard UX, dashboard feature changes.

---

## 13) Public Website & Acquisition Layer (V1)

Pragati360 public web has two roles:

1. Convert paying customers
2. Acquire organic SMB traffic through structured free tools

This layer must remain aligned with:

- Reputation control
- Lead discipline
- Multi-outlet visibility

No generic growth positioning.

### 13.1 Public Website Architecture

#### Core Marketing Pages

##### 1) Home (`/`)

Purpose: Clear positioning + trial conversion.

Sections:

- Headline: Control your Google reviews and enquiries from one place
- Subtext: Multi-outlet alerts, lead tracking, simple website
- CTA: Start Free Trial
- Problem section
- How it works (3-step)
- Feature highlights
- Pricing preview
- FAQ
- Footer (Legal + Login)

##### 2) Features (`/features`)

Structured breakdown:

- Review Monitoring
- Review Alerts & Escalation
- Auto-Reply (Rule-Based)
- Google Post Scheduling
- Public Website Builder
- Lead Management
- Multi-Outlet Comparison

Each feature block includes:

- Functional explanation
- Screenshot
- Clear limitations

##### 3) Pricing (`/pricing`)

Capacity-based clarity.

Plan comparison table:

- Outlets
- Users
- Alert channels
- Website
- Lead management
- Auto-reply
- Custom domain

Include:

- 14-day trial explanation
- Expiry behavior
- FAQ

##### 4) Security & Data Handling (`/security`)

Required because of:

- Google OAuth
- Lead data storage
- WhatsApp alerts

Include:

- OAuth token encryption at rest
- Multi-tenant isolation by `orgId`
- No data resale policy
- Backup frequency
- Infrastructure region
- Rate limiting & abuse prevention

##### 5) Contact (`/contact`)

- Email
- WhatsApp link
- Support form

##### 6) Legal Pages

- Privacy Policy
- Terms of Service
- Refund Policy

### 13.2 Tools Acquisition Layer

Purpose: Drive SEO traffic and convert to trial.

Exactly 5 tools. Each tool:

- Lives under `/tools`
- Has independent SEO page
- Includes email capture before full result (optional but recommended)
- Ends with contextual CTA

#### Tools Hub Page

URL: `/tools`

Displays:

- All 5 tools
- Short descriptions
- Industry relevance tags
- CTA: Get Full Monitoring with Pragati360

#### Tool 1 — Google Review Reply Generator

URL: `/tools/google-review-reply-generator`

Inputs:

- Rating (1–5)
- Industry (Restaurant / Clinic / Salon / Retail / Service)
- Tone (Apology / Professional / Friendly / Formal)
- Review text (optional)

Output:

- Structured reply template
- Editable text box
- Copy button

Data logic:

- Template library stored in DB
- Condition-based selection:
	- If rating ≤ 2 → apology template
	- If rating = 3 → neutral recovery template
	- If rating ≥ 4 → appreciation template

Conversion block:

- “Automatically detect and reply inside Pragati360.”

#### Tool 2 — Reputation Health Score Calculator

URL: `/tools/reputation-health-score`

Inputs:

- Total reviews
- Average rating
- % reviews replied
- Avg response time (hours)

Scoring formula (V1 simple weighted model):

`Score = (40% Rating Weight) + (30% Response Rate Weight) + (20% Response Time Weight) + (10% Review Volume Weight)`

Output:

- Score (0–100)
- Grade (A / B / C / D)
- Risk label
- Suggested improvements

Conversion block:

- “Track and improve this automatically.”

#### Tool 3 — Lead Response Time Risk Calculator

URL: `/tools/lead-response-risk-calculator`

Inputs:

- Average response time (minutes)
- Leads per month
- Avg ticket value (₹)

Calculation:

- Estimated lost conversion = Delay multiplier × industry baseline drop %
- Estimated monthly leakage = Lost conversion × Avg ticket × Leads

Output:

- Revenue leakage estimate
- Recommended response SLA
- Suggested automation approach

Conversion block:

- “Get real-time enquiry alerts.”

#### Tool 4 — Google Business Optimization Checklist

URL: `/tools/google-optimization-checklist`

Checklist fields:

- Profile description filled
- Primary category optimized
- Photos uploaded recently
- Reviews replied to
- Posts in last 30 days
- Q&A section active

Each yes/no weighted.

Output:

- Optimization Score (0–100)
- Missing items list
- Priority actions

Constraint:

- No external scraping in V1
- Manual input only

Conversion block:

- “Monitor activity across outlets.”

#### Tool 5 — Multi-Outlet Comparison Score

URL: `/tools/multi-outlet-comparison`

Inputs (up to 5 outlets):

- Rating
- Review count
- Response %

Output:

- Variance %
- Risk outlet
- Suggested intervention priority

Logic:

- Flag outlet if:
	- Rating variance > 0.4
	- OR response rate < 70%

Conversion block:

- “Compare automatically across all your branches.”

### 13.3 Required Supporting Pages for SEO

Add minimal guides:

- `/guides/how-to-respond-negative-google-review`
- `/guides/why-review-response-time-matters`
- `/guides/how-to-manage-multiple-business-locations`

Each guide:

- 1000–1500 words
- Internal links to tools
- Internal links to features
- Clear CTA

### 13.4 Internal Linking Architecture

- Home → Features → Pricing
- Home → Tools
- Guides → Tools
- Tools → Trial
- Industry pages → Tools + Trial

No dead pages.

### 13.5 Data & Storage Model for Tools

Free tools data stored separately from org data.

Entity: `ToolSession`

- `sessionId`
- `email` (optional)
- `toolType`
- `inputData` (JSON)
- `resultScore`
- `createdAt`

Enables:

- Email nurturing
- Industry segmentation
- Retargeting campaigns

### 13.6 Email Capture Strategy

Soft gate:

- User sees preview result
- Full report unlocked after email entry

Avoid aggressive gating.

### 13.7 Performance Requirements

Tools must:

- Load < 2 seconds
- Compute client-side when possible
- Avoid Google API dependency
- Be stateless if possible

### 13.8 Explicit Exclusions (Public Layer)

No:

- Public review scraping
- Live competitor comparison
- AI sentiment analysis
- Social media scheduling tool
- Blog engine in V1
- 20 random calculators

---

## Updated Positioning Summary

Pragati360 V1 includes:

Core SaaS:

- Review monitoring
- Alerts
- Post scheduling
- Lead management
- Public website builder

Acquisition Layer:

- 5 high-intent free tools
- 3 SEO guides
- Structured landing architecture

Focused. Defensible. Buildable. India-relevant.

---

## Local Development

Run the project:

```bash
pnpm dev
```

Open `http://localhost:3000`.
