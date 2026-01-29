import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

const intlMiddleware = createMiddleware({
    locales: ['en', 'hi', 'mr', 'ta', 'bn', 'gu', 'te', 'kn'],
    defaultLocale: 'en',
})

export default function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    // 🚫 ABSOLUTELY REQUIRED exclusions
    if (
        pathname === '/sitemap.xml' ||
        pathname === '/robots.txt' ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') // blocks favicon, assets, etc
    ) {
        return
    }

    return intlMiddleware(req)
}
