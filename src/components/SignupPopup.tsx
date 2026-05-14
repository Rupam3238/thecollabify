'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface SignupPopupProps {
  isOpen: boolean;
  initialMode: 'brand' | 'creator';
  onClose: () => void;
}

export default function SignupPopup({ isOpen, initialMode, onClose }: SignupPopupProps) {
  const [mode, setMode] = useState<'brand' | 'creator'>(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    handle: '',
    niche: '',
    followers: '',
    message: '',
  });

  useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
      <div className="relative w-full max-w-lg bg-card rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1 bg-muted rounded-full p-1">
              {(['brand', 'creator'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    mode === m
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {m === 'brand' ? 'I\'m a Brand' : 'I\'m a Creator'}
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
                We&apos;ll be in touch within 48 hours to kick off your matching process.
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
                  {mode === 'brand' ?'Tell us about your brand and we\'ll match you with the right voices.' :'Tell us about your content and we\'ll bring deals to you.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="Alex Johnson"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="alex@brand.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {mode === 'brand' ? (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))}
                        placeholder="Acme Brand Co."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">Website</label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData(p => ({ ...p, website: e.target.value }))}
                        placeholder="https://yourbrand.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">Main Social Handle *</label>
                      <input
                        type="text"
                        required
                        value={formData.handle}
                        onChange={(e) => setFormData(p => ({ ...p, handle: e.target.value }))}
                        placeholder="@yourhandle"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">Niche</label>
                        <input
                          type="text"
                          value={formData.niche}
                          onChange={(e) => setFormData(p => ({ ...p, niche: e.target.value }))}
                          placeholder="Fitness, Travel..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">Followers</label>
                        <select
                          value={formData.followers}
                          onChange={(e) => setFormData(p => ({ ...p, followers: e.target.value }))}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-muted text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        >
                          <option value="">Select range</option>
                          <option value="1k-10k">1K – 10K</option>
                          <option value="10k-50k">10K – 50K</option>
                          <option value="50k-200k">50K – 200K</option>
                          <option value="200k+">200K+</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
                    {mode === 'brand' ? 'What are you looking for?' : 'Tell us about your content'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                    placeholder={mode === 'brand' ? 'Describe your campaign goals, target audience, budget range...' : 'What brands would be a natural fit for your audience?'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-3.5 text-base">
                  {mode === 'brand' ? 'Start Getting Matched →' : 'Apply to Join the Network →'}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  No upfront cost. We only earn when your deal closes.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
