'use client';

import { CheckCircle2, Sparkles } from 'lucide-react';

interface WhyChooseUsServiceProps {
  serviceName: string;
}

const points = [
  'Senior CA Partner Firm established in 2018 in Hyderabad — zero third-party referral brokers.',
  '100% In-House Senior FCA Chartered Accountants & FCS Company Secretaries handling document verification.',
  'Fast & Accurate Portal Filing with pre-audited portal submissions ensuring zero back-and-forth query rejections.',
  'Transparent Flat Pricing with clear itemized billing and zero hidden charges.',
  'Zero Statutory Penalty Guarantee — 100% financial accountability on timely statutory portal submissions.',
  'Dedicated Helpline & 5-Minute Callback Response SLA via direct phone 9581880088 and WhatsApp.',
  'Lifetime Encrypted Legal Vault access for all your certificates, MOA/AOA, and GST filings.',
];

export default function WhyChooseUsService({ serviceName }: WhyChooseUsServiceProps) {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80" id="why-choose-us">
      <div className="container-custom max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
            <Sparkles size={13} /> OM ASSOCIATES ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Why Choose OM Associates for {serviceName}?
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-normal">
            8+ years of trusted corporate legal &amp; CA advisory serving over 1,000+ businesses across India.
          </p>
        </div>

        {/* Bulleted Points Box */}
        <div className="bg-[#F8FAFC] rounded-[20px] p-8 border border-slate-200/90 shadow-md">
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 bg-white p-3.5 rounded-[12px] border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
