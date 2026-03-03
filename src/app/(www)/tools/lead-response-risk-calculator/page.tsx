"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";

function getDelayMultiplier(minutes: number) {
    if (minutes <= 5) return 0.1;
    if (minutes <= 15) return 0.25;
    if (minutes <= 30) return 0.4;
    if (minutes <= 60) return 0.6;
    return 0.8;
}

function recommendedSla(minutes: number) {
    if (minutes <= 10) return "Maintain ≤10 minutes";
    if (minutes <= 30) return "Target ≤15 minutes";
    return "Urgent: target ≤10 minutes with alert escalation";
}

export default function LeadResponseRiskCalculatorPage() {
    const [avgResponseMinutes, setAvgResponseMinutes] = useState(35);
    const [leadsPerMonth, setLeadsPerMonth] = useState(120);
    const [avgTicketValue, setAvgTicketValue] = useState(3500);
    const [email, setEmail] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);

    const { lostConversion, leakage } = useMemo(() => {
        const delayMultiplier = getDelayMultiplier(avgResponseMinutes);
        const industryBaselineDrop = 0.25;
        const estimatedLostConversion = delayMultiplier * industryBaselineDrop;
        const estimatedLeakage = estimatedLostConversion * avgTicketValue * leadsPerMonth;

        return {
            lostConversion: estimatedLostConversion,
            leakage: Math.round(estimatedLeakage),
        };
    }, [avgResponseMinutes, leadsPerMonth, avgTicketValue]);

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl space-y-10">
            <section>
                <h1 className="text-h1 font-bold mb-3">Lead Response Time Risk Calculator</h1>
                <p className="text-muted-foreground">Estimate conversion loss and monthly leakage from delayed enquiry responses.</p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4 rounded-lg border p-5 bg-card">
                    <div className="space-y-2">
                        <Label htmlFor="response">Average response time (minutes)</Label>
                        <Input id="response" type="number" min={0} value={avgResponseMinutes} onChange={(e) => setAvgResponseMinutes(Number(e.target.value) || 0)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="leads">Leads per month</Label>
                        <Input id="leads" type="number" min={0} value={leadsPerMonth} onChange={(e) => setLeadsPerMonth(Number(e.target.value) || 0)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="ticket">Avg ticket value (₹)</Label>
                        <Input id="ticket" type="number" min={0} value={avgTicketValue} onChange={(e) => setAvgTicketValue(Number(e.target.value) || 0)} />
                    </div>
                </div>

                <div className="space-y-4 rounded-lg border p-5 bg-card">
                    <h2 className="text-h4 font-semibold">Result</h2>
                    <div className="rounded-md border p-4">
                        <p className="text-sm text-muted-foreground">Estimated lost conversion</p>
                        <p className="text-2xl font-semibold">{(lostConversion * 100).toFixed(1)}%</p>
                        <p className="text-sm text-muted-foreground mt-3">Estimated monthly leakage</p>
                        <p className="text-h2 font-bold">₹{leakage.toLocaleString("en-IN")}</p>
                    </div>

                    {!isUnlocked ? (
                        <div className="rounded-lg border p-4 space-y-3">
                            <p className="text-sm text-muted-foreground">Enter email to unlock SLA and automation recommendation.</p>
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@business.com" />
                            <Button type="button" onClick={() => setIsUnlocked(Boolean(email.trim()))}>Unlock Full Result</Button>
                        </div>
                    ) : (
                        <div className="rounded-lg border p-4 space-y-2 text-sm text-muted-foreground">
                            <p><strong className="text-foreground">Recommended response SLA:</strong> {recommendedSla(avgResponseMinutes)}</p>
                            <p><strong className="text-foreground">Suggested automation:</strong> Route enquiries to owner/manager alerts with retry escalation.</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="rounded-lg border p-6 bg-card">
                <h3 className="text-h4 font-semibold mb-2">Get real-time enquiry alerts</h3>
                <p className="text-muted-foreground mb-4">Move from leakage estimates to active lead-response discipline.</p>
                <Button asChild>
                    <Link href="/signup">Start Free Trial</Link>
                </Button>
            </section>
        </div>
    );
}
