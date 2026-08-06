'use client';

import { CheckCircle2, Sparkles } from 'lucide-react';

interface WhoCanApplyProps {
  serviceName: string;
}

const entityPoints = [
  'Sole Proprietorship Firms operating under a registered trade or commercial name.',
  'Partnership Firms registered under the Indian Partnership Act, 1932.',
  'Limited Liability Partnerships (LLP) registered under the MCA LLP Act, 2008.',
  'Private Limited Companies (Pvt Ltd) incorporated under Companies Act, 2013.',
  'One Person Companies (OPC) & Public Limited Companies.',
  'Hindu Undivided Families (HUF), Trusts, & Co-operative Societies carrying commercial operations.',
  'Retailers, Wholesalers, & Commercial Service Providers eligible under updated MSME guidelines.',
  'Manufacturing Units, Assembly Plants, & Agricultural Processing Enterprises.',
];

export default function WhoCanApply({ serviceName }: WhoCanApplyProps) {
  return (
    <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80" id="who-can-apply">
      <div className="container-custom max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
            <Sparkles size={13} /> ELIGIBILITY LIST
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Who Can Apply for {serviceName}?
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-normal">
            Any enterprise operating within Indian territorial jurisdiction is eligible to apply.
          </p>
        </div>

        {/* Bulleted Points Box */}
        <div className="bg-white rounded-[20px] p-8 border border-slate-200 shadow-md">
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
            {entityPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-[12px] border border-slate-200/70">
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
