'use client';

import { CheckCircle2, FileCheck, Sparkles } from 'lucide-react';

interface DocumentsRequiredProps {
  documents: string[];
  serviceName: string;
}

export default function DocumentsRequired({ documents, serviceName }: DocumentsRequiredProps) {
  const defaultDocs = [
    'Aadhaar Card of Proprietor / Partner / Director (Mobile linked for OTP validation)',
    'PAN Card of the Entrepreneur / Entity / Firm',
    'GSTIN Certificate (mandatory if registered under GST)',
    'Commercial Bank Account Details (Cancelled Cheque or Bank Statement with IFSC Code)',
    'Business Address Proof (Electricity bill / Rent agreement / NOC from owner)',
    'Certificate of Incorporation / Partnership Deed / LLP Agreement (for corporate entities)',
    'Details of Main Business Activity & Investment/Turnover Figures',
  ];

  const docsToDisplay = documents && documents.length > 0 ? documents : defaultDocs;

  return (
    <section className="py-10 bg-[#F8FAFC] border-b border-slate-200/80" id="documents">
      <div className="container-custom max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
            <Sparkles size={13} /> CHECKLIST
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Documents Required for {serviceName}
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-normal">
            100% digital upload — zero physical paperwork or notary visits needed.
          </p>
        </div>

        {/* Bulleted Checklist Box */}
        <div className="bg-white rounded-[20px] p-8 border border-slate-200 shadow-md space-y-6">
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
            {docsToDisplay.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-[12px] border border-slate-200/70">
                <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <span>{doc}</span>
                  <span className="text-[11px] text-slate-500 font-normal block mt-0.5">Scanned PDF / JPEG Copy Acceptable</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
