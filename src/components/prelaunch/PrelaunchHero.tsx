"use client";

import { motion } from "framer-motion";
import PrelaunchForm from "@/components/prelaunch/PrelaunchForm";

export default function PrelaunchHero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] text-white">
      {/* 🔥 Background Glow Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.12),transparent_70%)]"
      />

      {/* 💡 Subtle Gradient Highlight */}
      <div className="absolute top-0 w-full h-[35vh] bg-gradient-to-b from-amber-400/10 to-transparent blur-3xl pointer-events-none" />

      {/* 🌟 Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center max-w-3xl px-6"
      >
        {/* Brand Name */}
        <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,165,0,0.3)]">
          StackOS
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-xl">
          Empower your business with real-time growth intelligence.
          Join the{" "}
          <span className="text-amber-400 font-semibold">first 100 founders</span>{" "}
          getting exclusive access before public launch.
        </p>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-10 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <span className="text-amber-400">🔥</span>
            <span>1,250+ early members joined</span>
          </div>
          <span className="hidden sm:block text-gray-500">•</span>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✅</span>
            <span>Trusted by 50+ SMBs</span>
          </div>
        </motion.div>

        {/* Form */}
        <PrelaunchForm />

        {/* Privacy Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 text-sm mt-4"
        >
          🔒 We value your privacy — no spam, ever.
        </motion.p>
      </motion.section>

      {/* 🌙 Footer */}
      <footer className="absolute bottom-6 text-gray-600 text-xs sm:text-sm text-center">
        © {new Date().getFullYear()}{" "}
        <span className="text-amber-400 font-medium">Pragati360</span> · All rights reserved.
      </footer>
    </div>
  );
}
