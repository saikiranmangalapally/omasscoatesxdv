'use client';

import { Phone, Mail } from 'lucide-react';
import { contactInfo } from '@/data/navigation';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function ServiceBottomCTA() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#1A3C5E] via-[#0F253F] to-[#1A3C5E] text-white">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">
            Still Have Questions? Talk to Our Experts
          </h3>
          <p className="text-white/90 text-sm">
            Get instant answers to your tax, compliance, and registration queries.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${contactInfo.phone}`}
            className="bg-white text-[#1A3C5E] hover:bg-slate-100 font-bold text-xs py-3 px-5 rounded-full flex items-center gap-2 shadow-md transition"
          >
            <Phone size={15} className="text-[#1A3C5E]" /> Call {contactInfo.phone}
          </a>
          <a
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-whatsapp text-xs font-bold py-3 px-5 rounded-full flex items-center gap-2 shadow-md transition"
          >
            <WhatsAppIcon size={16} /> WhatsApp Support
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#1A3C5E] font-bold text-xs py-3 px-5 rounded-full flex items-center gap-2 shadow-md transition"
          >
            <Mail size={15} /> Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
