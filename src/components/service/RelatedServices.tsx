'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getRelatedServices } from '@/data/services';

interface RelatedServicesProps {
  slugs: string[];
}

export default function RelatedServices({ slugs }: RelatedServicesProps) {
  const related = getRelatedServices(slugs);

  if (!related.length) return null;

  return (
    <section className="py-16 bg-white border-b border-[#E2E8F0]" id="related">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-chip badge-chip-blue mb-3">
            RECOMMENDED ADD-ONS
          </span>
          <h2 className="text-[28px] font-bold text-[#0F172A]">
            Related Corporate & Statutory Services
          </h2>
          <p className="text-[#64748B] text-[15px] mt-2">
            Explore essential compliance and licensing services for scaling your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.slice(0, 4).map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="feature-card group flex flex-col justify-between rounded-[10px] border border-[#E2E8F0] p-6 hover:border-[#1E3A8A] transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-[6px] bg-[#EFF6FF] text-[#1E3A8A] flex items-center justify-center mb-4 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                  <Sparkles size={20} />
                </div>
                <h4 className="text-[16px] font-bold text-[#0F172A] mb-2 group-hover:text-[#1E3A8A] transition-colors leading-snug">
                  {service.name}
                </h4>
                <p className="text-[13px] text-[#334155] line-clamp-2 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
              </div>

              <span className="text-xs font-bold text-[#1E3A8A] inline-flex items-center gap-1 group-hover:underline">
                Explore Service <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
