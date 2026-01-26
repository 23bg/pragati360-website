import Link from "next/link"

export const dynamic = "force-dynamic";

export default function AboutUsPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Pragati360: Built for Local Business Owners, By Local Business Owners.</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-8">
                    Our mission is to empower local businesses with reliable tools for online visibility and control, fostering growth through trust and clarity.
                </p>
            </div>

            <div className="container mx-auto px-4 mt-12 max-w-3xl">
                <p className="text-muted-foreground mb-8 text-lg leading-8">
                    Pragati360 was born from a deep understanding of the challenges faced by local businesses in managing their online presence. In an increasingly digital world, maintaining a consistent, accurate, and engaging presence on platforms like Google Business Profile and Instagram is no longer optional—it's essential for survival and growth.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">Why it Exists: Bridging the Gap for Local Commerce</h2>
                <p className="text-muted-foreground mb-8 text-lg leading-8">
                    We saw a need for a platform that prioritizes stability, transparency, and merchant control over flashy promises and complex automations. Many existing solutions either over-promise or under-deliver, leaving local business owners feeling overwhelmed or disempowered. Pragati360 is designed to be the reliable partner you can trust.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">Who it is Built For: The Dedicated Local Entrepreneur</h2>
                <p className="text-muted-foreground mb-8 text-lg leading-8">
                    Pragati360 is for the hardworking local business owner, the entrepreneur, the independent shopkeeper, and the service provider who understands the value of their online reputation. It's for those who demand clarity, appreciate reliability, and want to maintain a human touch in their digital interactions. If you run a local business and rely on Google Business Profile and Instagram to connect with customers, Pragati360 is for you.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-center">What it Intentionally Avoids: No Hype, Just Results</h2>
                <ul className="list-disc list-inside text-muted-foreground text-lg leading-8 mb-8">
                    <li><strong>AI Automation without Approval:</strong> We will never act autonomously. All AI is assistive, requiring your final say.</li>
                    <li><strong>Growth-Hack Tactics:</strong> Sustainable growth comes from consistent effort and authentic engagement, not shortcuts.</li>
                    <li><strong>Over-promising and Under-delivering:</strong> Our features are built for reliability and clarity, delivering on what we promise.</li>
                    <li><strong>Complex Marketing Intelligence:</strong> Our focus is on clear visibility and actionable control, not overwhelming data.</li>
                </ul>

                <div className="text-center mt-12">
                    <Link href="/early-access" className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90">
                        Get Early Access
                    </Link>
                </div>
            </div>
        </div>
    );
}
