'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupPopup from '@/components/SignupPopup';
import AppImage from '@/components/ui/AppImage';

interface Creator {
  id: number;
  name: string;
  handle: string;
  niche: string;
  followers: string;
  platform: string;
  engagement: string;
  image: string;
  profileUrl: string;
  tags: string[];
}

const creatorsArray: Creator[] = [
{
  id: 1,
  name: 'Maya Chen',
  handle: '@mayalifestyle',
  niche: 'Lifestyle & Wellness',
  followers: '284K',
  platform: 'Instagram',
  engagement: '4.8%',
  image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
  profileUrl: 'https://instagram.com',
  tags: ['Wellness', 'Lifestyle', 'Fitness']
},
{
  id: 2,
  name: 'Jordan Rivers',
  handle: '@jordanfitness',
  niche: 'Fitness & Nutrition',
  followers: '512K',
  platform: 'TikTok',
  engagement: '6.2%',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  profileUrl: 'https://tiktok.com',
  tags: ['Fitness', 'Nutrition', 'Training']
},
{
  id: 3,
  name: 'Sofia Martinez',
  handle: '@sofiabeauty',
  niche: 'Beauty & Skincare',
  followers: '178K',
  platform: 'Instagram',
  engagement: '5.4%',
  image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
  profileUrl: 'https://instagram.com',
  tags: ['Beauty', 'Skincare', 'Makeup']
},
{
  id: 4,
  name: 'Alex Park',
  handle: '@alextechtalk',
  niche: 'Tech & Gadgets',
  followers: '390K',
  platform: 'YouTube',
  engagement: '3.9%',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  profileUrl: 'https://youtube.com',
  tags: ['Tech', 'Gadgets', 'Reviews']
},
{
  id: 5,
  name: 'Priya Nair',
  handle: '@priyaeats',
  niche: 'Food & Travel',
  followers: '224K',
  platform: 'Instagram',
  engagement: '5.1%',
  image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
  profileUrl: 'https://instagram.com',
  tags: ['Food', 'Travel', 'Culture']
},
{
  id: 6,
  name: 'Marcus Webb',
  handle: '@marcusfinance',
  niche: 'Personal Finance',
  followers: '156K',
  platform: 'TikTok',
  engagement: '7.3%',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
  profileUrl: 'https://tiktok.com',
  tags: ['Finance', 'Investing', 'Money']
}];


const platformIcon = (platform: string) => {
  if (platform === 'Instagram') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>);

  if (platform === 'TikTok') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>);

  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>);

};

