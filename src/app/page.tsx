"use client";

import {
  ArrowUpRight,
  Code2,
  Database,
  ExternalLink,
  GitPullRequest,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Server,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";

const skills = {
  Backend: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Hibernate",
    "JPA",
    "Microservices",
  ],
  Database: ["MySQL", "SQL", "Redis"],
  Security: ["Spring Security", "JWT Authentication"],
  "DevOps & Tools": [
    "Docker",
    "Git",
    "Jenkins",
    "SonarQube",
    "CI/CD",
    "ELK",
  ],
  Testing: ["JUnit", "JDBC", "Log4j", "OOP"],
};

const projects = [
  {
    title: "E-commerce Backend System",
    description:
      "A scalable Spring Boot backend with authentication, authorization, product, cart and order management.",
    tech: ["Java", "Spring Boot", "MySQL", "JPA", "Redis"],
    github: "https://github.com/sudhir-tech/ecommerce-backend-springboot",
    icon: ShoppingBagIcon,
  },
  {
    title: "Library Management System",
    description:
      "A Spring Boot application covering book inventory, issue, return and purchase workflows with secured REST APIs.",
    tech: ["Java", "Spring Boot", "Spring Security", "JUnit", "SonarQube"],
    github: "https://github.com/sudhir-tech/Library-management-system",
    icon: BookIcon,
  },
];

const experience = [
  {
    company: "DXC Technology",
    role: "Software Engineer — Java",
    period: "Feb 2022 — Sep 2024",
    points: [
      "Developed backend applications using Java, Spring Boot, Hibernate, REST APIs, SQL, JWT Authentication and Redis.",
      "Implemented features, optimized REST APIs and SQL queries, and improved application performance.",
      "Worked with Git, Jenkins, SonarQube and CI/CD pipelines in an Agile environment.",
      "Performed root cause analysis, resolved production incidents and supported business-critical applications.",
      "Monitored application health and investigated issues using the ELK Stack.",
    ],
  },
  {
    company: "Quotus Software Solutions Pvt. Ltd.",
    role: "Software Trainee",
    period: "Oct 2020 — Jan 2021",
    points: [
      "Received hands-on training in Java, SQL, JDBC and Object-Oriented Programming.",
      "Assisted with developing and testing Java-based applications.",
      "Gained practical exposure to SDLC and collaborative software development.",
    ],
  },
];

function ShoppingBagIcon() {
  return <span className="text-2xl">🛒</span>;
}

