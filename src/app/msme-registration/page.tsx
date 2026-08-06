'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, ShieldCheck, CheckCircle2, Sparkles, ArrowRight,
  PhoneCall, FileText, Zap, DollarSign, Clock,
  ChevronDown, Building2, Calculator, Search, BadgeCheck, Lock,
  TrendingUp, Shield, Activity
} from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { contactInfo } from '@/data/navigation';

// Official MSMED Act Classification Criteria
const classificationData = [
  {
    type: 'Micro',
    badge: 'Micro Enterprise',
    investment: '≤ ₹1 Crore',
    turnover: '≤ ₹5 Crore',
    bg: 'bg-emerald-50/90 border-emerald-300 text-[#1A3C5E]',
    dot: 'bg-[#059669]',
  },
  {
    type: 'Small',
    badge: 'Small Enterprise',
    investment: '≤ ₹10 Crore',
    turnover: '≤ ₹50 Crore',
    bg: 'bg-sky-50/90 border-sky-300 text-[#1A3C5E]',
    dot: 'bg-[#0284C7]',
  },
  {
    type: 'Medium',
    badge: 'Medium Enterprise',
    investment: '≤ ₹50 Crore',
    turnover: '≤ ₹250 Crore',
    bg: 'bg-indigo-50/90 border-indigo-300 text-[#1A3C5E]',
    dot: 'bg-[#7E22CE]',
  },
];

// Key Kanakkupillai MSME Incentives
const keyBenefits = [
  {
    id: 'loans',
    icon: DollarSign,
    title: 'Collateral-Free Bank Loans (CGTMSE)',
    desc: 'Access collateral-free business loans up to ₹2 Crores under the CGTMSE credit guarantee scheme with zero third-party collateral.',
    stat: 'Up to ₹2 Crores',
  },
  {
    id: 'interest',
    icon: Zap,
    title: '1.5% Interest Rate Subvention',
    desc: 'Enjoy 1% to 1.5% annual interest rate rebate on working capital credit lines, cash credit (CC) accounts, and bank overdrafts.',
    stat: '1.5% Subvention',
  },
  {
    id: 'patent',
    icon: ShieldCheck,
    title: '50% Subsidy on Patent & Trademarks',
    desc: 'Reimburse 50% of official government filing fees when registering Patents, Trademarks, and Industrial Designs.',
    stat: '50% Off IP Fees',
  },
  {
    id: 'samadhaan',
    icon: Clock,
    title: 'Delayed Payment Protection (MSME Samadhaan)',
    desc: 'Statutory mandate requiring buyers to settle invoices within 45 days or pay compound interest penalty at 3x the RBI bank rate.',
    stat: '45-Day Buyer SLA',
  },
  {
    id: 'tender',
    icon: Award,
    title: '100% Waiver on EMD in Govt Tenders',
    desc: 'Exemption from submitting Earnest Money Deposit (EMD) and tender document costs for Central Govt & PSU procurements.',
    stat: 'Zero EMD Deposit',
  },
  {
    id: 'subsidies',
    icon: Building2,
    title: 'Electricity Concessions & Barcode Subsidies',
    desc: 'Claim annual electricity bill concessions for manufacturing units and up to 75% GS1 barcode registration fee subsidies.',
    stat: '75% Barcode Rebate',
  },
];

// 8-Step Fast-Track Udyam Registration Flow
const steps = [
  { step: '01', title: 'Submit Details & Aadhaar', desc: 'Provide basic enterprise details and applicant Aadhaar number linked with active mobile.' },
  { step: '02', title: 'Aadhaar Mobile OTP Verification', desc: 'Instant OTP validation to confirm applicant identity and unlock government portal.' },
  { step: '03', title: 'PAN & GSTIN Data Retrieval', desc: 'Automated retrieval of tax identification records and entity classification data.' },
  { step: '04', title: 'Select NIC Business Activity Code', desc: 'Choose National Industrial Classification (NIC) code matching manufacturing or service trade.' },
  { step: '05', title: 'Investment & Turnover Self-Declaration', desc: 'Confirm plant & machinery investment figures and annual turnover limits.' },
  { step: '06', title: 'Senior CA Partner Pre-Audit', desc: 'FCA Chartered Accountant audits application fields to guarantee zero rejection rate.' },
  { step: '07', title: 'Official Govt Portal Submission', desc: 'Direct electronic submission to Udyam portal generating unique 16-digit URN.' },
  { step: '08', title: 'Instant Certificate Issuance (URC)', desc: 'Download official Udyam Registration Certificate in digital PDF format via email & WhatsApp.' },
];

