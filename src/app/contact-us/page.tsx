import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with OM Associates — Hyderabad\'s trusted CA firm. Call, WhatsApp, or visit us for expert compliance and legal services. Free consultation available.',
};

export default function ContactPage() {
  return <ContactContent />;
}
