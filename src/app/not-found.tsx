import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-28">
      <div className="container-custom text-center text-white">
        <div className="text-8xl font-black mb-4 text-[#F97316]">
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/60 max-w-md mx-auto mb-8 text-base leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn-cta-primary">
          <ArrowLeft size={18} />
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
