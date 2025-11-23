"use client"

import React from "react"
import { ACCENT } from "@/shared/constants/colors"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IndianRupee, CheckCircle2 } from "lucide-react"

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
)

export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "₹499/month",
            color: ACCENT.blue,
            button: "Start Free Trial",
            idealFor: "Best for small shops, salons, cafés, freelancers",
            features: [
                "Connect 1 Google Account",
                "Up to 2 Locations",
                "Daily Auto Sync",
                "Reply to Google Reviews",
                "WhatsApp Alerts (20/month)",
                "Unlimited Email Alerts",
                "3 Google Posts / Month",
                "Basic Post Editor",
                "Photo Upload",
                "30-Day Insights",
                "Weekly Summary Email",
                "Standard Support (Email + WhatsApp)",
            ],
        },

        {
            name: "Growth",
            price: "₹999/month",
            color: ACCENT.green,
            popular: true,
            button: "Upgrade to Growth",
            idealFor: "Perfect for multi-location SMBs and growing brands",
            features: [
                "1 Google Account",
                "Up to 5 Locations",
                "Auto Sync 3× Daily",
                "Unlimited Review Alerts (Email + WA)",
                "Reply Templates",
                "AI Reply Assistance (25/month)",
                "Unlimited Google Posts",
                "Post Scheduling",
                "Image & Media Upload",
                "6-Month Analytics + Trends",
                "Keyword Insights",
                "Review QR Generator",
                "Review Sharing Page",
                "Auto Review Reminder Templates",
                "Priority WhatsApp Support",
                "Free Onboarding Call",
            ],
        },

        {
            name: "Scale",
            price: "₹2,499/month",
            color: ACCENT.red,
            button: "Contact Sales",
            idealFor: "Agencies, franchises, and marketing professionals",
            features: [
                "Up to 15 Locations",
                "1-Hour Auto Sync",
                "Auto-detect New Locations",
                "Unlimited WhatsApp Alerts",
                "AI Reply Suggestions (100/month)",
                "Negative Review Alerts",
                "Unlimited Google Posts",
                "Bulk Posting Across Locations",
                "Template Library",
                "12-Month Analytics",
                "Geo Insights + Area Heatmaps",
                "Competitor Signals (Basic)",
                "Review Landing Page (Auto Collection)",
                "VIP WhatsApp Support",
                "Priority Issue Resolution",
            ],
        },
    ]

    const addOns = [
        { title: "Extra Location", price: "₹149/month" },
        { title: "Extra AI Reply Credits", price: "₹199 / 100 replies" },
        { title: "Advanced Insights Pack", price: "₹199/month" },
        { title: "Dedicated WhatsApp Support", price: "₹199/month" },
        { title: "Extra Review Alerts Pack", price: "₹149/month" },
        { title: "Photo Optimization Pack", price: "₹99/month" },
    ]

    return (
        <section id="pricing" className="py-28 bg-gradient-to-b from-neutral-950 to-neutral-900 relative">
            <Container>
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold text-white tracking-tight">
                        Pricing for Every Indian Business
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-lg">
                        Transparent pricing. No team accounts. No RBAC complexity.
                        Built for India’s SMBs, franchises & agencies.
                    </p>
                </motion.div>

                {/* PLANS GRID */}
                <div className="grid md:grid-cols-3 gap-10">
                    {plans.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: i * 0.12 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className={`
                  relative backdrop-blur-xl 
                  bg-neutral-900/50 border border-white/10 
                  rounded-2xl shadow-2xl overflow-hidden
                  hover:border-white/20 transition-all 
                  hover:scale-[1.02]
                  ${p.popular ? "shadow-green-500/20 scale-[1.03]" : ""}
                `}
                            >
                                {/* Popular Badge */}
                                {p.popular && (
                                    <div className="absolute top-4 right-4 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-semibold shadow">
                                        Most Popular
                                    </div>
                                )}

                                <CardContent className="p-8 flex flex-col h-full">
                                    {/* Title */}
                                    <h3 className="text-3xl font-bold text-white">{p.name}</h3>
                                    <p className="text-gray-400 mt-1 text-sm">{p.idealFor}</p>

                                    {/* Price */}
                                    <Badge
                                        className="mt-5 text-black px-4 py-1 font-bold text-base self-start"
                                        style={{ background: p.color }}
                                    >
                                        {p.price}
                                    </Badge>

                                    {/* Features */}
                                    <ul className="mt-8 space-y-3 text-gray-300 text-sm">
                                        {p.features.map((f, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button */}
                                    <Button className="mt-10 w-full py-5 text-lg bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:opacity-90">
                                        {p.button}
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* ADD-ONS */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-white mt-24">Add-Ons</h3>
                    <p className="text-gray-400 mt-3 mb-10 text-lg">
                        Enhance your subscription with additional features.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {addOns.map((addon, i) => (
                            <Card
                                key={i}
                                className="bg-neutral-800/50 backdrop-blur border border-white/10 rounded-xl hover:border-white/20 transition"
                            >
                                <CardContent className="p-6">
                                    <div className="text-xl text-white font-semibold">{addon.title}</div>
                                    <div className="text-gray-400 mt-1">{addon.price}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
