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

export interface Study {
  qualification: string;
  institution: string;
  detail: string;
  from: string;
  to: string;
}

export const profile = {
  name: "Hafsa Nadeem",
  role: "Backend Software Engineer",
  location: "Lahore, Pakistan",
  email: "contact.hafsanadeem@gmail.com",
  github: { label: "github.com/Hafsa077", href: "https://github.com/Hafsa077" },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hafsa-nadeem-33b5462b4",
  },
  summary:
    "Backend engineer with 20 months on a live production system. One of two developers on Student Storage Pros, a storage and moving service for students at 25 Canadian universities, and the author of most of its order, mover and customer-portal backend in Node.js, Express and MySQL. Also build APIs in Java with Spring Boot, and work in Next.js and React on the frontend when a project needs it.",
} as const;

/** Figures are drawn from the Student Storage Pros platform, March–August 2026. */
export const metrics: Metric[] = [
  { figure: "260", caption: "REST endpoints" },
  { figure: "42", caption: "database models" },
  { figure: "25", caption: "universities served" },
  { figure: "356", caption: "orders in six months" },
  { figure: "$42.7K", caption: "CAD taken in those orders" },
];

export const metricsNote =
  "Figures from the Student Storage Pros platform, March–August 2026.";

export const roles: Role[] = [
  {
    title: "Software Engineer",
    org: "Student Storage Pros",
    kind: "contract",
    from: "Jan 2025",
    to: "Present",
    current: true,
    where: "Remote, Canada",
    link: { label: "studentstoragepros.com", href: "https://studentstoragepros.com" },
    stack: ["Node.js", "Express", "Sequelize", "MySQL", "AWS", "Stripe"],
    bullets: [
      "Built and maintain the REST API with one other developer: 260 endpoints and 42 Sequelize models on MySQL, organised into routes, controllers and services. Between March and August 2026 the platform took 356 orders worth $42,700 CAD.",
      "Wrote the order service, covering booking, edits, the staff calendar and CSV exports, plus a separate flow for phone and walk-in orders that office staff enter by hand, with their own invoices.",
      "Built the mover job board. Movers claim and drop jobs, managers assign and reassign them, and each mover sees today's jobs and what is coming up.",
      "Built the on-site pickup and delivery workflow. Movers tick off the customer's items, upload photos straight to S3 through presigned URLs, and close the job with a 6-digit code emailed to the customer that expires after 10 minutes.",
      "Worked on invoicing and Stripe payments, including which status changes an invoice is allowed to make and what happens when one is paid, fails or is voided.",
      "Set up a separate AWS Cognito login for office staff (sign-up, email confirmation, token refresh, password reset) alongside role-based access for customers, movers, managers, sales staff and admins. Also built the office dashboard in Next.js and TypeScript.",
    ],
  },
  {
    title: "Software Engineer",
    org: "DevXAI",
    from: "Apr 2026",
    to: "Sep 2026",
    where: "Lahore, Pakistan (remote)",
    link: { label: "devxai.us", href: "https://devxai.us" },
    stack: ["Node.js", "Express", "MongoDB", "React", "VAPI"],
    bullets: [
      "Added features to several client projects the company maintained on retainer, working across the MERN stack in codebases that were already in production.",
      "Built voice AI agents on VAPI for client projects.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "TaskFlow",
    tagline: "task management API",
    note: "Java",
    stack: ["Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "Swagger"],
    bullets: [
      "REST API in Spring Boot with JWT login through Spring Security and BCrypt-hashed passwords. Each user can only read and change their own tasks.",
      "Spring Data JPA for users, tasks and categories; Bean Validation on requests, one global exception handler so errors always come back in the same shape, and Swagger docs for every endpoint.",
    ],
  },
  {
    name: "EduMate",
    tagline: "learning platform",
    note: "Final year project",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    bullets: [
      "Learning platform with course recommendations, quizzes and a separate dashboard for each role. Designed the PostgreSQL schema in Prisma and wrote the Express API, including login and role checks.",
    ],
  },
  {
    name: "Blood Donation Management System",
    note: "C#",
    stack: ["C#", "WPF", "SQL Server"],
    bullets: [
      "Desktop app for donor records, search and blood bank stock, backed by SQL Server.",
    ],
  },
];

export const skills: { label: string; items: string }[] = [
  {
    label: "Backend",
    items:
      "Node.js, Express, Spring Boot, Spring Security, Spring Data JPA, REST API design, JWT and session auth",
  },
  {
    label: "Databases",
    items: "MySQL, PostgreSQL, MongoDB, SQL Server, Sequelize, Prisma",
  },
  {
    label: "Cloud and tools",
    items: "AWS (Cognito, S3, SES), Stripe, VAPI, Git, Postman, Swagger, Maven, Vercel",
  },
  {
    label: "Languages",
    items: "JavaScript, TypeScript, Java, SQL, C#, C++",
  },
  {
    label: "Frontend",
    items: "React, Next.js, Tailwind CSS",
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
];
