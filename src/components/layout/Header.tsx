'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Menu, ChevronDown } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import BrandLogo from './BrandLogo';
import { navigation, contactInfo } from '@/data/navigation';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 250);
    setMenuTimeout(timeout);
  };

  const toggleMenu = (label: string) => {
    if (activeMenu === label) {
      setActiveMenu(null);
    } else {
      if (menuTimeout) clearTimeout(menuTimeout);
      setActiveMenu(label);
    }
  };

  const activeNavGroup = navigation.find(item => item.label === activeMenu)?.children;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A3C5E] w-full shadow-lg">
      {/* 1. Top Announcement Subheader - Dark Navy Accent #0F2D4E */}
      <div className="bg-[#0F2D4E] text-white text-[12px] h-[36px] flex items-center justify-center px-4 font-medium border-b border-[#38BDF8]/20 overflow-hidden">
        <div className="container-custom flex items-center justify-between w-full">
          <div className="flex items-center gap-2 truncate">
            <span className="text-white font-semibold truncate">
              Our Tax/Legal Experts waiting for you!{' '}
              <Link href="/contact-us" className="text-[#FFC107] underline font-bold hover:text-white">
                Contact now
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[12px] font-semibold shrink-0 text-blue-100">
            <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition flex items-center gap-1">
              <WhatsAppIcon size={14} className="text-[#25D366]" /> {contactInfo.phone}
            </a>
            <span className="hidden sm:inline text-blue-300/40">|</span>
            <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition flex items-center gap-1">
              <Phone size={13} className="text-blue-300" /> {contactInfo.phone}
            </a>
            <span className="hidden md:inline text-blue-300/40">|</span>
            <a href={`mailto:${contactInfo.email}`} className="hidden md:flex items-center gap-1 hover:text-white transition">
              <Mail size={13} className="text-blue-300" /> {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar - OM Associates Deep Navy #1A3C5E */}
      <div
        className={`w-full transition-all duration-300 relative ${scrolled ? 'border-b border-[#38BDF8]/20 shadow-md' : 'border-b border-[#38BDF8]/15'}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-custom relative h-[62px] flex items-center justify-between gap-4">
          
          {/* Brand Logo - Light Variant */}
          <Link href="/" className="shrink-0 hover:opacity-95 transition">
            <BrandLogo variant="light" size="md" />
          </Link>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden lg:flex items-center gap-0.5 h-full" aria-label="Main Navigation">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="h-full flex items-center"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              >
                <button
                  onClick={() => item.children && toggleMenu(item.label)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 text-[13px] font-semibold transition-colors relative cursor-pointer whitespace-nowrap ${
                    activeMenu === item.label ? 'text-white font-bold' : 'text-blue-100 hover:text-white'
                  }`}
                  aria-expanded={activeMenu === item.label}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        activeMenu === item.label ? 'rotate-180 text-[#FFC107]' : 'text-blue-200/70'
                      }`}
                    />
                  )}
                  {/* Active Gold Underline */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2px] bg-[#FFC107] transition-transform duration-200 ${
                      activeMenu === item.label ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              </div>
            ))}
          </nav>

          {/* Right Action Button - White Button with Navy Text */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/contact-us"
              className="bg-white hover:bg-slate-100 text-[#1A3C5E] text-xs font-bold py-2.5 px-5 rounded-full whitespace-nowrap shadow-md transition-all cursor-pointer"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-1.5 rounded-[6px] text-white hover:bg-[#0F2D4E]"
            onClick={() => setMobileOpen(true)}
            aria-label="Toggle navigation menu"
          >
            <Menu size={22} />
          </button>

        </div>

        {/* Mega Menu Dropdown Container */}
        {activeNavGroup && (
          <div
            onMouseEnter={() => handleMouseEnter(activeMenu!)}
            className="absolute top-full left-0 right-0 w-full flex justify-center pointer-events-none z-50"
          >
            <div className="container-custom relative w-full pointer-events-auto">
              <MegaMenu groups={activeNavGroup} onClose={() => setActiveMenu(null)} />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
