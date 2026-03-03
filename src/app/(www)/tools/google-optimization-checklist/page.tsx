"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";

const fields = [
    { key: "description", label: "Profile description filled", weight: 18 },
    { key: "category", label: "Primary category optimized", weight: 18 },
    { key: "photos", label: "Photos uploaded recently", weight: 16 },
    { key: "replies", label: "Reviews replied to", weight: 18 },
    { key: "posts", label: "Posts in last 30 days", weight: 15 },
    { key: "qna", label: "Q&A section active", weight: 15 },
] as const;

type FieldKey = (typeof fields)[number]["key"];

type ChecklistState = Record<FieldKey, boolean>;

const initialState: ChecklistState = {
    description: false,
    category: false,
    photos: false,
    replies: false,
    posts: false,
    qna: false,
};

export default function GoogleOptimizationChecklistPage() {
    const [values, setValues] = useState<ChecklistState>(initialState);
    const [email, setEmail] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);

    const { score, missing } = useMemo(() => {
        const rawScore = fields.reduce((total, field) => total + (values[field.key] ? field.weight : 0), 0);
        const missingItems = fields.filter((field) => !values[field.key]).map((field) => field.label);

        return {
            score: Math.round(rawScore),
            missing: missingItems,
        };
    }, [values]);

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl space-y-10">
            <section>
                <h1 className="text-h1 font-bold mb-3">Google Business Optimization Checklist</h1>
                <p className="text-muted-foreground">Manual input checklist with weighted score. No external scraping in V1.</p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 rounded-lg border p-5 bg-card">
                    <h2 className="text-h4 font-semibold">Checklist fields</h2>
                    {fields.map((field) => (
                        <label key={field.key} className="flex items-center justify-between rounded-md border p-3">
                            <span className="text-sm">{field.label}</span>
                            <input
                                type="checkbox"
                                checked={values[field.key]}
                                onChange={(event) => setValues((current) => ({ ...current, [field.key]: event.target.checked }))}
                            />
                        </label>
                    ))}
                </div>

                <div className="space-y-4 rounded-lg border p-5 bg-card">
                    <h2 className="text-h4 font-semibold">Output</h2>
                    <div className="rounded-md border p-4">
                        <p className="text-sm text-muted-foreground">Optimization score (0–100)</p>
                        <p className="text-score font-bold">{score}</p>
                    </div>

                    {!isUnlocked ? (
                        <div className="rounded-lg border p-4 space-y-3">
                            <p className="text-sm text-muted-foreground">Preview shown. Enter email to unlock missing items and priorities.</p>
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@business.com" />
                            <Button type="button" onClick={() => setIsUnlocked(Boolean(email.trim()))}>Unlock Full Result</Button>
                        </div>
                    ) : (
                        <div className="rounded-lg border p-4 space-y-3">
                            <p className="font-medium">Missing items</p>
                            {missing.length === 0 ? (
                                <p className="text-sm text-muted-foreground">No critical missing items detected.</p>
                            ) : (
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {missing.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                            )}
                            <p className="text-sm text-muted-foreground"><strong className="text-foreground">Priority:</strong> Fix top 2 missing items this week.</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="rounded-lg border p-6 bg-card">
                <h3 className="text-h4 font-semibold mb-2">Monitor activity across outlets</h3>
                <p className="text-muted-foreground mb-4">Use Pragati360 for ongoing branch-level consistency checks.</p>
                <Button asChild>
                    <Link href="/signup">Start Free Trial</Link>
                </Button>
            </section>
        </div>
    );
}
