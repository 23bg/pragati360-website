import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/how-it-works',
                    '/pricing',
                    '/early-access',
                    '/trust',
                    '/contact',
                    '/privacy',
                    '/terms',
                    '/*.css',
                    '/*.js',
                    '/*.png',
                    '/*.jpg',
                    '/*.webp',
                ],
                disallow: [
                    '/features/',
                    '/product-overview',
                    '/about',
                    '/security',
                    '/business/',
                    '/_next/',
                    '/api/',
                ],
            },
        ],
        sitemap: 'https://pragati360.com/sitemap.xml',
    }
}
