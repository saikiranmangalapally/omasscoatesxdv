'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { navigation, contactInfo } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#1A3C5E] text-white border-t border-[#38BDF8]/20">
      {/* Top CTA Strip - Dark Navy Accent #0F2D4E */}
      <div className="bg-[#0F2D4E] py-4 px-4 text-white border-b border-[#38BDF8]/15">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="text-sm sm:text-base font-bold">
            Ready to Start? Talk to our legal & tax experts today!
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold">
            <a href={`tel:${contactInfo.phone}`} className="hover:text-[#F47920] transition flex items-center gap-1.5">
              <Phone size={15} /> {contactInfo.phone}
            </a>
            <span>|</span>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-[#F47920] transition flex items-center gap-1.5">
              <Mail size={15} /> {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer 4-Column Grid */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Logo + Tagline + Social Icons */}
          <div className="space-y-4">
            <BrandLogo variant="light" size="lg" />

            <p className="text-xs text-slate-300 leading-relaxed">
              India&apos;s leading platform for company registration, GST return filings, trademark protection, and comprehensive corporate compliance.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#F47920] hover:text-white transition-colors text-xs font-bold">
                fb
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#F47920] hover:text-white transition-colors text-xs font-bold">
                in
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#F47920] hover:text-white transition-colors text-xs font-bold">
                tw
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#F47920] hover:text-white transition-colors text-xs font-bold">
                yt
              </a>
            </div>
          </div>

          {/* Col 2: Startup Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Startup Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/private-limited-company" className="hover:text-[#F47920] transition-colors flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#F47920]" /> Private Limited Registration
                </Link>
              </li>
              <li>
                <Link href="/one-person-company" className="hover:text-[#F47920] transition-colors flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#F47920]" /> One Person Company (OPC)
                </Link>
              </li>
              <li>
                <Link href="/llp-registration" className="hover:text-[#F47920] transition-colors flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#F47920]" /> LLP Partnership Registration
                </Link>
              </li>
              <li>
                <Link href="/msme-registration" className="hover:text-[#F47920] transition-colors flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#F47920]" /> MSME Udyam Registration
                </Link>
              </li>
              <li>
                <Link href="/startup-india-registration" className="hover:text-[#F47920] transition-colors flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#F47920]" /> Startup India DPIIT Recognition
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Tax & Compliance */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Tax & Compliance
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/gst-registration" className="hover:text-[#F47920] transition-colors flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#F47920]" /> GST Registration & LUT
                </Link>
              </li>
              <li>
                <Link href="/gst-return-filing" className="hover:text-[#F47920] transition-colors flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#F47920]" /> Monthly GST Return Filing
                </Link>
              </li>
              <li>
                <Link href="/annual-filing" className="hover:text-[#F47920] transition-colors flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#F47920]" /> ROC Annual Filing (AOC-4/MGT-7)
                </Link>
              </li>
              <li>
                <Link href="/dir-3-kyc" className="hover:text-[#F47920] transition-colors flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#F47920]" /> Director DIR-3 KYC
                </Link>
              </li>
              <li>
                <Link href="/trademark-registration" className="hover:text-[#F47920] transition-colors flex items-center gap-1">
                  <ArrowRight size={12} className="text-[#F47920]" /> Trademark Brand Filing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/about-us" className="hover:text-[#F47920] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#F47920] transition-colors">Knowledge Hub & Blog</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#F47920] transition-colors">Client Testimonials</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#F47920] transition-colors">Contact Support & Consultation</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-slate-800 py-6 bg-[#0B132B] text-slate-400 text-xs">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} OM Associates. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
            <span>|</span>
            <span className="text-[#F47920] font-semibold">Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
