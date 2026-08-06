'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'who-can-apply', label: 'Who Can Apply' },
  { id: 'documents', label: 'Documents' },
  { id: 'process', label: 'Process' },
  { id: 'common-mistakes', label: 'Common Mistakes' },
  { id: 'why-choose-us', label: 'Why Choose Us' },
  { id: 'faq', label: 'FAQ' },
];

export default function StickyServiceNav() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-[72px] z-40 bg-white border-b border-[#E2E8F0] shadow-sm hidden md:block">
      <div className="container-custom">
        <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 text-xs font-semibold rounded-[4px] whitespace-nowrap transition-colors ${
                activeSection === item.id
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
