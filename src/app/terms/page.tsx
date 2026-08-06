import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Advisory Agreement',
  description: 'Terms of Service for OM Associates legal and compliance services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#1A3C5E] text-white pt-28 pb-12">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-xs text-blue-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>&gt;</span>
            <span className="text-white font-bold">Terms of Service</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-sm text-blue-100">Last Updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 text-[#0F172A]">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">1. Professional Engagement</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Welcome to OM Associates. By accessing our web application or engaging our corporate, tax, and legal advisory services, you agree to comply with these terms. Services are rendered directly by qualified Chartered Accountants, Company Secretaries, and Legal Advocates operating as a single unified holding firm.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">2. Client Obligations</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Clients must furnish complete, authentic, and accurate records for statutory filing. OM Associates is not liable for statutory delays or penalties resulting from forged or delayed client submissions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0F172A] mb-3">3. Statutory Authority Discretion</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                While we guarantee error-free portal submission and manual partner verification, final certificate allotment remains under the statutory purview of government departments (MCA, Income Tax Dept, IP India).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
