import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Confidentiality & Data Security',
  description: 'Privacy Policy for OM Associates — how we collect, use, and protect your personal and financial information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#1A3C5E] text-white pt-28 pb-12">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-xs text-blue-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-bold">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-blue-100">Last Updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 text-[#0F172A]">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">1. Information We Collect</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                At OM Associates (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy and ensuring bank-grade security for your personal and corporate financial data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our portal or engage our legal and compliance services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#475569]">
                <li>To process your corporate registration, GST, and MCA filings.</li>
                <li>To communicate application status and statutory due date alerts.</li>
                <li>To deliver legal advisory and contract drafting services.</li>
                <li>To comply with ICAI professional ethics and statutory regulations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">3. Data Security &amp; Confidentiality</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                All client documents are stored in encrypted vaults. We never sell, lease, or share your private financial information with third parties except as mandated by law for statutory filing on government portals.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">4. Contact Us</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                For privacy inquiries or document removal requests, contact our Compliance Desk at <span className="font-bold text-[#1A3C5E]">support@omassociates.in</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
