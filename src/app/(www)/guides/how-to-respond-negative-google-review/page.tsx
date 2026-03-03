import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export const metadata = generateSeoMetadata({
    title: "How to Respond to a Negative Google Review",
    description:
        "Step-by-step guide for Indian SMB owners to respond to negative Google reviews with recovery intent and operational discipline.",
    ogUrl: "/guides/how-to-respond-negative-google-review",
    ogType: "article",
});

export default function NegativeReviewGuidePage() {
    return (
        <article className="container mx-auto px-4 py-16 max-w-4xl">
            <header className="mb-10">
                <h1 className="text-h1 font-bold mb-4">How to respond to a negative Google review</h1>
                <p className="text-body text-muted-foreground">
                    A practical framework for Indian SMB teams to reduce reputational damage and recover customer trust.
                </p>
            </header>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p>
                    Negative reviews are not rare events for local businesses. They are operational signals. A delayed or emotional response
                    can convert one bad customer experience into a larger trust issue visible to every future prospect. For most Indian SMB
                    operators, reviews influence not only walk-ins but also enquiry quality, average deal confidence, and partner credibility.
                    That is why your reply process should be disciplined, repeatable, and owner-visible.
                </p>
                <p>
                    The first principle is speed with control. Do not wait three days to reply, and do not respond in anger. A useful target
                    for negative reviews is first-response within 12 hours, preferably sooner during business hours. Early acknowledgement
                    communicates ownership. Even if full investigation takes time, customers and future readers see that you do not ignore
                    complaints. This reduces perceived risk for others who are considering your business.
                </p>
                <p>
                    The second principle is structure. A high-quality response typically has five parts: acknowledgement, empathy,
                    accountability language, recovery intent, and direct escalation path. Keep it concise and respectful. Avoid blaming the
                    customer in public. You can clarify facts, but do so with neutral language. The objective of public response is trust
                    restoration, not argument victory.
                </p>
                <p>
                    A practical template can look like this: “Thank you for sharing your experience. We are sorry this did not meet the
                    standard we aim to provide. We are reviewing this internally and would like to resolve it quickly. Please contact us at
                    [phone/email] with your visit details so we can take immediate action.” This template works because it confirms listening,
                    signals seriousness, and moves detailed resolution to a private channel.
                </p>
                <p>
                    Context still matters. A one-star review about hygiene in a restaurant, appointment delay in a clinic, or rude behavior in
                    a salon requires different internal owners and timelines. Your public response can be similar in tone, but the internal
                    action playbook should vary by category. Build category-specific SOPs so teams know who gets alerted, who investigates,
                    and when management must intervene.
                </p>
                <p>
                    Never use copy-paste replies blindly. Customers recognize generic responses instantly. Use a base template but include one
                    relevant detail from the complaint where possible. For example, “We understand your concern about waiting time on Saturday
                    evening.” This small specificity shows authenticity and improves perceived accountability without exposing internal
                    operations.
                </p>
                <p>
                    Escalation discipline is essential for multi-outlet teams. If rating is two stars or lower, route alert to outlet manager
                    and central operations at the same time. If similar issue repeats three times in a week, escalate to regional owner with a
                    root-cause review. This keeps review response from becoming a cosmetic task and turns it into a quality-control signal.
                </p>
                <p>
                    Do not overpromise in public replies. Avoid statements like “This will never happen again” unless you can support the
                    claim operationally. A better version is: “We are implementing corrective action and reviewing team process today.” Honest
                    and specific language protects trust better than exaggerated assurance.
                </p>
                <p>
                    Track outcomes, not just reply count. Useful metrics include negative-review first-response time, recovery contact rate,
                    repeat complaint categories, and outlet-level variance. If one branch consistently receives complaints on waiting time while
                    others do not, the issue is operational, not reputational. Your review management process should surface this quickly.
                </p>
                <p>
                    Many SMB teams ask whether to request review edits after resolution. The answer is yes, but only after issue closure and
                    only with polite request language. Do not pressure customers. If resolution is genuine, some customers voluntarily update
                    their rating. Focus on service recovery first; rating improvement follows operational consistency.
                </p>
                <p>
                    A common mistake is handling all review responses manually from personal accounts with no audit trail. This creates risk in
                    handovers and missed alerts. Even simple automation with rule-based templates and escalation workflows can reduce delay and
                    improve consistency significantly, especially for businesses with multiple outlets or rotating staff.
                </p>
                <p>
                    If you are starting from scratch, begin with three immediate actions this week: define approved negative-review templates,
                    set response SLA by star rating, and assign owner-level escalation for unresolved cases. Once this baseline is stable,
                    optimize with analytics and outlet comparison.
                </p>
                <p>
                    You can test response formats using the free <Link href="/tools/google-review-reply-generator">Google Review Reply Generator</Link> and
                    evaluate overall posture with the <Link href="/tools/reputation-health-score">Reputation Health Score Calculator</Link>. Then map those
                    insights to the core feature workflow on the <Link href="/features">Features page</Link> and move to trial when your team is ready.
                </p>
            </div>

            <section className="mt-10 rounded-lg border p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-2">Turn review replies into a controlled workflow</h2>
                <p className="text-muted-foreground mb-4">
                    Use rule-based response logic, escalation alerts, and outlet-level visibility in one operational system.
                </p>
                <Button asChild>
                    <Link href="/signup">Start Free Trial</Link>
                </Button>
            </section>
        </article>
    );
}
