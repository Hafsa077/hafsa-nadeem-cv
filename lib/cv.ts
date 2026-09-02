/**
 * Single source of truth for CV content.
 *
 * Everything the page renders is derived from this file — components map over
 * these structures and never hard-code copy. To update the CV, edit here.
 */

export type Bullet = string;

export interface Role {
  title: string;
  org: string;
  kind?: string;
  from: string;
  to: string;
  current?: boolean;
  where: string;
  link?: { label: string; href: string };
  stack: string[];
  bullets: Bullet[];
}

export interface Project {
  name: string;
  tagline?: string;
  note?: string;
  stack: string[];
  bullets: Bullet[];
}

export interface Metric {
  figure: string;
  caption: string;
}

export interface Credential {
  issuer: string;
  items: { name: string; href: string }[];
}

export interface Study {
  qualification: string;
  institution: string;
  detail: string;
  from: string;
  to: string;
}

export const profile = {
  name: "Hafsa Nadeem",
  role: "Software Engineer · Backend & Full-Stack",
  location: "Lahore, Pakistan",
  email: "contact.hafsanadeem@gmail.com",
  github: { label: "github.com/Hafsa077", href: "https://github.com/Hafsa077" },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hafsa-nadeem-33b5462b4",
  },
  summary:
    "Software engineer with 20 months of production experience building and operating a live multi-tenant logistics platform. Backend-focused — Node.js/Express, Spring Boot, MySQL and AWS — with full-stack delivery in Next.js, React and TypeScript, plus agency client work across the MERN stack and voice AI agents. Comfortable owning a feature end to end: schema design, API, payment integration, and deployment.",
} as const;

/** Figures are drawn from the Student Storage Pros platform, March–August 2026. */
export const metrics: Metric[] = [
  { figure: "260", caption: "REST endpoints built and maintained" },
  { figure: "42", caption: "relational data models" },
  { figure: "25", caption: "universities served" },
  { figure: "$42.7K", caption: "payments processed in six months" },
  { figure: "2", caption: "consumer brands on one platform" },
];

export const metricsNote =
  "Figures from the Student Storage Pros platform, March–August 2026.";

export const roles: Role[] = [
  {
    title: "Software Engineer",
    org: "Student Storage Pros",
    kind: "Contract",
    from: "Jan 2025",
    to: "Present",
    current: true,
    where: "Remote · Canadian student storage & logistics company",
    link: { label: "studentstoragepros.com", href: "https://studentstoragepros.com" },
    stack: [
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "AWS Cognito",
      "S3",
      "SES / SNS",
      "Stripe",
      "Next.js 15",
      "TypeScript",
    ],
    bullets: [
      "Built and maintain the platform's REST API as one of two engineers — **260 endpoints across 42 data models** — in a layered route → controller → service architecture on Node.js, Express and Sequelize/MySQL.",
      "Architected the system as multi-tenant, serving **two consumer brands from a single API and database**, with per-brand ordering, pricing and branding.",
      "Integrated Stripe and Interac e-Transfer with automated invoicing and multi-jurisdiction tax calculation; the platform processed **356 orders worth $42,700 CAD for 248 customers across 25 universities** in a six-month period.",
      "Implemented role-based access control for five user types — customer, mover, manager, sales and admin — on AWS Cognito, with S3 for document handling and SES/SNS powering order and delivery notifications.",
      "Owned the internal operations dashboard in **Next.js 15, TypeScript, TanStack Query and Zustand** — the larger of the platform's two frontends — covering order management, facility capacity, mover scheduling and invoicing.",
      "Designed a cron scheduling system with a job registry and missed-execution sweep, keeping recurring billing and notification jobs reliable across restarts and deploys.",
    ],
  },
  {
    title: "Software Engineer",
    org: "DevXAI",
    from: "Apr 2026",
    to: "Sep 2026",
    where: "Lahore, Pakistan",
    stack: ["MongoDB", "Express", "React", "Node.js", "VAPI"],
    bullets: [
      "Delivered full-stack feature development across multiple client projects held on retainer, working in the **MERN stack** within established production codebases.",
      "Built conversational **voice AI agents on VAPI**, wiring automated call flows into backend services and client business workflows.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "TaskFlow",
    tagline: "Secure Task Management API",
    note: "Java",
    stack: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "JWT",
      "MySQL",
      "Maven",
      "Swagger",
    ],
    bullets: [
      "RESTful backend with stateless JWT authentication and BCrypt password hashing, enforcing per-user data isolation across protected resources.",
      "Relational schema in Spring Data JPA modelling one-to-many relationships between users, tasks and categories.",
      "Custom global exception handling and JSR-303 bean validation on request payloads; endpoints documented with Swagger UI (OpenAPI 3.0).",
    ],
  },
  {
    name: "EduMate",
    tagline: "AI-Powered Learning Platform",
    note: "Final year project",
    stack: ["Node.js", "Express", "React", "PostgreSQL", "Prisma"],
    bullets: [
      "Full-stack learning platform with personalised course recommendations, quizzes and role-based dashboards.",
      "Designed the database schema in Prisma and built the authentication, authorisation and role-based access layer.",
    ],
  },
  {
    name: "Blood Donation Management System",
    note: "C#",
    stack: ["C#", "WPF", "SQL Server"],
    bullets: [
      "Desktop application for donor records, search and blood bank inventory, backed by SQL Server.",
    ],
  },
];

export const skills: { label: string; items: string }[] = [
  {
    label: "Languages",
    items: "JavaScript, TypeScript, Java, C#, C++, SQL, Python (basic)",
  },
  {
    label: "Backend",
    items:
      "Node.js, Express.js, Spring Boot, Spring Security, Spring Data JPA, REST API design, JWT & session auth, middleware, cron/job scheduling",
  },
  {
    label: "Frontend",
    items:
      "React, Next.js 15, TypeScript, Tailwind CSS, Material UI, TanStack Query, Zustand, HTML5, CSS3",
  },
  {
    label: "Databases",
    items: "MySQL, PostgreSQL, MongoDB, SQL Server, Sequelize ORM, Prisma ORM",
  },
  {
    label: "Cloud & tools",
    items:
      "AWS (Cognito, S3, SES, SNS), Stripe, VAPI, Git & GitHub, Vercel, Postman, Swagger/OpenAPI, Maven",
  },
];

export const education: Study[] = [
  {
    qualification: "BS Computer Science",
    institution: "COMSATS University Islamabad, Lahore Campus",
    detail: "CGPA 3.81 / 4.00",
    from: "Feb 2022",
    to: "Jan 2026",
  },
  {
    qualification: "FSc Pre-Medical",
    institution: "Lahore College for Women University",
    detail: "89%",
    from: "Sep 2017",
    to: "Mar 2019",
  },
];

export const credentials: Credential[] = [
  {
    issuer: "Meta",
    items: [
      {
        name: "Programming with JavaScript",
        href: "https://coursera.org/share/c942908d2490d39c781be858eee2805a",
      },
      {
        name: "Introduction to Front-End Development",
        href: "https://coursera.org/share/087706b903681dc6af625ac0bfd0214a",
      },
    ],
  },
  {
    issuer: "Board Infinity",
    items: [
      {
        name: "Data Visualization with Tableau",
        href: "https://coursera.org/share/8e193a6d24f7076ece0253e48a973334",
      },
    ],
  },
];
