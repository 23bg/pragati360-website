import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

function decodeJwtPayload(token: string): Record<string, unknown> | null {
    try {
        const parts = token.split('.')
        if (parts.length < 2) return null

        const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/')
        const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, '=')
        const json = atob(padded)
        return JSON.parse(json) as Record<string, unknown>
    } catch {
        return null
    }
}

export default function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname
    const token = req.cookies.get('access_token')?.value
    const nonLocalizedPrefixes = [
        '/dashboard',
        '/login',
        '/signup',
        '/verification',
        '/onboarding'
    ]

    const authPaths = ['/login', '/signup', '/verification']
    const protectedPrefixes = ['/dashboard', '/onboarding']
    const isAuthPath = authPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`))
    const isProtectedPath = protectedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))

    if (isProtectedPath) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url))
        }

        const claims = decodeJwtPayload(token)
        if (!claims?.orgId || typeof claims.orgId !== 'string' || claims.orgId.trim() === '') {
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }

    if (isAuthPath && token) {
        const claims = decodeJwtPayload(token)
        if (claims?.orgId && typeof claims.orgId === 'string' && claims.orgId.trim() !== '') {
            return NextResponse.redirect(new URL('/dashboard', req.url))
        }
    }

    // 🚫 ABSOLUTELY REQUIRED exclusions
    if (
        pathname === '/sitemap.xml' ||
        pathname === '/robots.txt' ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        nonLocalizedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)) ||
        pathname.includes('.') // blocks favicon, assets, etc
    ) {
        return
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)'],
}
