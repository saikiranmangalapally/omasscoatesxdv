'use client';

import { Sparkles } from 'lucide-react';

const eightSteps = [
  { num: '1', title: 'Submit Business & Aadhaar Information', desc: 'Provide basic enterprise details and applicant Aadhaar number linked with active mobile number.' },
  { num: '2', title: 'Aadhaar Mobile OTP Validation', desc: 'Instant OTP verification to authenticate identity and access government portal submission.' },
  { num: '3', title: 'PAN & GSTIN Data Linkage', desc: 'Automated retrieval of tax data and firm details via PAN and GSTIN integration.' },
  { num: '4', title: 'Address & Business Activity NIC Code Selection', desc: 'Select correct National Industrial Classification (NIC) code matching manufacturing or service activity.' },
  { num: '5', title: 'Investment & Turnover Self-Declaration', desc: 'Confirm plant & machinery investment figures and annual turnover limits.' },
  { num: '6', title: 'Senior CA Audit & Pre-Filing Verification', desc: 'Senior Chartered Accountant verifies application data to ensure zero query rejections.' },
  { num: '7', title: 'Final Portal Submission & Application Allotment', desc: 'Direct submission to the official Udyam / Govt portal and generation of URN acknowledgment.' },
  { num: '8', title: 'Instant Certificate Issuance (URC)', desc: 'Receive official Udyam Registration Certificate in digital PDF format via email & WhatsApp.' },
];

export default function ProcessSteps() {
  return (
    <section className="py-10 bg-white border-b border-slate-200/80" id="process">
      <div className="container-custom max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
            <Sparkles size={13} /> STEP-BY-STEP FLOW
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Registration Process Points
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-normal">
            8 simple steps from document collection to official government certificate allotment.
          </p>
        </div>

        {/* Numbered Bulleted Points Box */}
        <div className="bg-[#F8FAFC] rounded-[20px] p-8 border border-slate-200/90 shadow-md">
          <ol className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
            {eightSteps.map((step) => (
              <li key={step.num} className="flex items-start gap-3.5 bg-white p-4 rounded-[14px] border border-slate-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-[10px] bg-[#1A3C5E] text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#0F172A]">{step.title}</h4>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mt-0.5">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
