"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Link2,
    RefreshCcw,
    MessageSquare,
    Smartphone,
    Image as ImageIcon,
    BarChart2,
} from "lucide-react"

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
)

export default function HowItWorks() {
    const steps = [
        {
            title: "Connect your Google Account",
            desc: "Sign in once using secure Google OAuth2. No passwords required.",
            icon: Link2,
        },
        {
            title: "Sync All Your Business Locations",
            desc: "We automatically fetch and update your Google Business locations.",
            icon: RefreshCcw,
        },
        {
            title: "Manage & Reply to Reviews",
            desc: "Handle customer feedback instantly from a centralized dashboard.",
            icon: MessageSquare,
        },
        {
            title: "Get Instant WhatsApp Alerts",
            desc: "Receive real-time notifications for new reviews & negative ratings.",
            icon: Smartphone,
        },
        {
            title: "Create Google Posts Easily",
            desc: "Publish updates, offers, and photos directly to your GBP.",
            icon: ImageIcon,
        },
        {
            title: "Track Insights & Growth",
            desc: "See performance metrics and understand your business trends.",
            icon: BarChart2,
        },
    ]

    return (
        <section id="how" className="py-24 bg-neutral-900/30 backdrop-blur-sm">
            <Container>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white">How Pragati360 Works</h2>
                    <p className="text-gray-400 mt-3">
                        A simple 6-step journey designed for Indian SMBs to grow on Google.
                    </p>
                </div>

                <div className="mt-14 space-y-5">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Accordion
                                type="single"
                                collapsible
                                className="border border-white/10 rounded-xl bg-neutral-900/60 backdrop-blur-xl shadow-lg"
                            >
                                <AccordionItem value={`step-${i}`}>
                                    <AccordionTrigger className="px-6 py-5 text-white text-lg flex items-center gap-4">
                                        {/* Step Badge */}
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white shadow-lg
                      bg-gradient-to-br from-blue-500 to-green-500">
                                            {i + 1}
                                        </div>

                                        {/* Icon */}
                                        <step.icon className="h-6 w-6 text-blue-400" />

                                        {step.title}
                                    </AccordionTrigger>

                                    <AccordionContent className="px-6 pb-6 text-gray-300 text-sm leading-relaxed">
                                        {step.desc}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
