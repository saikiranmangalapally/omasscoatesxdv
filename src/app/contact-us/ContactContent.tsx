'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactInfo } from '@/data/navigation';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter valid 10-digit Indian phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  'Company Registration', 'GST Return Filing', 'Annual ROC Filing', 'DIR-3 KYC', 'Trademark Registration',
  'Bookkeeping Services', 'LLP Registration', 'Legal Advisory', 'Copyright/Patent', 'Other',
];

const contactCards = [
  {
    icon: Phone,
    isCustomIcon: false,
    title: 'Call Us',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    bgColor: 'bg-blue-50',
    textColor: 'text-[#1A3C5E]',
  },
  {
    icon: WhatsAppIcon,
    isCustomIcon: true,
    title: 'WhatsApp',
    value: 'Instant Chat Support',
    href: contactInfo.whatsappLink,
    bgColor: 'bg-green-50',
    textColor: 'text-[#25D366]',
  },
  {
    icon: Mail,
    isCustomIcon: false,
    title: 'Email Us',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    bgColor: 'bg-sky-50',
    textColor: 'text-sky-600',
  },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log('Contact form:', data);
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#1A3C5E] via-[#0F253F] to-[#1A3C5E] text-white pt-28 pb-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-bold">Contact Us</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Connect with Our Legal &amp; Tax Desk
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl font-normal">
            Get expert advice from senior Chartered Accountants &amp; Corporate Lawyers within 60 minutes.
          </p>
        </div>
      </section>

      {/* Top 3 Action Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-20">
            {contactCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl ${card.bgColor} ${card.textColor} flex items-center justify-center mx-auto mb-4`}>
                    {card.isCustomIcon ? (
                      <IconComponent size={28} className="w-7 h-7" />
                    ) : (
                      <IconComponent size={28} />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-1">{card.title}</h3>
                  <p className="text-sm text-[#64748B] font-semibold">{card.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Form & Info */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
            
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Send Us a Direct Message</h2>

              {submitted ? (
                <div className="bg-[#ECFDF5] border border-[#D1FAE5] rounded-2xl p-10 text-center space-y-3">
                  <CheckCircle2 size={56} className="text-[#059669] mx-auto" />
                  <h3 className="text-2xl font-bold text-[#0F172A]">Message Received!</h3>
                  <p className="text-sm text-[#475569]">
                    Our Senior CA will reach out to you within 60 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input {...register('name')} className="form-input-custom" placeholder="e.g. Rahul Verma" />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input {...register('email')} type="email" className="form-input-custom" placeholder="e.g. rahul@company.com" />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                      <input {...register('phone')} type="tel" className="form-input-custom" placeholder="e.g. 9876543210" />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Required *</label>
                      <select {...register('service')} className="form-input-custom" defaultValue="">
                        <option value="" disabled>Select service</option>
                        {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Requirements *</label>
                    <textarea {...register('message')} rows={4} className="form-input-custom" placeholder="Describe your service requirement..." />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta-primary w-full md:w-auto py-3 px-8 text-sm font-bold"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Info Side Box */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-[#0F172A] border-b border-slate-100 pb-3">
                  Office Information
                </h3>
                
                <div className="space-y-4 text-xs text-[#475569]">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#1A3C5E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F172A] block">Headquarters</span>
                      <span>{contactInfo.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[#1A3C5E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F172A] block">Working Hours</span>
                      <span>{contactInfo.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#1A3C5E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#0F172A] block">Support Desk</span>
                      <span>{contactInfo.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden h-[260px] border border-slate-200 shadow-sm">
                <iframe
                  src={contactInfo.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OM Associates Headquarters Location"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
