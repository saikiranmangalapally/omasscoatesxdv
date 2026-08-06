'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavGroup } from '@/data/navigation';

interface MegaMenuProps {
  groups: NavGroup[];
  onClose: () => void;
}

export default function MegaMenu({ groups, onClose }: MegaMenuProps) {
  // Dynamically set container width based on number of column groups to eliminate empty white sections
  const getContainerWidth = () => {
    if (groups.length >= 3) return 'w-[960px] left-1/2 -translate-x-1/2';
    if (groups.length === 2) return 'w-[620px] left-1/2 -translate-x-1/2';
    return 'w-[320px] left-1/2 -translate-x-1/2';
  };

  const getGridCols = () => {
    if (groups.length >= 3) return 'grid-cols-3';
    if (groups.length === 2) return 'grid-cols-2';
    return 'grid-cols-1';
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`absolute top-full bg-white rounded-[8px] border border-[#E2E8F0] shadow-2xl p-5 z-50 mt-0 max-w-[95vw] ${getContainerWidth()}`}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 4 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <div className={`grid gap-6 ${getGridCols()}`}>
          {groups.map((group, gi) => (
            <div key={gi} className="space-y-2.5">
              {group.groupLabel && (
                <div className="border-b border-[#E2E8F0] pb-2">
                  <h6 className="text-[11px] uppercase tracking-wider font-bold text-[#1E293B]">
                    {group.groupLabel}
                  </h6>
                </div>
              )}
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-[13px] font-medium text-[#334155] hover:text-[#2563EB] transition-colors block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
