import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy — Operational Guarantee',
  description: 'Refund and cancellation policy for OM Associates services.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <section className="bg-[#1A3C5E] text-white pt-28 pb-12">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-xs text-blue-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-bold">Refund Policy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Refund &amp; Cancellation Policy</h1>
          <p className="text-sm text-blue-100">Last Updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 text-[#0F172A]">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">1. Satisfaction Commitment</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                At OM Associates, we strive to ensure 100% satisfaction with our professional corporate services. This policy outlines the conditions under which refunds and cancellations are processed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">2. Pre-Execution Cancellation</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                If a cancellation request is received before work has commenced or documents have been verified, a full refund of professional fees (minus nominal gateway charges) will be issued within 5-7 working days.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">3. Government &amp; Statutory Fees</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Statutory government fees, ROC challans, stamp duty, or official trademark filing fees already remitted to government authorities are strictly non-refundable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
