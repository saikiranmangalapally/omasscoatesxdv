'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ShieldAlert, Clock, ArrowRight, CheckCircle2, AlertTriangle, Sparkles, FileText, BellRing } from 'lucide-react';

interface Deadline {
  id: string;
  category: 'gst' | 'roc' | 'tax' | 'ip';
  title: string;
  dueDate: string;
  dueDay: number; // day of current/next month
  authority: string;
  penaltyInfo: string;
  riskLevel: 'High' | 'Medium' | 'Critical';
  summary: string;
}

const deadlines: Deadline[] = [
  {
    id: 'gstr-3b',
    category: 'gst',
    title: 'GSTR-3B Monthly Return Filing',
    dueDate: '20th of Every Month',
    dueDay: 20,
    authority: 'GSTN / CBIC',
    penaltyInfo: '₹50/day late fee + 18% p.a. interest',
    riskLevel: 'Critical',
    summary: 'Mandatory summary return filing for all registered GST taxpayers to declare tax liability and claim Input Tax Credit (ITC).'
  },
  {
    id: 'gstr-1',
    category: 'gst',
    title: 'GSTR-1 Outward Supplies Filing',
    dueDate: '11th of Every Month',
    dueDay: 11,
    authority: 'GSTN / CBIC',
    penaltyInfo: '₹200/day late fee on portal',
    riskLevel: 'High',
    summary: 'Filing details of outward sales/services to pass ITC seamlessly to B2B buyers.'
  },
  {
    id: 'dir-3-kyc',
    category: 'roc',
    title: 'MCA DIR-3 KYC Annual Director Verification',
    dueDate: '30th September',
    dueDay: 30,
    authority: 'Ministry of Corporate Affairs (MCA)',
    penaltyInfo: 'Flat ₹5,000 penalty per Director after due date',
    riskLevel: 'Critical',
    summary: 'Mandatory annual e-KYC for all DIN holders to prevent DIN deactivation.'
  },
  {
    id: 'aoc-4',
    category: 'roc',
    title: 'AOC-4 Financial Statements Filing',
    dueDate: '30 Days from AGM',
    dueDay: 30,
    authority: 'ROC / MCA',
    penaltyInfo: '₹100/day per company + ₹100/day per director',
    riskLevel: 'High',
    summary: 'Filing balance sheet, P&L, and auditor report with ROC.'
  },
  {
    id: 'tds-q1',
    category: 'tax',
    title: 'Quarterly TDS Return Filing (Form 26Q)',
    dueDate: '31st July / Oct / Jan / May',
    dueDay: 31,
    authority: 'Income Tax Department',
    penaltyInfo: '₹200/day under Sec 234E + 1.5% interest',
    riskLevel: 'High',
    summary: 'Quarterly filing of tax deducted at source on vendor payments, salaries, and rents.'
  },
  {
    id: 'trademark-renewal',
    category: 'ip',
    title: 'Trademark 10-Year Renewal Notice',
    dueDate: '6 Months before Expiry',
    dueDay: 15,
    authority: 'IP India / CGPDTM',
    penaltyInfo: 'Surcharge & risk of trademark abandonment',
    riskLevel: 'Medium',
    summary: 'Maintain exclusive brand protection rights across class categories.'
  }
];

const categoryTabs = [
  { id: 'all', label: 'All Statutory Deadlines' },
  { id: 'gst', label: 'GST Filings' },
  { id: 'roc', label: 'MCA ROC Compliance' },
  { id: 'tax', label: 'Income Tax & TDS' }
];

