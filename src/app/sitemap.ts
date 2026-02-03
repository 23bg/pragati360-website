import type { MetadataRoute } from 'next'

// Pragati360 — Phase-1 Early Access Sitemap
// Only /en pages, indexed for SEO
// Updated: 2026-02-03

const BASE_URL = 'https://www.pragati360.com'
const BUILD_TIME = new Date('2026-02-03')

// Phase-1: Only English pages, 6 URLs total
const phase1Paths = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: 'how-it-works', priority: 0.8, changeFreq: 'monthly' as const },
    { path: 'pricing', priority: 0.9, changeFreq: 'monthly' as const },
    { path: 'early-access', priority: 0.9, changeFreq: 'weekly' as const },
    { path: 'trust', priority: 0.6, changeFreq: 'monthly' as const },
    { path: 'contact', priority: 0.5, changeFreq: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
    return phase1Paths.map((item) => ({
        url: `${BASE_URL}/en${item.path ? `/${item.path}` : ''}`,
        lastModified: BUILD_TIME,
        changeFrequency: item.changeFreq,
        priority: item.priority,
    }))
}
