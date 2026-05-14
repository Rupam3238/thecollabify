'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

interface HeaderProps {
  variant?: 'default' | 'transparent';
  onOpenPopup?: (mode: 'brand' | 'creator') => void;
}

export default function Header({ variant = 'default', onOpenPopup }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isTransparent = variant === 'transparent' && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'py-6 bg-transparent' :'py-3 bg-card/90 backdrop-blur-md border-b border-border shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo size={36} />
            <span className="font-display font-700 text-lg tracking-tight">
              <span className={isTransparent ? 'text-white' : 'text-foreground'}>the</span>
              <span className={`font-black ${isTransparent ? 'text-accent' : 'text-primary'}`}>collabify</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Home', href: '/' },
              { label: 'For Brands', href: '/for-brands' },
              { label: 'For Creators', href: '/for-creators' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isTransparent
                    ? 'text-white/80 hover:text-white' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenPopup?.('brand')}
              className={`text-sm font-semibold transition-colors px-4 py-2 rounded-full border ${
                isTransparent
                  ? 'border-white/30 text-white hover:bg-white/10' :'border-border text-foreground hover:bg-muted'
              }`}
            >
              For Brands
            </button>
            <button
              onClick={() => onOpenPopup?.('creator')}
              className="btn-primary text-sm px-5 py-2.5"
            >
              For Creators
            </button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className={`w-6 h-px transition-all ${isTransparent ? 'bg-white' : 'bg-foreground'}`} />
            <span className={`w-4 h-px transition-all ${isTransparent ? 'bg-white' : 'bg-foreground'}`} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-card/98 backdrop-blur-xl flex flex-col p-6">
          <div className="flex items-center justify-between mb-12">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
              <AppLogo size={36} />
              <span className="font-display font-700 text-lg tracking-tight">
                <span className="text-foreground">the</span>
                <span className="font-black text-primary">collabify</span>
              </span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground"
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 flex-1">
            {[
              { label: 'Home', href: '/' },
              { label: 'For Brands', href: '/for-brands' },
              { label: 'For Creators', href: '/for-creators' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-display font-medium text-foreground py-4 border-b border-border hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-8">
            <button
              onClick={() => { setMenuOpen(false); onOpenPopup?.('brand'); }}
              className="w-full py-3.5 rounded-full border border-border text-foreground font-semibold text-sm"
            >
              Get Started as a Brand
            </button>
            <button
              onClick={() => { setMenuOpen(false); onOpenPopup?.('creator'); }}
              className="btn-primary w-full py-3.5"
            >
              Get Started as a Creator
            </button>
          </div>
        </div>
      )}
    </>
  );
}