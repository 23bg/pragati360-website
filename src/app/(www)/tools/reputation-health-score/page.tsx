"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

function gradeFromScore(score: number) {
    if (score >= 85) return "A";
    if (score >= 70) return "B";
    if (score >= 50) return "C";
    return "D";
}

function riskFromScore(score: number) {
    if (score >= 85) return "Low Risk";
    if (score >= 70) return "Moderate Risk";
    if (score >= 50) return "Elevated Risk";
    return "High Risk";
}

export default function ReputationHealthScorePage() {
    const [totalReviews, setTotalReviews] = useState(120);
    const [averageRating, setAverageRating] = useState(4.2);
    const [reviewsRepliedPercent, setReviewsRepliedPercent] = useState(72);
    const [avgResponseTimeHours, setAvgResponseTimeHours] = useState(8);
    const [email, setEmail] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);

    const score = useMemo(() => {
        const ratingWeight = clamp(averageRating / 5, 0, 1) * 40;
        const responseRateWeight = clamp(reviewsRepliedPercent / 100, 0, 1) * 30;
        const responseTimeWeight = clamp(1 - avgResponseTimeHours / 72, 0, 1) * 20;
        const reviewVolumeWeight = clamp(totalReviews / 500, 0, 1) * 10;

        return Math.round(ratingWeight + responseRateWeight + responseTimeWeight + reviewVolumeWeight);
    }, [averageRating, reviewsRepliedPercent, avgResponseTimeHours, totalReviews]);

    const grade = gradeFromScore(score);
    const riskLabel = riskFromScore(score);

    const improvements = [
        reviewsRepliedPercent < 80 ? "Increase review reply rate above 80%." : "Keep reply rate discipline above 80%.",
        avgResponseTimeHours > 12 ? "Reduce average response time below 12 hours." : "Maintain response speed below 12 hours.",
        averageRating < 4.3 ? "Prioritize service-recovery playbooks for low-star reviews." : "Preserve quality consistency and recent feedback loop.",
    ];

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl space-y-10">
            <section>
                <h1 className="text-h1 font-bold mb-3">Reputation Health Score Calculator</h1>
                <p className="text-muted-foreground">
                    Weighted V1 model using rating, response rate, response time, and review volume.
                </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 rounded-lg border p-5 bg-card">
                    <div className="space-y-2">
                        <Label htmlFor="totalReviews">Total reviews</Label>
                        <Input id="totalReviews" type="number" min={0} value={totalReviews} onChange={(e) => setTotalReviews(Number(e.target.value) || 0)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="averageRating">Average rating</Label>
                        <Input id="averageRating" type="number" step="0.1" min={0} max={5} value={averageRating} onChange={(e) => setAverageRating(Number(e.target.value) || 0)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reviewsRepliedPercent">% reviews replied</Label>
                        <Input id="reviewsRepliedPercent" type="number" min={0} max={100} value={reviewsRepliedPercent} onChange={(e) => setReviewsRepliedPercent(Number(e.target.value) || 0)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="avgResponseTimeHours">Avg response time (hours)</Label>
                        <Input id="avgResponseTimeHours" type="number" min={0} value={avgResponseTimeHours} onChange={(e) => setAvgResponseTimeHours(Number(e.target.value) || 0)} />
                    </div>
                </div>

                <div className="space-y-4 rounded-lg border p-5 bg-card">
                    <h2 className="text-h4 font-semibold">Result</h2>
                    <div className="rounded-md border p-4">
                        <p className="text-sm text-muted-foreground">Score (0–100)</p>
                        <p className="text-score font-bold">{score}</p>
                        {isUnlocked ? (
                            <>
                                <p className="mt-2">Grade: <strong>{grade}</strong></p>
                                <p className="text-muted-foreground">Risk label: {riskLabel}</p>
                            </>
                        ) : (
                            <p className="text-muted-foreground mt-2">Grade and risk label unlock after email.</p>
                        )}
                    </div>

                    {!isUnlocked ? (
                        <div className="rounded-lg border p-4 space-y-3">
                            <p className="text-sm text-muted-foreground">Enter email to unlock full report and improvements.</p>
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@business.com" />
                            <Button type="button" onClick={() => setIsUnlocked(Boolean(email.trim()))}>Unlock Full Result</Button>
                        </div>
                    ) : (
                        <div className="rounded-lg border p-4">
                            <p className="font-medium mb-2">Suggested improvements</p>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                {improvements.map((tip) => (
                                    <li key={tip}>• {tip}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            <section className="rounded-lg border p-6 bg-card">
                <h3 className="text-h4 font-semibold mb-2">Track and improve this automatically</h3>
                <p className="text-muted-foreground mb-4">Get outlet-level monitoring and escalation workflows in Pragati360.</p>
                <Button asChild>
                    <Link href="/signup">Start Free Trial</Link>
                </Button>
            </section>
        </div>
    );
}
