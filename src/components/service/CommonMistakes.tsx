'use client';

import { AlertTriangle, Sparkles, XCircle } from 'lucide-react';

const mistakes = [
  { title: 'Incorrect Aadhaar Details', desc: 'Name and date of birth in application must match official Aadhaar records exactly, down to the spelling.' },
  { title: 'Mismatched PAN Information', desc: 'PAN card details must be active and linked with Aadhaar; discrepancies lead to instant portal rejection.' },
  { title: 'Wrong NIC Code Selection', desc: 'Selecting inaccurate 2/4/5 digit National Industrial Classification codes limits tax benefits and tender eligibility.' },
  { title: 'Inaccurate Investment & Turnover Figures', desc: 'Failing to deduct export turnover or IT equipment depreciation distorts enterprise classification limits.' },
  { title: 'Multiple Registrations for Same Enterprise', desc: 'Registering multiple times for branches is prohibited; all activities must be consolidated under a single URN.' },
  { title: 'Outdated Mobile Number or Email', desc: 'Aadhaar OTPs and official government notices are sent to registered contact info — must remain active.' },
  { title: 'Ignoring GSTIN Integration Requirements', desc: 'Businesses exceeding threshold limits must link active GSTIN numbers to maintain statutory compliance.' },
  { title: 'Failing to Save Registration Certificate (URC)', desc: 'Failing to download the initial e-certificate forces unnecessary portal recovery steps during bank audits.' },
];

export default function CommonMistakes() {
  return (
    <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80" id="common-mistakes">
      <div className="container-custom max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
            <Sparkles size={13} /> PITFALL PREVENTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Common Mistakes to Avoid
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-normal">
            Steer clear of these frequent errors that cause portal rejections or delayed approvals.
          </p>
        </div>

        {/* Bulleted Points Box */}
        <div className="bg-white rounded-[20px] p-8 border border-slate-200 shadow-md">
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
            {mistakes.map((item) => (
              <li key={item.title} className="flex items-start gap-3 bg-[#FFF7ED] p-3.5 rounded-[12px] border border-[#FFEDD5]">
                <XCircle size={18} className="text-[#DC2626] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0F172A]">{item.title}: </span>
                  <span className="text-slate-600 font-normal">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