export default function ForBrandsClient() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const openPopup = () => {
    setPopupOpen(true);
  };

  const filters = ['All', 'Lifestyle', 'Fitness', 'Beauty', 'Tech', 'Food', 'Finance'];

  const filteredCreators = activeFilter === 'All' ?
  creatorsArray :
  creatorsArray.filter((c) => c.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase())));

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

  const valueProps = [
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>,

    title: 'Matched in under 7 days',
    desc: 'Stop spending weeks hunting for the right creator. We surface the right fit fast — vetted, relevant, ready.'
  },
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>,

    title: 'Precision, not volume',
    desc: "We don't send you a list of 50 creators. We send you 3–5 who actually fit your brand, audience, and budget."
  },
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>,

    title: 'We handle the conversation',
    desc: 'No cold DMs. No awkward negotiations. We approach creators on your behalf, structure terms, and get to yes.'
  },
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>,

    title: 'Zero upfront. Commission only.',
    desc: "You don't pay us until the deal is signed. Our fee comes out of the deal — no retainer, no setup cost."
  }];


  return (
    <>
      <Header variant="transparent" onOpenPopup={(mode) => {if (mode === 'brand') openPopup();else setPopupOpen(true);}} />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end px-6 md:px-12 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1482d4d15-1772171209383.png"
            alt="Marketing team in a modern office reviewing campaign results on large screens, bright open workspace, natural light"
            fill
            className="object-cover"
            priority />
          
          <div className="absolute inset-0 bg-gradient-to-t from-dark-section via-dark-section/60 to-dark-section/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="section-label bg-white/10 border-white/20 text-white/70 mb-6 inline-flex">For Brands</span>
            <h1 className="font-display text-hero font-black text-white mt-4 mb-6">
              Stop guessing.<br />
              <span className="italic" style={{ color: 'var(--accent)' }}>Start matching.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-lg mb-8 border-l-2 border-accent pl-4">
              We find the creator who already speaks to your audience. You brief us once — we handle everything else.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={openPopup} className="btn-accent text-base px-8 py-4">
                Get Matched Now →
              </button>
              <Link href="/for-creators" className="btn-outline-white text-base px-8 py-4">
                See Creator Network
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="glass-card rounded-2xl p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">What brands get</p>
              <div className="space-y-4">
                {[
                'Curated creator shortlist in 48 hours',
                'Full negotiation handled by our team',
                'Deal structure reviewed & optimized',
                'Commission only — pay when it closes'].
                map((item, i) =>
                <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6 md:px-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal-on-scroll">
            <span className="section-label mb-4 inline-flex">What You Get</span>
            <h2 className="font-display text-section-heading font-bold text-foreground mt-4">
              Speed. Precision.<br />
              <span className="italic text-muted-foreground">Zero headache.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueProps.map((vp, i) =>
            <div key={i} className="bg-card border border-border rounded-2xl p-7 reveal-on-scroll" data-delay={String(i * 0.1)}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {vp.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{vp.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{vp.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Creator Network */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
            <div>
              <span className="section-label mb-4 inline-flex">Creator Network</span>
              <h2 className="font-display text-section-heading font-bold text-foreground mt-4">
                Meet the network.<br />
                <span className="italic text-muted-foreground">Find your match.</span>
              </h2>
            </div>
            <button onClick={openPopup} className="btn-primary shrink-0">
              Get a Curated Shortlist →
            </button>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {filters.map((f) =>
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeFilter === f ?
              'bg-primary text-primary-foreground shadow-sm' :
              'bg-muted text-muted-foreground hover:bg-border hover:text-foreground'}`
              }>
              
                {f}
              </button>
            )}
          </div>

          {/* Creator cards — rendered from JS array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCreators.map((creator, i) =>
            <div key={creator.id} className="creator-card reveal-on-scroll" data-delay={String(i * 0.08)}>
                <a
                href={creator.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-52 overflow-hidden group"
                aria-label={`Visit ${creator.name}'s profile`}>
                
                  <AppImage
                  src={creator.image}
                  alt={`${creator.name}, ${creator.niche} creator with ${creator.followers} followers`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700" />
                
                  <div className="overlay-scrim" />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="pill-badge bg-dark-section/80 text-white border border-white/10 backdrop-blur-sm flex items-center gap-1.5">
                      {platformIcon(creator.platform)}
                      {creator.platform}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="pill-badge bg-accent text-foreground">{creator.engagement} eng.</span>
                  </div>
                </a>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{creator.name}</h3>
                      <p className="text-xs text-muted-foreground">{creator.handle}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl font-bold text-primary">{creator.followers}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide">followers</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{creator.niche}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {creator.tags.map((tag) =>
                  <span key={tag} className="pill-badge bg-muted text-muted-foreground">{tag}</span>
                  )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 text-center reveal-on-scroll">
            <p className="text-muted-foreground text-sm mb-4">We work with 500+ creators across all niches. This is just a preview.</p>
            <button onClick={openPopup} className="btn-primary">
              Get Your Custom Creator Shortlist →
            </button>
          </div>
        </div>
      </section>

      {/* Brand Testimonials Placeholder */}
      <section className="py-20 px-6 md:px-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 reveal-on-scroll">
            <span className="section-label mb-4 inline-flex">Brand Testimonials</span>
            <h2 className="font-display text-section-heading font-bold text-foreground mt-4">
              What brands<br />
              <span className="italic text-muted-foreground">are saying</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
            { company: 'DTC Apparel Brand', role: 'Head of Growth', quote: 'Placeholder — authentic testimonial from a brand partner coming soon. We\'re in our first deal cycle and collecting real results.' },
            { company: 'Health & Wellness Co.', role: 'Marketing Director', quote: 'Placeholder — this will be replaced with a real quote from a brand that ran a campaign through TheCollabify.' }].
            map((t, i) =>
            <div key={i} className="placeholder-block text-left items-start reveal-on-scroll" data-delay={String(i * 0.1)}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.company}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            )}
          </div>

          {/* Case Studies Placeholder */}
          <div className="mb-6 reveal-on-scroll">
            <span className="section-label inline-flex">Case Studies</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
            { title: 'Fitness Campaign', result: '+340% ROAS', timeline: '6 weeks' },
            { title: 'Beauty Micro Network', result: '14 deals closed', timeline: '30 days' },
            { title: 'Tech Product Launch', result: '2.1M impressions', timeline: '3 weeks' }].
            map((cs, i) =>
            <div key={i} className="placeholder-block reveal-on-scroll" data-delay={String(i * 0.1)}>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">{cs.title}</p>
                <p className="text-xs text-muted-foreground mb-3">Placeholder case study — real data coming soon</p>
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="pill-badge bg-accent/40 text-foreground">{cs.result}</span>
                  <span className="pill-badge bg-muted text-muted-foreground">{cs.timeline}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Brand CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-5xl animated-gradient-bg px-8 py-20 text-center text-white shadow-2xl reveal-on-scroll">
            <div className="noise-overlay rounded-5xl" />
            <div className="glow-accent" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-section-heading font-black text-white mb-4">
                Your next creator partnership<br />
                <span className="italic" style={{ color: 'var(--accent)' }}>starts here.</span>
              </h2>
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Tell us your campaign goal. We&apos;ll send you a curated creator shortlist within 48 hours.
              </p>
              <button onClick={openPopup} className="btn-accent text-base px-10 py-4">
                Start Getting Matched →
              </button>
              <p className="text-white/40 text-xs mt-4">No upfront cost · Commission only · 48-hour turnaround</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SignupPopup isOpen={popupOpen} initialMode="brand" onClose={() => setPopupOpen(false)} />
    </>);

}