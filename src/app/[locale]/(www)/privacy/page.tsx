"use client"


export default function PrivacyPage() {
    return (
        <div className=" bg-background">

            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <h1 className="text-4xl font-bold text-foreground mb-12">Privacy Policy</h1>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                        <p className="text-secondary leading-relaxed">
                            We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
                            and safeguard your information when you visit our website and services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                        <p className="text-secondary leading-relaxed mb-3">
                            We may collect information about you in a variety of ways. The information we may collect on the site
                            includes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-secondary">
                            <li>Personal identification information (name, email address, phone number, etc.)</li>
                            <li>Financial and billing information</li>
                            <li>Data provided through forms and surveys</li>
                            <li>Usage data and analytics information</li>
                            <li>Device and browser information</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Your Information</h2>
                        <p className="text-secondary leading-relaxed mb-3">
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                            experience. Specifically, we may use information collected about you via the site to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-secondary">
                            <li>Generate a personal profile about you so that future visits to the site will be personalized</li>
                            <li>Fulfill orders and deliver services you have requested</li>
                            <li>Email you regarding updates or service-related announcements</li>
                            <li>Monitor and analyze usage and trends</li>
                            <li>Process transactions and send related information</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclosure of Your Information</h2>
                        <p className="text-secondary leading-relaxed">
                            We may share or disclose your information in the following circumstances: as required by law, to enforce
                            our site policies, or to protect ours or others' rights, property, or safety. Information may also be
                            disclosed to trusted third parties who assist us in operating our website, conducting our business, or
                            serving our users.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Security of Your Information</h2>
                        <p className="text-secondary leading-relaxed">
                            We use administrative, technical, and physical security measures to help protect your personal
                            information. While we have taken reasonable steps to secure the personal information you provide to us,
                            please be aware that despite our efforts, no security measures are perfect or impenetrable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                        <p className="text-secondary leading-relaxed">
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 p-4 bg-muted rounded">
                            <p className="text-foreground font-semibold">Privacy Team</p>
                            <p className="text-secondary">Email: privacy@company.com</p>
                            <p className="text-secondary">Address: 123 Main Street, San Francisco, CA 94105</p>
                        </div>
                    </section>

                    <section className="pt-8 border-t border-border">
                        <p className="text-sm text-secondary">Last updated: November 2025</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
