'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, ArrowRight, Lock, BadgeCheck,
  Building2, PhoneCall, Search, ChevronDown, FileText, Sparkles
} from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { Service } from '@/data/services';
import { contactInfo } from '@/data/navigation';

interface AnimatedServiceTemplateProps {
  service: Service;
  categoryLabel?: string;
}

export default function AnimatedServiceTemplate({
  service,
  categoryLabel: propCategoryLabel,
}: AnimatedServiceTemplateProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'documents' | 'steps'>('overview');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    entityType: 'Proprietorship',
  });
  const [isFormDone, setIsFormDone] = useState(false);
  const [faqQuery, setFaqQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categoryLabel =
    propCategoryLabel ||
    (service.category === 'compliance'
      ? 'Corporate Compliance & ROC'
      : service.category === 'legal'
      ? 'Legal & Intellectual Property'
      : 'Accounting & Statutory Filing');

  const docsToDisplay = service.documents.map((doc) => ({
    title: doc,
    desc: 'Self-attested scan copy required for online portal submission.',
  }));

  const steps = [
    {
      step: '1',
      title: 'Document Upload & Preliminary Review',
      desc: 'Submit required KYC documents and details through our paperless portal.',
    },
    {
      step: '2',
      title: 'CA Audit & Portal Drafting',
      desc: 'Assigned Senior Chartered Accountant verifies documents and drafts statutory forms.',
    },
    {
      step: '3',
      title: 'Government Portal Submission',
      desc: 'Direct filing on Ministry of Corporate Affairs, GSTN, or IP India portals.',
    },
    {
      step: '4',
      title: 'Government Certificate Allotment',
      desc: 'Receive official approved certificate and statutory credentials delivered to your dashboard.',
    },
  ];

  const keyBenefits = [
    { title: '100% Legal Ownership', desc: 'Complete statutory corporate protection under Indian Business Acts.' },
    { title: 'Tax Exemption Eligible', desc: 'Access Section 80-IAC tax holiday & DPIIT startup benefits.' },
    { title: 'Priority Loan Access', desc: 'Eligible for collateral-free MSME bank loans up to ₹2 Crores.' },
    { title: 'Brand & IP Protection', desc: 'Prevent competitors from copying your brand name & logo.' },
    { title: 'Zero Penalty Guarantee', desc: 'On-time statutory filings by senior CAs ensuring 100% compliance.' },
  ];

  const filteredFaqs = (service.faqs || []).filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      
      {/* ========================================================================= */}
      {/* 1. ORIGINAL HERO BANNER SECTION */}
      {/* ========================================================================= */}
      <section className="relative bg-[#1A3C5E] text-white pt-36 pb-24 overflow-hidden border-b border-white/10">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="container-custom relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Hero Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Organic Trust Pill */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full shadow-2xl">
                <Building2 size={15} className="text-white" />
                <span className="text-xs font-semibold text-white">Established 2018 — Senior CA Partner Firm</span>
                <span className="text-xs text-slate-300 font-medium">({categoryLabel})</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-bold text-white leading-[1.2] tracking-tight">
                {service.name} Services in India
              </h1>

              {/* Subtitle */}
              <p className="text-[15px] sm:text-base text-slate-200 font-normal leading-[1.7] max-w-xl mx-auto lg:mx-0">
                {service.description}
              </p>

              {/* Benefit Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200 font-semibold">
                {[
                  '100% Online Paperless Process',
                  'Assigned FCA Chartered Accountant',
                  'Direct Government Portal Filing',
                  'Zero Hidden / Contingent Charges',
                ].map((chip) => (
                  <div
                    key={chip}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl"
                  >
                    <CheckCircle2 size={16} className="text-[#25D366] shrink-0" />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Right Col: Consultation Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="bg-white text-[#0F172A] rounded-[24px] p-7 sm:p-8 shadow-2xl border border-white/40 text-left relative">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0F172A]">Get Started Now</h3>
                    <p className="text-xs text-[#64748B] font-medium">Fast &amp; Transparent Execution</p>
                  </div>
                  <span className="badge-chip badge-chip-navy text-xs font-bold shadow-2xs">
                    Free Consultation
                  </span>
                </div>

                {isFormDone ? (
                  <div className="bg-[#ECFDF5] border border-[#D1FAE5] p-6 rounded-[16px] text-center space-y-3">
                    <CheckCircle2 size={40} className="text-[#059669] mx-auto animate-bounce" />
                    <h4 className="text-[16px] font-bold text-[#0F172A]">Consultation Requested!</h4>
                    <p className="text-xs text-[#334155] leading-relaxed font-normal">
                      Our Senior Chartered Accountant will call you on <strong>{formData.phone}</strong> within 5 minutes to guide you on {service.name}.
                    </p>
                    <button
                      onClick={() => setIsFormDone(false)}
                      className="text-xs text-[#1A3C5E] font-bold hover:underline pt-2 cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setIsFormDone(true); }} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input-custom text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] mb-1">Mobile Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="9581880088"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="form-input-custom text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] mb-1">Entity Structure</label>
                        <select
                          value={formData.entityType}
                          onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                          className="form-input-custom text-xs"
                        >
                          <option value="Proprietorship">Proprietorship</option>
                          <option value="Partnership">Partnership Firm</option>
                          <option value="Pvt Ltd">Private Limited</option>
                          <option value="LLP">LLP Entity</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn-cta-primary w-full py-3.5 text-xs font-bold rounded-full justify-center shadow-md cursor-pointer"
                    >
                      Claim Free Expert Consultation <ArrowRight size={15} />
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-[#64748B] font-medium pt-2 border-t border-slate-100">
                      <span className="flex items-center gap-1.5"><Lock size={13} className="text-[#059669]" /> 100% Paperless</span>
                      <span className="flex items-center gap-1.5"><BadgeCheck size={13} className="text-[#1A3C5E]" /> Direct CA Advisory</span>
                    </div>
                  </form>
                )}

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ORIGINAL STICKY NAV BAR */}
      {/* ========================================================================= */}
      <nav className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-lg border-b border-[#E2E8F0] shadow-xs">
        <div className="container-custom max-w-5xl mx-auto overflow-x-auto scrollbar-none py-3">
          <div className="flex items-center justify-center gap-2 min-w-max">
            {[
              { id: 'overview', label: 'Key Overview' },
              { id: 'benefits', label: 'Key Benefits' },
              { id: 'documents', label: 'Documents Needed' },
              { id: 'steps', label: 'Step-by-Step Process' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPillDynamic"
                      className="absolute inset-0 bg-[#1A3C5E] rounded-full shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. ORIGINAL TABBED CONTENT DISPLAY (SIMPLE POINT-WISE FORMAT WITH NO BOX WRAPPERS) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-custom max-w-5xl mx-auto space-y-12">

          {/* 3A. OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                  <Sparkles size={13} /> KEY POINTS OVERVIEW
                </span>
                <h2 className="text-[28px] font-bold text-[#0F172A]">
                  What is {service.name}?
                </h2>
                <p className="text-[#475569] text-[15px] mt-2 font-normal">
                  Essential statutory guidelines and procedural highlights presented in direct bullet points.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm">
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#334155] font-semibold divide-y divide-slate-100">
                  {[
                    `Official Government Certificate: Issuance of authentic statutory registration for ${service.name} directly from government portals.`,
                    '100% Paperless Execution: Entire process completed online with self-declaration document uploads and mobile OTP validation.',
                    'Senior CA Supervision: Scrutiny by FCA Chartered Accountants & FCS Company Secretaries to eliminate rejections.',
                    'Zero Penalty Guarantee: Timely filing to protect your business against statutory late fees, interest, or disqualifications.',
                    'Lifetime Legal Vault Access: Permanent digital storage of your certificates, deeds, and statutory receipts.',
                  ].map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 pt-3.5 first:pt-0">
                      <CheckCircle2 size={18} className="text-[#059669] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 3B. KEY BENEFITS */}
          {activeTab === 'benefits' && (
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                  <Sparkles size={13} /> STATUTORY ADVANTAGES
                </span>
                <h2 className="text-[28px] font-bold text-[#0F172A]">
                  Key Benefits of {service.name}
                </h2>
                <p className="text-[#475569] text-[15px] mt-2 font-normal">
                  Unlock statutory protection, priority credit lines, tax exemptions, and government procurement eligibility.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm">
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#334155] font-semibold divide-y divide-slate-100">
                  {keyBenefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 pt-3.5 first:pt-0">
                      <CheckCircle2 size={18} className="text-[#059669] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#0F172A] block">{b.title}</span>
                        <span className="text-xs text-[#475569] font-normal block mt-0.5">{b.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 3C. DOCUMENTS NEEDED */}
          {activeTab === 'documents' && (
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                  <FileText size={13} /> CHECKLIST
                </span>
                <h2 className="text-[28px] font-bold text-[#0F172A]">
                  Documents Required for {service.name}
                </h2>
                <p className="text-[#475569] text-[15px] mt-2 font-normal">
                  100% digital upload — zero physical paperwork or notary visits needed.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm">
                <ol className="space-y-3.5 text-xs sm:text-sm text-[#334155] font-semibold divide-y divide-slate-100">
                  {docsToDisplay.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 pt-3.5 first:pt-0">
                      <span className="w-6 h-6 rounded-full bg-[#1A3C5E] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <span className="text-sm font-bold text-[#0F172A] block">{doc.title}</span>
                        <span className="text-xs text-[#64748B] font-normal mt-0.5 block">{doc.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {/* 3D. STEP-BY-STEP PROCESS */}
          {activeTab === 'steps' && (
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                  <Sparkles size={13} /> STEP-BY-STEP WORKFLOW
                </span>
                <h2 className="text-[28px] font-bold text-[#0F172A]">
                  Step-by-Step {service.name} Flow
                </h2>
                <p className="text-[#475569] text-[15px] mt-2 font-normal">
                  Simple online steps from document collection to official government certificate allotment.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm">
                <ol className="space-y-4 text-xs sm:text-sm text-[#334155] font-semibold divide-y divide-slate-100">
                  {steps.map((step) => (
                    <li key={step.step} className="flex items-start gap-3.5 pt-4 first:pt-0">
                      <div className="w-8 h-8 rounded-[8px] bg-[#1A3C5E] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#0F172A]">{step.title}</h4>
                        <p className="text-xs text-[#475569] font-normal leading-relaxed mt-0.5">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ORIGINAL FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-white border-b border-[#E2E8F0]">
          <div className="container-custom max-w-4xl mx-auto space-y-10">
            
            <div className="text-center">
              <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                FAQ KNOWLEDGE HUB
              </span>
              <h2 className="text-[28px] font-bold text-[#0F172A]">
                Frequently Asked Questions — {service.name}
              </h2>
            </div>

            <div className="relative max-w-md mx-auto">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                placeholder={`Search ${service.name} questions...`}
                value={faqQuery}
                onChange={(e) => setFaqQuery(e.target.value)}
                className="form-input-custom pl-11 text-xs"
              />
            </div>

            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.question} className="bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0] overflow-hidden transition-all">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-[#0F172A] hover:text-[#1A3C5E] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={18} className={`transform transition-transform ${isOpen ? 'rotate-180 text-[#1A3C5E]' : 'text-[#64748B]'}`} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed font-normal border-t border-[#E2E8F0] pt-3"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. ORIGINAL BOTTOM EXECUTIVE CALLOUT BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="bg-[#1A3C5E] text-white rounded-[24px] p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
              <Sparkles size={14} /> ESTABLISHED 2018 — OM ASSOCIATES
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
              Ready to Get Started with {service.name}?
            </h2>

            <p className="text-[15px] text-slate-200 max-w-xl mx-auto font-normal">
              Talk directly with senior Chartered Accountants and Legal Experts in Hyderabad with zero obligation.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <a
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-[#1A3C5E] hover:bg-slate-100 text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall size={16} /> Call Senior CA Partner 9581880088
              </a>

              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon size={18} /> WhatsApp Advisory
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
