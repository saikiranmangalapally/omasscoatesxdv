'use client';

import { motion } from 'framer-motion';
import { Users, Award, ShieldCheck, Zap } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';

const stats = [
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Happy Clients',
    subLabel: 'Startups & SMEs across India',
  },
  {
    icon: Award,
    value: 2018,
    suffix: '',
    label: 'Established Year',
    subLabel: 'Senior CA Partner Firm',
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: '%',
    label: 'In-House CAs',
    subLabel: 'FCA & FCS Certified',
  },
  {
    icon: Zap,
    value: 99.9,
    suffix: '%',
    label: 'Approval Rate',
    subLabel: 'Zero Penalty Guarantee',
  },
];

export default function StatsCounter() {
  return (
    <section className="py-10 bg-[#F8FAFC] border-y border-slate-200/80 relative overflow-hidden" id="stats-overview">
      {/* Background Subtle Radial Glow & Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1A3C5E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Lightweight 1-Row Horizontal Stat Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="relative flex items-center gap-3.5 p-3 rounded-[14px] bg-white border border-slate-200/70 shadow-2xs group hover:border-[#1A3C5E] transition-all"
              >
                {/* Compact Icon */}
                <div className="w-10 h-10 rounded-[10px] bg-[#EFF6FF] text-[#1A3C5E] flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-[#1A3C5E] group-hover:text-white transition-colors duration-300">
                  <Icon size={18} />
                </div>

                <div>
                  {/* Number */}
                  <div className="text-xl sm:text-2xl font-black text-[#1A3C5E] tracking-tight leading-none">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-xs font-bold text-[#0F172A] leading-tight mt-0.5">
                    {stat.label}
                  </div>

                  {/* Sub-label */}
                  <div className="text-[10px] text-slate-500 font-medium leading-tight">
                    {stat.subLabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
