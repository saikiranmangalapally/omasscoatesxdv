'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Phone, Mail } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import BrandLogo from './BrandLogo';
import { navigation, contactInfo } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleAccordion = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[380px] bg-white z-[60] overflow-y-auto flex flex-col justify-between shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
                <BrandLogo variant="dark" size="sm" />
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-200 transition"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="p-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.label} className="border-b border-slate-100">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleAccordion(item.label)}
                          className="w-full flex items-center justify-between py-3 text-left font-semibold text-slate-800 text-sm"
                        >
                          <span className={expanded === item.label ? 'text-[#F97316]' : ''}>
                            {item.label}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              expanded === item.label ? 'rotate-180 text-[#F97316]' : 'text-slate-400'
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {expanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-slate-50 rounded-lg p-3 my-1 space-y-3"
                            >
                              {item.children.map((group, gi) => (
                                <div key={gi}>
                                  {group.groupLabel && (
                                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#F97316] block mb-1.5">
                                      {group.groupLabel}
                                    </span>
                                  )}
                                  <div className="space-y-1 pl-2">
                                    {group.items.map((subItem) => (
                                      <Link
                                        key={subItem.href}
                                        href={subItem.href}
                                        onClick={onClose}
                                        className="block py-1.5 text-xs font-medium text-slate-600 hover:text-[#F97316]"
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href || '/'}
                        onClick={onClose}
                        className="block py-3 font-semibold text-slate-800 text-sm hover:text-[#F97316]"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
              <Link
                href="/contact-us"
                onClick={onClose}
                className="btn-cta-primary w-full py-3 text-center text-sm"
              >
                Get Started
              </Link>

              <div className="flex gap-2">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100"
                >
                  <Phone size={14} /> Call Us
                </a>
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#25D366] hover:bg-green-600"
                >
                  <WhatsAppIcon size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
