import type { Metadata } from 'next';
import TestimonialsContent from './TestimonialsContent';

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'Read what 2,500+ businesses say about OM Associates. Verified reviews from real clients across Hyderabad. 4.9/5 average rating.',
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
