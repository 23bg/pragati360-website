"use client"

import Link from "next/link"


export default function AboutUsPage() {
    return (
        <div className=" bg-background">


            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-foreground mb-6">About Us</h1>
                    <p className="text-xl text-secondary leading-relaxed">
                        We're on a mission to create innovative solutions that empower businesses and individuals to achieve their
                        goals with confidence and ease.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="bg-muted py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
                        <div className="space-y-6 text-secondary leading-relaxed">
                            <p>
                                Founded in 2020, our company started with a simple vision: to build products that solve real problems in
                                innovative and elegant ways. What began as a small team of passionate developers and designers has grown
                                into a dynamic organization committed to excellence.
                            </p>
                            <p>
                                Over the past few years, we've had the privilege of serving thousands of customers worldwide. Each day,
                                we focus on understanding their needs and delivering solutions that exceed expectations. Our success is
                                measured not just by metrics, but by the positive impact we have on our clients' businesses.
                            </p>
                            <p>
                                Today, we continue to innovate while staying true to our core values: integrity, creativity, and
                                customer obsession. We believe that the best products come from listening, learning, and continuously
                                improving.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 container mx-auto px-4">
                <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
                        <p className="text-secondary">
                            We embrace new ideas and technologies to create cutting-edge solutions that push boundaries.
                        </p>
                    </div>
                    <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-primary mb-3">Quality</h3>
                        <p className="text-secondary">
                            Every product we deliver meets the highest standards of quality and reliability.
                        </p>
                    </div>
                    <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-primary mb-3">Transparency</h3>
                        <p className="text-secondary">
                            We believe in open communication and honest relationships with our customers and team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-muted py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Leadership Team</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { name: "John Smith", role: "Founder & CEO", bio: "Serial entrepreneur with 15+ years of experience." },
                            { name: "Sarah Johnson", role: "VP Engineering", bio: "Tech visionary leading our product development." },
                            { name: "Michael Chen", role: "VP Operations", bio: "Operational excellence expert scaling our team." },
                        ].map((member) => (
                            <div key={member.name} className="bg-background p-6 rounded-lg text-center border border-border">
                                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4"></div>
                                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                                <p className="text-primary mb-3">{member.role}</p>
                                <p className="text-sm text-secondary">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Ready to work together?</h2>
                    <Link href="/contact-us">
                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
