import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { generatePageMeta, generateServiceSchema, generateFAQSchema } from '@/lib/seo';
import AnimatedServiceTemplate from '@/components/service/AnimatedServiceTemplate';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return generatePageMeta({
    title: `${service.name} Services — Hyderabad & Pan-India`,
    description: service.description,
    slug: service.slug,
  });
}

const categoryMap: Record<string, { label: string; href: string }> = {
  accounting: { label: 'Accounting & Finance', href: '/#services' },
  compliance: { label: 'Corporate Compliance', href: '/#services' },
  legal: { label: 'Legal & IP', href: '/#services' },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const category = categoryMap[service.category] || {
    label: 'Corporate Advisory',
    href: '/#services',
  };

  const serviceSchema = generateServiceSchema(
    service.name,
    service.description,
    service.slug
  );
  const faqSchema = generateFAQSchema(service.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AnimatedServiceTemplate
        service={service}
        categoryLabel={category.label}
      />
    </>
  );
}
