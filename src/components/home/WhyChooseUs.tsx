'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Lock, ArrowRight, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';

const whyChooseFeatures = [
  {
    icon: ShieldCheck,
    title: '100% Tax & ROC Compliance Guarantee',
    desc: 'Expert CA & CS driven processing with complete statutory protection across all government portals.',
    highlights: ['Zero Delay Filings', 'MCA & GST Verified', 'Error-Free Scrutiny'],
    chip: '100% Guaranteed',
    chipBg: 'badge-chip-navy',
  },
  {
    icon: Award,
    title: 'Established 2018 — Corporate Trust',
    desc: 'Over 1,000 satisfied corporate clients, MSMEs, and fast-growing startups supported across India.',
    highlights: ['Established 2018', 'Senior CA Partner Firm', 'Senior CA Partner Team'],
    chip: 'Established 2018',
    chipBg: 'badge-chip-blue',
  },
  {
    icon: Users,
    title: 'Dedicated CA & CS Account Desk',
    desc: 'Direct access to your assigned Chartered Accountant with real-time status updates and phone support.',
    highlights: ['1-on-1 CA Partner', 'Direct Helpline', '5-Min Callback Response'],
    chip: '1-on-1 CA Partner',
    chipBg: 'badge-chip-green',
  },
  {
    icon: Lock,
    title: 'Zero Penalty Protection Guarantee',
    desc: 'Assigned senior partners take direct responsibility for on-time statutory submissions with zero fees.',
    highlights: ['Accountability Protection', 'Complete Confidentiality', '100% Secure Vault'],
    chip: 'Zero Penalty',
    chipBg: 'badge-chip-navy',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden" id="why-choose-us">
      
      {/* Ambient Mesh Background Glow */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#1A3C5E]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-chip badge-chip-navy mb-3">
            <Sparkles size={13} /> WHY CHOOSE OM ASSOCIATES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
            India&apos;s Preferred Corporate Legal &amp; Financial Advisory Platform
          </h2>
          <p className="text-slate-600 text-[15px] mt-3 font-normal leading-relaxed">
            Taking complete ownership of business registration, tax filings, and legal compliance so you can focus 100% on scaling your business.
          </p>
        </div>

        {/* 4-Column High-Skill Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {whyChooseFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-card-shadcn rounded-[20px] p-7 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#1A3C5E] transition-all duration-300 flex flex-col justify-between group bento-card-hover relative overflow-hidden"
              >
                <div>
                  {/* Icon & Category Chip Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-[14px] bg-[#EFF6FF] text-[#1A3C5E] flex items-center justify-center group-hover:bg-[#1A3C5E] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Icon size={24} />
                    </div>
                    <span className={`badge-chip ${item.chipBg} text-[10px] font-bold uppercase`}>
                      {item.chip}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2.5 group-hover:text-[#1A3C5E] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 border-t border-slate-200/80 pt-4 text-xs font-semibold text-slate-700">
                    {item.highlights.map((point) => (
                      <div key={point} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-[#10B981] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Callout Banner (Hero Section Bg Color #1A3C5E) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#1A3C5E] rounded-[22px] p-8 lg:p-10 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/15 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Overlay */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5 shadow-sm border border-white/20 backdrop-blur-md">
              <Sparkles size={13} /> ESTABLISHED 2018
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              Ready to Accelerate Your Corporate Compliance?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl font-normal">
              Talk directly with senior Chartered Accountants and Corporate Lawyers with zero obligation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0 relative z-10">
            <Link href="/contact-us" className="bg-white text-[#1A3C5E] hover:bg-slate-100 text-xs font-bold py-3.5 px-7 rounded-full shadow-lg transition-all flex items-center gap-2">
              <PhoneCall size={14} /> Get Free CA Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
