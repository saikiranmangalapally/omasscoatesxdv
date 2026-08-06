'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Clock, Award, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';
import ConsultationForm from '@/components/home/ConsultationForm';

const timeline = [
  { year: '2018', title: 'Firm Established', desc: 'OM Associates established in Hyderabad with a core focus on CA and legal advisory services.' },
  { year: '2020', title: '10,000+ Clients', desc: 'Crossed 10,000 corporate clients milestone across Telangana and South India.' },
  { year: '2022', title: 'Expanded IP & Legal Desk', desc: 'Launched full-scale trademark, copyright, patent, and corporate legal defense services.' },
  { year: '2024', title: '100% Digital Execution', desc: 'Transitioned to paperless digital filing with instant cloud document vault.' },
  { year: '2026', title: '1,000+ Enterprises', desc: 'Serving 1,000+ startups, SMEs, and corporate entities nationwide.' },
];

const values = [
  { icon: Shield, title: 'Integrity & Confidentiality', desc: 'We uphold the highest ethical standards & bank-grade data security in every engagement.' },
  { icon: Award, title: 'Zero Rejection Accuracy', desc: 'FCA & FCS partner scrutiny to ensure 100% error-free filing on government portals.' },
  { icon: Clock, title: 'Zero Penalty Guarantee', desc: 'Deadlines are sacred. We guarantee on-time government portal submissions to avoid late fees.' },
  { icon: Eye, title: 'Flat Transparent Pricing', desc: 'No hidden charges or contingent fees. Complete pricing clarity from day one.' },
];

const team = [
  { name: 'CA Rajesh Kumar', role: 'Founder & Senior Partner', exp: '20+ years', specialization: 'Corporate Taxation & Mergers' },
  { name: 'CS Priya Sharma', role: 'Head of Secretarial Services', exp: '14+ years', specialization: 'ROC Filings & MCA Matters' },
  { name: 'Adv. Suresh Reddy', role: 'Senior Legal Counsel', exp: '16+ years', specialization: 'Trademark, IP & Defense' },
  { name: 'CA Anitha Rao', role: 'Audit & Accounts Partner', exp: '12+ years', specialization: 'Bookkeeping & Tax Audits' },
];

const stats = [
  { value: 1000, suffix: '+', label: 'Happy Corporate Clients' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Tax & Legal Experts' },
  { value: 99.9, suffix: '%', label: 'Client Satisfaction Rate' },
];

export default function AboutContent() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1A3C5E] text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#FFC107] transition">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-bold">About Us</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="badge-chip bg-white/10 text-white border-white/20 mb-3 uppercase tracking-widest text-xs inline-flex items-center gap-1.5">
              <Building2 size={13} /> ESTABLISHED 2018 — HYDERABAD
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About OM Associates
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed font-normal">
              8+ years of compliance excellence. Hyderabad&apos;s leading Chartered Accountancy &amp; Corporate Legal Advisory Firm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Timeline */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#1A3C5E] text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3 inline-block">
                OUR JOURNEY
              </span>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
                Built on Trust, Driven by CA Excellence
              </h2>
              <div className="space-y-4 text-base text-[#475569] leading-relaxed">
                <p>
                  OM Associates was established in 2018 in Hyderabad with a clear vision: make corporate registration, statutory tax compliance, and legal advisory accessible, affordable, and stress-free for every Indian entrepreneur.
                </p>
                <p>
                  Over the past 8+ years, we have grown into a premier corporate compliance firm, supported by over 200 qualified Chartered Accountants, Company Secretaries, and Legal Advocates serving over 1,000+ clients nationwide.
                </p>
                <p>
                  Today, we are trusted for our transparent flat pricing, 0-penalty track record, and dedicated direct one-on-one FCA partner support.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#1A3C5E] text-[#FFC107] flex items-center justify-center text-sm font-extrabold shadow-md shrink-0">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-slate-300 my-2" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="text-lg font-bold text-[#0F172A] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-slate-200 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#1A3C5E]/10 text-[#1A3C5E] flex items-center justify-center mb-4">
                <Target size={26} />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Our Mission</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                To eliminate bureaucratic hurdles for entrepreneurs by providing expert CA, CS, and legal services with speed, transparency, and uncompromised compliance quality.
              </p>
            </div>

            <div className="bg-[#FAF8F5] rounded-2xl p-8 border border-slate-200 shadow-2xs">
              <div className="w-12 h-12 rounded-xl bg-[#1A3C5E]/10 text-[#1A3C5E] flex items-center justify-center mb-4">
                <Eye size={26} />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Our Vision</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                To be India&apos;s most reliable 360-degree legal &amp; compliance partner, empowering over 1,000+ businesses with seamless growth and zero regulatory penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#1A3C5E] text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3 inline-block">
              OUR PILLARS
            </span>
            <h2 className="text-3xl font-bold text-[#0F172A]">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs text-center">
                <div className="w-14 h-14 rounded-xl bg-[#1A3C5E]/10 text-[#1A3C5E] flex items-center justify-center mx-auto mb-4">
                  <v.icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{v.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Stats Strip */}
      <section className="py-12 bg-[#1A3C5E] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center relative">
                {i > 0 && <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/25" />}
                <div className="text-3xl sm:text-4xl font-bold mb-1 text-[#FFC107]">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/90 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <ConsultationForm />
    </>
  );
}
