import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy",
    description: "Pragati360 refund and cancellation policy for paid plans.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function RefundPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="text-h1 font-bold mb-10">Refund Policy</h1>

            <div className="space-y-8 text-muted-foreground">
                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-3">1. Trial and paid conversion</h2>
                    <p>
                        Pragati360 provides a 14-day trial to evaluate product fit before paid activation. Customers are encouraged to
                        validate workflow suitability during the trial period.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-3">2. Subscription billing</h2>
                    <p>
                        Paid plans are billed based on selected capacity and usage terms. Billing cycles and plan details are shared during
                        onboarding and plan confirmation.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-3">3. Refund eligibility</h2>
                    <p>
                        Refund requests are reviewed for duplicate transactions, technical billing errors, or accidental charges.
                        Approved refunds are processed through the original payment channel.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-3">4. Cancellation</h2>
                    <p>
                        Customers may request cancellation before the next billing cycle. Access and data retention handling follow active
                        service terms communicated in plan documentation.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-3">5. Contact</h2>
                    <p>
                        For billing and refund queries, contact support@pragati360.com with account details and transaction reference.
                    </p>
                </section>
            </div>
        </div>
    );
}
