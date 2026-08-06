'use client';

import Link from 'next/link';
import { CheckCircle2, BadgeCheck } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import ConsultationForm from '@/components/home/ConsultationForm';

export default function TestimonialsContent() {
  return (
    <>
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white pt-28 pb-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-sky-400 transition">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-bold">Testimonials</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Client Testimonials &amp; Feedback
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Read verified reviews from over 1,000+ startups, SMEs, and corporate business leaders across India.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((review) => (
              <div key={review.id} className="testimonial-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#059669] font-bold text-xs">
                      <BadgeCheck size={16} /> Verified Corporate Client
                    </div>
                    <span className="text-[11px] font-bold text-[#1A3C5E] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#DBEAFE] uppercase">
                      {review.service}
                    </span>
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-[#1A3C5E] text-white flex items-center justify-center text-sm font-bold shadow-md shrink-0">
                      {review.initials}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-[#1E293B]">{review.name}</div>
                      <div className="text-xs text-[#64748B]">{review.designation}, {review.city}</div>
                    </div>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-xs text-[#16A34A] font-semibold">
                        <CheckCircle2 size={14} /> Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm />
    </>
  );
}
