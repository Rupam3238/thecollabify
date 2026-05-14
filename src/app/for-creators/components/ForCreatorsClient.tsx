'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupPopup from '@/components/SignupPopup';
import AppImage from '@/components/ui/AppImage';

export default function ForCreatorsClient() {
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);

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
      htmlEl.style.transition =
      'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1), filter 0.65s cubic-bezier(0.4,0,0.2,1)';
      observer.observe(htmlEl);
    });

    return () => observer.disconnect();
  }, []);

  const creatorBenefits = [
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>,

    title: 'Deals come to you',
    desc: 'No cold pitching. No chasing brand managers. We bring you deals that fit your content and audience — you just say yes or no.'
  },
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>,

    title: 'We pitch on your behalf',
    desc: "We approach brands for you. No awkward self-promotion, no lowball offers you feel pressured to accept. We negotiate your value."
  },
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>,

    title: 'No upfront cost, ever',
    desc: "You never pay to join, never pay to get matched. We earn a commission from the deal value — only after it closes."
  },
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>,

    title: 'Transparent deal structures',
    desc: "Every deal is clearly structured before you sign. You know exactly what you're agreeing to — deliverables, timeline, payment."
  },
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>,

    title: 'Brands that actually fit',
    desc: "We only match you with brands whose values align with your content. No random mismatches that confuse your audience."
  },
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>,

    title: 'Scale your income',
    desc: "One successful deal leads to more. We help you build a repeatable income stream from brand partnerships without burning out."
  }];


  const brandCategories = [
  { name: 'Wellness & Health', color: 'bg-primary/10 text-primary', icon: '🌿' },
  { name: 'Fitness & Sport', color: 'bg-accent/40 text-foreground', icon: '⚡' },
  { name: 'Beauty & Skincare', color: 'bg-muted text-muted-foreground', icon: '✨' },
  { name: 'Tech & Gadgets', color: 'bg-dark-section text-white', icon: '💻' },
  { name: 'Food & Beverage', color: 'bg-primary/10 text-primary', icon: '🍃' },
  { name: 'Personal Finance', color: 'bg-accent/40 text-foreground', icon: '📈' },
  { name: 'Fashion & Style', color: 'bg-muted text-muted-foreground', icon: '👗' },
  { name: 'Travel & Outdoor', color: 'bg-dark-section text-white', icon: '🗺️' }];


  return (
    <>
      <Header
        variant="transparent"
        onOpenPopup={(mode) => {
          if (mode === 'creator') openPopup();else
          openPopup();
        }} />
      

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end px-6 md:px-12 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_15af9b6e8-1772340492181.png"
            alt="Young female content creator filming a video in a stylish apartment, warm ambient lighting, modern interior with plants, dark moody background"
            fill
            className="object-cover"
            priority />
          
          <div className="absolute inset-0 bg-gradient-to-t from-dark-section via-dark-section/65 to-dark-section/15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="section-label bg-white/10 border-white/20 text-white/70 mb-6 inline-flex">
              For Creators
            </span>
            <h1 className="font-display text-hero font-black text-white mt-4 mb-6">
              Stop cold pitching.<br />
              <span className="italic" style={{ color: 'var(--accent)' }}>Start earning.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-lg mb-8 border-l-2 border-accent pl-4">
              We bring brand deals to you. No outreach, no awkward DMs, no lowball offers. Just matched deals that make sense for your audience.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={openPopup} className="btn-accent text-base px-8 py-4">
                Apply to Join →
              </button>
              <Link href="/for-brands" className="btn-outline-white text-base px-8 py-4">
                See How Brands Use Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-[#0C1A3A]/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-5">What creators get</p>
              <div className="space-y-4">
                {[
                'Matched brand deals delivered to your inbox',
                'We negotiate rates on your behalf',
                'Transparent contracts, no hidden terms',
                'Free to join — commission only when you earn'].
                map((item, i) =>
                <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                      <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent">
                      
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-white font-medium">{item}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-10 px-6 md:px-12 bg-dark-section border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
            { num: '500+', label: 'Creators in Network' },
            { num: '$0', label: 'Cost to Join' },
            { num: '48h', label: 'First Match Avg.' },
            { num: '94%', label: 'Deal Close Rate' }].
            map((stat, i) =>
            <div key={i} className="text-center reveal-on-scroll" data-delay={String(i * 0.08)}>
                <p className="font-display text-3xl font-black text-white">{stat.num}</p>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Creator Benefits */}
      <section className="py-20 px-6 md:px-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal-on-scroll">
            <span className="section-label mb-4 inline-flex">What You Get</span>
            <h2 className="font-display text-section-heading font-bold text-foreground mt-4">
              Finally, someone<br />
              <span className="italic text-muted-foreground">in your corner.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creatorBenefits.map((b, i) =>
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-7 reveal-on-scroll"
              data-delay={String(i * 0.08)}>
              
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {b.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How it works for creators */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <span className="section-label mb-6 inline-flex">The Process</span>
              <h2 className="font-display text-section-heading font-bold text-foreground mt-4 mb-8">
                You create.<br />
                <span className="italic text-muted-foreground">We handle the rest.</span>
              </h2>
              <div className="space-y-6">
                {[
                {
                  step: '01',
                  title: 'Apply in 5 minutes',
                  desc: 'Tell us your niche, platform, and the kind of brands you want to work with. No deck, no pitch.'
                },
                {
                  step: '02',
                  title: 'We review your profile',
                  desc: "Our team looks at your content, audience quality, and engagement. We're looking for authenticity, not just big numbers."
                },
                {
                  step: '03',
                  title: 'We match and pitch',
                  desc: "When a brand fits, we approach them on your behalf. You stay focused on content while we do the business development."
                },
                {
                  step: '04',
                  title: 'Deal lands in your inbox',
                  desc: "You receive a structured offer. Review it, ask questions, sign. We handle payment structure and timeline."
                }].
                map((item, i) =>
                <div key={i} className="flex gap-4 reveal-on-scroll" data-delay={String(i * 0.1)}>
                    <span className="font-display text-3xl font-black text-border leading-none shrink-0 w-10">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )}
              </div>
              <button onClick={openPopup} className="btn-primary mt-8">
                Apply Now →
              </button>
            </div>

            <div className="relative reveal-on-scroll" data-delay="0.2">
              <div className="arch-image h-[550px] relative shadow-2xl">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_15989f11f-1772456797122.png"
                  alt="Content creator at desk editing videos on laptop with ring light, modern home studio setup, dark moody atmosphere with warm accent lighting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-[2.5s]" />
                
                <div className="overlay-scrim" />
                <div className="absolute bottom-8 left-8 glass-card p-4 rounded-xl text-white max-w-[220px] z-10 float-anim">
                  <p className="text-xs font-bold mb-1">Deal offer received</p>
                  <p className="text-xs opacity-75 leading-relaxed">
                    Fitness Brand × You · $2,800 sponsored post
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-[10px] text-white/70">Awaiting your response</span>
                  </div>
                </div>
              </div>
              {/* Decorative rotated border */}
              <div className="absolute -inset-4 border border-border rounded-[10rem] -rotate-3 -z-10 opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos / Categories Placeholder */}
      <section className="py-20 px-6 md:px-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 reveal-on-scroll">
            <span className="section-label mb-4 inline-flex">Brand Partners</span>
            <h2 className="font-display text-section-heading font-bold text-foreground mt-4">
              Brands waiting<br />
              <span className="italic text-muted-foreground">to work with you.</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-lg">
              These brand categories represent the types of partnerships we actively source. Specific brand logos will appear here as partnerships are confirmed.
            </p>
          </div>

          {/* Brand category placeholder tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {brandCategories.map((brand, i) =>
            <div
              key={i}
              className="placeholder-block py-8 reveal-on-scroll"
              data-delay={String(i * 0.07)}>
              
                <span className="text-3xl mb-3">{brand.icon}</span>
                <span className={`pill-badge ${brand.color} mt-1`}>{brand.name}</span>
                <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest">
                  Placeholder
                </p>
              </div>
            )}
          </div>

          <div className="placeholder-block py-10 reveal-on-scroll">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary">
                
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-foreground mb-1">Brand logo wall — coming soon</p>
            <p className="text-xs text-muted-foreground max-w-sm text-center leading-relaxed">
              As we confirm brand partnerships, their logos will appear here. This section is intentionally reserved — not an oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Creator Testimonials Placeholder */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 reveal-on-scroll">
            <span className="section-label mb-4 inline-flex">Creator Stories</span>
            <h2 className="font-display text-section-heading font-bold text-foreground mt-4">
              Creators who said<br />
              <span className="italic text-muted-foreground">&ldquo;finally.&rdquo;</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
            {
              name: 'Lifestyle Creator',
              handle: '@placeholder',
              followers: '120K',
              platform: 'Instagram',
              quote:
              "Placeholder — authentic creator testimonial coming soon. We're collecting stories from our first cohort of matched creators."
            },
            {
              name: 'Fitness Creator',
              handle: '@placeholder',
              followers: '85K',
              platform: 'TikTok',
              quote:
              "Placeholder — this will be replaced with a real quote from a creator who landed their first brand deal through TheCollabify."
            },
            {
              name: 'Beauty Creator',
              handle: '@placeholder',
              followers: '210K',
              platform: 'YouTube',
              quote:
              "Placeholder — real creator testimonial coming soon. Our first creator cohort is actively closing their inaugural deals."
            }].
            map((t, i) =>
            <div
              key={i}
              className="placeholder-block text-left items-start reveal-on-scroll"
              data-delay={String(i * 0.1)}>
              
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-4 shrink-0">
                  <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary">
                  
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto w-full">
                  <div className="w-8 h-px bg-border mb-3" />
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.handle}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="pill-badge bg-primary/10 text-primary">{t.platform}</span>
                    <span className="pill-badge bg-muted text-muted-foreground">{t.followers}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ for Creators */}
      <section className="py-20 px-6 md:px-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="reveal-on-scroll">
                <span className="section-label mb-4 inline-flex">FAQ</span>
                <h2 className="font-display text-section-heading font-bold text-foreground mt-4">
                  Questions<br />
                  <span className="italic text-muted-foreground">answered.</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  Everything you need to know before applying. Still have questions? Reach out directly.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 space-y-4 reveal-on-scroll" data-delay="0.2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Still have questions?</p>
                    <p className="text-xs text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </div>
                <button
                  onClick={openPopup}
                  className="w-full py-3 rounded-xl bg-muted hover:bg-border text-foreground font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                  
                  Apply & Ask Us Anything
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-3">
              {[
              {
                q: 'Do I need a minimum follower count?',
                a: "No hard minimum. We look at engagement quality and content consistency more than raw follower numbers. A 15K creator with 8% engagement is more valuable to most brands than a 200K creator with 0.5% engagement."
              },
              {
                q: 'What platforms do you work with?',
                a: 'Instagram, TikTok, YouTube, and X (Twitter). We focus on where your audience actually is — not where you think you should be.'
              },
              {
                q: 'How does your commission work?',
                a: "We take a percentage of the deal value — only when the deal closes. The exact rate is discussed during onboarding and depends on deal size. You always know our cut before signing anything."
              },
              {
                q: "What if a brand isn't a good fit?",
                a: "You always have the final say. We present the match and you decide. No pressure, no obligation. We'd rather you decline a bad fit than force a partnership that damages your credibility."
              },
              {
                q: 'How long does it take to get my first deal?',
                a: 'Most creators in our network receive their first match within 2–4 weeks of joining. It depends on your niche, audience size, and how active the brand pipeline is in your category.'
              }].
              map((faq, i) =>
              <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.08} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Creator CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-5xl animated-gradient-bg px-8 py-20 text-center text-white shadow-2xl reveal-on-scroll">
            <div className="noise-overlay rounded-5xl" />
            <div className="glow-accent" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="ping-anim absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">
                  Now accepting creators
                </span>
              </div>

              <h2 className="font-display text-section-heading font-black text-white mb-4">
                Your next brand deal<br />
                <span className="italic" style={{ color: 'var(--accent)' }}>
                  is already looking for you.
                </span>
              </h2>
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Join 500+ creators who stopped cold pitching and started receiving matched brand deals. Free to join — always.
              </p>
              <button onClick={openPopup} className="btn-accent text-base px-10 py-4">
                Apply to Join the Network →
              </button>
              <p className="text-white/40 text-xs mt-4">
                Free to join · Commission only · No upfront cost
              </p>

              <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10">
                {[
                { num: '500+', label: 'Active Creators' },
                { num: '$0', label: 'To Join' },
                { num: '12', label: 'Niches Covered' },
                { num: '48h', label: 'Avg. First Match' }].
                map((stat) =>
                <div key={stat.label} className="text-center">
                    <p className="font-display text-2xl font-bold text-white">{stat.num}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SignupPopup
        isOpen={popupOpen}
        initialMode="creator"
        onClose={() => setPopupOpen(false)} />
      
    </>);

}

/* ── Inline FAQ accordion (client-side, no separate file needed) ── */
function FAQItem({
  question,
  answer,
  delay




}: {question: string;answer: string;delay: number;}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 reveal-on-scroll"
      data-delay={String(delay)}>
      
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none group">
        
        <span className="text-sm font-semibold text-foreground pr-4">{question}</span>
        <div
          className={`w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 transition-all duration-300 ${
          open ? 'bg-primary border-primary rotate-180' : 'bg-muted group-hover:bg-primary/10'}`
          }>
          
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? 'white' : 'currentColor'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round">
            
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>
      <div
        style={{ maxHeight: open ? '300px' : '0px' }}
        className="overflow-hidden transition-all duration-500 ease-in-out">
        
        <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>);

}