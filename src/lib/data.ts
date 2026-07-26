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
  liveUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "nutricloudfr",
    name: "Nutricloudfr",
    tagline: "State Benefits Administration Portal",
    period: "Oct 2025 – Jun 2026",
    stack: ["React.js", "Next.js", "REST APIs"],
    liveUrl: "#",
    points: [
      "Built and enhanced a state-level nutrition benefits portal enabling districts to manage programs, applications, and reporting workflows.",
      "Developed responsive UI components, multi-step form validation, and data-driven dashboards, reducing administrative processing effort.",
      "Diagnosed and resolved token-resolution defects across four template syntaxes in CMS-driven API responses, improving content accuracy for district administrators.",
    ],
  },
  {
    slug: "fulfillment-oms",
    name: "Fulfillment Order Management System",
    tagline: "Order Processing & Real-Time Inventory",
    period: "Mar 2026 – Apr 2026",
    stack: ["Next.js", "Nest.js", "Supabase"],
    liveUrl: "#",
    image: "/projects/fulfillment-oms.png",
    points: [
      "Developed and maintained a fulfillment application streamlining order processing and real-time inventory tracking.",
      "Integrated FedEx sandbox APIs for automated shipping-label generation and workflow automation, reducing manual processing time.",
    ],
  },
  {
    slug: "unified-pos",
    name: "Unified POS",
    tagline: "AI-Assisted Point of Sale System",
    period: "Jan 2026 – Mar 2026",
    stack: ["Next.js", "Nest.js", "Supabase", "Redis", "Llama API"],
    points: [
      "Developed a centralized point-of-sale platform handling sales processing, inventory tracking, and vendor management, using Redis caching to speed up frequent product lookups.",
      "Integrated the Llama API to generate stock insights and vendor recommendations, cutting manual procurement effort through automated suggestions and real-time analytics.",
    ],
  },
  {
    slug: "helpify",
    name: "Helpify",
    tagline: "Real-Time Technician Booking Platform",
    period: "Sep 2024 – Apr 2025 · Final Year Project",
    stack: ["PostgreSQL", "Express.js", "React.js", "Node.js", "Socket.io"],
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
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
