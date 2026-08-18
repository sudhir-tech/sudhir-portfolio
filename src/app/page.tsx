"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Boxes,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const skills = {
  "Backend Development": [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "REST APIs",
    "Hibernate",
    "Spring Data JPA",
    "JPA",
    "Microservices",
  ],
  "System Design": [
    "LLD",
    "System Design",
    "OOP",
    "SOLID Principles",
    "Design Patterns",
    "Scalable Architecture",
    "API Design",
  ],
  Database: [
    "MySQL",
    "SQL",
    "Query Optimization",
    "Database Design",
    "Redis",
    "HikariCP",
  ],
  Security: [
    "Spring Security",
    "JWT Authentication",
    "Role-Based Authorization",
    "API Security",
  ],
  "DevOps & Engineering": [
    "Git",
    "GitHub",
    "Jenkins",
    "SonarQube",
    "CI/CD",
    "Docker",
    "Maven",
  ],
  "Production & Observability": [
    "ELK Stack",
    "Log Analysis",
    "Root Cause Analysis",
    "Performance Tuning",
    "Tomcat",
    "Production Debugging",
  ],
  "Testing & Quality": [
    "JUnit",
    "Integration Testing",
    "REST API Testing",
    "Code Review",
    "Clean Code",
  ],
  "Problem Solving": [
    "Data Structures",
    "Algorithms",
    "LeetCode",
    "Scaler",
    "Problem Solving",
  ],
};

const projects = [
  {
    featured: true,
    title: "ShopEase",
    subtitle: "E-commerce Backend Platform",
    description:
      "A scalable e-commerce backend built with Spring Boot using layered architecture, secure authentication, RESTful APIs, relational persistence, caching and performance-focused backend engineering.",
    highlights: [
      "JWT authentication and role-based authorization",
      "User, product, cart and order management",
      "JPA/Hibernate-based persistence",
      "Pagination and filtering",
      "Redis caching",
      "SQL query optimization",
      "Layered backend architecture",
      "Secure REST API design",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "REST APIs",
      "MySQL",
      "JPA/Hibernate",
      "Redis",
    ],
    github: "https://github.com/sudhir-tech/ShopEase",
    icon: ShoppingCartIcon,
  },
  {
    title: "E-commerce Backend System",
    subtitle: "Spring Boot Backend",
    description:
      "A backend-focused e-commerce application designed around clean layering, secure APIs, database persistence and core commerce workflows.",
    highlights: [
      "Authentication and authorization",
      "Product and cart workflows",
      "Order management",
      "REST API development",
      "Database persistence",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "JPA", "Redis"],
    github: "https://github.com/sudhir-tech/ecommerce-backend-springboot",
    icon: ShoppingCartIcon,
  },
  {
    title: "Library Management System",
    subtitle: "Java Backend Application",
    description:
      "A Spring Boot application for managing books, inventory, issue and return workflows through secured REST APIs.",
    highlights: [
      "RESTful API design",
      "Spring Security",
      "Database persistence",
      "JUnit testing",
      "Code quality with SonarQube",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JUnit",
      "SonarQube",
    ],
    github: "https://github.com/sudhir-tech/Library-management-system",
    icon: BookOpen,
  },
];

const experience = [
  {
    company: "DXC Technology",
    role: "Software Engineer — Java",
    period: "Feb 2022 — Sep 2024",
    description:
      "Worked on enterprise Java applications with a focus on backend development, production reliability, debugging and continuous improvement.",
    points: [
      "Developed and maintained Java-based backend applications using Java, Spring Boot, Hibernate, REST APIs and SQL.",
      "Implemented application features and REST APIs while following layered architecture and maintainable coding practices.",
      "Worked with relational databases, JPA/Hibernate and SQL query optimization to improve application performance.",
      "Contributed to CI/CD workflows using Git, Jenkins and SonarQube within an Agile development environment.",
      "Performed root cause analysis, production debugging and permanent fixes for business-critical application issues.",
      "Used ELK Stack logs and application monitoring to identify failures, investigate production issues and reduce troubleshooting time.",
      "Collaborated with development, QA, DevOps and business teams throughout the software development lifecycle.",
    ],
  },
  {
    company: "Quotus Software Solutions Pvt. Ltd.",
    role: "Software Trainee",
    period: "Oct 2020 — Jan 2021",
    description:
      "Built foundational experience in Java development, databases and software engineering practices.",
    points: [
      "Received hands-on training in Java, SQL, JDBC and Object-Oriented Programming.",
      "Assisted with developing and testing Java-based applications.",
      "Worked with database connectivity and application-level programming concepts.",
      "Gained practical exposure to SDLC and collaborative software development.",
    ],
  },
];

