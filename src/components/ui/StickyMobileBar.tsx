'use client';

import { Phone, Mail } from 'lucide-react';
import { contactInfo } from '@/data/navigation';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden border-t border-[#E2E8F0] bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <a
        href={`tel:${contactInfo.phone}`}
        className="flex flex-1 items-center justify-center gap-2 text-sm font-semibold py-3 text-[#1E293B]"
      >
        <Phone size={18} />
        Call
      </a>
      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 text-sm font-semibold py-3 text-white bg-[#25D366]"
      >
        <WhatsAppIcon size={18} />
        WhatsApp
      </a>
      <a
        href={`mailto:${contactInfo.email}`}
        className="flex flex-1 items-center justify-center gap-2 text-sm font-semibold py-3 text-[#1E293B]"
      >
        <Mail size={18} />
        Enquire
      </a>
    </div>
  );
}
