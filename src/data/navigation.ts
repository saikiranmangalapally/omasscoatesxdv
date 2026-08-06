export interface NavItem {
  label: string;
  href?: string;
  children?: NavGroup[];
}

export interface NavGroup {
  groupLabel?: string;
  items: { label: string; href: string; description?: string }[];
}

export const navigation: NavItem[] = [
  {
    label: 'Startup',
    children: [
      {
        groupLabel: 'Company Registration',
        items: [
          { label: 'Private Limited Company', href: '/private-limited-company', description: 'Most popular choice for startups' },
          { label: 'One Person Company (OPC)', href: '/one-person-company', description: 'For single founders' },
          { label: 'Limited Liability Partnership (LLP)', href: '/llp-registration', description: 'Ideal for partnership business' },
          { label: 'Partnership Firm', href: '/partnership-firm', description: 'Simple registration' },
        ],
      },
      {
        groupLabel: 'Special Registrations',
        items: [
          { label: 'Section 8 (NGO)', href: '/section-8-company', description: 'Non-profit organization' },
          { label: 'Producer Company', href: '/producer-company', description: 'For agriculture & farmers' },
          { label: 'Public Limited Company', href: '/public-limited-company', description: 'Large scale corporate' },
          { label: 'Startup India Scheme', href: '/startup-india-registration', description: 'DPIIT recognition & benefits' },
        ],
      },
    ],
  },
  {
    label: 'Registrations',
    children: [
      {
        groupLabel: 'Government Licenses',
        items: [
          { label: 'MSME / Udyam Registration', href: '/msme-registration', description: 'Government benefits for MSMEs' },
          { label: 'FSSAI Food License', href: '/fssai-registration', description: 'Basic, State & Central FSSAI' },
          { label: 'IEC Code Registration', href: '/import-export-code', description: 'Import & Export business' },
          { label: 'ISO Certification', href: '/iso-certification', description: 'Quality standard certification' },
        ],
      },
      {
        groupLabel: 'Labor & Business',
        items: [
          { label: 'Shop & Establishment', href: '/shop-and-establishment', description: 'Local commercial license' },
          { label: 'PF & ESI Registration', href: '/epf-esi-registration', description: 'Employee benefits compliance' },
          { label: 'Professional Tax License', href: '/professional-tax-registration', description: 'State PT registration' },
          { label: 'Digital Signature (DSC)', href: '/digital-signature-certificate', description: 'Class 3 DSC certificate' },
        ],
      },
    ],
  },
  {
    label: 'GST',
    children: [
      {
        groupLabel: 'GST Services',
        items: [
          { label: 'New GST Registration', href: '/gst-registration', description: 'Get GSTIN in 3 days' },
          { label: 'GST Return Filing', href: '/gst-return-filing', description: 'Monthly & Quarterly GSTR-1/3B' },
          { label: 'GST Annual Return (GSTR-9)', href: '/gstr-9-annual-return', description: 'Yearly GST reconciliation' },
          { label: 'GST LUT Filing', href: '/gst-lut-filing', description: 'For zero-rated exports' },
        ],
      },
      {
        groupLabel: 'GST Advisory & Appeals',
        items: [
          { label: 'GST Notice Reply', href: '/gst-notice-reply', description: 'Expert legal response' },
          { label: 'GST Cancellation / Revocation', href: '/gst-cancellation-revocation', description: 'Restore cancelled GST' },
          { label: 'GST Audit & Reconciliation', href: '/gst-audit', description: 'Detailed ITC audit' },
        ],
      },
    ],
  },
  {
    label: 'Compliance',
    children: [
      {
        groupLabel: 'ROC Annual Filing',
        items: [
          { label: 'Company Annual Filing', href: '/annual-filing', description: 'AOC-4 & MGT-7 filings' },
          { label: 'LLP Form-8 & Form-11', href: '/llp-annual-filing', description: 'LLP annual compliance' },
          { label: 'DIR-3 KYC Filing', href: '/dir-3-kyc', description: 'Mandatory annual director KYC' },
          { label: 'INC-20A Commencement', href: '/inc-20a-filing', description: 'Commencement of business' },
        ],
      },
      {
        groupLabel: 'Accounting & Secretarial',
        items: [
          { label: 'Bookkeeping Services', href: '/bookkeeping-services', description: 'Monthly ledger management' },
          { label: 'TDS Return Filing', href: '/tds-filing', description: 'Quarterly Form 24Q / 26Q' },
          { label: 'Financial Statements', href: '/financial-statements', description: 'Balance Sheet & P&L' },
          { label: 'Company Strike Off', href: '/strike-off-company', description: 'Close defunct company' },
        ],
      },
    ],
  },
  {
    label: 'Trademark',
    children: [
      {
        groupLabel: 'IP Protection',
        items: [
          { label: 'Trademark Registration', href: '/trademark-registration', description: 'Protect your brand name & logo' },
          { label: 'Trademark Objection Reply', href: '/trademark-objection', description: 'Reply to examination report' },
          { label: 'Trademark Hearing', href: '/trademark-hearing', description: 'Legal representation' },
          { label: 'Copyright Registration', href: '/copyright-registration', description: 'Protect creative works' },
          { label: 'Patent Filing', href: '/patent-filing', description: 'Invention & technology IP' },
        ],
      },
    ],
  },
  {
    label: 'Income Tax',
    children: [
      {
        groupLabel: 'Tax Filing Services',
        items: [
          { label: 'Personal Income Tax Return', href: '/itr-filing-individuals', description: 'Salaried & capital gains ITR' },
          { label: 'Business Income Tax Return', href: '/itr-filing-business', description: 'Proprietorship & Corporate ITR' },
          { label: 'Tax Audit Services', href: '/tax-audit-services', description: 'Section 44AB tax audit' },
          { label: 'Income Tax Notice Reply', href: '/income-tax-notice-reply', description: 'Expert notice assistance' },
        ],
      },
    ],
  },
  {
    label: 'Regulatory',
    children: [
      {
        groupLabel: 'Advisory & Legal',
        items: [
          { label: 'Corporate Legal Advisory', href: '/corporate-advisory', description: 'Strategic legal counsel' },
          { label: 'Contract & Agreement Drafting', href: '/contract-drafting', description: 'Vendor & employment NDAs' },
          { label: 'Property Title Verification', href: '/property-verification', description: 'Legal due diligence' },
        ],
      },
    ],
  },
];

export const contactInfo = {
  phone: '+91 9581880088',
  email: 'contact@omassociates.co.in',
  whatsapp: '919581880088',
  whatsappLink: 'https://wa.me/919581880088?text=Hi%20OM%20Associates%2C%20I%20need%20expert%20tax%20and%20legal%20guidance.',
  address: 'Hyderabad, Telangana, India',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3267946!2d78.2432!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1',
};

export const socialLinks = {
  facebook: 'https://facebook.com/omassociates',
  instagram: 'https://instagram.com/omassociates',
  linkedin: 'https://linkedin.com/company/omassociates',
  twitter: 'https://twitter.com/omassociates',
  youtube: 'https://youtube.com/@omassociates',
};
