'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Search, Command, ArrowRight,
  Users, Building2, CheckCircle2, Star, Lock, BadgeCheck, PhoneCall, ShieldCheck, Sparkles, Zap
} from 'lucide-react';
import { services } from '@/data/services';

const popularQuickAccess = [
  { label: 'Private Limited Company', href: '/private-limited-company' },
  { label: 'GST Registration', href: '/gst-registration' },
  { label: 'Trademark Registration', href: '/trademark-registration' },
  { label: 'Annual ROC Filing', href: '/annual-roc-filing' },
];

export default function HeroBanner() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Private Limited Company' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Keyboard shortcut Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('hero-search-input');
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredServices = searchQuery.trim() === ''
    ? []
    : services.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  const handleSelectService = (slug: string) => {
    router.push(`/${slug}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && filteredServices.length > 0) {
      router.push(`/${filteredServices[0].slug}`);
    }
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.message || data.error || 'Failed to submit. Please try again.');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#F4F9FF] via-[#EBF3FE] to-white text-[#0F172A] pt-28 pb-16 overflow-hidden border-b border-blue-100/80">
      
      {/* Ambient Gradient Mesh Lighting */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container-custom max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Soft Blue Ambient Hero Layout */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Top Trust Pill Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="badge-chip badge-chip-navy text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-sm">
                <Sparkles size={12} className="text-[#2563EB]" /> INDIA&apos;S LEADING CA &amp; COMPLIANCE PLATFORM
              </span>
              
              <div className="inline-flex items-center gap-1.5 bg-white border border-blue-200/80 px-3 py-1 rounded-full text-xs font-normal text-[#0F172A] shadow-xs">
                <span className="font-bold text-[#0F172A]">1,000+</span>
                <span className="text-slate-500">Corporate Clients</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <div className="flex items-center gap-0.5 text-[#FFC107]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <span className="font-bold text-[#0F172A] text-[11px]">4.9</span>
              </div>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] leading-[1.18] tracking-tight">
              Focus on Growing Your Business.{' '}
              <span className="text-[#1A3C5E] block sm:inline">
                We&apos;ll Handle the Compliance.
              </span>
            </h1>

            {/* Subheadline Text */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              File Income Tax Returns, Register your Company, Claim Max GST ITC Savings &amp; Manage Annual ROC Compliance with Senior Chartered Accountants.
            </p>

            {/* ClearTax Style Command Search Bar */}
            <div className="relative w-full pt-1">
              <form
                onSubmit={handleSearchSubmit}
                className="relative flex items-center bg-white border-2 border-slate-300/90 focus-within:border-[#1A3C5E] focus-within:ring-4 focus-within:ring-[#1A3C5E]/10 rounded-xl p-1.5 transition-all shadow-sm"
              >
                <Search size={18} className="text-slate-400 ml-3.5 shrink-0" />
                <input
                  id="hero-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  placeholder="Search your Services (e.g. GST, Pvt Ltd, Trademark)"
                  className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none font-normal text-left"
                />
                
                <div className="hidden sm:flex items-center gap-1 mr-2 text-xs text-slate-400 shrink-0">
                  <span className="kbd-shortcut flex items-center gap-0.5 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-500">
                    <Command size={10} /> K
                  </span>
                </div>

                <button
                  type="submit"
                  className="bg-[#1A3C5E] text-white hover:bg-[#0F253F] px-5 py-2.5 rounded-lg text-xs font-semibold shrink-0 transition-all cursor-pointer shadow-xs"
                >
                  Search
                </button>
              </form>

              {/* Suggestions Dropdown */}
              {isSearchOpen && filteredServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 rounded-[14px] shadow-xl z-50 overflow-hidden divide-y divide-slate-100 text-left text-[#0F172A]"
                >
                  {filteredServices.map((service) => (
                    <button
                      key={service.slug}
                      onClick={() => handleSelectService(service.slug)}
                      className="w-full p-3 text-left hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#0F172A] group-hover:text-[#1A3C5E] transition">
                          {service.name}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                          {service.shortDescription}
                        </div>
                      </div>
                      <ArrowRight size={13} className="text-slate-400 group-hover:text-[#1A3C5E] shrink-0" />
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Quick Access Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 font-normal">
              <span className="text-slate-400 font-normal">Popular:</span>
              {popularQuickAccess.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="bg-white hover:bg-[#1A3C5E] text-slate-700 hover:text-white border border-slate-200/90 shadow-2xs px-3 py-1 rounded-full text-[11px] font-normal transition-all cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Dual Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                href="/private-limited-company"
                className="btn-cta-primary w-full sm:w-auto text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-xl justify-center shadow-md cursor-pointer flex items-center gap-2"
              >
                Start Registration Online <ArrowRight size={15} />
              </Link>

              <Link
                href="/contact-us"
                className="btn-cta-secondary w-full sm:w-auto text-xs sm:text-sm font-semibold py-3.5 px-6 rounded-xl justify-center shadow-xs cursor-pointer flex items-center gap-2"
              >
                Book CA Consultation
              </Link>
            </div>

            {/* Trust Feature Guarantee Strip */}
            <div className="flex flex-wrap items-center gap-5 text-xs font-normal text-slate-600 pt-3 border-t border-slate-200/80">
              <span className="flex items-center gap-1.5 text-[#059669] font-medium">
                <CheckCircle2 size={14} /> 100% Tax Savings Guarantee
              </span>
              <span className="flex items-center gap-1.5 text-[#2563EB] font-medium">
                <Zap size={14} /> 3-Day Incorporation
              </span>
              <span className="flex items-center gap-1.5 text-amber-800 font-medium">
                <ShieldCheck size={14} /> Zero Penalty Guarantee
              </span>
            </div>

          </motion.div>

          {/* Right Column: Clean Senior CA Advisory Consultation Desk */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200/90 text-left relative text-[#0F172A]">
              
              {/* Desk Top Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" />
                    <h3 className="text-lg font-bold text-[#0F172A]">Get Instant CA Advisory</h3>
                  </div>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    Direct Senior Chartered Accountant Callback in 5 Minutes
                  </p>
                </div>
                <span className="badge-chip badge-chip-navy text-[11px] font-semibold">
                  FREE ADVISORY
                </span>
              </div>

              {isSubmitted ? (
                <div className="bg-[#ECFDF5] border border-[#D1FAE5] p-6 rounded-xl text-center space-y-3">
                  <CheckCircle2 size={40} className="text-[#059669] mx-auto animate-bounce" />
                  <h4 className="text-base font-bold text-[#0F172A]">Request Received!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Our Senior Chartered Accountant will call you on <strong>{formData.phone}</strong> within 5 minutes.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#1A3C5E] font-semibold hover:underline pt-2 cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-lg font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input-custom text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9581880088"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input-custom text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">Select Required Service *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-input-custom text-xs"
                    >
                      <option value="Private Limited Company">Private Limited Company</option>
                      <option value="GST Registration & Filing">GST Registration &amp; Filing</option>
                      <option value="Trademark Registration">Trademark Registration</option>
                      <option value="Annual ROC Filing">Annual ROC Filing</option>
                      <option value="MSME Udyam Registration">MSME Udyam Registration</option>
                      <option value="LLP Partnership">LLP Partnership</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta-primary w-full py-3.5 text-xs font-semibold rounded-lg justify-center shadow-md cursor-pointer mt-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Claim Free 5-Min CA Consultation'} <ArrowRight size={14} />
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-normal pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1.5"><Lock size={12} className="text-[#059669]" /> 100% Confidential</span>
                    <span className="flex items-center gap-1.5"><BadgeCheck size={12} className="text-[#1A3C5E]" /> Direct CA Desk</span>
                  </div>
                </form>
              )}

              {/* Bottom Live Assurance Banner */}
              <div className="mt-5 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-left">
                <div className="bg-slate-50 border border-slate-200/80 p-2.5 rounded-lg flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#059669] shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-[#0F172A]">Zero Penalty</div>
                    <div className="text-[10px] text-slate-500 font-normal">On-time Guarantee</div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 p-2.5 rounded-lg flex items-center gap-2">
                  <Zap size={16} className="text-[#2563EB] shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-[#0F172A]">Fast SLA</div>
                    <div className="text-[10px] text-slate-500 font-normal">5-Min Callback</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
