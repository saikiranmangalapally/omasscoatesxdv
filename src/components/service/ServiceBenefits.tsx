'use client';

import { ShieldCheck, Award, Zap, Clock, DollarSign, FileCheck, CheckCircle2, Sparkles } from 'lucide-react';

interface ServiceBenefitsProps {
  serviceName: string;
}

const detailedBenefits = [
  {
    title: 'Collateral-Free Bank Loans (CGTMSE Scheme)',
    desc: 'Registered MSMEs get access to collateral-free credit facilities up to ₹2 Crores under the CGTMSE government scheme with minimal paperwork.',
  },
  {
    title: '1% to 1.5% Interest Rate Subvention',
    desc: 'Enjoy special interest rate rebates on working capital loans, overdrafts, and business expansion credit lines from public and private banks.',
  },
  {
    title: '50% Subsidy on Patent & Trademark Fees',
    desc: 'Avail 50% government fee reimbursement on patent applications and trademark registrations to protect your brand identity affordably.',
  },
  {
    title: 'Protection Against Delayed Payments (MSME Samadhaan)',
    desc: 'Buyers must pay MSMEs within 45 days. Delayed payments incur a compound interest penalty of 3x the RBI bank rate under MSME Samadhaan.',
  },
  {
    title: 'Exemption from EMD in Government Tenders',
    desc: 'Earnest Money Deposit (EMD) and tender document fees are 100% waived for Udyam-registered enterprises participating in PSU & Govt tenders.',
  },
  {
    title: 'Electricity Bill & Barcode Concessions',
    desc: 'Claim annual electricity tariff rebates for manufacturing units and up to 75% subsidy on GS1 official barcode registration fees.',
  },
];

const taxBenefitsTable = [
  { category: 'Collateral-Free Loans', benefit: 'Access up to ₹2 Cr collateral-free business loans under Credit Guarantee Fund Scheme (CGTMSE).' },
  { category: 'Interest Rate Concession', benefit: '1% to 1.5% interest rate rebate on working capital and business term loans.' },
  { category: '50% IP Fee Subsidy', benefit: '50% government fee reimbursement on Trademark, Patent, and Industrial Design applications.' },
  { category: 'MSME Samadhaan Protection', benefit: 'Legal protection against delayed payments; buyers must clear dues within 45 days with 3x RBI interest penalty.' },
  { category: 'Govt Tender EMD Waiver', benefit: '100% waiver on Earnest Money Deposit (EMD) and tender form fees for Central Govt & PSU procurement.' },
];

export default function ServiceBenefits({ serviceName }: ServiceBenefitsProps) {
  return (
    <section className="py-10 bg-white border-b border-slate-200/80" id="benefits">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
            <Sparkles size={13} /> EXCLUSIVE GOVERNMENT INCENTIVES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Key Benefits of {serviceName}
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-normal leading-relaxed">
            Why leading startups, manufacturing units, and MSMEs register on Udyam with OM Associates.
          </p>
        </div>

        {/* 2-Column Bulleted Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {detailedBenefits.map((item) => (
            <div key={item.title} className="bg-[#F8FAFC] p-6 rounded-[16px] border border-slate-200/90 shadow-2xs hover:border-[#1A3C5E] transition-all space-y-2 group">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#1A3C5E] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1A3C5E] group-hover:text-white transition-colors">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F172A] mb-1 group-hover:text-[#1A3C5E] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Summary Table */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] text-center mb-6">
            Statutory Privileges &amp; Financial Schemes Overview
          </h3>

          <div className="overflow-x-auto bg-white rounded-[16px] border border-slate-200 shadow-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1A3C5E] text-white">
                  <th className="p-4 font-bold w-1/3 rounded-tl-[16px]">Benefit Category / Scheme</th>
                  <th className="p-4 font-bold rounded-tr-[16px]">Statutory Incentive / Financial Relief</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {taxBenefitsTable.map((row) => (
                  <tr key={row.category} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-bold text-[#0F172A]">{row.category}</td>
                    <td className="p-4 leading-relaxed">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
