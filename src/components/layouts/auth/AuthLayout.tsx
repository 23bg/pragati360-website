"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-950">
            {/* ---------- Left (Brand / Visual Section) ---------- */}
            <div className="hidden md:flex md:w-1/2 relative items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white p-12 overflow-hidden">
                {/* Subtle overlay gradient effect */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-center max-w-md"
                >
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/logo-light.svg"
                            alt="StackOS Logo"
                            width={80}
                            height={80}
                            className="drop-shadow-lg"
                        />
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight mb-3">
                        Welcome to <span className="text-indigo-200">Pragati360</span>
                    </h1>
                    <p className="text-indigo-100 text-sm leading-relaxed">
                        Powering your cloud-native apps with decentralized infrastructure.
                        Secure, scalable, and built for the modern web.
                    </p>
                </motion.div>

                {/* Subtle decorative grid lines */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:24px_24px]" />
            </div>

            {/* ---------- Right (Form Section) ---------- */}
            <div className="flex w-full md:w-1/2 items-center justify-center px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md space-y-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 dark:border-gray-800"
                >
                    {/* ---------- Child (Form Component) ---------- */}
                    {children}

                    {/* ---------- Footer Links ---------- */}
                    <div className="pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                        <p className="space-x-3">
                            <Link href="/privacy-policy" className="hover:text-indigo-600">
                                Privacy Policy
                            </Link>
                            <span>·</span>
                            <Link href="/terms" className="hover:text-indigo-600">
                                Terms
                            </Link>
                            <span>·</span>
                            <Link href="/help" className="hover:text-indigo-600">
                                Help
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
