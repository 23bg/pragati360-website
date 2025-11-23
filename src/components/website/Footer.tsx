"use client"

import React from "react"
import Link from "next/link"
import { ACCENT } from "@/shared/constants/colors"
import { Instagram, Facebook, Github, Mail } from "lucide-react"

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
)

export default function Footer() {
    return (
        <footer className="relative mt-32">
            {/* Top border w/gradient glow */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="py-14 backdrop-blur-xl bg-neutral-900/50 dark:bg-neutral-950/40 border-t border-white/10 shadow-inner">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">

                        {/* Logo + Text */}
                        <div className="flex items-center gap-4">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
                                style={{
                                    background: `linear-gradient(135deg, ${ACCENT.blue}, ${ACCENT.green})`,
                                }}
                            >
                                P
                            </div>
                            <div className="leading-tight">
                                <h3 className="text-lg font-semibold text-white">Pragati360</h3>
                                <p className="text-gray-400 text-xs">Helping Indian businesses grow</p>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                            <Link href="#features" className="hover:text-white transition">
                                Features
                            </Link>
                            <Link href="#pricing" className="hover:text-white transition">
                                Pricing
                            </Link>
                            <Link href="#faq" className="hover:text-white transition">
                                FAQ
                            </Link>
                            <Link href="/auth/login" className="hover:text-white transition">
                                Dashboard
                            </Link>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 text-gray-400">
                            <Link href="mailto:support@pragati360.com" className="hover:text-white transition">
                                <Mail size={18} />
                            </Link>
                            <Link href="#" className="hover:text-white transition">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="hover:text-white transition">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="hover:text-white transition">
                                <Github size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-10 text-center text-gray-500 text-xs">
                        © {new Date().getFullYear()} Pragati360 — All rights reserved.
                    </div>
                </Container>
            </div>
        </footer>
    )
}