// Documents Checklist
const documents = [
  { title: 'Aadhaar Card of Proprietor / Partner / Director', desc: 'Must be linked with an active mobile number for instant OTP authentication.' },
  { title: 'PAN Card of Business / Entrepreneur', desc: 'Personal PAN for Proprietorship; Entity PAN for Partnership / Pvt Ltd / LLP.' },
  { title: 'GSTIN Registration Certificate (if applicable)', desc: 'Mandatory if business turnover exceeds statutory GST threshold limits.' },
  { title: 'Commercial Bank Account & IFSC Code', desc: 'Cancelled cheque or recent bank statement copy with clear IFSC code.' },
  { title: 'Registered Business Address Proof', desc: 'Electricity bill, rent agreement, or NOC from property owner.' },
  { title: 'Investment & Turnover Data', desc: 'Plant & machinery purchase bills or CA certified turnover summary.' },
];

// FAQs
const faqs = [
  {
    question: 'Is Aadhaar mandatory for MSME / Udyam Registration?',
    answer: 'Yes. The Aadhaar card of the proprietor, managing partner, or authorized director linked with an active mobile number is mandatory for OTP verification.',
  },
  {
    question: 'What is the difference between Udyog Aadhaar and Udyam Registration?',
    answer: 'Udyam Registration replaced Udyog Aadhaar on July 1, 2020. All legacy Udyog Aadhaar registrations must migrate to the new Udyam portal to retain benefits.',
  },
  {
    question: 'Do I need to renew my Udyam Registration certificate every year?',
    answer: 'No. Udyam Registration has lifetime validity. However, investment and turnover figures update automatically via GSTIN and Income Tax Return linkages.',
  },
  {
    question: 'What are the main financial benefits of MSME registration?',
    answer: 'Registered MSMEs get access to collateral-free bank loans (CGTMSE), 1% to 1.5% interest rate rebates, 50% patent/trademark fee subsidies, and protection against delayed payments via MSME Samadhaan.',
  },
  {
    question: 'Can trading businesses register under MSME / Udyam?',
    answer: 'Yes! The Ministry of MSME updated guidelines to allow retail and wholesale traders to register under Udyam for priority sector lending benefits.',
  },
];

import type { Variants } from 'framer-motion';

