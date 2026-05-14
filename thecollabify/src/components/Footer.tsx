import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <AppLogo size={30} />
          <span className="font-display font-700 text-base tracking-tight">
            <span className="text-foreground">the</span>
            <span className="font-black text-primary">collabify</span>
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {[
            { label: 'Home', href: '/' },
            { label: 'For Brands', href: '/for-brands' },
            { label: 'For Creators', href: '/for-creators' },
          ]?.map((item) => (
            <Link
              key={item?.href}
              href={item?.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item?.label}
            </Link>
          ))}
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://instagram.com" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://tiktok.com" aria-label="TikTok" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-muted-foreground">
          © 2026 TheCollabify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}