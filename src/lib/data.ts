export const profile = {
  name: "Mohsin Javed",
  title: "Software Engineer",
  subtitle: "Full-Stack Developer",
  location: "Lahore, Pakistan",
  email: "mohsinjavedpc@gmail.com",
  phone: "+92 309 1948615",
  github: "https://github.com/Mohsin-Javed48",
  linkedin: "https://www.linkedin.com/in/mohsin-javed-b8a44641a/",
  resumeUrl: "/resume.pdf",
  summary:
    "Software Engineer with 1+ year of professional experience building full-stack web applications in React.js, Next.js, Nest.js, Node.js, and PostgreSQL. Skilled at developing responsive UI components and integrating REST APIs and third-party services to ship production features for order management, point-of-sale, and government benefits platforms in cross-functional Agile teams.",
  taglineWords: ["React.js", "Next.js", "Nest.js", "Node.js", "PostgreSQL"],
};

export const quickFacts = [
  { label: "Location", value: "Lahore, Pakistan" },
  { label: "Current Role", value: "Software Engineer @ FrontendEx" },
  { label: "Experience", value: "1+ Year, Full-Stack" },
  { label: "Education", value: "B.S. Information Technology, University of the Punjab" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "FrontendEx (Remote)",
    period: "Jul 2025 – Present",
    points: [
      "Build and maintain production features for client web applications in Next.js, React.js, and Nest.js, delivering reusable UI components across concurrent projects.",
      "Integrate REST APIs with CMS-driven, multi-tenant configurations, including multilingual content rendering and dynamic token resolution at render time.",
      "Collaborate with cross-functional design, backend, and QA teams to scope, develop, and deploy scalable web applications on schedule.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "IREG-IT",
    period: "Apr 2025 – Jun 2025",
    points: [
      "Contributed to end-to-end development of web modules using React.js on the frontend and Django on the backend, delivering responsive interfaces wired to backend APIs.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  period: string;
  stack: string[];
  points: string[];
  description?: string;
  approach?: string[];
  liveUrl?: string;
  images?: string[];
  credit?: string;
  repoUrl?: string;
  hasDetailPage?: boolean;
};

export const projects: Project[] = [
  {
    slug: "unified-pos",
    name: "Unified POS",
    tagline: "AI-Assisted Point of Sale System",
    period: "Jan 2026 – Mar 2026",
    stack: ["Next.js", "Nest.js", "Supabase", "Redis", "Llama API"],
    credit: "Professional Project – Developed at FrontendEx",
    images: [
      "/projects/unified-pos/xpos-1-login.png",
      "/projects/unified-pos/xpos-2-open-register.png",
      "/projects/unified-pos/xpos-3-menu.png",
      "/projects/unified-pos/xpos-4-products.png",
      "/projects/unified-pos/xpos-5-dashboard.png",
    ],
    description:
      "A point-of-sale platform built for retail stores that need to keep selling even when the internet or the central server drops — a local-first desktop client that syncs across registers on the store's own network and reconciles with the cloud once connectivity returns, alongside a web admin dashboard, a mobile companion app, and AI-assisted inventory insights.",
    approach: [
      "Architected as a local-first desktop client that keeps selling, printing receipts, and tracking stock entirely offline, then reconciles with a central API once connectivity is restored.",
      "Added a LAN sync host so multiple registers on the same store network stay in sync with each other in real time even when the internet is down, not just eventually-consistent with the cloud.",
      "Used Redis to cache frequent product lookups on the hot checkout path, and integrated the Llama API to turn raw sales and inventory data into stock and vendor recommendations for store owners.",
      "Structured the codebase as a Turborepo monorepo (desktop client, web admin dashboard, mobile companion app, API, sync host) sharing types and business logic across surfaces instead of duplicating them per app.",
    ],
    points: [
      "Developed a centralized point-of-sale platform handling sales processing, inventory tracking, and vendor management, using Redis caching to speed up frequent product lookups.",
      "Integrated the Llama API to generate stock insights and vendor recommendations, cutting manual procurement effort through automated suggestions and real-time analytics.",
    ],
  },
  {
    slug: "fulfillment-oms",
    name: "Fulfillment Order Management System",
    tagline: "Order Processing & Real-Time Inventory",
    period: "Mar 2026 – Apr 2026",
    stack: [
      "React 19",
      "Vite",
      "TanStack Router",
      "TanStack Query",
      "TanStack Table",
      "Radix UI",
      "Tailwind CSS",
      "Hono",
      "Prisma",
      "PostgreSQL",
    ],
    images: [
      "/projects/fulfillment-oms/fulfillment-1-dashboard.png",
      "/projects/fulfillment-oms/fulfillment-2-batches.png",
      "/projects/fulfillment-oms/fulfillment-3-orders.png",
    ],
    credit: "Professional Project – Developed at FrontendEx",
    description:
      "An internal order-management console for a fulfillment operation — handling order intake, batching, and real-time inventory tracking, with automated FedEx shipping-label generation replacing what had been a manual, error-prone process.",
    approach: [
      "Split the app into two independently deployable services — a Vite-built React frontend and a Hono API server — connected over REST and deployed separately on Railway, so either side can scale or redeploy without the other.",
      "Used Prisma against PostgreSQL for schema-driven data access, with typed queries shared across the order, batch, and inventory modules.",
      "Built the batch and order views on TanStack Table and TanStack Query for large, filterable datasets, and TanStack Router for typed, code-split client-side routing.",
      "Integrated FedEx's sandbox API for shipping-label generation and automated the batch-to-label workflow, reducing what had been a manual per-order process.",
    ],
    points: [
      "Developed and maintained a fulfillment application streamlining order processing and real-time inventory tracking.",
      "Integrated FedEx sandbox APIs for automated shipping-label generation and workflow automation, reducing manual processing time.",
    ],
  },
  {
    slug: "nutricloudfr",
    name: "Nutricloudfr",
    tagline: "State Benefits Administration Portal",
    period: "Oct 2025 – Jun 2026",
    stack: [
      "Next.js (App Router)",
      "React",
      "Ant Design",
      "TanStack Query",
      "Tailwind CSS",
      "next-translate (i18n)",
      "REST APIs",
    ],
    liveUrl: "https://summerebtapp.com",
    images: [
      "/projects/nutricloudfr/nutricloud-1-start-page.png",
      "/projects/nutricloudfr/nutricloud-2-state-selection.png",
      "/projects/nutricloudfr/nutricloud-3-begin-page.png",
      "/projects/nutricloudfr/nutricloud-4-summary-page.png",
    ],
    credit: "Professional Project – Developed at FrontendEx",
    description:
      "A multi-tenant nutrition benefits application wizard serving U.S. school districts and the families they support — a guided, multi-step public form for households applying to programs like Summer EBT / SUN Bucks, configured per state and district rather than forked.",
    approach: [
      "Centralized the entire multi-step application wizard in a single React reducer so dozens of form components read and write one source of truth instead of scattering state across pages.",
      "Modeled multi-state support as data, not forks: per-state settings (eligibility rules, branding, translated copy) are fetched at runtime and drive the UI, with a small number of explicit exceptions where a state's requirements genuinely diverged.",
      "Added English/Spanish localization with next-translate, keeping the active language in sync between the URL and local storage so links and refreshes preserve it.",
      "Diagnosed and resolved token-resolution defects across four different template syntaxes in CMS-driven API responses, improving content accuracy for district administrators.",
    ],
    points: [
      "Built and enhanced a state-level nutrition benefits portal enabling districts to manage programs, applications, and reporting workflows.",
      "Developed responsive UI components, multi-step form validation, and data-driven dashboards, reducing administrative processing effort.",
      "Diagnosed and resolved token-resolution defects across four template syntaxes in CMS-driven API responses, improving content accuracy for district administrators.",
    ],
  },
  {
    slug: "nutricloudfr-admin",
    name: "Nutricloudfr Admin",
    tagline: "District Nutrition Program Admin Portal",
    period: "Oct 2025 – Jun 2026",
    stack: [
      "Next.js (App Router)",
      "React",
      "Ant Design",
      "TanStack Query",
      "Tailwind CSS",
      "Axios",
    ],
    credit: "Professional Project – Developed at FrontendEx",
    images: [
      "/projects/nutricloudfr-admin/nutricloudfr-admin-1-dashboard.png",
      "/projects/nutricloudfr-admin/nutricloudfr-admin-2-students.jpg",
      "/projects/nutricloudfr-admin/nutricloudfr-admin-3-instructions.png",
    ],
    description:
      "The district-facing companion to Nutricloudfr's public application wizard — an admin portal where school district staff manage nutrition benefit programs, review household applications, and run reporting, scoped to each district's own data and permissions.",
    approach: [
      "Built as a separate Next.js (Ant Design + TanStack Query) app against the same backend APIs as the public applicant wizard, so the admin and applicant surfaces evolve independently without duplicating business logic.",
      "Gated features behind a permission system and a shared app context carrying the current district, user, and role, so staff only see and act on what their district and role allow.",
      "Used Ant Design's Table with a shared pagination hook across every data-heavy view (applications, reporting) for a consistent, high-density admin UX.",
      "Deployed on Vercel with git-based auto-builds alongside the rest of the NutriCloud platform.",
    ],
    points: [
      "Built a district-facing admin portal for staff to manage nutrition benefit programs, review applications, and generate reports.",
      "Implemented permission-gated features and district-scoped data access so each district only sees and manages its own programs and applications.",
    ],
  },
  {
    slug: "helpify",
    name: "Helpify",
    tagline: "Real-Time Technician Booking Platform",
    period: "Sep 2024 – Apr 2025 · Final Year Project",
    stack: ["PostgreSQL", "Express.js", "React.js", "Node.js", "Socket.io"],
    repoUrl: "https://github.com/Mohsin-Javed48/Helpify",
    description:
      "A home-services marketplace connecting customers with service providers — plumbing, electrical, painting, and similar work — through competitive bidding rather than fixed pricing: a customer posts a job, providers counter-bid in real time, and the customer accepts and pays through the platform.",
    approach: [
      "Built real-time bidding and counter-offer negotiation with Socket.io so customers and providers see price updates instantly instead of polling or refreshing.",
      "Modeled three distinct roles — customer, provider, and admin — with separate auth and permissions on a single PERN-stack codebase.",
      "Integrated a payment flow so an accepted bid converts directly into a paid booking without a separate checkout step.",
    ],
    points: [
      "Engineered an on-demand labor services platform on the PERN stack supporting 100+ concurrent users at 99.9% uptime.",
      "Implemented real-time price negotiation and emergency service prioritization via Socket.io, reducing average response time by 40%.",
      "Integrated a secure payment flow processing 500+ transactions per month.",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "C", "C++", "Java", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Responsive Design", "Component-Driven UI", "State Management", "Form Validation"],
  },
  {
    category: "Backend",
    items: ["Nest.js", "Node.js", "Express.js", "Django", "REST API Design", "Auth & Authorization", "Socket.io"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "Supabase", "MongoDB", "Redis"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "Electron", "Linux", "Postman"],
  },
  {
    category: "Practices",
    items: ["Agile/Scrum", "Code Review", "CI/CD Workflows", "Debugging & Performance Optimization"],
  },
];

export type Education = {
  degree: string;
  school: string;
  period?: string;
  detail?: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "University of the Punjab, Lahore",
    period: "Jan 2022 – Jun 2025",
    detail: "Coursework: Data Structures, Databases, Web Engineering · CGPA: 3.41 / 4.00",
  },
  {
    degree: "Intermediate",
    school: "Govt. College of Science, Wahdat Road, Lahore",
  },
  {
    degree: "Matriculation",
    school: "Punjab University Laboratory High School, Lahore",
  },
];

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
