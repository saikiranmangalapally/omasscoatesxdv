'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  BookOpen, FileText, BarChart3, TrendingUp, Rocket,
  CalendarCheck, UserCheck, ClipboardCheck, FileSpreadsheet,
  XCircle, Flag, Landmark, Stamp, Users, Building,
  FileCheck, ArrowRightLeft, Repeat,
  Briefcase, PenTool, Shield, Copyright, Lightbulb,
  Scale, Home, ScrollText, HeartCrack, Package,
  ArrowRight, CheckCircle2, Calculator, PhoneCall, Sparkles
} from 'lucide-react';
import { getServicesByCategory } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  BookOpen, FileText, BarChart3, TrendingUp, Rocket,
  CalendarCheck, UserCheck, ClipboardCheck, FileSpreadsheet,
  XCircle, Flag, Landmark, Stamp, Users, Building,
  FileCheck, ArrowRightLeft, Repeat,
  Briefcase, PenTool, Shield, Copyright, Lightbulb,
  Scale, Home, ScrollText, HeartCrack, Package,
};

const tabs = [
  { id: 'accounting', label: 'Accounting & Finance', icon: BarChart3 },
  { id: 'compliance', label: 'Corporate Compliance', icon: Shield },
  { id: 'legal', label: 'Legal & IP', icon: Scale },
];

export default function ServicesTabsSection() {
  const [activeTab, setActiveTab] = useState('accounting');
  const [selectedServiceForCalc, setSelectedServiceForCalc] = useState('Annual Filing');
  const [businessType, setBusinessType] = useState('Pvt Ltd');

  const services = getServicesByCategory(activeTab);

  const calculateEstimate = () => {
    let base = 4999;
    if (businessType === 'Pvt Ltd') base += 5000;
    if (businessType === 'LLP') base += 3000;
    if (selectedServiceForCalc.includes('Trademark')) base = 6999;
    return base.toLocaleString('en-IN');
  };

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden" id="services">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-chip badge-chip-navy mb-3">
            <Sparkles size={13} /> SERVICE CATALOG
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Our Most Popular Services
          </h2>
          <p className="text-[#64748B] text-[15px] mt-2 font-normal leading-relaxed">
            Comprehensive CA, ROC compliance &amp; legal solutions tailored for Indian startups and SMEs.
          </p>
        </div>

        {/* Animated LayoutId Tab Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-14 bg-slate-200/60 p-1.5 rounded-full max-w-2xl mx-auto border border-slate-300/60">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                  isActive ? 'text-white' : 'text-slate-700 hover:text-[#0F172A]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-[#1A3C5E] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={15} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Card Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16"
          >
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || FileText;
              return (
                <div
                  key={service.slug}
                  className="bento-card-hover bg-white flex flex-col justify-between group rounded-[16px] p-7 border border-slate-200/90 shadow-sm relative overflow-hidden"
                >
                  <div>
                    {/* Icon & Price Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-[52px] h-[52px] rounded-[12px] bg-[#EFF6FF] text-[#1A3C5E] flex items-center justify-center group-hover:bg-[#1A3C5E] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <IconComponent size={24} />
                      </div>
                      <span className="badge-chip badge-chip-navy shadow-2xs">
                        Starting at ₹999
                      </span>
                    </div>

                    {/* Service Name */}
                    <h3 className="text-[20px] font-bold text-[#0F172A] mb-2 group-hover:text-[#1A3C5E] transition-colors">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-slate-600 mb-5 leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mb-6 border-t border-slate-200/80 pt-4 text-xs font-medium text-slate-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#10B981] shrink-0" />
                        Dedicated CA &amp; Legal Expert Assigned
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#10B981] shrink-0" />
                        100% Government Portal Compliant
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#10B981] shrink-0" />
                        Zero Penalty Guarantee &amp; Fast Processing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#10B981] shrink-0" />
                        Complete Document Vault Access
                      </li>
                    </ul>
                  </div>

                  {/* Apply Now CTA */}
                  <Link
                    href={`/${service.slug}`}
                    className="btn-cta-primary w-full justify-center text-xs py-3 rounded-full shadow-md group-hover:shadow-lg"
                  >
                    Apply Now <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Cost Estimator Strip (LIGHT MODE) */}
        <div className="bg-white border border-slate-200 rounded-[20px] p-8 lg:p-10 text-[#0F172A] shadow-xl relative overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#1A3C5E] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DBEAFE]">
                <Calculator size={14} className="text-[#1A3C5E]" /> Quick Fee Estimator
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">
                Calculate Your Statutory Compliance Fee
              </h3>
              <p className="text-slate-600 text-sm max-w-xl font-normal leading-relaxed">
                Get an instant estimated quote based on your entity structure and compliance requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Business Structure
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-slate-200 text-[#0F172A] rounded-[10px] px-3.5 py-2.5 text-xs outline-none focus:border-[#1A3C5E]"
                  >
                    <option value="Pvt Ltd">Private Limited Company</option>
                    <option value="LLP">LLP Partnership</option>
                    <option value="OPC">One Person Company</option>
                    <option value="Proprietorship">Proprietorship / SME</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Select Service
                  </label>
                  <select
                    value={selectedServiceForCalc}
                    onChange={(e) => setSelectedServiceForCalc(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-slate-200 text-[#0F172A] rounded-[10px] px-3.5 py-2.5 text-xs outline-none focus:border-[#1A3C5E]"
                  >
                    <option value="Annual Filing">Annual ROC Filing</option>
                    <option value="Bookkeeping">Monthly Bookkeeping</option>
                    <option value="Trademark">Trademark Registration</option>
                    <option value="TDS Return">TDS Return</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-[16px] p-6 border border-slate-200 text-center shadow-xs">
              <span className="text-xs uppercase font-bold text-[#64748B] block mb-1">
                Estimated Fee Starts From
              </span>
              <div className="text-3xl font-black text-[#1A3C5E] mb-1">
                ₹{calculateEstimate()}
              </div>
              <p className="text-[11px] text-[#64748B] mb-4 font-medium">Includes CA drafting &amp; government portal filing</p>
              <Link href="/contact-us" className="btn-cta-primary w-full py-3 text-xs font-bold rounded-full">
                <PhoneCall size={14} /> Get Custom Quote
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
