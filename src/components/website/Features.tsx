"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    RefreshCcw,
    MessageSquare,
    Bell,
    BarChart2,
    Star,
    Send,
    Image as ImageIcon,
    Globe,
    Clock,
    MessageCircle,
    Smartphone,
    Sparkles,
    MapPin,
    Layers,
} from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

/* ---------------- UPDATED FEATURES ---------------- */
export default function Features() {
    const items = [
        // Google Sync
        {
            title: "1-Click Google Account Sync",
            desc: "Securely connect your Google Business Profile in seconds.",
            icon: RefreshCcw,
        },
        {
            title: "Auto Location Sync",
            desc: "Your GBP locations stay updated automatically.",
            icon: Globe,
        },
        {
            title: "Frequent Auto-Sync",
            desc: "Plan-based sync frequency: daily, 3x daily or every hour.",
            icon: Clock,
        },

        // Reviews
        {
            title: "Review Management",
            desc: "Read, manage & reply to all your Google reviews.",
            icon: MessageSquare,
        },
        {
            title: "AI Reply Suggestions",
            desc: "AI-generated reply recommendations for faster review handling.",
            icon: Sparkles,
        },
        {
            title: "Negative Review Alerts",
            desc: "Instant alerts when customers post negative reviews.",
            icon: Bell,
        },

        // Posts
        {
            title: "Google Posts",
            desc: "Create, schedule & publish Google Posts easily.",
            icon: Send,
        },
        {
            title: "Media Uploads",
            desc: "Upload images & manage media for your posts.",
            icon: ImageIcon,
        },

        // WhatsApp & Email Alerts
        {
            title: "WhatsApp Alerts",
            desc: "Get instant WhatsApp notifications for new reviews & updates.",
            icon: Smartphone,
        },
        {
            title: "Email Notifications",
            desc: "Receive email summaries & review alerts instantly.",
            icon: MessageCircle,
        },

        // Review Boost Tools
        {
            title: "Review QR Generator",
            desc: "Print-friendly QR to collect more positive reviews.",
            icon: Star,
        },
        {
            title: "Review Campaign Links",
            desc: "Shareable links to boost customer feedback.",
            icon: Send,
        },

        // Insights
        {
            title: "Analytics & Insights",
            desc: "Track performance, views, clicks & impressions.",
            icon: BarChart2,
        },
        {
            title: "Trends & Growth Metrics",
            desc: "Monitor business growth with visual charts.",
            icon: Layers,
        },

        // Multi-location
        {
            title: "Multi-Location Management",
            desc: "Manage up to 15+ locations based on your plan.",
            icon: MapPin,
        },
    ];

    return (
        <section id="features" className="py-24 bg-neutral-900/40">
            <Container>
                <h2 className="text-3xl font-bold text-white">Everything You Need to Grow on Google</h2>
                <p className="text-gray-400 mt-2 max-w-xl">
                    A complete suite for Indian businesses to manage GBP locations, reviews, posts, insights & alerts.
                </p>

                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-neutral-800/80 border-white/10 hover:border-white/20 transition shadow-lg backdrop-blur-sm">
                                <CardContent className="p-6">
                                    <f.icon className="h-8 w-8 text-blue-400" />
                                    <h4 className="text-white font-semibold text-xl mt-4">{f.title}</h4>
                                    <p className="text-gray-300 mt-2 text-sm">{f.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
