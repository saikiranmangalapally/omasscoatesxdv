import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Compliance Insights & Legal Knowledge Hub',
  description: 'Stay updated with the latest GST amendments, ROC annual filing guides, trademark laws, and tax advice from OM Associates.',
};

const blogPosts = [
  {
    slug: 'gst-updates-2025',
    category: 'GST & TAXATION',
    date: 'Aug 01, 2026',
    title: 'GST Compliance Updates 2026: Key Changes for SMEs & Startups',
    excerpt: 'Stay ahead of the latest GST council amendments and compliance requirements. From new return filing procedures to revised threshold limits, we cover everything you need to know.',
    readTime: '5 min read',
  },
  {
    slug: 'annual-roc-filing-guide',
    category: 'ROC COMPLIANCE',
    date: 'Jul 28, 2026',
    title: 'Complete Guide to Annual ROC Filing for Private Limited Companies',
    excerpt: 'Learn the step-by-step process for filing AOC-4 and MGT-7 forms. Avoid penalties with our comprehensive deadline tracker and document checklist.',
    readTime: '7 min read',
  },
  {
    slug: 'trademark-registration-process',
    category: 'TRADEMARK & IP',
    date: 'Jul 20, 2026',
    title: 'How to Protect Your Brand: Step-by-Step Trademark Registration',
    excerpt: 'Protect your brand with trademark registration. From trademark search to filing to objection handling — everything you need to know about the process.',
    readTime: '6 min read',
  },
  {
    slug: 'dir-3-kyc-deadline-guide',
    category: 'ROC COMPLIANCE',
    date: 'Jul 15, 2026',
    title: 'DIR-3 KYC: Don\'t Let Your DIN Get Deactivated',
    excerpt: 'September 30 is the deadline for DIR-3 KYC filing. Here\'s why every director must file on time and how to avoid the ₹5,000 penalty.',
    readTime: '4 min read',
  },
  {
    slug: 'startup-compliance-checklist',
    category: 'STARTUP GUIDE',
    date: 'Jul 05, 2026',
    title: 'Startup Compliance Checklist: 10 Things to Do After Incorporation',
    excerpt: 'Just registered your company? Here are the 10 essential compliance steps every startup founder must complete in the first 6 months.',
    readTime: '8 min read',
  },
  {
    slug: 'llp-vs-pvt-ltd-comparison',
    category: 'CORPORATE LAW',
    date: 'Jun 22, 2026',
    title: 'LLP vs Private Limited Company: Which Structure Should You Choose?',
    excerpt: 'A detailed comparison of LLP and Private Limited Company structures — covering compliance burden, taxation, liability, and fundraising aspects.',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1A3C5E] text-white pt-36 pb-20 relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <span className="badge-chip bg-white/10 text-white border-white/20 mb-3 uppercase tracking-widest text-xs inline-flex items-center gap-1.5">
            <Sparkles size={13} /> KNOWLEDGE HUB
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Insights &amp; Statutory Resources
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            Stay updated with expert analysis, tax updates, and regulatory guidelines from OM Associates.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#FAF8F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-[#1A3C5E] transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-44 bg-[#EFF6FF] rounded-xl mb-5 flex items-center justify-center text-[#1A3C5E] group-hover:bg-[#1A3C5E] group-hover:text-[#FFC107] transition-colors">
                    <BookOpen size={40} />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-[#1A3C5E] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#BFDBFE]">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#64748B] font-medium">{post.date}</span>
                  </div>

                  <h2 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#1A3C5E] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-[#475569] leading-relaxed line-clamp-3 mb-6 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  href="/blog"
                  className="text-sm font-bold text-[#1A3C5E] group-hover:underline inline-flex items-center gap-1.5 pt-4 border-t border-slate-100"
                >
                  Read Full Article <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
