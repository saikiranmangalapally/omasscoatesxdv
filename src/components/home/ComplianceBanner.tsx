'use client';

import { Calendar, ArrowRight } from 'lucide-react';

export default function ComplianceBanner() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="container-custom py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
              <Calendar size={28} className="text-[#F97316]" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                Never Miss a Compliance Deadline
              </h3>
              <p className="text-white/60 text-sm">
                Download our Compliance Calendar — track all ROC, IT, and GST deadlines.
              </p>
            </div>
          </div>

          <button className="btn-cta-primary whitespace-nowrap">
            Download Compliance Calendar
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Orange gradient accent on right */}
      <div className="absolute top-0 right-0 bottom-0 w-1/3 hidden lg:block bg-gradient-to-l from-[#F97316]/5 to-transparent" />
    </section>
  );
}
