'use client';

import { contactInfo } from '@/data/navigation';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] group flex items-center">
      {/* Tooltip */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[56px] h-[56px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon size={30} className="w-[30px] h-[30px]" />
      </a>
    </div>
  );
}
