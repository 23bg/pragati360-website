import type { MetadataRoute } from 'next'

// Pragati360 — Phase-1 Early Access (GBP Only)
// Updated: 2026-02-03

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/en$',
                    '/en/how-it-works',
                    '/en/pricing',
                    '/en/early-access',
                    '/en/trust',
                    '/en/contact',
                    '/en/privacy',
                    '/en/terms',
                    '/*.css',
                    '/*.js',
                    '/*.png',
                    '/*.jpg',
                    '/*.webp',
                ],
                disallow: [
                    '/en/features/',
                    '/en/product-overview',
                    '/en/about',
                    '/en/security',
                    '/en/business/',
                    '/hi/',
                    '/bn/',
                    '/gu/',
                    '/kn/',
                    '/mr/',
                    '/ta/',
                    '/te/',
                    '/_next/',
                    '/api/',
                ],
            },
        ],
        sitemap: 'https://www.pragati360.com/sitemap.xml',
    }
}
