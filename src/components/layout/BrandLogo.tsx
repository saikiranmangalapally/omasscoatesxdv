import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function BrandLogo({ variant = 'dark', size = 'md' }: BrandLogoProps) {
  const isLight = variant === 'light';

  const titleSizes = {
    sm: 'text-xl sm:text-2xl font-bold',
    md: 'text-2xl sm:text-3xl font-bold',
    lg: 'text-3xl sm:text-4xl font-bold',
  };

  const subtitleSizes = {
    sm: 'text-[7.5px]',
    md: 'text-[8.5px]',
    lg: 'text-[10px]',
  };

  return (
    <div className="flex flex-col text-left select-none group cursor-pointer py-0.5">
      {/* Semi-Cursive Writing Brand Logo */}
      <div className="flex items-center gap-1.5">
        <span
          style={{ fontFamily: 'var(--font-semi-cursive), "Caveat", "Playfair Display", cursive' }}
          className={`${titleSizes[size]} leading-none tracking-normal ${
            isLight ? 'text-white' : 'text-[#1A3C5E]'
          }`}
        >
          OM Associates
        </span>
        <span className={`text-[10px] font-black ${isLight ? 'text-[#F59E0B]' : 'text-[#2563EB]'}`}>
          ®
        </span>
      </div>

      {/* Corporate Tagline */}
      <span
        className={`${subtitleSizes[size]} font-bold tracking-[0.22em] uppercase mt-0.5 ${
          isLight ? 'text-blue-200' : 'text-[#64748B]'
        }`}
      >
        Chartered Accountants &amp; Legal
      </span>
    </div>
  );
}
