'use client';

import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface ServiceOverviewProps {
  serviceName: string;
  description: string;
}

export default function ServiceOverview({ serviceName, description }: ServiceOverviewProps) {
  return (
    <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80" id="overview">
      <div className="container-custom max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
            <Sparkles size={13} /> KEY POINTS OVERVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Key Service Information — {serviceName}
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-normal">
            Essential facts, statutory requirements, and procedural highlights presented in direct bullet points.
          </p>
        </div>

        {/* Bulleted Points Container */}
        <div className="bg-white rounded-[20px] p-8 border border-slate-200 shadow-md space-y-6">
          <h3 className="text-base font-extrabold text-[#0F172A] border-b border-slate-100 pb-3 flex items-center gap-2">
            <ShieldCheck size={18} className="text-[#1A3C5E]" /> Key Highlights &amp; Statutory Guidelines:
          </h3>

          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
            <li className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-[12px] border border-slate-200/70">
              <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
              <span><strong>Official Government Certificate:</strong> Issuance of authentic 10-16 digit registration certificate directly from official statutory portals.</span>
            </li>
            <li className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-[12px] border border-slate-200/70">
              <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
              <span><strong>100% Paperless Process:</strong> Entire execution completed online with self-declaration document uploads and OTP verification.</span>
            </li>
            <li className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-[12px] border border-slate-200/70">
              <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
              <span><strong>Senior CA Supervision:</strong> Personal scrutiny by FCA &amp; FCS partners to eliminate query rejections or document formatting errors.</span>
            </li>
            <li className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-[12px] border border-slate-200/70">
              <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
              <span><strong>Zero Statutory Penalty Guarantee:</strong> Timely application filing to protect your entity against late fees or director disqualification.</span>
            </li>
            <li className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-[12px] border border-slate-200/70">
              <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
              <span><strong>Financial &amp; Banking Benefits:</strong> Immediate eligibility for collateral-free bank loans, lower overdraft interest rates, and tender waivers.</span>
            </li>
            <li className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-[12px] border border-slate-200/70">
              <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
              <span><strong>Lifetime Document Vault Access:</strong> Permanent digital storage of your incorporation drafts, licenses, and filing receipts.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
