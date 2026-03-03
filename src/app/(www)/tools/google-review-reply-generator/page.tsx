"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/i18n/navigation";

type Industry = "Restaurant" | "Clinic" | "Salon" | "Retail" | "Service";
type Tone = "Apology" | "Professional" | "Friendly" | "Formal";

const industries: Industry[] = ["Restaurant", "Clinic", "Salon", "Retail", "Service"];
const tones: Tone[] = ["Apology", "Professional", "Friendly", "Formal"];

function buildReply(rating: number, industry: Industry, tone: Tone, reviewText?: string) {
    const summary = reviewText?.trim() ? ` We noted your feedback: “${reviewText.trim()}”.` : "";

    if (rating <= 2) {
        return `Thank you for sharing this. We are sorry your experience did not meet expectations at our ${industry.toLowerCase()} business.${summary} We take this seriously and will review internally to improve immediately. Please connect with us directly so we can resolve this properly.`;
    }

    if (rating === 3) {
        return `Thank you for your feedback. We appreciate your visit and understand there is room to improve.${summary} Our team is reviewing this and we would value another opportunity to serve you better.`;
    }

    const tonePrefix =
        tone === "Formal"
            ? "Thank you for your positive feedback."
            : tone === "Professional"
                ? "Thanks for your review."
                : "Thank you so much for your kind words!";

    return `${tonePrefix} We're glad you had a good experience with our ${industry.toLowerCase()} team.${summary} We look forward to serving you again soon.`;
}

export default function GoogleReviewReplyGeneratorPage() {
    const [rating, setRating] = useState(5);
    const [industry, setIndustry] = useState<Industry>("Restaurant");
    const [tone, setTone] = useState<Tone>("Friendly");
    const [reviewText, setReviewText] = useState("");
    const [email, setEmail] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);

    const reply = useMemo(() => buildReply(rating, industry, tone, reviewText), [rating, industry, tone, reviewText]);

    const previewReply = `${reply.slice(0, 160)}${reply.length > 160 ? "..." : ""}`;

    const copyReply = async () => {
        const content = isUnlocked ? reply : previewReply;
        await navigator.clipboard.writeText(content);
    };

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl space-y-10">
            <section>
                <h1 className="text-h1 font-bold mb-3">Google Review Reply Generator</h1>
                <p className="text-muted-foreground">
                    Create structured review responses by rating, industry, and tone.
                </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 rounded-lg border p-5 bg-card">
                    <div className="space-y-2">
                        <Label htmlFor="rating">Rating (1–5)</Label>
                        <Input
                            id="rating"
                            type="number"
                            min={1}
                            max={5}
                            value={rating}
                            onChange={(event) => setRating(Math.min(5, Math.max(1, Number(event.target.value) || 1)))}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <select
                            id="industry"
                            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                            value={industry}
                            onChange={(event) => setIndustry(event.target.value as Industry)}
                        >
                            {industries.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="tone">Tone</Label>
                        <select
                            id="tone"
                            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                            value={tone}
                            onChange={(event) => setTone(event.target.value as Tone)}
                        >
                            {tones.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="reviewText">Review text (optional)</Label>
                        <Textarea
                            id="reviewText"
                            value={reviewText}
                            onChange={(event) => setReviewText(event.target.value)}
                            rows={4}
                        />
                    </div>
                </div>

                <div className="space-y-4 rounded-lg border p-5 bg-card">
                    <h2 className="text-h4 font-semibold">Generated reply</h2>
                    <Textarea value={isUnlocked ? reply : previewReply} readOnly rows={8} />
                    <Button type="button" variant="outline" onClick={copyReply}>Copy</Button>

                    {!isUnlocked && (
                        <div className="rounded-lg border p-4 space-y-3">
                            <p className="text-sm text-muted-foreground">Preview shown. Enter email to unlock full result.</p>
                            <Input
                                type="email"
                                placeholder="you@business.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <Button type="button" onClick={() => setIsUnlocked(Boolean(email.trim()))}>Unlock Full Result</Button>
                        </div>
                    )}
                </div>
            </section>

            <section className="rounded-lg border p-6 bg-card">
                <h3 className="text-h4 font-semibold mb-2">Automatically detect and reply inside Pragati360</h3>
                <p className="text-muted-foreground mb-4">Move from manual templates to structured response workflows.</p>
                <Button asChild>
                    <Link href="/signup">Start Free Trial</Link>
                </Button>
            </section>
        </div>
    );
}
