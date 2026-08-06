'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    step: '01',
    title: 'Select Your Service & Upload Documents',
    duration: '10 Mins',
    description: 'Choose your business entity or compliance requirement. Upload basic KYC proofs into your private, encrypted document vault.',
    keyPoints: ['No physical visit required', 'Aadhaar OTP verification']
  },
  {
    step: '02',
    title: 'Senior CA Audit & Pre-Filing Drafting',
    duration: '24 Hours',
    description: 'A designated Chartered Accountant reviews your documents, drafts constitutional deeds (MoA/AoA/Partnership Deed), and verifies portal eligibility.',
    keyPoints: ['Dedicated CA assigned', 'Zero query rejection audit']
  },
  {
    step: '03',
    title: 'Government Portal Submission',
    duration: '1-2 Days',
    description: 'Direct electronic submission to MCA, GSTN, or IP India portals with DSC (Digital Signature Certificate) authentication.',
    keyPoints: ['Real-time status updates', 'Official acknowledgement copy']
  },
  {
    step: '04',
    title: 'Official Certificate Delivery',
    duration: '3-5 Days',
    description: 'Receive your government-approved Certificate of Incorporation, GSTIN, or Trademark Receipt delivered straight to your dashboard.',
    keyPoints: ['Lifetime vault access', 'Post-incorporation compliance setup']
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-28 bg-[#FAF8F5] relative text-[#0F172A] overflow-hidden" id="process">
      
      {/* Ambient Subtle Warm Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A3C5E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Asymmetrical 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Editorial Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#1A3C5E] uppercase block">
                — Transparent Execution Workflow
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] leading-[1.15] tracking-tight">
                How your compliance gets handled.
              </h2>
              <p className="text-[#475569] text-base leading-relaxed font-normal pt-2">
                We eliminated red tape and hidden referral brokers. Four simple steps from initial consultation to government certificate issuance.
              </p>
            </div>

            {/* Organic Executive CA Quote Card */}
            <div className="bg-white border-l-4 border-[#1A3C5E] p-6 rounded-r-[16px] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1A3C5E]">
                <ShieldCheck size={16} /> CA Senior Partner Guarantee
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                &ldquo;Every document and government portal filing undergoes a 3-tier pre-audit by senior CAs to guarantee zero penalty risks.&rdquo;
              </p>
              <div className="text-[11px] font-bold text-slate-500 pt-1">
                OM Associates Senior Audit Desk
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1A3C5E] hover:text-[#0F253F] group border-b-2 border-[#1A3C5E] pb-1 transition-all"
              >
                <span>Start your business registration today</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Organic Vertical Stagger Timeline */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-8 border-l-2 border-slate-200 space-y-8">
            
            {steps.map((item, idx) => {
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => setActiveStep(idx)}
                  className={`relative pl-6 sm:pl-10 transition-all cursor-pointer group`}
                >
                  {/* Timeline Dot Node */}
                  <div className={`absolute -left-[25px] sm:-left-[33px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    isActive
                      ? 'bg-[#1A3C5E] text-white ring-4 ring-[#1A3C5E]/20 scale-110'
                      : 'bg-white border-2 border-slate-300 text-slate-500 group-hover:border-[#1A3C5E] group-hover:text-[#1A3C5E]'
                  }`}>
                    {idx + 1}
                  </div>

                  {/* Organic Card Box */}
                  <div className={`bg-white rounded-[20px] p-7 border transition-all duration-300 shadow-2xs hover:shadow-md ${
                    isActive
                      ? 'border-[#1A3C5E] ring-1 ring-[#1A3C5E]/10'
                      : 'border-slate-200/90 hover:border-slate-300'
                  }`}>
                    
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-3xl sm:text-4xl font-black text-slate-200 group-hover:text-[#1A3C5E] transition-colors font-serif">
                        {item.step}
                      </span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FAF8F5] border border-slate-200 text-slate-700">
                        Est: {item.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#1A3C5E] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                      {item.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                          <Check size={14} className="text-[#10B981] shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