export default function ComplianceDeadlineWidget() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'gst' | 'roc' | 'tax'>('all');
  const [selectedDeadline, setSelectedDeadline] = useState<Deadline>(deadlines[0]);
  const [daysRemaining, setDaysRemaining] = useState<number>(12);

  // Dynamic countdown logic
  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDate();
    const targetDay = selectedDeadline.dueDay;
    let remaining = targetDay - currentDay;
    if (remaining <= 0) remaining += 30; // rollover to next month cycle
    setDaysRemaining(remaining);
  }, [selectedDeadline]);

  const filteredDeadlines = activeCategory === 'all'
    ? deadlines
    : deadlines.filter(d => d.category === activeCategory);

  return (
    <section className="py-16 bg-[#FAF8F5] relative overflow-hidden border-y border-slate-200/80">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1A3C5E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A3C5E]/10 text-[#1A3C5E] text-xs font-extrabold uppercase tracking-wider mb-3 border border-[#1A3C5E]/20">
              <BellRing size={14} className="text-[#1A3C5E] animate-pulse" /> Statutory Compliance Radar
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Live Statutory Deadlines &amp; Penalty Safeguard
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl font-normal leading-relaxed">
              Track upcoming Indian MCA, GST, and Income Tax deadlines. Never pay late filing penalties again with OM Associates.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-full border border-slate-200 shadow-xs self-start md:self-auto">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#1A3C5E] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid: Left List + Right Detail Radar Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Deadline Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {filteredDeadlines.map((item) => {
              const isSelected = selectedDeadline.id === item.id;
              return (
                <motion.div
                  key={item.id}
                  onClick={() => setSelectedDeadline(item)}
                  whileHover={{ scale: 1.005, x: 3 }}
                  className={`p-5 rounded-[16px] border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-white border-[#1A3C5E] shadow-md ring-2 ring-[#1A3C5E]/10'
                      : 'bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      item.riskLevel === 'Critical'
                        ? 'bg-red-50 text-red-600'
                        : item.riskLevel === 'High'
                        ? 'bg-amber-50 text-amber-600'
                        : 'bg-blue-50 text-[#1A3C5E]'
                    }`}>
                      {item.riskLevel === 'Critical' ? (
                        <AlertTriangle size={18} />
                      ) : (
                        <Clock size={18} />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs font-bold text-[#1A3C5E] uppercase tracking-wide">
                          {item.authority}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.riskLevel === 'Critical'
                            ? 'bg-red-100 text-red-700'
                            : item.riskLevel === 'High'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {item.riskLevel} Priority
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#0F172A]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 font-medium">
                        Due Date: <strong className="text-slate-800">{item.dueDate}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs text-slate-400 font-medium block mb-1">Status</span>
                    <span className={`inline-flex items-center gap-1 text-xs font-extrabold px-3 py-1.5 rounded-full ${
                      isSelected
                        ? 'bg-[#1A3C5E] text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      Inspect Radar <ArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Live Countdown Radar & Penalty Shield */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDeadline.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-[#0F172A] text-white rounded-[22px] p-7 sm:p-8 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b50_1px,transparent_1px),linear-gradient(to_bottom,#1e293b50_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFC107] bg-[#FFC107]/10 border border-[#FFC107]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      <Sparkles size={13} /> Active Compliance Alert
                    </span>
                    <span className="text-xs text-slate-400 font-mono">ID: {selectedDeadline.id.toUpperCase()}</span>
                  </div>

                  {/* Deadline Name */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">
                    {selectedDeadline.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    {selectedDeadline.summary}
                  </p>

                  {/* Countdown Metric Box */}
                  <div className="bg-white/5 border border-white/10 rounded-[16px] p-5 mb-6 text-center backdrop-blur-md">
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">
                      Estimated Days Remaining Until Filing Window
                    </span>
                    <div className="flex items-baseline justify-center gap-2 my-1">
                      <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-amber-300">
                        {daysRemaining}
                      </span>
                      <span className="text-base font-bold text-slate-300">Days</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium flex items-center justify-center gap-1 mt-2">
                      <CheckCircle2 size={13} /> Zero Delay Protection via OM CA Desk
                    </span>
                  </div>

                  {/* Penalty Breakdown Box */}
                  <div className="bg-red-500/10 border border-red-500/20 rounded-[14px] p-4 mb-6 text-left">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-300 mb-1">
                      <ShieldAlert size={15} /> Non-Filing Penalty Risk
                    </div>
                    <p className="text-xs text-red-200/90 font-medium leading-relaxed">
                      {selectedDeadline.penaltyInfo}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="relative z-10 pt-2 border-t border-slate-800">
                  <Link
                    href="/contact-us"
                    className="w-full py-3.5 px-5 bg-gradient-to-r from-[#1A3C5E] to-blue-700 hover:from-blue-700 hover:to-[#1A3C5E] text-white rounded-full text-xs font-bold shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>File With Senior CA &amp; Lock Zero Penalty</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
