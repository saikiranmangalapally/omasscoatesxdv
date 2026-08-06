'use client';

import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface ServiceEligibilityProps {
  serviceName: string;
}

export default function ServiceEligibility({ serviceName }: ServiceEligibilityProps) {
  return (
    <section className="py-10 bg-white border-b border-slate-200/80" id="eligibility">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
              <Sparkles size={13} /> OFFICIAL GOVT GAZETTE CRITERIA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              MSME / Udyam Classification Criteria (MSMED Act)
            </h2>
            <p className="text-slate-600 text-sm mt-2 font-normal">
              Official investment and turnover thresholds for MSME registration in India.
            </p>
          </div>

          {/* Classification Table */}
          <div className="overflow-x-auto bg-white rounded-[16px] border border-slate-200 shadow-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1A3C5E] text-white">
                  <th className="p-4 font-bold rounded-tl-[16px]">Enterprise Category</th>
                  <th className="p-4 font-bold">Plant &amp; Machinery / Equipment Investment</th>
                  <th className="p-4 font-bold rounded-tr-[16px]">Annual Business Turnover Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 font-bold text-[#0F172A] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" /> Micro Enterprise
                  </td>
                  <td className="p-4 font-semibold">Not exceeding ₹1 Crore</td>
                  <td className="p-4 font-bold text-[#1A3C5E]">Not exceeding ₹5 Crore</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 font-bold text-[#0F172A] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7]" /> Small Enterprise
                  </td>
                  <td className="p-4 font-semibold">Not exceeding ₹10 Crore</td>
                  <td className="p-4 font-bold text-[#1A3C5E]">Not exceeding ₹50 Crore</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-4 font-bold text-[#0F172A] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" /> Medium Enterprise
                  </td>
                  <td className="p-4 font-semibold">Not exceeding ₹50 Crore</td>
                  <td className="p-4 font-bold text-[#1A3C5E]">Not exceeding ₹250 Crore</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Eligibility Requirements List */}
          <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-[18px] border border-slate-200 space-y-4">
            <h3 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2">
              <Award size={20} className="text-[#1A3C5E]" /> Key Qualification Requirements for Udyam Portal
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-[12px] border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                <span>Enterprise must be operating within Indian territorial jurisdiction (Proprietorship, Partnership, OPC, Pvt Ltd, LLP, Trust).</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-[12px] border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                <span>Authorized applicant must possess a valid Aadhaar linked to an active mobile number for OTP verification.</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-[12px] border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                <span>PAN Card of the applicant or entity (mandatory for GSTIN and Income Tax data verification).</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-[12px] border border-slate-200/80 shadow-2xs">
                <CheckCircle2 size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                <span>Active Commercial Bank Account details (Account Number &amp; IFSC Code) for government subsidies.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
