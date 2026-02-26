import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts'
);

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          // ── Prevent DNS prefetch leaking info ──────────────────────────────
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // ── Force HTTPS for 2 years (HSTS) ─────────────────────────────────
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          // ── Block reflected XSS attacks ─────────────────────────────────────
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // ── Prevent your site being embedded in iframes (Clickjacking) ──────
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // ── Prevent MIME type sniffing ─────────────────────────────────────
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // ── Control what data is sent in the Referer header ────────────────
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // ── Disable browser features you don't use ─────────────────────────
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          // ── Content Security Policy ─────────────────────────────────────────
          // Restricts what resources the browser is allowed to load.
          // This is the strongest protection against XSS and data injection attacks.
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts: allow own domain + Next.js inline scripts (for hydration)
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              // Styles: allow own domain + inline styles (needed by Tailwind/CSS-in-JS)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts: allow Google Fonts
              "font-src 'self' https://fonts.gstatic.com",
              // Images: allow own domain + data URIs + vercel CDN
              "img-src 'self' data: blob: https:",
              // Connections (fetch/XHR/WebSocket): only own domain
              "connect-src 'self'",
              // Prevent embedding in frames on other sites
              "frame-ancestors 'none'",
              // Only allow form submissions to own domain
              "form-action 'self'",
              // Upgrade any HTTP requests to HTTPS automatically
              "upgrade-insecure-requests",
            ].join('; ')
          },
        ]
      }
    ]
  }
};

export default withNextIntl(nextConfig);
