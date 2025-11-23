"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground">

            {/* ---------- Left Section (Brand) ---------- */}
            <div className="relative hidden md:flex md:w-1/2 items-center justify-center 
                bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white p-12">

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-15 
                    bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] 
                    bg-[length:24px_24px]" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-center max-w-md"
                >
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/logo-light.svg"
                            alt="Pragati360 Logo"
                            width={80}
                            height={80}
                            className="drop-shadow-lg"
                        />
                    </div>

                    <h1 className="text-4xl font-bold mb-3 leading-tight">
                        Welcome to <span className="text-indigo-100">Pragati360</span>
                    </h1>

                    <p className="text-indigo-200 text-sm leading-relaxed">
                        Powering your cloud-native apps with decentralized infrastructure.
                        Secure, scalable, and built for the modern web.
                    </p>
                </motion.div>
            </div>

            {/* ---------- Right Section (Auth Form) ---------- */}
            <div className="flex w-full md:w-1/2 items-center justify-center px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md space-y-8 bg-card text-card-foreground 
                               rounded-2xl shadow-lg border border-border p-8 md:p-10"
                >
                    {children}

                    {/* Footer Links */}
                    <div className="pt-4 text-center text-sm text-muted-foreground">
                        <p className="space-x-3">
                            <Link href="/privacy-policy" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                                Privacy Policy
                            </Link>
                            <span>·</span>
                            <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                                Terms
                            </Link>
                            <span>·</span>
                            <Link href="/help" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                                Help
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
