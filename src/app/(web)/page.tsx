"use client"
import CTA from "@/components/website/CTA"
import FAQ from "@/components/website/FAQ"
import Features from "@/components/website/Features"
import Footer from "@/components/website/Footer"
import Header from "@/components/website/Header"
import Hero from "@/components/website/Hero"
import HowItWorks from "@/components/website/HowItWorks"
import Pricing from "@/components/website/Pricing"
import Testimonials from "@/components/website/Testimonial"
/* FULL UPDATED LANDING PAGE WITH:
 ✅ Shadcn UI
 ✅ Mobile Menu (Sheet)
 ✅ Animations (framer-motion)
 ✅ FAQ Section
 ✅ Testimonials Section
 ✅ Google Accent Colors (Blue, Red, Yellow, Green)

 NOTE: Ensure you have installed:
  - shadcn/ui components: button, card, badge, accordion, sheet
  - framer-motion: npm i framer-motion
*/

import React from "react"

/* ---------------- Page Export ---------------- */
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}