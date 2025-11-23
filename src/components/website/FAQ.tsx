"use client"

import React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
)

export default function FAQ() {
    const faqs = [
        {
            q: "Is Pragati360 free?",
            a: "Yes! You can start free with 1 location to explore all basic features.",
        },
        {
            q: "Do I need Google Business access?",
            a: "Yes. You need to sign in securely using Google OAuth to sync your business data.",
        },
        {
            q: "Is my data secure?",
            a: "Tokens are encrypted, auto-rotated, and stored using industry-grade protections.",
        },
        {
            q: "Can I manage multiple locations?",
            a: "Absolutely—our Growth and Scale plans support up to 15 locations.",
        },
        {
            q: "Will WhatsApp alerts work on all plans?",
            a: "Yes! All plans include WhatsApp alerts with different monthly limits.",
        },
        {
            q: "Do you support agencies?",
            a: "Yes, our Scale plan is perfect for freelancers, agencies, and multi-location brands.",
        },
    ]

    return (
        <section id="faq" className="py-28 bg-neutral-950 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 opacity-20 blur-3xl pointer-events-none">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-[40%] h-[40%] rounded-full top-10 left-10 absolute" />
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 w-[35%] h-[35%] rounded-full bottom-10 right-10 absolute" />
            </div>

            <Container>
                {/* Header */}
                <div className="text-center mb-14 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex justify-center mb-3">
                            <HelpCircle size={38} className="text-blue-400" />
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-2">Frequently Asked Questions</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Everything you need to know about using Pragati360 for your Google Business Profile.
                        </p>
                    </motion.div>
                </div>

                {/* FAQ List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <Accordion type="multiple" className="space-y-4">
                        {faqs.map((f, i) => (
                            <AccordionItem
                                key={i}
                                value={`faq-${i}`}
                                className="border border-white/10 rounded-xl bg-neutral-900/70 backdrop-blur-lg shadow-lg hover:border-white/20 transition-all"
                            >
                                <AccordionTrigger className="px-6 py-4 text-white text-lg font-medium hover:text-blue-300 transition">
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-5 text-gray-300 text-sm leading-relaxed">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </Container>
        </section>
    )
}