// Motion Container Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function AnimatedGlassMSMEPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'calculator' | 'documents' | 'steps'>('overview');
  const [investment, setInvestment] = useState<number>(50); // in Lakhs
  const [turnover, setTurnover] = useState<number>(200); // in Lakhs
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqQuery, setFaqQuery] = useState('');
  
  // Interactive Calculator Logic
  const calculateCategory = () => {
    const invCr = investment / 100;
    const turnCr = turnover / 100;
    if (invCr <= 1 && turnCr <= 5) return { category: 'Micro Enterprise', loan: 'Up to ₹2 Crores (CGTMSE)', ipSubsidy: '50% Fee Subsidy', interest: '1.5% Subvention', color: 'text-[#1A3C5E] bg-[#EFF6FF] border-[#BFDBFE]' };
    if (invCr <= 10 && turnCr <= 50) return { category: 'Small Enterprise', loan: 'Up to ₹5 Crores Credit Line', ipSubsidy: '50% Fee Subsidy', interest: '1.0% Subvention', color: 'text-[#059669] bg-[#F0FDF4] border-[#BBF7D0]' };
    return { category: 'Medium Enterprise', loan: 'Priority Sector Credit Line', ipSubsidy: '50% Fee Subsidy', interest: '0.75% Subvention', color: 'text-[#7E22CE] bg-[#FAF5FF] border-[#E9D5FF]' };
  };

  const currentCalc = calculateCategory();

  // Lead Form State
  const [formData, setFormData] = useState({ name: '', phone: '', entityType: 'Proprietorship' });
  const [isFormDone, setIsFormDone] = useState(false);

  const filteredFaqs = faqs.filter(f => f.question.toLowerCase().includes(faqQuery.toLowerCase()) || f.answer.toLowerCase().includes(faqQuery.toLowerCase()));

  return (
    <main className="bg-white min-h-screen pt-24 overflow-hidden">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (ANIMATED GLASS STRUCTURE + FRAMER MOTION) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#1A3C5E] text-white pt-16 pb-28 overflow-hidden">
        
        {/* Animated Radial Ambient Glows */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-sky-500/20 rounded-full blur-[160px] pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-[130px] pointer-events-none"
        />

        <div className="container-custom relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Animated Hero Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Organic Trust Pill */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full shadow-2xl"
              >
                <Building2 size={15} className="text-white" />
                <span className="text-xs font-semibold text-white">Established 2018 — Senior CA Partner Firm</span>
                <span className="text-xs text-slate-300 font-medium">(1,000+ MSMEs Registered)</span>
              </motion.div>

              {/* Title with Framer Motion */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-[50px] font-bold text-white leading-[1.2] tracking-tight"
              >
                Online MSME / Udyam Registration in India
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[15px] sm:text-base text-slate-200 font-normal leading-[1.7] max-w-xl mx-auto lg:mx-0"
              >
                Get your official 16-digit Udyam Registration Certificate in 1-2 working days. 100% paperless digital verification managed end-to-end by senior FCA Chartered Accountants.
              </motion.p>

              {/* Benefit Chips with Hover Motion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200 font-semibold"
              >
                {[
                  'Collateral-Free Bank Loans up to ₹2 Cr',
                  '1.5% Annual Interest Rate Subvention',
                  '50% IP Patent & Trademark Fee Subsidy',
                  '100% Waiver on EMD Govt Tenders',
                ].map((chip, idx) => (
                  <motion.div
                    key={chip}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 p-2.5 rounded-xl transition-all"
                  >
                    <CheckCircle2 size={16} className="text-[#25D366] shrink-0" />
                    <span>{chip}</span>
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>

            {/* Right Col: Translucent Glass Card (shadcn / Kokonut style) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/95 backdrop-blur-2xl text-[#0F172A] rounded-[24px] p-7 sm:p-8 shadow-2xl border border-white/40 text-left relative">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0F172A]">Get Udyam Certificate</h3>
                    <p className="text-xs text-[#64748B] font-medium">Fast-Track 24-48 Hour Allotment</p>
                  </div>
                  <span className="badge-chip badge-chip-navy text-xs font-bold shadow-2xs">
                    ₹999 All-In
                  </span>
                </div>

                {isFormDone ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#ECFDF5] border border-[#D1FAE5] p-6 rounded-[16px] text-center space-y-3"
                  >
                    <CheckCircle2 size={40} className="text-[#059669] mx-auto animate-bounce" />
                    <h4 className="text-[16px] font-bold text-[#0F172A]">Application Initiated!</h4>
                    <p className="text-xs text-[#334155] leading-relaxed font-normal">
                      Our Senior Chartered Accountant will call you on <strong>{formData.phone}</strong> within 5 minutes to verify your Aadhaar details.
                    </p>
                    <button
                      onClick={() => setIsFormDone(false)}
                      className="text-xs text-[#1A3C5E] font-bold hover:underline pt-2 cursor-pointer"
                    >
                      Submit Another Application
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setIsFormDone(true); }} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter entrepreneur name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input-custom text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#0F172A] mb-1">Mobile (Aadhaar Linked)</label>
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
                        <label className="block text-xs font-bold text-[#0F172A] mb-1">Business Structure</label>
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

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn-cta-primary w-full py-3.5 text-xs font-bold rounded-full justify-center shadow-md cursor-pointer"
                    >
                      Apply for Udyam Certificate Now <ArrowRight size={15} />
                    </motion.button>

                    <div className="flex items-center justify-between text-[11px] text-[#64748B] font-medium pt-2 border-t border-slate-100">
                      <span className="flex items-center gap-1.5"><Lock size={13} className="text-[#059669]" /> 100% Paperless</span>
                      <span className="flex items-center gap-1.5"><BadgeCheck size={13} className="text-[#1A3C5E]" /> Direct Govt Portal</span>
                    </div>
                  </form>
                )}

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STICKY NAV BAR WITH ANIMATED SLIDER (KokonutUI / Motion.dev Style) */}
      {/* ========================================================================= */}
      <nav className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-lg border-b border-[#E2E8F0] shadow-xs">
        <div className="container-custom max-w-5xl mx-auto overflow-x-auto scrollbar-none py-3">
          <div className="flex items-center justify-center gap-2 min-w-max">
            {[
              { id: 'overview', label: 'Key Overview' },
              { id: 'benefits', label: 'Government Benefits' },
              { id: 'calculator', label: 'Subsidy Calculator' },
              { id: 'documents', label: 'Documents Needed' },
              { id: 'steps', label: '8-Step Process' },
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
                      layoutId="activeTabPill"
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
      {/* 3. MAIN TABBED CONTENT DISPLAY WITH STAGGERED MOTION & GLASS CARDS */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container-custom max-w-5xl mx-auto space-y-12">

          {/* 3A. OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                  <Sparkles size={13} /> KEY POINTS OVERVIEW
                </span>
                <h2 className="text-[28px] font-bold text-[#0F172A]">
                  What is MSME / Udyam Registration?
                </h2>
                <p className="text-[#475569] text-[15px] mt-2 font-normal">
                  Essential statutory guidelines and official government certificate features presented in direct points.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm">
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#334155] font-semibold divide-y divide-slate-100">
                  {[
                    'Official Government Certificate: Assigns a unique 16-digit Udyam Registration Number (URN) directly from the Ministry of MSME portal.',
                    '100% Digital & Paperless: Complete self-declaration filing with Aadhaar mobile OTP validation — zero physical documentation required.',
                    'Senior CA Supervision: Personal scrutiny by FCA Chartered Accountants to eliminate query rejections or NIC code mismatches.',
                    'Collateral-Free Loan Eligibility: Immediate access to CGTMSE priority bank credit lines up to ₹2 Crores.',
                    'Lifetime Certificate Validity: Permanent validity with automatic annual turnover/investment updates linked via GSTIN & IT Returns.',
                  ].map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 pt-3.5 first:pt-0">
                      <CheckCircle2 size={18} className="text-[#059669] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Gazette Matrix Table */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {classificationData.map((item) => (
                  <motion.div
                    key={item.type}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className={`rounded-[16px] p-6 border ${item.bg} shadow-sm space-y-3 transition-all`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#0F172A]">{item.badge}</span>
                      <span className={`w-2.5 h-2.5 rounded-full ${item.dot} animate-pulse`} />
                    </div>
                    <div className="text-xs space-y-1 font-medium">
                      <p><strong>Investment:</strong> {item.investment}</p>
                      <p><strong>Turnover:</strong> {item.turnover}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* 3B. GOVERNMENT BENEFITS */}
          {activeTab === 'benefits' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                  <Sparkles size={13} /> SCHEMES &amp; SUBSIDIES
                </span>
                <h2 className="text-[28px] font-bold text-[#0F172A]">
                  Key Benefits of MSME / Udyam Registration
                </h2>
                <p className="text-[#475569] text-[15px] mt-2 font-normal">
                  Unlock collateral-free loans, interest subvention, IP subsidies, and tender exemptions.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyBenefits.map((b) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={b.id}
                      variants={itemVariants}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="bg-white/90 backdrop-blur-xl rounded-[18px] p-6 border border-[#E2E8F0] shadow-sm hover:border-[#1A3C5E] transition-all flex flex-col justify-between space-y-4 bento-card-hover"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-[12px] bg-[#EFF6FF] text-[#1A3C5E] flex items-center justify-center font-bold">
                            <Icon size={24} />
                          </div>
                          <span className="badge-chip badge-chip-navy text-[10px] font-bold">
                            {b.stat}
                          </span>
                        </div>
                        <h3 className="text-[16px] font-bold text-[#0F172A] mb-2">{b.title}</h3>
                        <p className="text-xs text-[#475569] leading-relaxed font-normal">{b.desc}</p>
                      </div>
                      <div className="pt-3 border-t border-[#E2E8F0] text-[11px] text-[#059669] font-semibold flex items-center gap-1">
                        <CheckCircle2 size={13} /> Active Government Privilege
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* 3C. CALCULATOR */}
          {activeTab === 'calculator' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                  <Calculator size={13} /> INTERACTIVE CALCULATOR
                </span>
                <h2 className="text-[28px] font-bold text-[#0F172A]">
                  MSME Category &amp; Subsidy Calculator
                </h2>
                <p className="text-[#475569] text-[15px] mt-2 font-normal">
                  Adjust sliders for plant investment and annual turnover to calculate your enterprise classification and privileges.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-xl rounded-[24px] p-8 border border-[#E2E8F0] shadow-xl grid md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#0F172A] mb-2">
                      <span>Plant &amp; Machinery Investment:</span>
                      <span className="text-[#1A3C5E] font-extrabold text-sm">₹{investment} Lakhs</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="5000"
                      step="10"
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1A3C5E]"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
                      <span>₹10 Lakhs</span>
                      <span>₹50 Crores</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#0F172A] mb-2">
                      <span>Annual Business Turnover:</span>
                      <span className="text-[#1A3C5E] font-extrabold text-sm">₹{turnover} Lakhs</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="25000"
                      step="50"
                      value={turnover}
                      onChange={(e) => setTurnover(Number(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1A3C5E]"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
                      <span>₹50 Lakhs</span>
                      <span>₹250 Crores</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 bg-[#F8FAFC]/90 border border-[#E2E8F0] rounded-[16px] p-6 text-center space-y-4 shadow-inner">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Calculated Status</span>
                  
                  <motion.div
                    key={currentCalc.category}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`p-4 rounded-[14px] border ${currentCalc.color} space-y-1 shadow-2xs`}
                  >
                    <h4 className="text-lg font-bold">{currentCalc.category}</h4>
                    <p className="text-xs font-medium">Official Gazette MSMED Classification</p>
                  </motion.div>

                  <div className="space-y-2 text-xs font-semibold text-[#334155] text-left pt-2">
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#E2E8F0]">
                      <span>Loan Eligibility:</span>
                      <span className="text-[#059669] font-bold">{currentCalc.loan}</span>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#E2E8F0]">
                      <span>IP Patent Subsidy:</span>
                      <span className="text-[#1A3C5E] font-bold">{currentCalc.ipSubsidy}</span>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#E2E8F0]">
                      <span>Interest Rebate:</span>
                      <span className="text-[#7E22CE] font-bold">{currentCalc.interest}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}

          {/* 3D. DOCUMENTS NEEDED */}
          {activeTab === 'documents' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                  <FileText size={13} /> CHECKLIST
                </span>
                <h2 className="text-[28px] font-bold text-[#0F172A]">
                  Documents Required for Registration
                </h2>
                <p className="text-[#475569] text-[15px] mt-2 font-normal">
                  100% digital upload — zero physical paperwork or notary visits needed.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm">
                <ol className="space-y-3.5 text-xs sm:text-sm text-[#334155] font-semibold divide-y divide-slate-100">
                  {documents.map((doc, idx) => (
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
              </motion.div>
            </motion.div>
          )}

          {/* 3E. 8-STEP PROCESS */}
          {activeTab === 'steps' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                  <Sparkles size={13} /> STEP-BY-STEP WORKFLOW
                </span>
                <h2 className="text-[28px] font-bold text-[#0F172A]">
                  8-Step Udyam Registration Flow
                </h2>
                <p className="text-[#475569] text-[15px] mt-2 font-normal">
                  Simple online steps from mobile OTP verification to instant Certificate download.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white rounded-[20px] p-8 border border-[#E2E8F0] shadow-sm">
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
              </motion.div>
            </motion.div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FREQUENTLY ASKED QUESTIONS (SHADCN ACCORDION) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="container-custom max-w-4xl mx-auto space-y-10">
          
          <div className="text-center">
            <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
              FAQ KNOWLEDGE HUB
            </span>
            <h2 className="text-[28px] font-bold text-[#0F172A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="relative max-w-md mx-auto">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search Udyam questions..."
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

      {/* ========================================================================= */}
      {/* 5. BOTTOM EXECUTIVE CALLOUT BANNER (GLASS STRIP & HOVER MOTION) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="bg-[#1A3C5E] text-white rounded-[24px] p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden space-y-6"
          >
            <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
              <Sparkles size={14} /> ESTABLISHED 2018 — OM ASSOCIATES
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
              Ready to Register Your Business on the Official Udyam Portal?
            </h2>

            <p className="text-[15px] text-slate-200 max-w-xl mx-auto font-normal">
              Talk directly with senior Chartered Accountants and Legal Experts in Hyderabad with zero obligation.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-[#1A3C5E] hover:bg-slate-100 text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall size={16} /> Call Senior CA Partner 9581880088
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon size={18} /> WhatsApp Advisory
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
