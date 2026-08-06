'use client';

import { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { contactInfo } from '@/data/navigation';

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Private Limited Company',
    preferredDate: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden" id="consultation-form">
      <div className="container-custom relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-chip badge-chip-navy mb-3 uppercase tracking-widest text-xs">
            APPOINTMENT BOOKING
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] leading-tight">
            Schedule an Advisory Appointment with Senior CAs
          </h2>
          <p className="text-[#64748B] text-[15px] mt-2 leading-relaxed">
            Book a one-on-one consultation with our Chartered Accountants &amp; Corporate Lawyers. Fast, confidential &amp; hassle-free.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[20px] border border-[#E2E8F0] shadow-2xl overflow-hidden grid lg:grid-cols-[42%_58%]">
          
          {/* Left Column: Dark Executive Card */}
          <div className="bg-[#1A3C5E] p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFC107] bg-white/10 px-3 py-1 rounded-[4px] border border-white/15">
                <ShieldCheck size={14} /> SENIOR CA DESK
              </span>

              <h3 className="text-2xl font-bold text-white leading-tight">
                Direct Expert Advisory
              </h3>

              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                Connect directly with our senior legal &amp; tax partners. Get tailored advice on entity selection, tax exemptions, and statutory compliance.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-200">
                  <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
                  <span>100% Data Confidentiality &amp; Protection</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-200">
                  <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
                  <span>Callback Within 5 Minutes Guaranteed</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-200">
                  <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
                  <span>Zero Hidden Charges or Surprise Fees</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/15 relative z-10">
              <div className="text-xs text-slate-300 font-medium">Direct Advisory Helpline:</div>
              <a href={`tel:${contactInfo.phone}`} className="text-lg font-bold text-[#FFC107] hover:underline flex items-center gap-1.5 mt-0.5">
                <Phone size={16} /> +91 95818 80088
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="p-8 lg:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">Appointment Booked!</h3>
                <p className="text-sm text-[#64748B] max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-[#0F172A]">{formData.name}</span>. Our Senior CA will call you at your requested time slot on <span className="font-semibold text-[#0F172A]">{formData.phone}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-cta-secondary text-xs py-2.5 px-5 mt-4"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E2E8F0] pb-3 mb-4">
                  <h4 className="text-lg font-bold text-[#0F172A]">Enter Your Details</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Choose your preferred service &amp; schedule an appointment.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input-custom text-xs"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9581880088"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input-custom text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input-custom text-xs"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Required Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-input-custom text-xs"
                    >
                      <option value="Private Limited Company">Private Limited Company</option>
                      <option value="GST Registration & Filing">GST Registration &amp; Filing</option>
                      <option value="Trademark Registration">Trademark Registration</option>
                      <option value="Annual ROC Filing">Annual ROC Filing</option>
                      <option value="MSME Udyam Registration">MSME Udyam Registration</option>
                      <option value="LLP Partnership">LLP Partnership</option>
                      <option value="Income Tax Return">Income Tax Return (ITR)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">Preferred Date &amp; Time</label>
                    <input
                      type="datetime-local"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="form-input-custom text-xs text-[#0F172A]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-cta-primary w-full py-3.5 text-xs font-bold mt-2 justify-center shadow-md cursor-pointer"
                >
                  Confirm Appointment Booking <ArrowRight size={16} />
                </button>

                <div className="text-center text-[11px] text-[#64748B] pt-2">
                  🔒 100% Confidential • We respect your privacy. Zero spam guaranteed.
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
