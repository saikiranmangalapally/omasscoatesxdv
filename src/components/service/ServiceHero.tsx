'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Calendar, ShieldCheck, Building2 } from 'lucide-react';

interface ServiceHeroProps {
  serviceName: string;
  category: string;
  categoryHref: string;
  description: string;
}

export default function ServiceHero({ serviceName, category, categoryHref, description }: ServiceHeroProps) {
  const [captchaInput, setCaptchaInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#1A3C5E] text-white">
      {/* 1. Breadcrumb Bar */}
      <div className="bg-[#0F253F] py-2.5 border-b border-white/10 text-xs text-blue-100">
        <div className="container-custom">
          <nav className="flex items-center gap-2 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href={categoryHref} className="hover:text-white transition">{category}</Link>
            <span>/</span>
            <span className="text-white font-bold">{serviceName}</span>
          </nav>
        </div>
      </div>

      {/* 2. Main Service Hero Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-[58%_42%] gap-12 items-start">
            
            {/* LEFT COLUMN */}
            <div className="space-y-6 pt-2">
              
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-[1.2]">
                {serviceName}
              </h1>

              {/* Short Description */}
              <p className="text-base text-blue-100 font-normal leading-relaxed max-w-xl">
                {description}
              </p>

              {/* 4 White Checkmark Sub-Bullets */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-sm sm:text-[15px] font-medium text-white">
                  <div className="w-5 h-5 rounded-full bg-white text-[#1A3C5E] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>Simplify your {serviceName} with expert CA support and more.</span>
                </div>

                <div className="flex items-start gap-3 text-sm sm:text-[15px] font-medium text-white">
                  <div className="w-5 h-5 rounded-full bg-white text-[#1A3C5E] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>We understand the unique needs of businesses across every entity type and industry.</span>
                </div>

                <div className="flex items-start gap-3 text-sm sm:text-[15px] font-medium text-white">
                  <div className="w-5 h-5 rounded-full bg-white text-[#1A3C5E] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>Our experts will handle the entire registration process, ensuring your application is completed accurately and submitted efficiently.</span>
                </div>

                <div className="flex items-start gap-3 text-sm sm:text-[15px] font-medium text-white">
                  <div className="w-5 h-5 rounded-full bg-white text-[#1A3C5E] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>Register now and avail of exclusive government &amp; tax benefits!</span>
                </div>
              </div>

              {/* Organic Trust Indicator Strip */}
              <div className="pt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-white">
                <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                  <ShieldCheck size={16} className="text-[#25D366]" />
                  <span>FCA &amp; FCS Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-slate-300" />
                  <span className="font-bold text-white text-base">1,000+</span>
                  <span className="text-blue-100">Happy corporate clients.</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Form Card */}
            <div className="relative">
              <div className="bg-white rounded-[12px] p-6 lg:p-8 text-[#0F172A] shadow-2xl border border-white/30">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    Get Expert Consultation
                  </h3>
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-2xl font-bold">
                      ✓
                    </div>
                    <h4 className="text-lg font-bold text-[#0F172A]">Request Submitted!</h4>
                    <p className="text-xs text-slate-600">
                      Our Senior CA will reach out to you within 5 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] px-3.5 py-3 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none focus:border-[#1A3C5E] focus:bg-white transition"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email *"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] px-3.5 py-3 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none focus:border-[#1A3C5E] focus:bg-white transition"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Mobile Number *"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] px-3.5 py-3 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none focus:border-[#1A3C5E] focus:bg-white transition"
                        required
                      />
                    </div>

                    {/* Math Captcha Row */}
                    <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-2.5">
                      <span className="text-xs font-bold text-slate-700 font-mono px-3">
                        6 + 6 =
                      </span>
                      <input
                        type="text"
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        placeholder="Answer"
                        className="w-full bg-white border border-[#E2E8F0] rounded-[4px] px-3 py-1.5 text-xs text-[#0F172A] outline-none"
                        required
                      />
                    </div>

                    {/* Buttons */}
                    <div className="space-y-2.5 pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm py-3.5 px-4 rounded-[6px] transition shadow-md cursor-pointer"
                      >
                        Get Started Now
                      </button>

                      <div className="relative text-center my-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-white px-2 relative z-10">
                          OR
                        </span>
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-slate-200" />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-[#1A3C5E] hover:bg-[#0F253F] text-white font-bold text-sm py-3.5 px-4 rounded-[6px] transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Calendar size={16} /> Book Consultation
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
