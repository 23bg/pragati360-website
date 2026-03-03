"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";

type OutletInput = {
    name: string;
    rating: number;
    reviewCount: number;
    responseRate: number;
};

const defaultOutlets: OutletInput[] = [
    { name: "Outlet 1", rating: 4.5, reviewCount: 120, responseRate: 78 },
    { name: "Outlet 2", rating: 4.1, reviewCount: 85, responseRate: 69 },
    { name: "Outlet 3", rating: 4.7, reviewCount: 140, responseRate: 82 },
];

export default function MultiOutletComparisonPage() {
    const [outlets, setOutlets] = useState<OutletInput[]>(defaultOutlets);
    const [email, setEmail] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);

    const { ratingVariance, responseVariance, riskOutlet, isFlagged } = useMemo(() => {
        const ratings = outlets.map((item) => item.rating);
        const responses = outlets.map((item) => item.responseRate);

        const maxRating = Math.max(...ratings);
        const minRating = Math.min(...ratings);
        const maxResponse = Math.max(...responses);
        const minResponse = Math.min(...responses);

        const ratingDiff = maxRating - minRating;
        const responseDiff = maxResponse - minResponse;

        const lowestByRating = outlets.reduce((lowest, current) => (current.rating < lowest.rating ? current : lowest), outlets[0]);
        const lowestByResponse = outlets.reduce((lowest, current) => (current.responseRate < lowest.responseRate ? current : lowest), outlets[0]);

        const flaggedOutlet = lowestByResponse.responseRate < 70 ? lowestByResponse : lowestByRating;
        const flagged = ratingDiff > 0.4 || outlets.some((item) => item.responseRate < 70);

        return {
            ratingVariance: Number(ratingDiff.toFixed(2)),
            responseVariance: Number(responseDiff.toFixed(2)),
            riskOutlet: flaggedOutlet,
            isFlagged: flagged,
        };
    }, [outlets]);

    const updateOutlet = (index: number, key: keyof OutletInput, value: string) => {
        setOutlets((current) =>
            current.map((outlet, outletIndex) =>
                outletIndex === index
                    ? {
                        ...outlet,
                        [key]: key === "name" ? value : Number(value),
                    }
                    : outlet,
            ),
        );
    };

    const addOutlet = () => {
        if (outlets.length >= 5) return;

        setOutlets((current) => [
            ...current,
            {
                name: `Outlet ${current.length + 1}`,
                rating: 4,
                reviewCount: 50,
                responseRate: 70,
            },
        ]);
    };

    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl space-y-10">
            <section>
                <h1 className="text-h1 font-bold mb-3">Multi-Outlet Comparison Score</h1>
                <p className="text-muted-foreground">Compare up to 5 outlets by rating, review volume, and response rate.</p>
            </section>

            <section className="space-y-4 rounded-lg border p-5 bg-card">
                {outlets.map((outlet, index) => (
                    <div key={`${outlet.name}-${index}`} className="rounded-md border p-4 space-y-3">
                        <div className="space-y-2">
                            <Label>Outlet name</Label>
                            <Input value={outlet.name} onChange={(e) => updateOutlet(index, "name", e.target.value)} />
                        </div>
                        <div className="grid gap-3 md:grid-cols-3">
                            <div className="space-y-2">
                                <Label>Rating</Label>
                                <Input type="number" step="0.1" min={0} max={5} value={outlet.rating} onChange={(e) => updateOutlet(index, "rating", e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label>Review count</Label>
                                <Input type="number" min={0} value={outlet.reviewCount} onChange={(e) => updateOutlet(index, "reviewCount", e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label>Response %</Label>
                                <Input type="number" min={0} max={100} value={outlet.responseRate} onChange={(e) => updateOutlet(index, "responseRate", e.target.value)} />
                            </div>
                        </div>
                    </div>
                ))}

                <Button type="button" variant="outline" onClick={addOutlet} disabled={outlets.length >= 5}>Add outlet (max 5)</Button>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-5 bg-card space-y-3">
                    <h2 className="text-h4 font-semibold">Output</h2>
                    <p className="text-muted-foreground">Rating variance: <strong className="text-foreground">{ratingVariance}</strong></p>
                    <p className="text-muted-foreground">Response variance: <strong className="text-foreground">{responseVariance}%</strong></p>
                    <p className="text-muted-foreground">Risk outlet: <strong className="text-foreground">{riskOutlet.name}</strong></p>
                    <p className="text-muted-foreground">Flag status: <strong className="text-foreground">{isFlagged ? "Needs intervention" : "Stable"}</strong></p>
                </div>

                {!isUnlocked ? (
                    <div className="rounded-lg border p-5 bg-card space-y-3">
                        <p className="text-sm text-muted-foreground">Enter email to unlock intervention priority recommendation.</p>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@business.com" />
                        <Button type="button" onClick={() => setIsUnlocked(Boolean(email.trim()))}>Unlock Full Result</Button>
                    </div>
                ) : (
                    <div className="rounded-lg border p-5 bg-card space-y-3">
                        <h3 className="font-semibold">Suggested intervention priority</h3>
                        <p className="text-sm text-muted-foreground">
                            Prioritize {riskOutlet.name} first with response workflow correction and review recovery SOP this week.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Rule applied: flag outlet when rating variance &gt; 0.4 or response rate &lt; 70%.
                        </p>
                    </div>
                )}
            </section>

            <section className="rounded-lg border p-6 bg-card">
                <h3 className="text-h4 font-semibold mb-2">Compare automatically across all your branches</h3>
                <p className="text-muted-foreground mb-4">Use continuous outlet comparison with alerts in Pragati360.</p>
                <Button asChild>
                    <Link href="/signup">Start Free Trial</Link>
                </Button>
            </section>
        </div>
    );
}
