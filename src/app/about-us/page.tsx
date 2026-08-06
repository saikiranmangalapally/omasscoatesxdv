import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about OM Associates — Hyderabad\'s trusted CA and compliance firm with 15+ years of experience serving 2,500+ businesses across Telangana.',
};

export default function AboutPage() {
  return <AboutContent />;
}
