'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';

const faqItems = [
  {
    id: 'faq-1',
    question: 'Who should file an Income Tax Return (ITR)?',
    answer: 'An individual whose annual income is more than the basic exemption limit of Rs 2.5 lakh should file an ITR. The basic exemption limit for senior citizens (60 years onwards and less than 80 years) is Rs 3 lakh, and for super senior citizens is Rs 5 lakh.',
  },
  {
    id: 'faq-2',
    question: 'How can I claim deductions for tax saving?',
    answer: 'Taxpayers can claim deductions under various sections of the Income Tax Act such as Section 80C (PPF, ELSS, EPF up to ₹1.5 Lakhs), Section 80D (Health Insurance Premiums), Section 80CCD(1B) (NPS contribution up to ₹50,000), and Section 24(b) for Home Loan Interest.',
  },
  {
    id: 'faq-3',
    question: 'I receive my salary income after deduction of TDS. Am I required to file an income tax return?',
    answer: 'Yes! Even if your employer has deducted tax at source (TDS) and issued Form 16, filing an Income Tax Return is mandatory if your gross total income exceeds the basic exemption limit. Filing ITR allows you to claim any excess TDS refund.',
  },
  {
    id: 'faq-4',
    question: 'How do I check TDS details from my form 26AS?',
    answer: 'You can inspect your Form 26AS by logging into your Income Tax e-Filing portal account or through your net banking login. Form 26AS displays all tax deducted at source (TDS), advance tax paid, and high-value transactions reported under your PAN.',
  },
  {
    id: 'faq-5',
    question: 'How can I claim an income tax refund?',
    answer: 'Income tax refund is claimed automatically by filing your ITR accurately with all eligible deductions. Once processed by the CPC (Centralized Processing Centre), the refund amount is directly credited to your pre-validated bank account via ECS/NEFT.',
  },
  {
    id: 'faq-6',
    question: 'Is my data filed with OM Associates secure?',
    answer: 'Absolutely. We utilize bank-grade 256-bit SSL encryption and follow strict MCA & Income Tax Department data confidentiality protocols. Your financial records, PAN details, and business filings are never shared with unauthorized third parties.',
  },
  {
    id: 'faq-7',
    question: 'What are the GST services offered by OM Associates?',
    answer: 'We provide end-to-end GST solutions including GST Registration, Monthly Return Filing (GSTR-1, GSTR-3B), GSTR-2B Input Tax Credit (ITC) reconciliation, Annual Return (GSTR-9), Lut Export Filings, and GST Audit Defense by Senior CAs.',
  },
];

export default function PartnerLogos() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200/80 text-left" id="faq-section">
      <div className="container-custom max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Decreased Font Weights (400 & 300) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-chip badge-chip-navy mb-2.5 uppercase tracking-widest text-[11px] font-normal" style={{ fontWeight: 500 }}>
            <Sparkles size={12} /> FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl text-[#0F172A] tracking-tight leading-tight font-normal" style={{ fontWeight: 500 }}>
            Everything You Need To Know
          </h2>
          <p className="text-[#64748B] text-xs sm:text-sm mt-1.5 leading-relaxed font-light" style={{ fontWeight: 300 }}>
            Got questions about business registration, GST returns, trademark defense, or ROC filings? Our expert CAs answer below.
          </p>
        </div>

        {/* Accordion Rows Layout with Decreased Question & Answer Weights */}
        <div className="divide-y divide-[#E2E8F0] border-t border-[#E2E8F0]">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-4 sm:py-5 transition-colors">
                
                {/* Question Row Header */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left flex items-center justify-between gap-5 cursor-pointer group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base leading-snug transition-colors ${
                      isOpen
                        ? 'text-[#0B4B8B]'
                        : 'text-slate-700 group-hover:text-[#0B4B8B]'
                    }`}
                    style={{ fontWeight: isOpen ? 500 : 300 }}
                  >
                    {item.question}
                  </span>

                  {/* Right Action Icon */}
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? 'bg-[#0B4B8B] text-white shadow-xs'
                        : 'bg-[#94A3B8] text-white group-hover:bg-[#0B4B8B]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={14} strokeWidth={1.5} />
                    ) : (
                      <Plus size={14} strokeWidth={1.5} />
                    )}
                  </div>
                </button>

                {/* Expanded Answer Text Content with Light Weight (300) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div
                        className="pt-2.5 pr-10 text-xs sm:text-sm text-slate-500 font-light leading-relaxed"
                        style={{ fontWeight: 300 }}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
