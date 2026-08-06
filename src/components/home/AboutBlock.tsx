'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const inlineBenefits = [
  {
    icon: ShieldCheck,
    title: '100% Statutory Compliance Guarantee',
    desc: 'Expert CA & CS driven processing with zero penalty protection across all government portals.',
  },
  {
    icon: Award,
    title: 'Established in 2018 — Corporate Trust',
    desc: 'Over 1,000 satisfied corporate clients and fast-growing startups supported across India.',
  },
  {
    icon: Users,
    title: 'Dedicated Senior CA Account Desk',
    desc: 'Personalized account manager with real-time MCA & GST application progress tracking.',
  },
];

export default function AboutBlock() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about-om-associates">
      
      {/* Background Soft Mesh Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/5 via-sky-400/5 to-indigo-300/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Section Background Color #1A3C5E Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-[#1A3C5E] text-white rounded-[22px] p-8 lg:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
              
              {/* Subtle Radial Mesh Glow Overlay */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                
                {/* Established Pill Badge */}
                <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-white/20 backdrop-blur-md">
                  <Sparkles size={14} /> Established 2018 — OM Associates
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
                  India&apos;s Trusted Senior CA &amp; Legal Advisory Firm
                </h3>

                <p className="text-[15px] text-slate-200 leading-relaxed font-normal">
                  OM Associates is a senior CA partner professional firm providing end-to-end business incorporation, statutory ROC filings, GST management, and trademark defense.
                </p>

                {/* 3 Stat Counters Grid */}
                <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-3 text-center">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 p-3.5 rounded-[12px] border border-white/15 shadow-2xs backdrop-blur-sm"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-white">1,000+</div>
                    <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Happy Clients</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 p-3.5 rounded-[12px] border border-white/15 shadow-2xs backdrop-blur-sm"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-white">2018</div>
                    <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Established</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 p-3.5 rounded-[12px] border border-white/15 shadow-2xs backdrop-blur-sm"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                    <div className="text-[11px] text-slate-300 font-semibold mt-0.5">In-House CAs</div>
                  </motion.div>
                </div>

              </div>
            </div>

          </motion.div>

          {/* Right Column: Content & Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div>
              <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
                <Sparkles size={13} /> ABOUT OM ASSOCIATES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight tracking-tight mt-1">
                Simplifying Corporate Legalities &amp; Tax Compliance Across India
              </h2>
            </div>

            <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
              OM Associates is a senior CA partner technology-enabled legal and financial advisory firm established in 2018 in Hyderabad, providing end-to-end business registration, monthly GST return filing, trademark registration, and corporate secretarial solutions.
            </p>

            <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
              Our mission is to eliminate bureaucratic hurdles and allow business leaders to focus entirely on growth while our senior CA partners guarantee 100% statutory compliance.
            </p>

            {/* 3 Benefit Rows */}
            <div className="space-y-3.5 pt-2">
              {inlineBenefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 bg-[#F8FAFC] p-4 rounded-[14px] border border-slate-200/80 hover:border-[#1A3C5E] transition-all duration-300 shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-[10px] bg-[#EFF6FF] text-[#1A3C5E] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0F172A]">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5 font-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link href="/about-us" className="btn-cta-navy text-xs font-bold py-3.5 px-7 rounded-full shadow-md hover:shadow-lg">
                Learn More About Our Team <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
