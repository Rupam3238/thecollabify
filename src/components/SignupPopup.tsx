'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface SignupPopupProps {
  isOpen: boolean;
  initialMode: 'brand' | 'creator';
  onClose: () => void;
}

const BRAND_ENDPOINT = 'https://formspree.io/f/mqenorej';
const CREATOR_ENDPOINT = 'https://formspree.io/f/mzdoqndn';

export default function SignupPopup({ isOpen, initialMode, onClose }: SignupPopupProps) {
  const [mode, setMode] = useState<'brand' | 'creator'>(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Brand form state
  const [brandForm, setBrandForm] = useState({
    name: '',
    brandName: '',
    email: '',
    industry: '',
    budget: '',
  });

  // Creator form state
  const [creatorForm, setCreatorForm] = useState({
    name: '',
    email: '',
    platform: '',
    niche: '',
    followers: '',
  });

  useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
    setError('');
  }, [initialMode, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleBrandSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(BRAND_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: brandForm.name,
          brand_name: brandForm.brandName,
          email: brandForm.email,
          industry: brandForm.industry,
          campaign_budget: brandForm.budget,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCreatorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(CREATOR_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: creatorForm.name,
          email: creatorForm.email,
          platform: creatorForm.platform,
          content_niche: creatorForm.niche,
          follower_count: creatorForm.followers,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-3.5 py-2.5 rounded-xl border border-input bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all';
  const labelClass =
    'block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide';

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-card rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1 bg-muted rounded-full p-1">
              {(['brand', 'creator'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => { setMode(m); setSubmitted(false); setError(''); }}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    mode === m
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {m === 'brand' ? "I'm a Brand" : "I'm a Creator"}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">You&apos;re on the list!</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                Thanks! We&apos;ll be in touch within 24 hours.
              </p>
              <button onClick={onClose} className="btn-primary mt-6 mx-auto">Close</button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {mode === 'brand' ? 'Find your perfect creator' : 'Land your next brand deal'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {mode === 'brand' ? "Tell us about your brand and we'll match you with the right voices." :"Tell us about your content and we'll bring deals to you."}
                </p>
              </div>

              {mode === 'brand' ? (
                <form onSubmit={handleBrandSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input
                        type="text"
                        required
                        value={brandForm.name}
                        onChange={(e) => setBrandForm((p) => ({ ...p, name: e.target.value }))}
                        placeholder="Alex Johnson"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Brand Name *</label>
                      <input
                        type="text"
                        required
                        value={brandForm.brandName}
                        onChange={(e) => setBrandForm((p) => ({ ...p, brandName: e.target.value }))}
                        placeholder="Acme Brand Co."
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input
                      type="email"
                      required
                      value={brandForm.email}
                      onChange={(e) => setBrandForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="alex@brand.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Industry *</label>
                    <select
                      required
                      value={brandForm.industry}
                      onChange={(e) => setBrandForm((p) => ({ ...p, industry: e.target.value }))}
                      className={inputClass}
                    >
                      <option value="">Select industry</option>
                      <option value="E-commerce/D2C">E-commerce / D2C</option>
                      <option value="SaaS/Tech">SaaS / Tech</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Food">Food</option>
                      <option value="Health">Health</option>
                      <option value="Gaming">Gaming</option>
                      <option value="Finance">Finance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Campaign Budget *</label>
                    <select
                      required
                      value={brandForm.budget}
                      onChange={(e) => setBrandForm((p) => ({ ...p, budget: e.target.value }))}
                      className={inputClass}
                    >
                      <option value="">Select budget range</option>
                      <option value="Under ₹25K">Under ₹25K</option>
                      <option value="₹25K–₹1L">₹25K – ₹1L</option>
                      <option value="₹1L–₹5L">₹1L – ₹5L</option>
                      <option value="₹5L+">₹5L+</option>
                    </select>
                  </div>
                  {error && <p className="text-red-500 text-xs">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-3.5 text-base disabled:opacity-60"
                  >
                    {submitting ? 'Submitting…' : 'Start Getting Matched →'}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    No upfront cost. We only earn when your deal closes.
                  </p>
                </form>
              ) : (
                <form onSubmit={handleCreatorSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input
                        type="text"
                        required
                        value={creatorForm.name}
                        onChange={(e) => setCreatorForm((p) => ({ ...p, name: e.target.value }))}
                        placeholder="Alex Johnson"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input
                        type="email"
                        required
                        value={creatorForm.email}
                        onChange={(e) => setCreatorForm((p) => ({ ...p, email: e.target.value }))}
                        placeholder="alex@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Platform *</label>
                    <select
                      required
                      value={creatorForm.platform}
                      onChange={(e) => setCreatorForm((p) => ({ ...p, platform: e.target.value }))}
                      className={inputClass}
                    >
                      <option value="">Select platform</option>
                      <option value="Instagram">Instagram</option>
                      <option value="YouTube">YouTube</option>
                      <option value="TikTok">TikTok</option>
                      <option value="Twitter/X">Twitter / X</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Multiple">Multiple</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Content Niche *</label>
                    <select
                      required
                      value={creatorForm.niche}
                      onChange={(e) => setCreatorForm((p) => ({ ...p, niche: e.target.value }))}
                      className={inputClass}
                    >
                      <option value="">Select niche</option>
                      <option value="Tech">Tech</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Gaming">Gaming</option>
                      <option value="Health">Health</option>
                      <option value="Finance">Finance</option>
                      <option value="Food">Food</option>
                      <option value="Travel">Travel</option>
                      <option value="Education">Education</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Follower Count *</label>
                    <select
                      required
                      value={creatorForm.followers}
                      onChange={(e) => setCreatorForm((p) => ({ ...p, followers: e.target.value }))}
                      className={inputClass}
                    >
                      <option value="">Select range</option>
                      <option value="Under 10K">Under 10K</option>
                      <option value="10K–50K">10K – 50K</option>
                      <option value="50K–200K">50K – 200K</option>
                      <option value="200K–1M">200K – 1M</option>
                      <option value="1M+">1M+</option>
                    </select>
                  </div>
                  {error && <p className="text-red-500 text-xs">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-3.5 text-base disabled:opacity-60"
                  >
                    {submitting ? 'Submitting…' : 'Apply to Join the Network →'}
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    No upfront cost. We only earn when your deal closes.
                  </p>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
