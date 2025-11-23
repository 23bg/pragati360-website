"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
);

export default function Hero() {
    return (
        <section className="relative py-28 overflow-hidden">
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent blur-3xl" />

            <Container>
                <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

                    {/* Left Text Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Google Gradient Accent */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
              bg-gradient-to-r from-blue-500 to-green-500 text-white mb-6 shadow">
                            🚀 Google Business Growth Suite
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight 
              text-foreground">
                            Manage & Grow Your Google Business Profile Effortlessly
                        </h1>

                        <p className="mt-6 text-muted-foreground text-lg max-w-xl">
                            Simplify your Google presence. Sync locations, reply to reviews, schedule posts,
                            and get insights — all in one powerful dashboard built for Indian businesses.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button
                                className="rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white px-7 py-5 text-md font-semibold shadow-lg hover:opacity-90"
                            >
                                Get Started Free →
                            </Button>

                            <Button
                                variant="outline"
                                className="rounded-full border-border text-foreground px-7 py-5 flex items-center gap-2 hover:bg-accent"
                            >
                                <Play className="h-4 w-4" />
                                Watch Demo
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Illustration Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.85 }}
                    >
                        <Card
                            className="
                relative bg-card shadow-2xl border border-border/50 
                rounded-2xl overflow-hidden group
              "
                        >
                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r 
                from-blue-500 via-green-500 to-blue-500 opacity-30 blur-[2px]
                group-hover:opacity-50 transition" />

                            <CardContent className="relative p-6 backdrop-blur-sm">
                                <h3 className="text-lg font-semibold text-foreground">
                                    Live Google Sync Preview
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Real-time sync preview from your Google Business Profile.
                                </p>

                                {/* Fake preview mockup */}
                                <div className="mt-6 rounded-lg border border-border/40 bg-muted/30 p-4 h-52
                  animate-pulse">
                                    <div className="h-3 w-2/3 bg-muted rounded mb-3" />
                                    <div className="h-3 w-1/2 bg-muted rounded mb-3" />
                                    <div className="h-3 w-3/4 bg-muted rounded" />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