const engineeringPrinciples = [
  {
    icon: Layers3,
    title: "Clean Architecture",
    text: "Layered design, separation of concerns and maintainable backend components.",
  },
  {
    icon: Network,
    title: "System Design",
    text: "Thinking about scalability, APIs, databases, caching and service boundaries.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "Query optimization, pagination, caching, connection pools and efficient APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    text: "Authentication, authorization and secure REST API design.",
  },
];

function ShoppingCartIcon() {
  return <Boxes size={22} />;
}

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => setMobileMenu(false);

  const navigation = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Contact", "contact"],
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070a] text-white selection:bg-cyan-400/30">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.035] blur-3xl" />
        <div className="absolute right-[5%] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.025] blur-3xl" />
        <div className="absolute bottom-[5%] left-[30%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.02] blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#05070a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a
            href="#home"
            className="font-mono text-base font-bold tracking-tight"
          >
            <span className="text-cyan-400">S</span>
            udhir<span className="text-white/30">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-white/45 transition hover:text-white"
              >
                {label}
              </a>
            ))}

            <a
              href="https://github.com/sudhir-tech"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-cyan-400/40 hover:text-cyan-400"
              aria-label="GitHub"
            >
              <Code2 size={16} />
            </a>
          </div>

          <button
            className="rounded-lg border border-white/10 p-2 text-white/70 md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/[0.08] bg-[#05070a] px-5 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              {navigation.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={closeMenu}
                  className="text-sm text-white/65"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-5 pb-20 pt-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(34,211,238,0.09),transparent_28%),radial-gradient(circle_at_15%_75%,rgba(59,130,246,0.06),transparent_30%)]" />

        {/* Portrait background - cinematic ambient portrait, not a framed/headshot look */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[40%] overflow-hidden lg:block"
          aria-hidden="true"
        >
          {/* Large atmospheric cyan glow */}
          <div className="absolute left-[-12%] top-[42%] h-[680px] w-[680px] -translate-y-1/2 rounded-full bg-cyan-400/[0.075] blur-[125px]" />

          <div className="absolute left-[2%] top-[34%] h-[430px] w-[430px] rounded-full bg-cyan-300/[0.055] blur-[95px]" />

          <div className="absolute left-[12%] top-[55%] h-[320px] w-[320px] rounded-full bg-blue-500/[0.035] blur-[90px]" />

          {/* Oversized portrait — deliberately cropped so it reads as atmosphere, not a passport photo */}
          <img
            src="/profile.png"
            alt=""
            className="absolute left-[-205px] top-1/2 h-[760px] w-auto max-w-none -translate-y-1/2 opacity-[0.24] mix-blend-screen"
          />

          {/* Irregular soft light around the subject */}
          <div className="absolute left-[-170px] top-[14%] h-[700px] w-[540px] rounded-[42%] bg-[radial-gradient(ellipse_at_50%_42%,transparent_28%,rgba(34,211,238,0.09)_48%,transparent_70%)] blur-[30px]" />

          {/* Strong edge fading — removes the rectangular/passport-photo feeling */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_48%,transparent_20%,rgba(5,7,10,0.10)_42%,rgba(5,7,10,0.68)_68%,rgba(5,7,10,1)_88%)]" />

          {/* Fade into the top and bottom of the hero */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.48)_0%,transparent_20%,transparent_72%,rgba(5,7,10,0.92)_100%)]" />

          {/* Fade the portrait toward the hero content on the right */}
          <div className="absolute inset-y-0 right-0 w-[65%] bg-gradient-to-l from-[#05070a] via-[#05070a]/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 py-20 lg:grid-cols-[1.28fr_.72fr] lg:items-center">
          {/* Left content */}
          <div className="lg:translate-x-8">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1.5 font-mono text-xs text-cyan-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              JAVA BACKEND DEVELOPER
            </div>

            {/* Name */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              <span className="text-white">Sudhir</span>{" "}
              <span className="bg-gradient-to-r from-white via-white/75 to-white/30 bg-clip-text text-transparent">
                Sahoo
              </span>
            </h1>

            {/* Software Engineer */}
            <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-cyan-400 sm:text-3xl lg:text-4xl">
              Software Engineer
            </p>

            {/* Main tagline */}
            <h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-white/75 sm:text-3xl lg:text-4xl">
              Building Backend Systems{" "}
              <span className="text-cyan-400">That Scale.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45 sm:text-xl">
              Java-focused Software Engineer building scalable backend
              applications with Spring Boot, REST APIs, databases, security,
              system design and performance-focused engineering.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Explore Projects
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="https://github.com/sudhir-tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/75 transition hover:border-cyan-400/40 hover:text-white"
              >
                <Code2 size={16} />
                GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "System Design",
                "REST APIs",
                "SQL",
                "Redis",
                "DSA",
                "LLD",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 font-mono text-xs text-white/45"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Smaller terminal / engineering card */}
          <div className="relative hidden min-h-[420px] translate-x-0 lg:block lg:translate-x-6">
            <div className="absolute right-[-8%] top-[8%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.045] blur-3xl" />

            <div className="absolute bottom-2 left-6 right-6 z-20 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0e13]/90 p-4 shadow-2xl shadow-black/50 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2 border-b border-white/[0.08] pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                <span className="ml-2 font-mono text-xs text-white/25">
                  sudhir@engineering
                </span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <TerminalLine command="whoami" value="Sudhir Sahoo" />

                <TerminalLine command="role" value="Software Engineer" />

                <TerminalLine
                  command="stack"
                  value="Java · Spring Boot · SQL"
                />

                <TerminalLine
                  command="architecture"
                  value="REST · Microservices · LLD"
                />

                <TerminalLine
                  command="system-design"
                  value="Scalability · APIs · Caching"
                />

                <TerminalLine
                  command="problem-solving"
                  value="500+ DSA Problems"
                  accent
                />

                <div className="mt-4 border-t border-white/[0.08] pt-4">
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <span className="text-cyan-400">●</span>
                    currently building
                  </div>

                  <p className="mt-2 text-sm text-cyan-300">
                    scalable software systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-white/[0.08] bg-white/[0.012]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/[0.08] md:grid-cols-4">
          {[
            ["3+", "Years Experience"],
            ["500+", "DSA Problems"],
            ["Java", "Backend Focus"],
            ["ShopEase", "Featured Project"],
          ].map(([value, label]) => (
            <div key={label} className="px-5 py-8 text-center">
              <p className="text-xl font-bold tracking-tight">{value}</p>
              <p className="mt-1 text-xs text-white/35">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-28">
        <SectionHeading
          eyebrow="01 / ABOUT"
          title="Engineer first. Always learning."
          description="A backend-focused engineer with a strong interest in architecture, problem solving and building software that is reliable in the real world."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="text-lg leading-8 text-white/50">
              My core experience is in Java backend development, where I work
              across APIs, databases, authentication, application performance
              and production debugging. I enjoy understanding how systems work
              underneath the surface rather than only making individual
              features function.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/50">
              Alongside professional experience, I&apos;ve been strengthening
              my foundation in Data Structures & Algorithms, Low-Level Design
              and System Design while building projects that bring those
              concepts into practical software.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Backend Engineering",
                "System Design",
                "Problem Solving",
                "Performance",
                "Clean Code",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-white/50"
                >
                  <span className="h-1 w-1 rounded-full bg-cyan-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {engineeringPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <InfoCard
                  key={item.title}
                  icon={<Icon size={18} />}
                  title={item.title}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-y border-white/[0.08] bg-white/[0.012]"
      >
        <div className="mx-auto max-w-6xl px-5 py-28">
          <SectionHeading
            eyebrow="02 / EXPERIENCE"
            title="Experience that shaped how I build."
            description="Professional experience across Java development, enterprise applications, production debugging and engineering collaboration."
          />

          <div className="space-y-12">
            {experience.map((job) => (
              <div
                key={job.company}
                className="relative grid gap-6 md:grid-cols-[230px_1fr]"
              >
                <div>
                  <p className="font-mono text-xs text-cyan-400">
                    {job.period}
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    {job.company}
                  </p>
                </div>

                <div className="relative border-l border-white/[0.1] pl-7 md:pl-9">
                  <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-cyan-400" />

                  <h3 className="text-xl font-semibold">{job.role}</h3>

                  <p className="mt-3 max-w-2xl leading-7 text-white/40">
                    {job.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-white/50"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-28">
        <SectionHeading
          eyebrow="03 / PROJECTS"
          title="Software I&apos;ve built."
          description="Projects where backend engineering, security, databases and performance come together."
        />

        <div className="space-y-5">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition duration-300 md:p-9 ${
                  project.featured
                    ? "border-cyan-400/20 bg-cyan-400/[0.025] hover:border-cyan-400/40"
                    : "border-white/[0.09] bg-white/[0.018] hover:border-white/20"
                }`}
              >
                {project.featured && (
                  <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 font-mono text-[10px] text-cyan-300">
                    <Sparkles size={11} />
                    FEATURED
                  </div>
                )}

                <div className="grid gap-8 lg:grid-cols-[1fr_.85fr]">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-400">
                      <Icon size={22} />
                    </div>

                    <p className="mt-6 font-mono text-xs text-cyan-400/80">
                      {project.subtitle}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-7 text-white/45">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[11px] text-white/45"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      View repository
                      <ArrowUpRight size={15} />
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-6">
                    <div className="mb-5 flex items-center gap-2">
                      <GitBranch size={16} className="text-cyan-400" />
                      <span className="font-mono text-xs text-white/35">
                        engineering highlights
                      </span>
                    </div>

                    <div className="space-y-4">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex gap-3 text-sm leading-6 text-white/50"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Engineering */}
      <section className="border-y border-white/[0.08] bg-white/[0.012]">
        <div className="mx-auto max-w-6xl px-5 py-28">
          <SectionHeading
            eyebrow="04 / ENGINEERING"
            title="How I think about software."
            description="Beyond frameworks and syntax — the engineering concepts I actively work on and study."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <EngineeringCard
              icon={<Network size={19} />}
              title="System Design"
              items={[
                "Scalable systems",
                "Service boundaries",
                "API architecture",
                "Caching strategies",
              ]}
            />

            <EngineeringCard
              icon={<Layers3 size={19} />}
              title="Low-Level Design"
              items={[
                "SOLID principles",
                "Design patterns",
                "OOP",
                "Maintainable code",
              ]}
            />

            <EngineeringCard
              icon={<Database size={19} />}
              title="Data & Performance"
              items={[
                "SQL optimization",
                "JPA/Hibernate",
                "Redis caching",
                "Connection pooling",
              ]}
            />

            <EngineeringCard
              icon={<Code2 size={19} />}
              title="Problem Solving"
              items={[
                "Data structures",
                "Algorithms",
                "LeetCode",
                "Scaler",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-5 py-28">
        <SectionHeading
          eyebrow="05 / SKILLS"
          title="The engineering toolkit."
          description="Technologies, concepts and tools I use or actively develop expertise in."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.018] p-6 transition hover:border-cyan-400/20 hover:bg-white/[0.025]"
            >
              <h3 className="font-mono text-sm text-cyan-400">
                {category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.08] px-2.5 py-1.5 text-xs text-white/50 transition group-hover:border-white/10 group-hover:text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning / achievements */}
      <section className="border-y border-white/[0.08] bg-white/[0.012]">
        <div className="mx-auto max-w-6xl px-5 py-28">
          <SectionHeading
            eyebrow="06 / LEARNING"
            title="Always sharpening the fundamentals."
            description="Continuous learning through structured study, coding practice and hands-on engineering."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <StatCard
              value="500+"
              title="DSA Problems"
              text="Consistent problem-solving practice across LeetCode and Scaler."
            />

            <StatCard
              value="3+"
              title="Years Experience"
              text="Professional experience working with Java and enterprise backend applications."
            />

            <StatCard
              value="MS"
              title="Computer Science"
              text="Currently pursuing a Master's in Computer Science through Scaler × Woolf University."
            />
          </div>

          <div className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.018] p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/[0.06] text-cyan-400">
                <GraduationCap size={20} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Certifications & Learning
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Advanced Data Structures & Algorithms — Scaler",
                    "SQL Certification — Scaler",
                    "Generative AI Certification",
                    "Master's in Computer Science",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-5 py-28">
        <SectionHeading
          eyebrow="07 / EDUCATION"
          title="Foundations that keep growing."
        />

        <div className="space-y-4">
          <EducationCard
            title="Master's in Computer Science"
            school="Scaler × Woolf University"
            period="2025 — 2027"
          />

          <EducationCard
            title="Bachelor's in Electronics and Telecommunication"
            school="C.V. Raman Global University"
            period="2016 — 2020"
          />

          <EducationCard
            title="Java Full Stack Training"
            school="Jspider Training & Development"
            period="2021 — 2022"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-6xl px-5 py-28">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.025] p-8 text-center md:p-16">
            <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-3xl" />

            <div className="relative">
              <p className="font-mono text-xs tracking-wider text-cyan-400">
                08 / CONTACT
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s build something.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-white/45">
                I&apos;m interested in Java backend, software engineering and
                product-focused opportunities where I can solve meaningful
                problems and keep growing as an engineer.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:sudhirsahoo523@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  <Mail size={16} />
                  Get in touch
                  <ArrowRight size={15} />
                </a>

                <a
                  href="https://github.com/sudhir-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  <Code2 size={16} />
                  GitHub
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/30">
                <span className="inline-flex items-center gap-1.5">
                  <Mail size={13} />
                  sudhirsahoo523@gmail.com
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 text-xs text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Sudhir Sahoo</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sudhir-tech"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="mailto:sudhirsahoo523@gmail.com"
              className="transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function TerminalLine({
  command,
  value,
  accent = false,
}: {
  command: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p>
        <span className="text-cyan-400">$</span>{" "}
        <span className="text-white/60">{command}</span>
      </p>

      <p className={accent ? "pl-5 text-cyan-300" : "pl-5 text-white/35"}>
        {value}
      </p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="font-mono text-xs tracking-wider text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl leading-7 text-white/40">
          {description}
        </p>
      )}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.018] p-5 transition hover:border-cyan-400/20">
      <div className="text-cyan-400">{icon}</div>

      <p className="mt-5 text-sm font-semibold">{title}</p>

      <p className="mt-2 text-xs leading-5 text-white/35">{text}</p>
    </div>
  );
}

function EngineeringCard({
  icon,
  title,
  items,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.018] p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/[0.06] text-cyan-400">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold">{title}</h3>

      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <p key={item} className="text-xs text-white/40">
            <span className="mr-2 text-cyan-400">→</span>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function StatCard({
  value,
  title,
  text,
}: {
  value: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.018] p-7">
      <p className="font-mono text-4xl font-bold text-cyan-400">{value}</p>

      <h3 className="mt-4 text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-white/40">{text}</p>
    </div>
  );
}

function EducationCard({
  title,
  school,
  period,
}: {
  title: string;
  school: string;
  period: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.018] p-6 transition hover:border-cyan-400/20 md:flex-row md:items-center md:justify-between">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04]">
          <GraduationCap size={18} className="text-cyan-400" />
        </div>

        <div>
          <h3 className="font-semibold">{title}</h3>

          <p className="mt-1 text-sm text-white/40">{school}</p>
        </div>
      </div>

      <p className="font-mono text-xs text-white/35">{period}</p>
    </div>
  );
}