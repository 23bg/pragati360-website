"use client"
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
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

const ACCENT = {
  blue: "#4285F4",
  red: "#DB4437",
  yellow: "#F4B400",
  green: "#0F9D58",
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
)

/* ---------------- Header + Mobile Menu ---------------- */
function Header() {
  return (
    <header className="py-5 border-b border-white/10 sticky top-0 backdrop-blur-md z-50 bg-[#1f2326]/80">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow"
              style={{ background: `linear-gradient(135deg, ${ACCENT.blue}, ${ACCENT.green})` }}>
              P
            </div>
            <span className="text-lg font-semibold text-white">Pragati360</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-gray-300 text-sm">
            <Link href="#features" className="hover:text-white">Features</Link>
            <Link href="#how" className="hover:text-white">How it works</Link>
            <Link href="#pricing" className="hover:text-white">Pricing</Link>
            <Link href="#faq" className="hover:text-white">FAQ</Link>
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
              Dashboard
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="md:hidden text-white">
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-neutral-900 text-white border-white/10">
              <SheetHeader>
                <SheetTitle>Pragati360</SheetTitle>
              </SheetHeader>

              <nav className="mt-6 flex flex-col gap-4 text-gray-300 text-lg">
                <Link href="#features">Features</Link>
                <Link href="#how">How it works</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#faq">FAQ</Link>
                <Link href="#testimonials">Testimonials</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}

/* ---------------- Hero (Animated) ---------------- */
function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <h1 className="text-5xl font-extrabold text-white leading-[1.15]">
              Grow Your Business on Google
            </h1>
            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              Manage your Google Business Profile easily with locations, reviews, insights
              and centralized dashboards built for Indian businesses.
            </p>

            <div className="mt-8 flex gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-6 text-md font-semibold shadow-lg">
                Get Started →
              </Button>
              <Button variant="outline" className="border-white/20 text-white px-6 py-6">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <Card className="bg-neutral-900 border-white/10 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold text-lg">Live GBP Sync Preview</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Example synced store from Google Business Profile.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/* ---------------- Features (Animated Cards) ---------------- */
function Features() {
  const items = [
    { title: "One-click GBP Sync", desc: "Sync locations instantly." },
    { title: "Review Management", desc: "Read & reply to reviews." },
    { title: "Token Auto Refresh", desc: "Always stay connected." },
    { title: "Role-based Access", desc: "Team-level permissions." },
  ]

  return (
    <section id="features" className="py-24 bg-neutral-900/40">
      <Container>
        <h2 className="text-3xl font-bold text-white">Features</h2>
        <p className="text-gray-400 mt-2 max-w-xl">
          Powerful tools for Indian SMBs managing Google Business Profiles.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}>
              <Card className="bg-neutral-800 border-white/10 hover:border-white/20 transition shadow">
                <CardContent className="p-6">
                  <h4 className="text-white font-semibold text-xl">{f.title}</h4>
                  <p className="text-gray-300 mt-2 text-sm">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ---------------- How It Works (Accordion) ---------------- */
function HowItWorks() {
  const steps = [
    { title: "Connect Google", desc: "Sign in with secure OAuth2 flow." },
    { title: "Sync Locations", desc: "Automatically fetch store details." },
    { title: "Manage Reviews", desc: "Read & reply to customer reviews." },
    { title: "Grow Visibility", desc: "Analyze insights & improve reach." },
  ]

  return (
    <section id="how" className="py-24">
      <Container>
        <h2 className="text-3xl font-bold text-white">How It Works</h2>

        <Accordion type="single" collapsible className="mt-8 space-y-4">
          {steps.map((s, i) => (
            <AccordionItem
              key={i}
              value={`step-${i}`}
              className="border border-white/10 rounded-lg bg-neutral-900">
              <AccordionTrigger className="text-white px-4 py-3 text-lg">
                {i + 1}. {s.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-300 text-sm">
                {s.desc}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const reviews = [
    {
      name: "Rahul Patil",
      msg: "Pragati360 transformed my local shop’s online visibility.",
      color: ACCENT.blue,
    },
    {
      name: "Neha Deshmukh",
      msg: "Review replying and insights helped my cafe grow 2x.",
      color: ACCENT.green,
    },
    {
      name: "Ayaan Traders",
      msg: "Best tool for multi-location Google Business Profile.",
      color: ACCENT.red,
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-neutral-900/40">
      <Container>
        <h2 className="text-3xl font-bold text-white">Loved by Businesses</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Card key={i} className="bg-neutral-800 border-white/10 shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full" style={{ background: r.color }} />
                <p className="text-gray-300 mt-4 text-sm">“{r.msg}”</p>
                <p className="text-white font-semibold mt-4">{r.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "Is Pragati360 free?", a: "Yes, you can start for free with 1 location." },
    { q: "Do I need GBP access?", a: "Yes, you must log in with your Google account via OAuth2." },
    { q: "Is my data secure?", a: "All tokens are encrypted and stored with rotation." },
    { q: "Can I manage multiple locations?", a: "Yes, our Growth plan allows up to 5 locations." },
  ]

  return (
    <section id="faq" className="py-24">
      <Container>
        <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>

        <Accordion type="multiple" className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-white/10 rounded-lg bg-neutral-900">
              <AccordionTrigger className="px-4 py-3 text-white text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-300 text-sm">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}


/* ---------------- Pricing ---------------- */
function Pricing() {
  const plans = [
    { name: "Starter", price: "Free", features: ["1 location", "Basic reviews"], color: ACCENT.blue },
    { name: "Growth", price: "₹999/mo", features: ["5 locations", "Inbox", "Auto Refresh"], color: ACCENT.green },
    { name: "Scale", price: "Enterprise", features: ["Unlimited locations", "SSO", "Priority Support"], color: ACCENT.red },
  ]


  return (
    <section id="pricing" className="py-24">
      <Container>
        <h2 className="text-3xl font-bold text-white">Pricing</h2>
        <p className="text-gray-400 mt-2 max-w-xl">Simple, transparent pricing. No hidden fees.</p>


        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-800 border-white/10 shadow-xl hover:border-white/20 transition">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                    <Badge className="text-black font-semibold px-3 py-1" style={{ background: p.color }}>
                      {p.price}
                    </Badge>
                  </div>


                  <ul className="mt-6 space-y-2 text-gray-300 text-sm">
                    {p.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>


                  <Button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-5 font-semibold">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="py-24">
      <Container>
        <Card className="bg-neutral-900 border-white/10 p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white">Ready to grow on Google?</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">Start syncing and managing your GBP locations today.</p>
          <Button className="mt-6 bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-6 text-lg font-semibold">
            Get Started Free →
          </Button>
        </Card>
      </Container>
    </section>
  )
}


/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="py-14 border-t border-white/10 mt-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ background: `linear-gradient(135deg, ${ACCENT.blue}, ${ACCENT.green})` }}
            >
              P
            </div>
            <div>
              <div className="text-white font-semibold text-lg">Pragati360</div>
              <div className="text-xs text-gray-400">Helping Indian businesses grow</div>
            </div>
          </div>
          <div className="text-gray-500 text-sm">© {new Date().getFullYear()} Pragati360. All rights reserved.</div>
        </div>
      </Container>
    </footer>
  )
}


/* ---------------- Page Export ---------------- */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1f2326] text-gray-100">
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