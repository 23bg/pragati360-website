"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
)

export default function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[700px] h-[700px] bg-green-500/10 blur-[160px] rounded-full"></div>
            </div>

            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Card
                        className="
              relative backdrop-blur-xl
              bg-neutral-900/50 dark:bg-neutral-900/40
              border border-white/10 shadow-2xl
              rounded-3xl text-center py-16 px-10
            "
                    >
                        {/* Sparkles Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center shadow-xl">
                                <Sparkles className="w-7 h-7 text-white" />
                            </div>
                        </div>

                        <h2 className="text-4xl font-extrabold text-white">
                            Ready to grow on Google?
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                            Start syncing locations, replying to reviews, posting updates and boosting your Google visibility — all from one powerful dashboard.
                        </p>

                        {/* CTA Button */}
                        <Button
                            className="
                mt-10 px-10 py-6 text-lg font-semibold rounded-xl
                bg-gradient-to-r from-blue-500 to-green-500 text-white
                shadow-lg hover:shadow-green-500/20 transition-all hover:scale-[1.03]
              "
                        >
                            Start Free — No Card Needed →
                        </Button>

                        {/* Sub Text */}
                        <p className="text-gray-500 text-xs mt-4">
                            Free for 14 days. Cancel anytime.
                        </p>
                    </Card>
                </motion.div>
            </Container>
        </section>
    )
}
