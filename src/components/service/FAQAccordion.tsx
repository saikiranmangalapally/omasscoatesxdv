'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

const fallbackFaqs: FAQ[] = [
  {
    question: 'What is MSME / Udyam Registration?',
    answer: 'An official online government registration process launched by the Ministry of Micro, Small, and Medium Enterprises (MSME) to officially recognize enterprises and grant them statutory tax, tender, and banking benefits.',
  },
  {
    question: 'Is MSME Udyam Registration mandatory for businesses in India?',
    answer: 'No, registration is voluntary. However, it is highly recommended as it unlocks collateral-free credit schemes, interest rate concessions, tax exemptions, and protection against delayed payments under the MSMED Act.',
  },
  {
    question: 'Is there a government fee for Udyam Registration?',
    answer: 'No — government Udyam Registration on the official portal is entirely free. OM Associates charges only a nominal professional service fee for complete documentation check, NIC code mapping, and pre-filing CA verification.',
  },
  {
    question: 'How long is the Udyam Registration certificate valid?',
    answer: 'Udyam Registration certificates carry lifetime validity. No annual renewal is required unless there is a change in investment, turnover, or business activity.',
  },
  {
    question: 'Is GSTIN mandatory for Udyam Registration?',
    answer: 'Yes, as per CGST Act 2017 provisions, PAN and GSTIN are required for Udyam registration (with limited statutory exemptions for micro enterprises below GST turnover limits).',
  },
  {
    question: 'Can a single business enterprise hold multiple Udyam Registrations?',
    answer: 'No. An enterprise can hold only one Udyam Registration Number (URN). Multiple manufacturing units, branches, or service activities can be added under the same URN.',
  },
  {
    question: 'How do I get MSME Registration in Hyderabad or Telangana?',
    answer: 'You can apply 100% online through OM Associates. Our Hyderabad-based team collects your Aadhaar, PAN, and address proof, completes classification mapping, and delivers your official e-certificate within 24-48 hours.',
  },
  {
    question: 'What is the difference between Udyam and Udyog Aadhaar?',
    answer: 'Udyam Registration replaced Udyog Aadhaar on 1 July 2020. All legacy Udyog Aadhaar holders were required to migrate to the new self-declaration Udyam portal to retain statutory benefits.',
  },
  {
    question: 'How does Udyam Registration protect against delayed payments?',
    answer: 'Under Section 15 of the MSMED Act, buyers must make payments within 45 days. If delayed, buyers are statutorily liable to pay compound interest at 3x the RBI bank rate.',
  },
  {
    question: 'What documentation is required for sole proprietorships?',
    answer: 'Only the proprietor’s Aadhaar card (mobile linked for OTP), PAN card, commercial bank account details, and registered business address proof are required.',
  },
];

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayFaqs = faqs && faqs.length > 0 ? faqs : fallbackFaqs;

  return (
    <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]" id="faq">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-chip badge-chip-blue mb-3">
            SUPPORT & CLARIFICATIONS
          </span>
          <h2 className="text-[28px] font-bold text-[#0F172A]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#64748B] text-[15px] mt-2">
            Targeting long-tail search queries and statutory clarifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {displayFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-[8px] transition-all duration-200 ${
                  isOpen ? 'border-[#1E3A8A] bg-white shadow-sm' : 'border-[#E2E8F0] bg-white'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-[#0F172A] text-base cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className={isOpen ? 'text-[#1E3A8A]' : ''}>
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    isOpen ? 'bg-[#1E3A8A] text-white' : 'bg-[#F8FAFC] text-[#64748B]'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-[15px] text-[#334155] leading-relaxed border-t border-[#E2E8F0] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
