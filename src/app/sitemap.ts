import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.pragati360.com'
const BUILD_TIME = new Date('2026-02-03')

const phase1Paths = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: 'features', priority: 0.9, changeFreq: 'monthly' as const },
    { path: 'pricing', priority: 0.9, changeFreq: 'monthly' as const },
    { path: 'security', priority: 0.8, changeFreq: 'monthly' as const },
    { path: 'tools', priority: 0.9, changeFreq: 'weekly' as const },
    { path: 'tools/google-review-reply-generator', priority: 0.8, changeFreq: 'weekly' as const },
    { path: 'tools/reputation-health-score', priority: 0.8, changeFreq: 'weekly' as const },
    { path: 'tools/lead-response-risk-calculator', priority: 0.8, changeFreq: 'weekly' as const },
    { path: 'tools/google-optimization-checklist', priority: 0.8, changeFreq: 'weekly' as const },
    { path: 'tools/multi-outlet-comparison', priority: 0.8, changeFreq: 'weekly' as const },
    { path: 'guides/how-to-respond-negative-google-review', priority: 0.7, changeFreq: 'monthly' as const },
    { path: 'guides/why-review-response-time-matters', priority: 0.7, changeFreq: 'monthly' as const },
    { path: 'guides/how-to-manage-multiple-business-locations', priority: 0.7, changeFreq: 'monthly' as const },
    { path: 'contact', priority: 0.5, changeFreq: 'monthly' as const },
    { path: 'privacy', priority: 0.3, changeFreq: 'yearly' as const },
    { path: 'terms', priority: 0.3, changeFreq: 'yearly' as const },
    { path: 'refund-policy', priority: 0.3, changeFreq: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
    return phase1Paths.map((item) => ({
        url: `${BASE_URL}${item.path ? `/${item.path}` : ''}`,
        lastModified: BUILD_TIME,
        changeFrequency: item.changeFreq,
        priority: item.priority,
    }))
}
