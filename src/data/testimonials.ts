export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  company?: string;
  city: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  service: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ravi Kumar',
    designation: 'Managing Director',
    company: 'TechVista Solutions',
    city: 'Hyderabad',
    rating: 5,
    text: 'OM Associates handled our company\'s annual ROC filing with incredible speed. The team was transparent and professional throughout. They kept us informed at every step and ensured zero penalties. Highly recommend their compliance services!',
    date: '2025-11-15',
    verified: true,
    service: 'Annual Filing',
    initials: 'RK',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    designation: 'Startup Founder',
    company: 'GreenLeaf Organics',
    city: 'Hyderabad',
    rating: 5,
    text: 'We\'ve been using their bookkeeping services for 3 years. No errors, always on time. Their team understands the unique challenges startups face and provides proactive financial advice. Truly the best CA firm for startups in Hyderabad.',
    date: '2025-10-22',
    verified: true,
    service: 'Bookkeeping',
    initials: 'PS',
  },
  {
    id: 3,
    name: 'Suresh Murthy',
    designation: 'Business Owner',
    company: 'Murthy Enterprises',
    city: 'Hyderabad',
    rating: 5,
    text: 'Got our trademark registered in just 12 days. The whole process was seamless — from initial search to filing to objection handling. The CA team really knows their work. Will definitely use them for our second brand registration too.',
    date: '2025-09-05',
    verified: true,
    service: 'Trademark Registration',
    initials: 'SM',
  },
  {
    id: 4,
    name: 'Lakshmi Reddy',
    designation: 'CFO',
    company: 'Nexus Infra Pvt Ltd',
    city: 'Hyderabad',
    rating: 5,
    text: 'We had a complicated LLP-to-Pvt-Ltd conversion. OM Associates made it look easy. Very professional service with clear communication throughout. They handled all the ROC filings and documentation perfectly. Highly recommended for corporate compliance.',
    date: '2025-08-18',
    verified: true,
    service: 'Company Conversion',
    initials: 'LR',
  },
  {
    id: 5,
    name: 'Kiran Teja',
    designation: 'Founder & CEO',
    company: 'PixelCraft Studios',
    city: 'Hyderabad',
    rating: 5,
    text: 'Best CA firm in Hyderabad for startups. They handled our MSME registration, GST filing, and first year audit — all at very reasonable cost. The dedicated support team is always available on WhatsApp for quick queries. Five stars!',
    date: '2025-07-30',
    verified: true,
    service: 'Startup Advisory',
    initials: 'KT',
  },
  {
    id: 6,
    name: 'Anitha Rao',
    designation: 'Director',
    company: 'Rao & Associates',
    city: 'Secunderabad',
    rating: 5,
    text: 'OM Associates has been our compliance partner for over 5 years. Their attention to detail in DIR-3 KYC filings and annual returns is impeccable. They send timely reminders before every deadline. Couldn\'t ask for better CA support.',
    date: '2025-06-12',
    verified: true,
    service: 'DIR-3 KYC',
    initials: 'AR',
  },
  {
    id: 7,
    name: 'Mohammed Farhan',
    designation: 'Partner',
    company: 'Al-Madina Exports LLP',
    city: 'Hyderabad',
    rating: 5,
    text: 'The LLP annual filing service is excellent. Form-8 and Form-11 were filed well before deadlines. Their team is knowledgeable, responsive, and always goes the extra mile. Great value for money. Strongly recommend for LLP compliance.',
    date: '2025-05-20',
    verified: true,
    service: 'LLP Annual Filing',
    initials: 'MF',
  },
  {
    id: 8,
    name: 'Deepa Krishnan',
    designation: 'Legal Head',
    company: 'Horizon Properties',
    city: 'Hyderabad',
    rating: 5,
    text: 'We engaged OM Associates for property verification before a major acquisition. Their title search report was thorough — they uncovered an encumbrance that other firms had missed. Their legal team saved us from a bad investment. Outstanding work!',
    date: '2025-04-08',
    verified: true,
    service: 'Property Verification',
    initials: 'DK',
  },
];

export const testimonialStats = {
  totalClients: 2500,
  averageRating: 4.9,
  satisfactionRate: 99,
  yearsExperience: 15,
};
