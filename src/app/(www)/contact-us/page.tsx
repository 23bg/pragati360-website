"use client"

import type React from "react"

import { useState } from "react"


export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setFormData({ name: "", email: "", subject: "", message: "" })
    }

    return (
        <div className=" bg-background">


            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl font-bold text-foreground mb-6">Contact Us</h1>
                    <p className="text-xl text-secondary">
                        Have a question or feedback? We'd love to hear from you. Get in touch with our team.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info */}
                    <div className="md:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                            <p className="text-secondary">hello@company.com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                            <p className="text-secondary">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-2">Address</h3>
                            <p className="text-secondary">
                                123 Main Street
                                <br />
                                San Francisco, CA 94105
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-3">Follow Us</h3>
                            <div className="flex gap-4">
                                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="text-primary hover:text-primary-hover transition-colors text-sm font-semibold"
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2 bg-muted p-8 rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
