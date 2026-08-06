import HeroBanner from '@/components/home/HeroBanner';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import StatsCounter from '@/components/home/StatsCounter';
import ServicesTabsSection from '@/components/home/ServicesTabsSection';
import AboutBlock from '@/components/home/AboutBlock';
import ExpertGuidanceCTA from '@/components/home/ExpertGuidanceCTA';
import Testimonials from '@/components/home/Testimonials';
import PartnerLogos from '@/components/home/PartnerLogos';

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <HeroBanner />

      {/* Section 2 — Why Choose Us (4 Feature Cards) */}
      <WhyChooseUs />

      {/* Section 3 — Stats / Social Proof Bar */}
      <StatsCounter />

      {/* Section 4 — Popular Services Grid & Fee Estimator */}
      <ServicesTabsSection />

      {/* Section 5 — About / Value Proposition */}
      <AboutBlock />

      {/* Section 6 — Expert Guidance CTA */}
      <ExpertGuidanceCTA />

      {/* Section 7 — Testimonials */}
      <Testimonials />

      {/* Section 8 — Corporate Governance Partners */}
      <PartnerLogos />
    </>
  );
}
