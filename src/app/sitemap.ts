import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.pragati360.com'
const BUILD_TIME = new Date('2025-01-01') // or inject env at build time

const locales = ['en', 'hi', 'mr', 'ta', 'bn', 'gu', 'te', 'kn']

const staticPaths = [
    '',
    'about',
    'business',
    'contact',
    'early-access',
    'features',
    'features/alerts',
    'features/google-business',
    'features/instagram',
    'features/scheduling',
    'features/unified-posting',
    'how-it-works',
    'pricing',
    'privacy',
    'product-overview',
    'security',
    'terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
    const urls: MetadataRoute.Sitemap = []

    for (const locale of locales) {
        for (const path of staticPaths) {
            urls.push({
                url: `${BASE_URL}/${locale}${path ? `/${path}` : ''}`,
                lastModified: BUILD_TIME,
                changeFrequency: 'weekly',
                priority: path === '' ? 1.0 : 0.7,
            })
        }
    }

    return urls
}
