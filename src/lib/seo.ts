import type { Metadata } from 'next';

const siteConfig = {
  name: 'OM Associates',
  description: 'Trusted CA & Business Compliance Partner in Hyderabad — 15+ Years Experience, 2500+ Clients',
  url: 'https://omassociates.in',
  ogImage: '/og-image.jpg',
  phone: '+91-XXXXXXXXXX',
  email: 'info@omassociates.in',
  address: 'Hyderabad, Telangana, India',
};

export function generatePageMeta({
  title,
  description,
  slug = '',
  noIndex = false,
}: {
  title: string;
  description: string;
  slug?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = slug ? `${title} | ${siteConfig.name}` : title;
  const canonicalUrl = `${siteConfig.url}${slug ? `/${slug}` : ''}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      title.toLowerCase(),
      'CA firm Hyderabad',
      'compliance services Hyderabad',
      'OM Associates',
      'chartered accountant Hyderabad',
      'ROC filing Hyderabad',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: fullTitle }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

// JSON-LD generators
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Sa 09:00-19:00',
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2500',
      bestRating: '5',
    },
    sameAs: [
      'https://facebook.com/omassociates',
      'https://instagram.com/omassociates',
      'https://linkedin.com/company/omassociates',
    ],
  };
}

export function generateServiceSchema(serviceName: string, serviceDescription: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: `${siteConfig.url}/${slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Hyderabad',
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
