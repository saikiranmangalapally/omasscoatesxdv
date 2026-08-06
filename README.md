# OM Associates & Co. — Corporate Compliance & Legal Advisory Platform

A modern, high-performance web platform built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion** for **OM Associates & Co.**, providing business registration, GST compliance, tax filings, legal advisory, and audit services.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [Swiper](https://swiperjs.com/)
- **Form Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
om-associates/
├── public/                # Static public assets, icons, and logos
├── src/
│   ├── app/               # Next.js App Router (pages, API routes, layout, dynamic [slug] routes)
│   ├── components/        # UI components
│   │   ├── common/        # Shared components (e.g. WhatsApp icon)
│   │   ├── home/          # Homepage sections (Hero, Services, Compliance Widget, CTA)
│   │   ├── layout/        # Site Header, Footer, Navigation, Mobile & Mega Menu
│   │   ├── service/       # Service page templates and dynamic section blocks
│   │   └── ui/            # Common UI elements (ScrollToTop, CountUp, StickyBar)
│   ├── data/              # Service definitions, navigation menus, testimonials data
│   ├── lib/               # Utility functions (SEO schemas, animations, rate limiting)
│   └── middleware.ts      # Edge middleware (request security & headers)
├── .gitignore             # Git ignore rules for Next.js & Vercel
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vercel.json            # Vercel deployment configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: v18.x or later
- **npm**: v9.x or later

### Installation

```bash
# Clone the repository
git clone <your-github-repo-url>
cd om-associates

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🏗️ Production Build

To test the production build locally:

```bash
# Generate static & server pages
npm run build

# Start production server
npm run start
```

---

## 🌐 Deploying to Vercel

### Option 1: Automatic GitHub Integration (Recommended)

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: OM Associates platform"
   git branch -M main
   git remote add origin https://github.com/<your-username>/om-associates.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **Add New** > **Project** and import your GitHub repository (`om-associates`).
4. Select **Next.js** framework preset (detected automatically).
5. Click **Deploy**.

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```

---

## 📄 License

Internal application for OM Associates & Co. All rights reserved.
