'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, Award, CheckCircle2, Clock, Calendar, Building2 } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { contactInfo } from '@/data/navigation';

export default function ExpertGuidanceCTA() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden" id="expert-advisory">
      <div className="container-custom relative z-10">
        
        {/* KokonutUI / Shadcn Executive Light Bento Card */}
        <div className="bg-white rounded-[24px] p-8 sm:p-12 lg:p-14 text-[#0F172A] shadow-xl relative overflow-hidden border border-slate-200/90">
          
          {/* Accent Glow Circle */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A3C5E]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-[58%_42%] gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Content & Button Suite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-7"
            >
              {/* Top Pill Badge */}
              <div className="badge-chip badge-chip-navy text-xs font-extrabold shadow-2xs">
                <Award size={15} /> Established 2018 — OM Associates
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0F172A] leading-tight tracking-tight">
                Senior CA &amp; Legal Advisory for Growing Enterprises
              </h2>

              {/* Detailed Description */}
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed font-normal">
                Every single ROC filing, GST registration, trademark defense, and legal agreement at <strong className="text-[#0F172A] font-bold">OM Associates</strong> is <span className="text-[#1A3C5E] font-bold">manually audited and executed</span> by seasoned Chartered Accountants operating as a single unified holding firm.
              </p>

              {/* 3 Key Pillars */}
              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0F172A] font-bold">100% Manual Document Audit:</strong> Direct personal scrutiny by FCA &amp; FCS partners for zero query rejections.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0F172A] font-bold">Senior CA Partner Integrity:</strong> Dedicated in-house compliance desk for seamless end-to-end accountability.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0F172A] font-bold">Direct Senior Partner Access:</strong> Personal helpline to your assigned advisor via 9581880088.</span>
                </div>
              </div>

              {/* Button Suite */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="btn-cta-primary text-xs sm:text-sm font-bold py-3.5 px-7 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <Phone size={16} /> Call Senior CA Partner
                </a>

                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-whatsapp text-xs sm:text-sm font-bold py-3.5 px-7 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <WhatsAppIcon size={18} /> WhatsApp Advisory
                </a>

                <Link
                  href="/contact-us"
                  className="bg-slate-100 text-[#0F172A] hover:bg-slate-200 border border-slate-200/80 text-xs sm:text-sm font-bold py-3.5 px-7 rounded-full transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar size={16} /> Schedule 1-on-1 Slot
                </Link>
              </div>
            </motion.div>

            {/* Right Column: High-Skill KokonutUI Advisory Desk Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1A3C5E] text-white rounded-[20px] p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center gap-4 border-b border-white/15 pb-5">
                <div className="w-16 h-16 rounded-[14px] bg-white text-[#1A3C5E] flex flex-col items-center justify-center font-black shadow-lg shrink-0">
                  <span className="text-xl leading-none">2018</span>
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#1A3C5E]">Est.</span>
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-white leading-snug">OM Associates Desk</h4>
                  <p className="text-xs text-sky-300 font-bold flex items-center gap-1.5 mt-0.5">
                    <Building2 size={14} /> Senior CA Partner Firm
                  </p>
                </div>
              </div>

              {/* 2 Stat Tiles */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white/10 p-3.5 rounded-[12px] border border-white/15">
                  <div className="text-xl sm:text-2xl font-black text-white">1,000+</div>
                  <div className="text-[11px] text-slate-200 font-semibold mt-0.5">Corporate Clients</div>
                </div>
                <div className="bg-white/10 p-3.5 rounded-[12px] border border-white/15">
                  <div className="text-xl sm:text-2xl font-black text-[#10B981]">99.8%</div>
                  <div className="text-[11px] text-slate-200 font-semibold mt-0.5">First-Time Approvals</div>
                </div>
              </div>

              {/* SLA & Guarantee Indicators */}
              <div className="space-y-2.5 text-xs text-slate-200 font-medium">
                <div className="flex items-center justify-between p-3 rounded-[10px] bg-white/10 border border-white/15">
                  <span className="flex items-center gap-2"><Clock size={14} className="text-sky-300" /> Response SLA:</span>
                  <span className="font-bold text-white">Within 5 Minutes</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-[10px] bg-white/10 border border-white/15">
                  <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#10B981]" /> Guarantee:</span>
                  <span className="font-bold text-[#10B981]">100% On-Time Compliance</span>
                </div>
              </div>

              <Link href="/contact-us" className="bg-white text-[#1A3C5E] hover:bg-slate-100 w-full text-xs font-bold py-3.5 justify-center rounded-full shadow-md transition-all flex items-center gap-2">
                Get Custom Fee Quotation <ArrowRight size={15} />
              </Link>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
