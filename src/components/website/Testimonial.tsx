"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { ACCENT } from "@/shared/constants/colors"

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
)

export default function Testimonials() {
    const reviews = [
        {
            name: "Rahul Patil",
            role: "Retail Shop Owner",
            msg: "Pragati360 boosted my local visibility and increased walk-ins within weeks!",
            color: ACCENT.blue,
        },
        {
            name: "Neha Deshmukh",
            role: "Cafe Founder",
            msg: "The review management and WhatsApp alerts helped our cafe grow 2x faster.",
            color: ACCENT.green,
        },
        {
            name: "Ayaan Traders",
            role: "Multi-location Business",
            msg: "Finally a tool built for Indian businesses! Managing all locations is so easy now.",
            color: ACCENT.red,
        },
    ]

    return (
        <section id="testimonials" className="py-24 bg-neutral-900/40 backdrop-blur-sm">
            <Container>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white">Loved by Businesses</h2>
                    <p className="text-gray-400 mt-3">
                        See how Pragati360 helps businesses grow faster and improve their Google presence.
                    </p>
                </div>

                <div className="mt-14 grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-neutral-900/70 border-white/10 backdrop-blur-xl shadow-xl hover:border-white/20 transition-all duration-300 rounded-xl h-full">
                                <CardContent className="p-7 flex flex-col h-full">
                                    {/* Avatar */}
                                    <div
                                        className="w-14 h-14 rounded-full shadow-lg self-start"
                                        style={{
                                            background: `linear-gradient(135deg, ${review.color}, #ffffff20)`,
                                        }}
                                    />

                                    {/* Message */}
                                    <p className="text-gray-300 mt-4 text-sm leading-relaxed italic">
                                        “{review.msg}”
                                    </p>

                                    {/* Stars */}
                                    <div className="flex gap-1 mt-4 text-yellow-400">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} size={16} fill="currentColor" stroke="none" />
                                        ))}
                                    </div>

                                    {/* Name + role */}
                                    <div className="mt-auto pt-6">
                                        <p className="text-white font-semibold">{review.name}</p>
                                        <p className="text-gray-400 text-xs tracking-wide">{review.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