function BookIcon() {
  return <span className="text-2xl">📚</span>;
}

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => setMobileMenu(false);

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#07090d]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a
            href="#home"
            className="font-mono text-sm font-bold tracking-tight"
          >
            <span className="text-cyan-400">sudo</span>
            hir<span className="text-white/40">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {[
              "About",
              "Experience",
              "Projects",
              "Open Source",
              "Skills",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-white/55 transition hover:text-white"
              >
                {item}
              </a>
            ))}

            <a
              href="https://github.com/sudhir-tech"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 p-2 transition hover:border-cyan-400/50 hover:text-cyan-400"
              aria-label="GitHub"
            >
              <Code2 size={16} />
            </a>
          </div>

          <button
            className="rounded-lg border border-white/10 p-2 md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/10 bg-[#07090d] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {[
                "About",
                "Experience",
                "Projects",
                "Open Source",
                "Skills",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={closeMenu}
                  className="text-sm text-white/70"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-5 pt-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.08),transparent_32%),radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.06),transparent_30%)]" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-14 py-24 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 font-mono text-xs text-cyan-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              JAVA BACKEND DEVELOPER
            </div>

            <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Sudhir
              <span className="text-white/35"> Sahoo</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
              Software Engineer focused on building scalable backend
              applications with Java, Spring Boot, REST APIs, databases and
              modern engineering practices.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                View Projects
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="https://github.com/sudhir-tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
              >
                <Code2 size={16} />
                GitHub
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "Microservices",
                "SQL",
                "Redis",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 shadow-2xl shadow-cyan-950/20">
              <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                <span className="ml-2 font-mono text-xs text-white/30">
                  sudhir@portfolio
                </span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <p>
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-white/70">whoami</span>
                </p>

                <p className="pl-5 text-white/45">
                  Java Backend Developer
                </p>

                <p className="pt-3">
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-white/70">focus</span>
                </p>

                <p className="pl-5 text-white/45">
                  Java · Spring Boot · REST · SQL
                </p>

                <p className="pt-3">
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-white/70">problems-solved</span>
                </p>

                <p className="pl-5 text-cyan-300">500+</p>

                <p className="pt-3">
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-white/70">open-source</span>
                </p>

                <p className="pl-5 text-green-300">
                  Microcks · PR #2275
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {[
            ["3+", "Years Experience"],
            ["500+", "DSA Problems"],
            ["Java", "Backend Focus"],
            ["Open Source", "Microcks"],
          ].map(([value, label]) => (
            <div key={label} className="px-5 py-7 text-center">
              <p className="text-xl font-bold">{value}</p>
              <p className="mt-1 text-xs text-white/40">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="01 / ABOUT"
          title="Building with purpose."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
          <p className="max-w-3xl text-lg leading-8 text-white/55">
            I&apos;m a software engineer with professional experience
            developing Java-based backend applications. My work centers around
            Spring Boot, REST APIs, databases, security and performance, with a
            strong focus on writing maintainable and scalable software.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <InfoCard
              icon={<Server size={18} />}
              title="Backend"
              text="Java & Spring Boot"
            />

            <InfoCard
              icon={<Database size={18} />}
              title="Data"
              text="SQL, MySQL & Redis"
            />

            <InfoCard
              icon={<ShieldCheck size={18} />}
              title="Security"
              text="Spring Security & JWT"
            />

            <InfoCard
              icon={<Code2 size={18} />}
              title="Engineering"
              text="DSA & LLD"
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-y border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading
            eyebrow="02 / EXPERIENCE"
            title="Where I&apos;ve worked."
          />

          <div className="space-y-10">
            {experience.map((job) => (
              <div
                key={job.company}
                className="grid gap-5 border-l border-cyan-400/30 pl-6 md:grid-cols-[220px_1fr] md:border-l-0 md:pl-0"
              >
                <div>
                  <p className="font-mono text-xs text-cyan-400">
                    {job.period}
                  </p>

                  <p className="mt-2 font-semibold">{job.company}</p>
                </div>

                <div className="md:border-l md:border-white/10 md:pl-8">
                  <h3 className="text-xl font-semibold">{job.role}</h3>

                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-white/50"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
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
      <section
        id="projects"
        className="mx-auto max-w-6xl px-5 py-24"
      >
        <SectionHeading
          eyebrow="03 / PROJECTS"
          title="Things I&apos;ve built."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon />
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 p-2 text-white/45 transition hover:border-white/25 hover:text-white"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <h3 className="mt-7 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-white/45">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-white/45"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-400"
                >
                  View repository
                  <ArrowUpRight size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* Open Source */}
      <section
        id="open-source"
        className="border-y border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading
            eyebrow="04 / OPEN SOURCE"
            title="Contributing beyond my own code."
          />

          <div className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.025]">
            <div className="grid lg:grid-cols-[1fr_260px]">
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                    <GitPullRequest className="text-cyan-400" />
                  </div>

                  <div>
                    <p className="font-mono text-xs text-cyan-400">
                      MICROCKS
                    </p>
                    <p className="text-xs text-white/35">
                      Open-source contribution
                    </p>
                  </div>
                </div>

                <h3 className="mt-7 text-2xl font-semibold">
                  Migrate webapp ITs to RestTestClient
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-white/50">
                  Migrated Microcks webapp integration tests from
                  TestRestTemplate to RestTestClient for Spring Boot 4.0.7
                  compatibility, while preserving existing assertions, SSE
                  behavior and redirect handling.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Spring Boot 4.0.7",
                    "RestTestClient",
                    "Integration Testing",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/microcks/microcks/pull/2275"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black"
                  >
                    View Pull Request
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href="https://github.com/sudhir-tech/microcks"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white/70"
                  >
                    Repository
                    <Code2 size={15} />
                  </a>
                </div>
              </div>

              <div className="flex items-center border-t border-white/10 p-7 lg:border-l lg:border-t-0">
                <div>
                  <p className="font-mono text-5xl font-bold text-white/90">
                    #2275
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    Pull Request
                  </p>

                  <p className="mt-6 text-sm leading-6 text-white/40">
                    A contribution to a real open-source project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-5 py-24"
      >
        <SectionHeading
          eyebrow="05 / SKILLS"
          title="My engineering toolkit."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <h3 className="font-mono text-sm text-cyan-400">
                {category}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs text-white/55"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHeading
            eyebrow="06 / ACHIEVEMENTS"
            title="Always learning."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="font-mono text-4xl font-bold text-cyan-400">
                500+
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                DSA Problems Solved
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Problems solved across LeetCode and Scaler.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
              <p className="text-2xl">🏆</p>

              <h3 className="mt-3 text-xl font-semibold">
                Certifications
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-white/45">
                <li>
                  Advanced Data Structures & Algorithms — Scaler
                </li>
                <li>SQL Certification — Scaler</li>
                <li>Generative AI Certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="07 / EDUCATION"
          title="Learning never stops."
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
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center md:p-14">
            <p className="font-mono text-xs text-cyan-400">
              08 / CONTACT
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/45">
              I&apos;m interested in Java backend and software engineering
              opportunities where I can build, learn and contribute.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:sudhirsahoo523@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-300"
              >
                <Mail size={16} />
                Email Me
              </a>

              <a
                href="https://github.com/sudhir-tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 hover:text-white"
              >
                <Code2 size={16} />
                GitHub
              </a>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-5 text-xs text-white/30">
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
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 text-xs text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Sudhir Sahoo</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sudhir-tech"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="mailto:sudhirsahoo523@gmail.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs tracking-wider text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
      <div className="text-cyan-400">{icon}</div>

      <p className="mt-4 text-sm font-semibold">{title}</p>

      <p className="mt-1 text-xs text-white/40">{text}</p>
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
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:flex-row md:items-center md:justify-between">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
          <GraduationCap
            size={18}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h3 className="font-semibold">{title}</h3>

          <p className="mt-1 text-sm text-white/40">
            {school}
          </p>
        </div>
      </div>

      <p className="font-mono text-xs text-white/35">
        {period}
      </p>
    </div>
  );
}