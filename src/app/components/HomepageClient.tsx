'use client';
import React, { useState, useEffect, useRef } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupPopup from '@/components/SignupPopup';
import AppImage from '@/components/ui/AppImage';

export default function HomepageClient() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMode, setPopupMode] = useState<'brand' | 'creator'>('brand');
  const revealRefs = useRef<HTMLElement[]>([]);

  const openPopup = (mode: 'brand' | 'creator') => {
    setPopupMode(mode);
    setPopupOpen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0px)';
              el.style.filter = 'blur(0px)';
            }, delay * 1000);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      htmlEl.style.filter = 'blur(6px)';
      htmlEl.style.transition = 'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1), filter 0.65s cubic-bezier(0.4,0,0.2,1)';
      observer.observe(htmlEl);
    });

    return () => observer.disconnect();
  }, []);

  const processSteps = [
  {
    number: '01',
    title: 'You Apply',
    description: 'Brands tell us their campaign goals. Creators share their niche and audience. Takes 5 minutes — no pitch deck required.',
    icon:
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>

  },
  {
    number: '02',
    title: 'We Match',
    description: "Our team reviews both sides and identifies the fits where brand values align with creator audience. Not an algorithm — human judgment.",
    icon:
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

  },
  {
    number: '03',
    title: 'We Pitch',
    description: "We approach the creator on behalf of the brand (or vice versa). We handle the awkward first conversation so neither side has to cold-message.",
    icon:
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>

  },
  {
    number: '04',
    title: 'Deal Closes',
    description: "We structure terms, handle back-and-forth, and get both sides to yes. We only earn our commission when the deal is signed. Everyone wins together.",
    icon:
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>

  }];


  const bentoItems = [
  {
    id: 'speed',
    colSpan: 'md:col-span-2',
    rowSpan: '',
    dark: false,
    accent: false,
    content:
    <div className="bento-card h-full reveal-on-scroll" data-delay="0.1">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <h3 className="font-display text-card-heading font-semibold text-foreground mb-2">Matched in days, not months</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our curated network means brands find the right creator voice in under a week — not after months of outreach and ghosting.
          </p>
          <div className="mt-auto pt-6 flex items-center gap-3">
            <span className="font-display text-4xl font-bold text-primary">&lt;7</span>
            <span className="text-sm text-muted-foreground leading-tight">days to<br />first match</span>
          </div>
        </div>

  },
  {
    id: 'network',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    dark: false,
    accent: false,
    content:
    <div className="bento-card h-full dot-pattern reveal-on-scroll" data-delay="0.2">
          <div className="w-12 h-12 rounded-2xl bg-accent/30 flex items-center justify-center mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
              <circle cx="12" cy="12" r="2" /><circle cx="12" cy="2" r="1.5" /><circle cx="12" cy="22" r="1.5" /><circle cx="2" cy="12" r="1.5" /><circle cx="22" cy="12" r="1.5" /><line x1="12" y1="3.5" x2="12" y2="10" /><line x1="12" y1="14" x2="12" y2="20.5" /><line x1="3.5" y1="12" x2="10" y2="12" /><line x1="14" y1="12" x2="20.5" y2="12" />
            </svg>
          </div>
          <h3 className="font-display text-card-heading font-semibold text-foreground mb-2">Curated creator network</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Every creator in our network is vetted for audience authenticity, engagement quality, and content consistency.
          </p>
          <div className="space-y-3 mt-auto">
            {['Lifestyle', 'Fitness', 'Tech', 'Beauty', 'Food', 'Finance'].map((tag) =>
        <span key={tag} className="pill-badge bg-muted text-muted-foreground mr-2 mb-1 inline-flex">{tag}</span>
        )}
          </div>
        </div>

  },
  {
    id: 'zerocost',
    colSpan: 'md:col-span-1',
    rowSpan: '',
    dark: true,
    accent: false,
    content:
    <div className="bento-card h-full bg-dark-section border-dark-section reveal-on-scroll" data-delay="0.3"
    style={{ background: 'var(--dark-section)', borderColor: 'var(--dark-section)' }}>
          <div className="noise-overlay rounded-2xl" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-display text-card-heading font-semibold text-white mb-2">Zero upfront cost</h3>
            <p className="text-sm text-dark-section-foreground leading-relaxed opacity-80">
              No retainer. No setup fee. We earn a commission only when a deal closes — so our incentives are perfectly aligned with yours.
            </p>
          </div>
        </div>

  },
  {
    id: 'stat',
    colSpan: 'md:col-span-1',
    rowSpan: '',
    dark: false,
    accent: true,
    content:
    <div className="bento-card h-full reveal-on-scroll" data-delay="0.4"
    style={{ background: 'var(--accent)', borderColor: 'var(--accent)' }}>
          <div className="flex flex-col h-full justify-between">
            <span className="font-display text-5xl font-black text-foreground leading-none">94%</span>
            <div>
              <p className="text-sm font-semibold text-foreground/80 leading-tight">of deals matched close<br />within 30 days</p>
            </div>
          </div>
        </div>

  },
  {
    id: 'process',
    colSpan: 'md:col-span-3',
    rowSpan: '',
    dark: false,
    accent: false,
    content:
    <div className="bento-card h-full reveal-on-scroll" data-delay="0.5">
          <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <h3 className="font-display text-card-heading font-semibold text-foreground mb-1">Human matching, not an algorithm</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Every match is reviewed by our team. We look at brand values, creator audience demographics, content tone, and past performance — not just follower counts.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button onClick={() => openPopup('brand')} className="btn-primary whitespace-nowrap text-sm">
                Start as a Brand
              </button>
              <button onClick={() => openPopup('creator')} className="btn-outline-dark whitespace-nowrap text-sm">
                Join as Creator
              </button>
            </div>
          </div>
        </div>

  }];


  return (
    <>
      <Header variant="transparent" onOpenPopup={openPopup} />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-0 pb-16 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end max-w-7xl mx-auto">
        {/* Vertical grid lines */}
        <div className="grid-lines hidden md:flex">
          <div className="grid-line" />
          <div className="grid-line" />
          <div className="grid-line" />
        </div>

        {/* Rotating badge */}
        <div className="absolute top-28 right-6 md:right-16 z-20 hidden md:block">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="spin-badge w-full h-full" viewBox="0 0 100 100">
              <path id="heroCirclePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text fontSize="10" fontFamily="DM Sans" fontWeight="600" letterSpacing="2.5px" fill="var(--primary)">
                <textPath href="#heroCirclePath" startOffset="0%">BRANDS · CREATORS · COLLABIFY ·</textPath>
              </text>
            </svg>
            <div className="absolute w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Left content */}
        <div className="lg:col-span-5 flex flex-col justify-end pb-8 pt-32 lg:pt-0 relative z-10 order-2 lg:order-1">
          <div className="mb-8">
            <span className="section-label mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-primary ping-anim" />
              Creator-Brand Matchmaking
            </span>
            <h1 className="font-display text-hero font-black text-foreground mt-6 mb-6">
              Where brands<br />
              <span className="italic text-primary">meet</span><br />
              creators.
            </h1>
            <p className="text-base text-foreground/70 leading-relaxed max-w-sm border-l-2 border-primary pl-4">
              We sit in the middle. We find the fit, structure the deal, and handle the negotiation. You only pay us when it closes.
            </p>
          </div>

          {/* Dual CTA glass widget */}
          <div className="glass-card rounded-2xl p-5 max-w-sm shadow-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Who are you?</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => openPopup('brand')}
                className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all group">
                
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">I&apos;m a Brand</p>
                  <p className="text-xs text-muted-foreground">Find the right creator voice</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-muted-foreground group-hover:text-primary transition-colors">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => openPopup('creator')}
                className="w-full flex items-center gap-3 p-3.5 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all group">
                
                <div className="w-9 h-9 rounded-full bg-accent/30 flex items-center justify-center shrink-0 group-hover:bg-accent/50 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                    <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">I&apos;m a Creator</p>
                  <p className="text-xs text-muted-foreground">Land deals without cold outreach</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-muted-foreground group-hover:text-primary transition-colors">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">No upfront cost · Commission only</p>
          </div>
        </div>

        {/* Right arch image */}
        <div className="lg:col-span-7 h-[55vh] lg:h-[88vh] relative order-1 lg:order-2 mt-16 lg:mt-0">
          <div className="absolute inset-0 arch-image shadow-2xl">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_19418485b-1773097092116.png"
              alt="Young content creator filming in a bright, modern studio with professional lighting setup"
              fill
              className="object-cover hover:scale-105 transition-transform duration-[2.5s]"
              priority />
            
            <div className="overlay-scrim" />
            {/* Floating stat card */}
            <div className="absolute bottom-8 left-8 bg-gray-900/90 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white max-w-[200px] z-10 float-anim">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-white">New deal matched</span>
              </div>
              <p className="text-xs text-white/90 leading-relaxed">Wellness brand × Fitness creator · $4,200 deal</p>
            </div>
            {/* Second floating card */}
            <div className="absolute top-1/3 right-6 glass-card p-3.5 rounded-xl text-white z-10 float-anim-delay hidden md:block">
              <p className="text-xs font-bold mb-0.5">500+ creators</p>
              <p className="text-[10px] opacity-75">across 12 niches</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal-on-scroll">
            <span className="section-label mb-4 inline-flex">How It Works</span>
            <h2 className="font-display text-section-heading font-bold text-foreground mt-4 max-w-xl">
              From application to<br />
              <span className="italic text-muted-foreground">signed deal</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) =>
            <div
              key={step.number}
              className="relative bg-card border border-border rounded-2xl p-6 reveal-on-scroll"
              data-delay={String(i * 0.12)}>
              
                {i < processSteps.length - 1 &&
              <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
              }
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <span className="font-display text-5xl font-black text-border leading-none">{step.number}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why TheCollabify — Bento Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal-on-scroll">
            <span className="section-label mb-4 inline-flex">Why TheCollabify</span>
            <h2 className="font-display text-section-heading font-bold text-foreground mt-4">
              Built different.<br />
              <span className="italic text-muted-foreground">On purpose.</span>
            </h2>
          </div>

          {/* BENTO GRID AUDIT:
              Array has 5 cards: [speed cs-2, network cs-1 rs-2, zerocost cs-1, stat cs-1, process cs-3]
              Row 1: [col-1-2: speed cs-2] [col-3: network cs-1 rs-2]
              Row 2: [col-1: zerocost cs-1] [col-2: stat cs-1] [col-3: OCCUPIED by network]
              Row 3: [col-1-3: process cs-3]
              Placed 5/5 ✓
             */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Speed — col-span-2 */}
            <div className="md:col-span-2">{bentoItems[0].content}</div>
            {/* Network — col-span-1 row-span-2 */}
            <div className="md:col-span-1 md:row-span-2">{bentoItems[1].content}</div>
            {/* ZeroCost — col-span-1 */}
            <div className="md:col-span-1">{bentoItems[2].content}</div>
            {/* Stat — col-span-1 */}
            <div className="md:col-span-1">{bentoItems[3].content}</div>
            {/* Process — col-span-3 */}
            <div className="md:col-span-3">
              <div className="bento-card reveal-on-scroll" data-delay="0.5">
                <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                  <div>
                    <h3 className="font-display text-card-heading font-semibold text-foreground mb-1">Human matching, not an algorithm</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Every match is reviewed by our team. We look at brand values, creator audience demographics, content tone, and past performance — not just follower counts.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <button onClick={() => openPopup('brand')} className="btn-primary whitespace-nowrap text-sm">
                      Start as a Brand
                    </button>
                    <button
                      onClick={() => openPopup('creator')}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-foreground text-sm font-semibold hover:bg-muted transition-all whitespace-nowrap">
                      
                      Join as Creator
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — Intentional Placeholder */}
      <section className="py-20 px-6 md:px-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 reveal-on-scroll">
            <span className="section-label mb-4 inline-flex">Testimonials</span>
            <h2 className="font-display text-section-heading font-bold text-foreground mt-4">
              What they&apos;re<br />
              <span className="italic text-muted-foreground">saying</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
            { role: 'Brand', label: 'DTC Fashion Brand', quote: 'Real testimonial from a brand partner coming soon. We\'re collecting success stories from our first cohort of brand deals.' },
            { role: 'Creator', label: 'Lifestyle Creator · 180K followers', quote: 'Real testimonial from a creator in our network coming soon. Our first creator cohort is currently closing their inaugural deals.' },
            { role: 'Brand', label: 'Health & Wellness Brand', quote: 'Real testimonial from a brand partner coming soon. Placeholder — this will be replaced with an authentic case study quote.' }].
            map((item, i) =>
            <div key={i} className="placeholder-block reveal-on-scroll" data-delay={String(i * 0.1)}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-4 text-center">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-auto">
                  <p className="text-xs font-bold text-foreground">{item.label}</p>
                  <span className="pill-badge bg-primary/10 text-primary mt-1">{item.role}</span>
                </div>
              </div>
            )}
          </div>

          {/* Case Studies Placeholder */}
          <div className="mb-4 reveal-on-scroll">
            <span className="section-label inline-flex">Case Studies</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
            { title: 'Case Study: Fitness Brand × Macro Influencer', result: '+340% ROAS in 6 weeks' },
            { title: 'Case Study: Beauty Brand × Micro Creator Network', result: '14 deals closed in 30 days' }].
            map((cs, i) =>
            <div key={i} className="placeholder-block flex-row justify-start gap-6 text-left reveal-on-scroll" data-delay={String(i * 0.1)}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{cs.title}</p>
                  <p className="text-xs text-muted-foreground">Placeholder — detailed case study coming soon.</p>
                  <span className="pill-badge bg-accent/40 text-foreground mt-2">{cs.result}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Closing Dual CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-5xl animated-gradient-bg px-8 py-20 text-center text-white shadow-2xl reveal-on-scroll">
            <div className="noise-overlay rounded-5xl" />
            <div className="glow-accent" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="ping-anim absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">Now accepting applications</span>
              </div>

              <h2 className="font-display text-section-heading font-black text-white mb-6">
                Ready to make the<br />
                <span className="italic" style={{ color: 'var(--accent)' }}>right connection?</span>
              </h2>
              <p className="text-lg text-white/70 mb-12 max-w-xl mx-auto font-light leading-relaxed">
                Whether you&apos;re a brand looking for the right creator voice, or a creator tired of cold pitching — we&apos;ve built this for you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => openPopup('brand')}
                  className="btn-accent text-base px-8 py-4">
                  
                  I&apos;m a Brand →
                </button>
                <button
                  onClick={() => openPopup('creator')}
                  className="btn-outline-white text-base px-8 py-4">
                  
                  I&apos;m a Creator →
                </button>
              </div>

              <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10">
                {[
                { num: '50+', label: 'Vetted Creators' },
                { num: '$0', label: 'Upfront Cost' },
                { num: '94%', label: 'Match Close Rate' },
                { num: '<7d', label: 'To First Match' }].
                map((stat) =>
                <div key={stat.label} className="text-center">
                    <p className="font-display text-2xl font-bold text-white">{stat.num}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mt-0.5">{stat.label}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SignupPopup isOpen={popupOpen} initialMode={popupMode} onClose={() => setPopupOpen(false)} />
    </>);

}
