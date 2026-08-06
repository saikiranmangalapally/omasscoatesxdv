'use client';

import { Quote, Sparkles, CheckCircle2, BadgeCheck } from 'lucide-react';

const sampleTestimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Apex Tech Solutions',
    avatarBg: 'bg-[#1A3C5E]',
    initials: 'RK',
    text: 'OM Associates handled our Private Limited Company registration and GST setup seamlessly. Their CA team guided us through every step without any hassle. Highly impressed by their speed!',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'EcoCraft Organics',
    avatarBg: 'bg-[#1A3C5E]',
    initials: 'PS',
    text: 'Extremely professional team! Got our Trademark registered within promised timelines. Their expert legal guidance saved us from trademark objection delays.',
  },
  {
    id: 3,
    name: 'Vikram Reddy',
    company: 'Reddy Infra & Logistics',
    avatarBg: 'bg-[#1A3C5E]',
    initials: 'VR',
    text: 'We rely on OM Associates for monthly GST return filing and annual ROC compliance. Zero queries from tax authorities and prompt support whenever needed.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80" id="client-feedback">
      
      {/* Background Radial Glow Mesh & Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#1A3C5E]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
            <Sparkles size={13} /> CLIENT FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
            Trusted by 1,000+ Founders &amp; Businesses Across India
          </h2>
          <p className="text-[#64748B] text-[15px] mt-2 leading-relaxed">
            Real experiences from business owners, CFOs, and startup founders who trust OM Associates.
          </p>

          {/* Organic Verification Summary Pill */}
          <div className="inline-flex items-center gap-2.5 bg-white border border-[#E2E8F0] px-4 py-2 rounded-full mt-4 shadow-sm">
            <CheckCircle2 size={15} className="text-[#059669]" />
            <span className="text-xs font-bold text-[#0F172A]">Verified Client Testimonials</span>
            <span className="text-xs text-[#64748B]">across 1,000+ corporate filings</span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {sampleTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-[20px] p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#1A3C5E] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden bento-card-hover"
            >
              <div>
                {/* Quote Icon & Organic Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#EFF6FF] text-[#1A3C5E] flex items-center justify-center group-hover:bg-[#1A3C5E] group-hover:text-white transition-colors duration-300">
                    <Quote size={18} />
                  </div>
                  <div className="flex items-center gap-1 text-[#059669] font-bold text-xs">
                    <BadgeCheck size={16} /> Verified Client
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Client Info Header */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{t.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
