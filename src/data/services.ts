export interface Service {
  name: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  icon: string;
  documents: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const serviceCategories = [
  { id: 'accounting', name: 'Accounting & Finance', icon: 'Calculator' },
  { id: 'compliance', name: 'Corporate Compliance', icon: 'Building2' },
  { id: 'legal', name: 'Legal & IP', icon: 'Scale' },
  { id: 'packages', name: 'Business Packages', icon: 'Package' },
] as const;

export type CategoryId = (typeof serviceCategories)[number]['id'];

export const services: Service[] = [
  // ─── STARTUP & COMPANY REGISTRATION ───
  {
    name: 'Private Limited Company Registration',
    slug: 'private-limited-company',
    category: 'compliance',
    description:
      'Incorporate your Private Limited Company in India with complete MCA approval, RUN name clearance, SPICe+ form filing, PAN, TAN, and Certificate of Incorporation in 3 to 5 business days.',
    shortDescription: 'Most popular corporate entity for startups seeking funding.',
    icon: 'Rocket',
    documents: [
      'PAN Card of all Directors / Shareholders',
      'Aadhaar Card or Passport of Directors',
      'Address Proof (Bank Statement / Electricity Bill)',
      'Registered Office Utility Bill & Rent Agreement',
      'Passport Size Photographs of Directors',
    ],
    faqs: [
      { question: 'Minimum directors required for Private Limited Company?', answer: 'A minimum of 2 directors and 2 shareholders are required. A single person can act as both director and shareholder.' },
      { question: 'Is physical presence required in ROC office?', answer: 'No, the entire incorporation process is 100% digital and online.' },
      { question: 'How long does incorporation take?', answer: 'Approval usually takes 3-5 working days after submitting all verified documents.' },
    ],
    relatedSlugs: ['one-person-company', 'llp-registration', 'gst-registration'],
  },
  {
    name: 'One Person Company (OPC) Registration',
    slug: 'one-person-company',
    category: 'compliance',
    description:
      'Incorporate an OPC to enjoy corporate limited liability with 100% single-founder ownership and control. Includes SPICe+ filing, nominee designation, PAN, and TAN.',
    shortDescription: 'Ideal corporate structure for solo entrepreneurs and single founders.',
    icon: 'UserCheck',
    documents: [
      'PAN Card of Founder & Nominee',
      'Aadhaar / Passport of Founder & Nominee',
      'Bank Statement / Utility Bill',
      'Registered Office Rent Agreement & Utility Bill',
    ],
    faqs: [
      { question: 'Can one person start an OPC?', answer: 'Yes, a single Indian citizen and resident can register an OPC with one designated nominee.' },
      { question: 'Can an OPC be converted to a Private Limited Company?', answer: 'Yes, voluntary conversion to Private Limited is permitted anytime.' },
    ],
    relatedSlugs: ['private-limited-company', 'conversion-opc-to-pvt', 'gst-registration'],
  },
  {
    name: 'Limited Liability Partnership (LLP) Registration',
    slug: 'llp-registration',
    category: 'compliance',
    description:
      'Register an LLP with Ministry of Corporate Affairs (MCA) to enjoy partner limited liability, low compliance burden, and flexible profit-sharing terms.',
    shortDescription: 'Partnership structure with corporate limited liability.',
    icon: 'Building',
    documents: [
      'PAN & Aadhaar of Designated Partners',
      'Partner Address & Identity Proofs',
      'Registered Office Premises Utility Bill',
      'LLP Agreement Draft',
    ],
    faqs: [
      { question: 'How many partners are needed for an LLP?', answer: 'A minimum of 2 designated partners are required. There is no upper limit on the number of partners.' },
      { question: 'Is audit mandatory for LLP?', answer: 'LLP audit is mandatory only if annual turnover exceeds ₹40 lakhs or partner contribution exceeds ₹25 lakhs.' },
    ],
    relatedSlugs: ['llp-annual-filing', 'partnership-firm', 'conversion-pvt-to-llp'],
  },
  {
    name: 'Partnership Firm Registration',
    slug: 'partnership-firm',
    category: 'compliance',
    description:
      'Register a general Partnership Firm under the Indian Partnership Act, 1932 with professionally drafted Partnership Deed, Registrar of Firms (ROF) filing, and PAN.',
    shortDescription: 'Simple and fast business partnership setup.',
    icon: 'Users',
    documents: [
      'PAN Card of all Partners',
      'Aadhaar Card & Address Proofs',
      'Partnership Deed Draft',
      'Office Address Proof & NOC',
    ],
    faqs: [
      { question: 'Is registration of partnership firm mandatory?', answer: 'While unregistered firms exist, registering with ROF gives legal standing to sue third parties.' },
    ],
    relatedSlugs: ['llp-registration', 'gst-registration', 'contract-drafting'],
  },
  {
    name: 'Section 8 Company (NGO) Registration',
    slug: 'section-8-company',
    category: 'compliance',
    description:
      'Incorporate a Section 8 Non-Profit Organization for charitable, educational, environmental, or social welfare causes with MCA license approval and tax exemptions.',
    shortDescription: 'Non-profit corporate structure for NGOs and trusts.',
    icon: 'Landmark',
    documents: [
      'PAN & Aadhaar of Directors / Members',
      'Objectives & Charitable Work Plan',
      'Draft MOA & AOA with Non-Profit Clauses',
      'Office Address Proof',
    ],
    faqs: [
      { question: 'Can Section 8 company pay dividends?', answer: 'No, profits must be reinvested solely into promoting charitable objectives.' },
    ],
    relatedSlugs: ['private-limited-company', 'annual-filing', 'startup-india-registration'],
  },
  {
    name: 'Producer Company Registration',
    slug: 'producer-company',
    category: 'compliance',
    description:
      'Register a Producer Company under Companies Act for farmers, agriculturalists, and primary producers to aggregate yield and scale commercial operations.',
    shortDescription: 'Corporate entity for agricultural producers and farmers.',
    icon: 'Building2',
    documents: [
      '10 Producer Member PAN & Aadhaar Cards',
      'Agriculture / Producer Status Verification',
      'Registered Office Proof',
    ],
    faqs: [
      { question: 'Minimum members required for Producer Company?', answer: 'Minimum 10 individual producers or 2 producer institutions are required.' },
    ],
    relatedSlugs: ['private-limited-company', 'annual-filing', 'fssai-registration'],
  },
  {
    name: 'MSME / Udyam Registration',
    slug: 'msme-registration',
    category: 'compliance',
    description:
      'Get your MSME / Udyam Registration Certificate online in 1-2 working days. Unlock collateral-free bank loans, 1.5% interest subvention, 50% IP fee subsidy, and delayed payment protection under MSME Samadhaan.',
    shortDescription: 'Essential registration for Indian micro, small, and medium businesses.',
    icon: 'Award',
    documents: [
      'Aadhaar Card of Entrepreneur / Applicant (linked with mobile number for OTP)',
      'PAN Card of Entrepreneur / Proprietor / Firm / Company',
      'GSTIN (if GST registration is applicable)',
      'Bank Account Details (Account Number & IFSC Code)',
      'Business Name, Main Activity, & Investment / Turnover figures',
    ],
    faqs: [
      { question: 'Is Aadhaar mandatory for MSME / Udyam Registration?', answer: 'Yes, the Aadhaar card of the proprietor, managing partner, or authorized director linked with an active mobile number is mandatory for OTP verification.' },
      { question: 'What is the difference between Udyog Aadhaar and Udyam Registration?', answer: 'Udyam Registration replaced Udyog Aadhaar on July 1, 2020. All legacy Udyog Aadhaar registrations must migrate to the new Udyam portal.' },
      { question: 'Do I need to renew my Udyam Registration certificate every year?', answer: 'No, Udyam Registration has lifetime validity. However, investment and turnover figures update automatically via GSTIN and Income Tax Return linkages.' },
      { question: 'What are the main financial benefits of MSME registration?', answer: 'Registered MSMEs get access to collateral-free bank loans (CGTMSE), 1% to 1.5% interest rate rebates, 50% patent/trademark fee subsidies, and protection against delayed payments via MSME Samadhaan.' },
      { question: 'Can trading businesses register under MSME / Udyam?', answer: 'Yes! The Ministry of MSME updated guidelines to allow retail and wholesale traders to register under Udyam for priority sector lending benefits.' },
    ],
    relatedSlugs: ['gst-registration', 'trademark-registration', 'private-limited-company'],
  },
  {
    name: 'Public Limited Company Registration',
    slug: 'public-limited-company',
    category: 'compliance',
    description:
      'Incorporate a Public Limited Company with MCA for large-scale operations, public equity fundraising, and future stock exchange listing.',
    shortDescription: 'Corporate structure for public equity and enterprise scale.',
    icon: 'Building',
    documents: [
      '3 Director PAN & Aadhaar Cards',
      '7 Shareholder Identification Proofs',
      'Registered Office Proof & Utility Bills',
    ],
    faqs: [
      { question: 'Minimum members for Public Limited Company?', answer: 'Requires minimum 3 directors and 7 shareholders.' },
    ],
    relatedSlugs: ['private-limited-company', 'annual-filing', 'dir-3-kyc'],
  },
  {
    name: 'Startup India DPIIT Recognition',
    slug: 'startup-india-registration',
    category: 'compliance',
    description:
      'Get your startup recognized by DPIIT under the Startup India Scheme for 3-year income tax exemption (Section 80-IAC), fast-track patent approval, and government tender benefits.',
    shortDescription: 'Government DPIIT recognition & tax exemptions for startups.',
    icon: 'Award',
    documents: [
      'Certificate of Incorporation / Registration',
      'Pitch Deck / Innovation Description',
      'Letter of Authorization',
    ],
    faqs: [
      { question: 'Who is eligible for DPIIT recognition?', answer: 'Private Limited or LLP entities under 10 years old with annual turnover under ₹100 crores.' },
    ],
    relatedSlugs: ['private-limited-company', 'trademark-registration', 'patent-filing'],
  },

  // ─── REGISTRATIONS & LICENSES ───
  {
    name: 'FSSAI Food License Registration',
    slug: 'fssai-registration',
    category: 'compliance',
    description:
      'Obtain FSSAI Basic, State, or Central Food License for your food business, cloud kitchen, restaurant, or food manufacturing unit.',
    shortDescription: 'Mandatory food safety license for food operators.',
    icon: 'FileCheck',
    documents: [
      'Owner ID & Address Proof',
      'Business Location Electricity Bill',
      'Food Safety Management Plan',
      'List of Food Products',
    ],
    faqs: [
      { question: 'Which FSSAI license do I need?', answer: 'Basic for turnover <₹12L, State for ₹12L-₹20Cr, Central for >₹20Cr or export units.' },
    ],
    relatedSlugs: ['msme-registration', 'gst-registration', 'shop-and-establishment'],
  },
  {
    name: 'Import Export Code (IEC) Registration',
    slug: 'import-export-code',
    category: 'compliance',
    description:
      'Get 10-digit IEC code from DGFT (Directorate General of Foreign Trade) to import or export goods and services worldwide.',
    shortDescription: 'Mandatory DGFT code for cross-border trade.',
    icon: 'Globe',
    documents: [
      'PAN Card of Entity / Individual',
      'Cancelled Cheque / Bank Certificate',
      'Address Proof of Business',
    ],
    faqs: [
      { question: 'Does IEC expire?', answer: 'IEC is valid for lifetime but requires mandatory annual online update on DGFT portal between April & June.' },
    ],
    relatedSlugs: ['gst-lut-filing', 'gst-registration', 'private-limited-company'],
  },
  {
    name: 'ISO Certification',
    slug: 'iso-certification',
    category: 'compliance',
    description:
      'Get ISO 9001:2015, ISO 27001, or ISO 14001 certification to enhance business credibility, win government tenders, and standardize internal quality processes.',
    shortDescription: 'International quality standard certification.',
    icon: 'ShieldCheck',
    documents: [
      'Business Registration Certificate',
      'Company Profile & Process Flow',
      'Copy of Purchase / Sales Invoices',
    ],
    faqs: [
      { question: 'How long is ISO valid?', answer: 'Valid for 3 years with annual surveillance audits.' },
    ],
    relatedSlugs: ['msme-registration', 'trademark-registration', 'fssai-registration'],
  },
  {
    name: 'Shop & Establishment License',
    slug: 'shop-and-establishment',
    category: 'compliance',
    description:
      'Obtain local municipal Shop & Establishment registration for your office, retail store, or commercial premises under State Labor Department regulations.',
    shortDescription: 'Local commercial trade license.',
    icon: 'Home',
    documents: [
      'Premises Electricity Bill & Rental Deed',
      'Owner PAN & Aadhaar Card',
      'Employee Details & Photo of Establishment',
    ],
    faqs: [
      { question: 'Is Shop & Establishment mandatory for opening a bank account?', answer: 'Yes, most banks require Shop & Establishment as business address proof for current accounts.' },
    ],
    relatedSlugs: ['msme-registration', 'gst-registration', 'epf-esi-registration'],
  },
  {
    name: 'EPF & ESI Registration',
    slug: 'epf-esi-registration',
    category: 'compliance',
    description:
      'Register your company with EPFO (Employee Provident Fund) and ESIC (Employee State Insurance) for employee social security and labor compliance.',
    shortDescription: 'Employee provident fund & health insurance registration.',
    icon: 'Users',
    documents: [
      'Certificate of Incorporation / Registration',
      'PAN & Address Proof of Business',
      'List of Employees with Salary Details',
      'Bank Account Proof',
    ],
    faqs: [
      { question: 'When is EPF registration mandatory?', answer: 'Mandatory when employee strength reaches 20 or more.' },
    ],
    relatedSlugs: ['professional-tax-registration', 'shop-and-establishment', 'annual-filing'],
  },
  {
    name: 'Professional Tax License',
    slug: 'professional-tax-registration',
    category: 'compliance',
    description:
      'Register for Professional Tax Registration Certificate (PTRC) and Enrollment Certificate (PTEC) with State Tax Department.',
    shortDescription: 'State-level employer & employee professional tax registration.',
    icon: 'FileText',
    documents: [
      'Business Incorporation Certificate',
      'PAN of Entity & Directors / Partners',
      'Office Address Proof',
    ],
    faqs: [
      { question: 'Who needs Professional Tax registration?', answer: 'Applicable to businesses and self-employed professionals operating in states levying PT.' },
    ],
    relatedSlugs: ['epf-esi-registration', 'gst-registration', 'shop-and-establishment'],
  },
  {
    name: 'Digital Signature Certificate (DSC)',
    slug: 'digital-signature-certificate',
    category: 'compliance',
    description:
      'Get Class-3 Digital Signature Certificate (DSC) with USB Token for ROC filing, e-Tendering, GST filing, and Income Tax returns.',
    shortDescription: 'Class-3 USB Token DSC for MCA & e-Tenders.',
    icon: 'Lock',
    documents: [
      'Applicant PAN Card',
      'Aadhaar Card',
      'Passport Photograph',
      'Video Verification Completed via Mobile',
    ],
    faqs: [
      { question: 'How long does DSC approval take?', answer: 'Issued within 2-4 hours after video and e-KYC verification.' },
    ],
    relatedSlugs: ['dir-3-kyc', 'annual-filing', 'private-limited-company'],
  },

  // ─── GST SERVICES ───
  {
    name: 'New GST Registration',
    slug: 'gst-registration',
    category: 'compliance',
    description:
      'Get 15-digit GSTIN assigned within 3 working days. Complete GST registration filing on government GST portal with ARN tracking.',
    shortDescription: 'Obtain 15-digit GSTIN for your business in 3 days.',
    icon: 'FileCheck',
    documents: [
      'PAN of Proprietor / Company / LLP',
      'Aadhaar of Authorized Signatory',
      'Premises Address Proof (Electricity Bill / Rent Agreement)',
      'Bank Account Details / Cancelled Cheque',
    ],
    faqs: [
      { question: 'What is the turnover threshold for GST?', answer: 'Mandatory for goods sales >₹40L (₹20L for special states) and services >₹20L (₹10L for special states).' },
    ],
    relatedSlugs: ['gst-return-filing', 'gst-lut-filing', 'msme-registration'],
  },
  {
    name: 'GST Return Filing',
    slug: 'gst-return-filing',
    category: 'compliance',
    description:
      'Monthly & Quarterly GSTR-1 and GSTR-3B return filing with automated ITC 2B reconciliation to claim maximum tax credits without notice risks.',
    shortDescription: 'Monthly & quarterly GSTR-1 / 3B filing with ITC 2B reconciliation.',
    icon: 'FileSpreadsheet',
    documents: [
      'Sales Invoices & Purchase Bills',
      'Bank Statements',
      'GSTR-2A / 2B Reconciliation Data',
    ],
    faqs: [
      { question: 'What are the due dates for GST returns?', answer: 'GSTR-1 by 11th/13th and GSTR-3B by 20th/22nd/24th of following month.' },
    ],
    relatedSlugs: ['gst-registration', 'gstr-9-annual-return', 'gst-audit'],
  },
  {
    name: 'GST Annual Return (GSTR-9)',
    slug: 'gstr-9-annual-return',
    category: 'compliance',
    description:
      'Preparation and filing of GSTR-9 (Annual Return) and GSTR-9C (Reconciliation Statement) with thorough ITC audit and turn-over verification.',
    shortDescription: 'Yearly GST reconciliation and annual return filing.',
    icon: 'BarChart3',
    documents: [
      'Audited Financial Statements',
      'All GSTR-1 & GSTR-3B Filings of FY',
      'GSTR-2A / 2B Year-End Report',
    ],
    faqs: [
      { question: 'Is GSTR-9 mandatory for all taxpayers?', answer: 'Mandatory for taxpayers with annual aggregate turnover exceeding ₹2 crores.' },
    ],
    relatedSlugs: ['gst-return-filing', 'gst-audit', 'annual-filing'],
  },
  {
    name: 'GST Letter of Undertaking (LUT) Filing',
    slug: 'gst-lut-filing',
    category: 'compliance',
    description:
      'File Form GST RFD-11 (LUT) to export goods or services without paying IGST upfront. Annual mandatory filing for all exporters.',
    shortDescription: 'Export goods and services with 0% IGST upfront.',
    icon: 'Globe',
    documents: [
      'GSTIN Certificate',
      'PAN Card of Entity',
      'Export Invoices / IEC Copy',
    ],
    faqs: [
      { question: 'Is LUT required every financial year?', answer: 'Yes, LUT must be filed afresh before April 1 for every financial year.' },
    ],
    relatedSlugs: ['import-export-code', 'gst-registration', 'gst-return-filing'],
  },
  {
    name: 'GST Notice Reply Assistance',
    slug: 'gst-notice-reply',
    category: 'compliance',
    description:
      'Legal response drafting and representation for GST notices under Section 61, 73, or 74 (ITC mismatch, GSTR-3B vs 2B discrepancies).',
    shortDescription: 'Legal drafting & representation for GST department notices.',
    icon: 'Scale',
    documents: [
      'Copy of GST Notice Received',
      'GSTR-3B, GSTR-1 & 2B Reports',
      'Reconciliation Working Sheet',
    ],
    faqs: [
      { question: 'Time limit to reply to a GST notice?', answer: 'Usually 15 to 30 days from date of notice receipt.' },
    ],
    relatedSlugs: ['gst-return-filing', 'gst-cancellation-revocation', 'gst-audit'],
  },
  {
    name: 'GST Cancellation & Revocation',
    slug: 'gst-cancellation-revocation',
    category: 'compliance',
    description:
      'File for voluntary GST registration cancellation or revoke suo-moto cancelled GSTIN by filing pending returns and revocation application.',
    shortDescription: 'Cancel or restore cancelled GST registration.',
    icon: 'XCircle',
    documents: [
      'GSTIN Login Credentials',
      'Pending Return Data',
      'Reason for Cancellation / Revocation',
    ],
    faqs: [
      { question: 'Can a cancelled GST registration be restored?', answer: 'Yes, by filing revocation Form REG-21 within prescribed time limits.' },
    ],
    relatedSlugs: ['gst-registration', 'gst-notice-reply', 'gst-return-filing'],
  },
  {
    name: 'GST Audit & Reconciliation',
    slug: 'gst-audit',
    category: 'compliance',
    description:
      'Comprehensive GST audit to identify ineligible ITC claims, tax rate mismatches, and compliance gaps before department audits.',
    shortDescription: 'Detailed internal GST audit & ITC credit optimization.',
    icon: 'SearchCheck',
    documents: [
      'Yearly Trial Balance',
      'Sales & Purchase Registers',
      'GSTR-1, 3B & 2B Files',
    ],
    faqs: [
      { question: 'Why perform a GST audit?', answer: 'Prevents heavy tax penalties, interest, and demand notices during official GST audits.' },
    ],
    relatedSlugs: ['gstr-9-annual-return', 'gst-return-filing', 'tax-audit-services'],
  },

  // ─── INCOME TAX & TAXATION ───
  {
    name: 'Personal Income Tax Return (ITR)',
    slug: 'itr-filing-individuals',
    category: 'accounting',
    description:
      'File ITR-1, ITR-2, or ITR-3 for salaried professionals, capital gains traders, and freelancers. Maximize tax savings under new vs old regime.',
    shortDescription: 'E-file ITR for salaried individuals, capital gains & freelancers.',
    icon: 'FileText',
    documents: [
      'Form 16 / Form 16A',
      'Annual Information Statement (AIS) / TIS',
      'Bank Statements (FY)',
      'Investment Proofs (80C, 80D)',
    ],
    faqs: [
      { question: 'Due date for individual ITR filing?', answer: 'July 31 of assessment year for non-audit cases.' },
    ],
    relatedSlugs: ['itr-filing-business', 'tds-filing', 'tax-audit-services'],
  },
  {
    name: 'Business Income Tax Return (ITR-3 / ITR-4 / ITR-6)',
    slug: 'itr-filing-business',
    category: 'accounting',
    description:
      'File corporate & business income tax returns (ITR-4 presumptive taxation or ITR-6 corporate returns) with expert CA tax computation.',
    shortDescription: 'Income tax returns for proprietorships, LLPs & companies.',
    icon: 'Briefcase',
    documents: [
      'Audited Financial Statements / P&L',
      'Form 26AS / AIS Statement',
      'Tax Audit Report (if applicable)',
    ],
    faqs: [
      { question: 'Due date for corporate & audit ITR filing?', answer: 'October 31 of assessment year.' },
    ],
    relatedSlugs: ['tax-audit-services', 'financial-statements', 'income-tax-notice-reply'],
  },
  {
    name: 'Tax Audit Services (Section 44AB)',
    slug: 'tax-audit-services',
    category: 'accounting',
    description:
      'Statutory Tax Audit under Section 44AB of Income Tax Act. Form 3CA/3CB and Form 3CD preparation & online CA e-filing.',
    shortDescription: 'Section 44AB tax audit for businesses exceeding turnover thresholds.',
    icon: 'ClipboardCheck',
    documents: [
      'Books of Accounts & Ledger Summaries',
      'Bank Statements & Tax Payment Receipts',
      'Fixed Asset Register',
    ],
    faqs: [
      { question: 'When is Tax Audit mandatory?', answer: 'Mandatory for business turnover >₹1 crore (>₹10 crores if 95%+ transactions are digital) and professional receipts >₹50 lakhs.' },
    ],
    relatedSlugs: ['itr-filing-business', 'financial-statements', 'bookkeeping-services'],
  },
  {
    name: 'Income Tax Notice Reply Assistance',
    slug: 'income-tax-notice-reply',
    category: 'accounting',
    description:
      'Expert CA representation and response drafting for Income Tax notices under Section 143(1), 142(1), 148, or 139(9) defective return notices.',
    shortDescription: 'Professional CA drafting for Income Tax department notices.',
    icon: 'Scale',
    documents: [
      'Copy of Income Tax Notice Received',
      'Copy of Filed ITR & Computation',
      'Supporting Proofs & Bank Statements',
    ],
    faqs: [
      { question: 'What to do if I receive a 143(1) intimation?', answer: 'Our CAs check if there is a tax demand discrepancy and file online response or rectification under 154.' },
    ],
    relatedSlugs: ['itr-filing-business', 'itr-filing-individuals', 'tax-audit-services'],
  },

  // ─── TRADEMARK & IP SPECIALTIES ───
  {
    name: 'Trademark Objection Reply',
    slug: 'trademark-objection',
    category: 'legal',
    description:
      'Legal drafting and submission of reply to Trademark Examination Report issued by IP India for objections under Section 9 or Section 11.',
    shortDescription: 'Legal response drafting for Section 9 & 11 TM objections.',
    icon: 'FileText',
    documents: [
      'Copy of TM Examination Report',
      'Trademark Application Number',
      'User Proof (Invoices, Social Media, Ads showing early brand usage)',
    ],
    faqs: [
      { question: 'Time limit to respond to TM examination report?', answer: 'Must be filed within 30 days from date of receiving examination report.' },
    ],
    relatedSlugs: ['trademark-registration', 'trademark-hearing', 'copyright-registration'],
  },
  {
    name: 'Trademark Hearing Representation',
    slug: 'trademark-hearing',
    category: 'legal',
    description:
      'Representation by Trademark Attorneys at IP India Hearing Officer tribunals to defend mark approval after objection reply.',
    shortDescription: 'Attorney representation at IP India show-cause hearings.',
    icon: 'Scale',
    documents: [
      'Copy of Hearing Notice',
      'Original Application & Examination Reply',
      'Written Submissions & Legal Precedents',
    ],
    faqs: [
      { question: 'Will my physical presence be required at hearing?', answer: 'No, our registered Trademark Attorney represents you online/physically at the tribunal.' },
    ],
    relatedSlugs: ['trademark-objection', 'trademark-registration', 'corporate-advisory'],
  },

  // ─── EXISTING ACCOUNTING & COMPLIANCE SLUGS ───
  {
    name: 'Bookkeeping Services',
    slug: 'bookkeeping-services',
    category: 'accounting',
    description:
      'Professional bookkeeping services to keep your financial records accurate, organized, and compliant. Day-to-day ledger management, bank reconciliations, and financial reporting.',
    shortDescription: 'Accurate financial records and ledger management for your business.',
    icon: 'BookOpen',
    documents: ['Bank Statements', 'Purchase & Sales Invoices', 'Expense Receipts', 'PAN Card & GST Certificate'],
    faqs: [{ question: 'What software do you use?', answer: 'Tally Prime, Zoho Books, QuickBooks, and custom ERPs.' }],
    relatedSlugs: ['tds-filing', 'financial-statements', 'startup-financial-advisory'],
  },
  {
    name: 'TDS Filing',
    slug: 'tds-filing',
    category: 'accounting',
    description:
      'Timely and accurate TDS return filing services. Quarterly returns (Form 24Q, 26Q, 27Q) with zero penalty guarantee.',
    shortDescription: 'Quarterly TDS computation, deduction, and return filing.',
    icon: 'FileText',
    documents: ['TAN Number', 'PAN of Deductees', 'Challan Payment Proofs'],
    faqs: [{ question: 'When is TDS due?', answer: 'Quarterly: Q1 (Jul 31), Q2 (Oct 31), Q3 (Jan 31), Q4 (May 31).' }],
    relatedSlugs: ['bookkeeping-services', 'financial-statements', 'annual-filing'],
  },
  {
    name: 'Project Reports',
    slug: 'project-reports',
    category: 'accounting',
    description:
      'Comprehensive project report preparation for bank loans, MUDRA loans, MSME subsidies, and investor pitches with 5-year financial projections.',
    shortDescription: 'Detailed project reports for bank loans & subsidies.',
    icon: 'BarChart3',
    documents: ['Business Proposal Brief', 'Promoter KYC', 'Machinery & Land Quotations'],
    faqs: [{ question: 'How fast can I get report?', answer: 'Delivered in 5-7 working days.' }],
    relatedSlugs: ['startup-financial-advisory', 'bookkeeping-services', 'financial-statements'],
  },
  {
    name: 'Financial Statements',
    slug: 'financial-statements',
    category: 'accounting',
    description:
      'Preparation of Balance Sheet, Profit & Loss Account, Cash Flow Statement, and Notes to Accounts compliant with Companies Act Schedule III.',
    shortDescription: 'Balance Sheet, P&L, Cash Flow — fully Ind AS compliant.',
    icon: 'TrendingUp',
    documents: ['Trial Balance', 'Bank Statements', 'Fixed Asset Register'],
    faqs: [{ question: 'Are these audit ready?', answer: 'Yes, fully compliant with Ind AS and Schedule III.' }],
    relatedSlugs: ['bookkeeping-services', 'annual-filing', 'tds-filing'],
  },
  {
    name: 'Startup Financial Advisory',
    slug: 'startup-financial-advisory',
    category: 'accounting',
    description:
      'End-to-end financial modeling, cash flow forecasting, valuation reports, and fundraising advisory for early-stage startups.',
    shortDescription: 'Financial modeling, tax planning & compliance for startups.',
    icon: 'Rocket',
    documents: ['Pitch Deck', 'Incorporation Certificate', 'Financial Projections'],
    faqs: [{ question: 'Do you prepare valuation reports?', answer: 'Yes, CA certified valuation reports for angel/VC funding.' }],
    relatedSlugs: ['project-reports', 'bookkeeping-services', 'financial-statements'],
  },

  // ─── CORPORATE COMPLIANCE SLUGS ───
  {
    name: 'Annual Filing',
    slug: 'annual-filing',
    category: 'compliance',
    description:
      'Complete annual filing services for Companies and OPCs. Filing Form AOC-4 and MGT-7 with Registrar of Companies (ROC).',
    shortDescription: 'AOC-4, MGT-7 & complete annual ROC compliance.',
    icon: 'CalendarCheck',
    documents: ['Financial Statements', 'Director Details', 'AGM Minutes', 'DSC'],
    faqs: [{ question: 'What is penalty for late filing?', answer: '₹100 per day per form delay.' }],
    relatedSlugs: ['aoc-4-filing', 'mgt-7-filing', 'dir-3-kyc'],
  },
  {
    name: 'DIR-3 KYC',
    slug: 'dir-3-kyc',
    category: 'compliance',
    description:
      'Annual Director KYC filing to keep your Director Identification Number (DIN) active with zero penalty.',
    shortDescription: 'Annual Director KYC to keep your DIN active.',
    icon: 'UserCheck',
    documents: ['Director PAN & Aadhaar', 'Mobile & Email OTP', 'DSC'],
    faqs: [{ question: 'Due date?', answer: 'September 30 annually.' }],
    relatedSlugs: ['annual-filing', 'adt-1-filing', 'director-services'],
  },
  {
    name: 'ADT-1 Filing',
    slug: 'adt-1-filing',
    category: 'compliance',
    description:
      'Filing Form ADT-1 with ROC for statutory auditor appointment within 15 days of AGM.',
    shortDescription: 'Statutory auditor appointment filing with ROC.',
    icon: 'ClipboardCheck',
    documents: ['Auditor Consent Letter', 'Board Resolution', 'DSC'],
    faqs: [{ question: 'Filing timeline?', answer: 'Within 15 days of AGM.' }],
    relatedSlugs: ['annual-filing', 'mgt-14-filing', 'dir-3-kyc'],
  },
  {
    name: 'AOC-4 Filing',
    slug: 'aoc-4-filing',
    category: 'compliance',
    description:
      'Filing of Form AOC-4 with ROC for annual financial statements submission.',
    shortDescription: 'Annual financial statement filing with ROC.',
    icon: 'FileSpreadsheet',
    documents: ['Audited Accounts', 'Board Report', 'DSC'],
    faqs: [{ question: 'Due date?', answer: '30 days from AGM date.' }],
    relatedSlugs: ['annual-filing', 'mgt-7-filing', 'financial-statements'],
  },
  {
    name: 'MGT-7 Filing',
    slug: 'mgt-7-filing',
    category: 'compliance',
    description:
      'Filing Form MGT-7 / MGT-7A annual return with ROC containing shareholder and director details.',
    shortDescription: 'Annual return filing with complete company details.',
    icon: 'FileText',
    documents: ['Shareholder List', 'Meeting Minutes', 'DSC'],
    faqs: [{ question: 'Due date?', answer: '60 days from AGM date.' }],
    relatedSlugs: ['annual-filing', 'aoc-4-filing', 'dir-3-kyc'],
  },
  {
    name: 'Company Strike Off',
    slug: 'strike-off-company',
    category: 'compliance',
    description:
      'Voluntary closure of defunct or non-operational company via Form STK-2 filing with ROC.',
    shortDescription: 'Close your inactive company through ROC strike off.',
    icon: 'XCircle',
    documents: ['Statement of Accounts', 'Indemnity Bond', 'NOC'],
    faqs: [{ question: 'Timeline?', answer: 'Takes 3-6 months.' }],
    relatedSlugs: ['annual-filing', 'llp-annual-filing', 'dir-3-kyc'],
  },
  {
    name: 'INC-20A Filing',
    slug: 'inc-20a-filing',
    category: 'compliance',
    description:
      'Form INC-20A Commencement of Business declaration mandatory within 180 days of incorporation.',
    shortDescription: 'Declaration of commencement of business after incorporation.',
    icon: 'Flag',
    documents: ['Bank Statement with Capital Receipt', 'Registered Office Proof', 'DSC'],
    faqs: [{ question: 'Penalty if missed?', answer: '₹50,000 fine plus ₹1,000/day on directors.' }],
    relatedSlugs: ['annual-filing', 'dir-3-kyc', 'adt-1-filing'],
  },
  {
    name: 'DPT-3 Filing',
    slug: 'dpt-3-filing',
    category: 'compliance',
    description:
      'Filing Form DPT-3 annual return for outstanding loans and deposits with ROC.',
    shortDescription: 'Annual return of deposits and outstanding loan disclosure.',
    icon: 'Landmark',
    documents: ['Loan Statements', 'Auditor Certificate', 'DSC'],
    faqs: [{ question: 'Due date?', answer: 'June 30 annually.' }],
    relatedSlugs: ['annual-filing', 'mgt-14-filing', 'financial-statements'],
  },
  {
    name: 'MGT-14 Filing',
    slug: 'mgt-14-filing',
    category: 'compliance',
    description:
      'Registering special and board resolutions with ROC within 30 days of passing.',
    shortDescription: 'Register special & board resolutions with ROC.',
    icon: 'Stamp',
    documents: ['Certified Resolution Copy', 'Explanatory Statement', 'DSC'],
    faqs: [{ question: 'Timeline?', answer: 'Within 30 days of resolution.' }],
    relatedSlugs: ['annual-filing', 'adt-1-filing', 'director-services'],
  },
  {
    name: 'Director Services',
    slug: 'director-services',
    category: 'compliance',
    description:
      'Appointment, resignation, DIN allotment, and DIR-3 KYC for corporate directors.',
    shortDescription: 'DIN allotment, appointment, resignation & KYC for directors.',
    icon: 'Users',
    documents: ['Director PAN & Aadhaar', 'DIR-2 Consent', 'DSC'],
    faqs: [{ question: 'Filing form?', answer: 'Form DIR-12 with ROC.' }],
    relatedSlugs: ['dir-3-kyc', 'annual-filing', 'mgt-14-filing'],
  },
  {
    name: 'LLP Annual Filing',
    slug: 'llp-annual-filing',
    category: 'compliance',
    description:
      'Annual Form-8 & Form-11 compliance for LLPs with MCA portal.',
    shortDescription: 'Form-8, Form-11 & complete LLP annual compliance.',
    icon: 'Building',
    documents: ['Statement of Accounts', 'Partner Contribution List', 'DSC'],
    faqs: [{ question: 'Due dates?', answer: 'Form-11 (May 30), Form-8 (Oct 30).' }],
    relatedSlugs: ['llp-form-8', 'llp-form-11', 'annual-filing'],
  },
  {
    name: 'LLP Form-8 Filing',
    slug: 'llp-form-8',
    category: 'compliance',
    description:
      'Filing Statement of Account & Solvency (Form-8) for LLPs with MCA by October 30.',
    shortDescription: 'Statement of Account & Solvency for your LLP.',
    icon: 'FileCheck',
    documents: ['Accounts Summary', 'Solvency Statement', 'DSC'],
    faqs: [{ question: 'Due date?', answer: 'October 30 annually.' }],
    relatedSlugs: ['llp-annual-filing', 'llp-form-11', 'bookkeeping-services'],
  },
  {
    name: 'LLP Form-11 Filing',
    slug: 'llp-form-11',
    category: 'compliance',
    description:
      'Filing Annual Return (Form-11) for LLPs with MCA by May 30.',
    shortDescription: 'Annual return with partner and contribution details.',
    icon: 'FileText',
    documents: ['Partner List', 'Contribution Data', 'DSC'],
    faqs: [{ question: 'Due date?', answer: 'May 30 annually.' }],
    relatedSlugs: ['llp-annual-filing', 'llp-form-8', 'annual-filing'],
  },
  {
    name: 'OPC to Private Limited Conversion',
    slug: 'conversion-opc-to-pvt',
    category: 'compliance',
    description:
      'Voluntary or mandatory conversion of OPC into Private Limited Company.',
    shortDescription: 'Convert your OPC to Private Limited Company.',
    icon: 'ArrowRightLeft',
    documents: ['Board Resolution', 'MOA & AOA Amendments', 'Shareholder Consent'],
    faqs: [{ question: 'Duration?', answer: '15-20 working days.' }],
    relatedSlugs: ['conversion-pvt-to-llp', 'annual-filing', 'director-services'],
  },
  {
    name: 'Private Limited to LLP Conversion',
    slug: 'conversion-pvt-to-llp',
    category: 'compliance',
    description:
      'Converting Private Limited entity into LLP for tax efficiency and lower compliance.',
    shortDescription: 'Convert your Pvt Ltd Company to LLP structure.',
    icon: 'Repeat',
    documents: ['Shareholder NOC', 'Creditor Approval', 'Assets Statement'],
    faqs: [{ question: 'Key benefit?', answer: 'Lower compliance & dividend tax savings.' }],
    relatedSlugs: ['conversion-opc-to-pvt', 'llp-annual-filing', 'annual-filing'],
  },

  // ─── LEGAL & IP SLUGS ───
  {
    name: 'Corporate Advisory',
    slug: 'corporate-advisory',
    category: 'legal',
    description:
      'Strategic legal counsel, corporate restructuring, M&A due diligence, and governance advisory.',
    shortDescription: 'Strategic business structuring & governance advisory.',
    icon: 'Briefcase',
    documents: ['Company Documents', 'Shareholding Pattern', 'Legal Query Brief'],
    faqs: [{ question: 'Who provides advisory?', answer: 'Senior Corporate Advocates & CS.' }],
    relatedSlugs: ['contract-drafting', 'startup-financial-advisory', 'trademark-registration'],
  },
  {
    name: 'Contract & Agreement Drafting',
    slug: 'contract-drafting',
    category: 'legal',
    description:
      'Custom drafting & legal vetting of NDAs, Employment Contracts, Vendor Deeds, MoUs & Shareholder Agreements.',
    shortDescription: 'Employment, vendor, NDA & partnership contract drafting.',
    icon: 'PenTool',
    documents: ['Commercial Terms Draft', 'Party Identification', 'Draft Notes'],
    faqs: [{ question: 'Turnaround?', answer: '3-5 business days.' }],
    relatedSlugs: ['corporate-advisory', 'will-drafting', 'property-verification'],
  },
  {
    name: 'Trademark Registration',
    slug: 'trademark-registration',
    category: 'legal',
    description:
      'Complete trademark search, TM application filing, and registration under Trademarks Act 1999.',
    shortDescription: 'Protect your brand with trademark registration.',
    icon: 'Shield',
    documents: ['Logo Artwork', 'Applicant ID & PAN', 'TM User Affidavit'],
    faqs: [{ question: 'Can I use TM symbol?', answer: 'Yes, immediately upon receiving application filing receipt.' }],
    relatedSlugs: ['copyright-registration', 'patent-filing', 'corporate-advisory'],
  },
  {
    name: 'Copyright Registration',
    slug: 'copyright-registration',
    category: 'legal',
    description:
      'Legal copyright protection for software code, literary works, logos, designs, and creative media.',
    shortDescription: 'Protect your creative works with copyright registration.',
    icon: 'Copyright',
    documents: ['Copies of Creative Work', 'Author Declaration', 'ID Proof'],
    faqs: [{ question: 'Validity?', answer: 'Author lifetime plus 60 years.' }],
    relatedSlugs: ['trademark-registration', 'patent-filing', 'contract-drafting'],
  },
  {
    name: 'Patent Filing',
    slug: 'patent-filing',
    category: 'legal',
    description:
      'Provisional and complete patent specification drafting and patent office prosecution for inventions.',
    shortDescription: 'Protect your inventions with patent registration.',
    icon: 'Lightbulb',
    documents: ['Invention Brief & Drawings', 'Prior Art Search', 'Inventor ID'],
    faqs: [{ question: 'Patent protection period?', answer: '20 years from filing date.' }],
    relatedSlugs: ['trademark-registration', 'copyright-registration', 'corporate-advisory'],
  },
  {
    name: 'Civil Litigation',
    slug: 'civil-litigation',
    category: 'legal',
    description:
      'Court representation for commercial disputes, recovery suits, breach of contract, and property claims.',
    shortDescription: 'Property disputes, recovery suits & civil court representation.',
    icon: 'Scale',
    documents: ['Case History', 'Contracts / Invoices', 'Court Notices'],
    faqs: [{ question: 'Courts covered?', answer: 'District & High Courts across Telangana.' }],
    relatedSlugs: ['arbitration-services', 'property-verification', 'contract-drafting'],
  },
  {
    name: 'Arbitration Services',
    slug: 'arbitration-services',
    category: 'legal',
    description:
      'Alternative dispute resolution (ADR) and legal representation in commercial arbitration proceedings.',
    shortDescription: 'Alternative dispute resolution & arbitration representation.',
    icon: 'Scale',
    documents: ['Arbitration Clause Agreement', 'Dispute Evidence', 'Notices'],
    faqs: [{ question: 'Key benefit?', answer: 'Confidential and faster than traditional litigation.' }],
    relatedSlugs: ['civil-litigation', 'contract-drafting', 'corporate-advisory'],
  },
  {
    name: 'Property Verification',
    slug: 'property-verification',
    category: 'legal',
    description:
      '30-year title search, encumbrance check, RERA approval verification, and legal opinion report for property buying.',
    shortDescription: 'Title search, encumbrance check & legal opinion for properties.',
    icon: 'Home',
    documents: ['Sale Deed', 'EC Copy', 'Tax Receipts', 'Approved Plan'],
    faqs: [{ question: 'Time required?', answer: '7-10 working days.' }],
    relatedSlugs: ['civil-litigation', 'will-drafting', 'contract-drafting'],
  },
  {
    name: 'Will Drafting',
    slug: 'will-drafting',
    category: 'legal',
    description:
      'Drafting legally binding wills for smooth succession of movable, immovable, and digital assets.',
    shortDescription: 'Legally valid will drafting for asset distribution.',
    icon: 'FileText',
    documents: ['Asset List', 'Beneficiary Details', 'Witness IDs'],
    faqs: [{ question: 'Is registration mandatory?', answer: 'Not mandatory, but recommended for extra legal validity.' }],
    relatedSlugs: ['property-verification', 'contract-drafting', 'civil-litigation'],
  },
  {
    name: 'Divorce Petition',
    slug: 'divorce-petition',
    category: 'legal',
    description:
      'Confidential legal filing for mutual consent or contested divorce petitions in family courts.',
    shortDescription: 'Mutual consent & contested divorce petition filing.',
    icon: 'Users',
    documents: ['Marriage Certificate', 'Address Proofs', 'Petition Brief'],
    faqs: [{ question: 'Mutual divorce duration?', answer: '6 to 18 months.' }],
    relatedSlugs: ['civil-litigation', 'will-drafting', 'property-verification'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[];
}
