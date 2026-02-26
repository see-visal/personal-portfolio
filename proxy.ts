import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

// Create the i18n middleware
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ── Block Suspicious User-Agents (Bots / Scanners / Hackers) ─────────────
    const userAgent = request.headers.get('user-agent') || '';
    const blockedAgents = [
        'sqlmap', 'nikto', 'nessus', 'masscan', 'nmap',
        'zgrab', 'dirbuster', 'gobuster', 'wfuzz', 'burpsuite',
        'havij', 'acunetix', 'openvas', 'w3af', 'metasploit',
    ];
    const isBlockedAgent = blockedAgents.some(agent =>
        userAgent.toLowerCase().includes(agent)
    );
    if (isBlockedAgent) {
        return new NextResponse('Forbidden', { status: 403 });
    }

    // ── Block Path Traversal & Common Attack Patterns ─────────────────────────
    const suspiciousPatterns = [
        /\.\.\//,           // Path traversal
        /\/etc\/passwd/,    // Unix passwd file
        /\/proc\/self/,     // Linux proc access
        /<script/i,         // XSS attempt in URL
        /union.*select/i,   // SQL injection
        /exec\(/i,          // Code execution attempt
        /eval\(/i,          // Code evaluation attempt
        /base64_decode/i,   // PHP exploit pattern
        /\x00/,             // Null byte injection
    ];
    const isSuspiciousPath = suspiciousPatterns.some(pattern =>
        pattern.test(pathname) || pattern.test(request.url)
    );
    if (isSuspiciousPath) {
        return new NextResponse('Bad Request', { status: 400 });
    }

    // ── Block Common Hack Target Paths ────────────────────────────────────────
    const blockedPaths = [
        '/wp-admin', '/wp-login.php', '/phpmyadmin',
        '/.env', '/.git', '/config.php', '/admin.php',
        '/xmlrpc.php', '/shell.php', '/c99.php', '/r57.php',
        '/setup.php', '/install.php', '/.htaccess',
        '/server-status', '/server-info', '/_profiler',
    ];
    const isBlockedPath = blockedPaths.some(blocked =>
        pathname.startsWith(blocked) || pathname === blocked
    );
    if (isBlockedPath) {
        return new NextResponse('Not Found', { status: 404 });
    }

    // ── Pass to i18n middleware for valid routes ───────────────────────────────
    return intlMiddleware(request);
}

export const config = {
    // Match internationalized pathnames AND protect all other routes
    matcher: [
        // i18n routes
        '/',
        '/(km|en)/:path*',
        // Also protect API routes if added in future
        '/api/:path*',
        // Protect against path scanning (any other path)
        '/((?!_next/static|_next/image|favicon.ico|images-icon.png|Personal.jpg|cambodia.jpg|english.jpg|globe.svg).*)',
    ]
};
