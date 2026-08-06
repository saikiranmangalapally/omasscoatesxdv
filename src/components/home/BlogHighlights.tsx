'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    slug: 'gst-updates-2025',
    category: 'GST & TAX',
    date: 'Aug 01, 2026',
    title: 'GST Compliance Updates 2026: Key Changes for SMEs & Startups',
    excerpt: 'Stay compliant with the latest GST council decisions, updated GSTR filing deadlines, and mandatory e-invoicing thresholds.',
  },
  {
    slug: 'annual-roc-filing-guide',
    category: 'ROC COMPLIANCE',
    date: 'Jul 28, 2026',
    title: 'Complete Guide to Annual ROC Filings (AOC-4 & MGT-7)',
    excerpt: 'Avoid statutory penalties with our comprehensive checklist for company annual compliance, director KYC, and board resolutions.',
  },
  {
    slug: 'trademark-registration-process',
    category: 'TRADEMARK & IP',
    date: 'Jul 20, 2026',
    title: 'How to Protect Your Brand: Step-by-Step Trademark Registration',
    excerpt: 'Learn how to secure exclusive brand rights, conduct trademark search, and respond effectively to examination objections.',
  },
];

export default function BlogHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-chip badge-chip-orange mb-3">
            KNOWLEDGE HUB
          </span>
          <h2 className="text-[28px] font-bold text-[#1A3C5E]">
            Latest Insights & Articles
          </h2>
          <p className="text-[#6B7280] text-[15px] mt-2">
            Expert analysis, compliance guides, and regulatory updates for business leaders.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="feature-card flex flex-col justify-between group rounded-[10px] border border-[#E5E7EB]"
            >
              <div>
                {/* Thumbnail placeholder */}
                <div className="h-44 bg-[#F8F9FA] rounded-[8px] mb-5 flex items-center justify-center text-slate-400 group-hover:bg-[#FFF3EB] group-hover:text-[#F47920] transition-colors">
                  <BookOpen size={40} />
                </div>

                {/* Category pill & date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="badge-chip badge-chip-orange">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#6B7280]">{post.date}</span>
                </div>

                {/* H4 Title — 16px / 600 */}
                <h4 className="text-[16px] font-semibold text-[#1A3C5E] mb-2 group-hover:text-[#F47920] transition-colors line-clamp-2">
                  {post.title}
                </h4>

                {/* Excerpt — 15px / 400 */}
                <p className="text-[15px] text-[#111827] leading-[1.7] line-clamp-2 mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More Link */}
              <Link
                href={`/blog`}
                className="text-sm font-semibold text-[#2563EB] group-hover:underline inline-flex items-center gap-1.5 pt-4 border-t border-[#E5E7EB]"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link href="/blog" className="btn-cta-secondary text-sm">
            Explore All Insights <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
