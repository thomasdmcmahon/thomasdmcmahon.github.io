import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import headshot from "../assets/headshot.jpg";

const NAV_LINKS = [
  "About",
  "Skills",
  "Projects",
  "Education",
  "Experience",
  "Contact",
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(245,242,237,0.95)" : "#f5f2ed",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: "1px solid rgba(28,25,23,0.1)",
        transition: "background-color 0.2s",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "#2e5440", letterSpacing: "-0.01em" }}>
              Thomas Dalen McMahon
            </div>
            <div style={{ fontSize: "0.75rem", color: "#6b6560", fontWeight: 300, marginTop: "0.1rem" }}>
              Oslo, Norway
            </div>
          </div>

          <nav style={{ display: "flex", gap: "2rem" }} className="hidden-mobile">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  color: "#6b6560",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  padding: 0,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2e5440")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6560")}
              >
                {link}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none" }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            <div style={{ width: 20, height: 2, backgroundColor: "#1c1917", marginBottom: 5 }} />
            <div style={{ width: 14, height: 2, backgroundColor: "#1c1917", marginBottom: 5 }} />
            <div style={{ width: 20, height: 2, backgroundColor: "#1c1917" }} />
          </button>
        </div>

        {menuOpen && (
          <nav style={{ paddingBottom: "1rem", borderTop: "1px solid rgba(28,25,23,0.08)", display: "flex", flexDirection: "column", gap: "0.75rem", paddingTop: "1rem" }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "0.9rem", color: "#1c1917",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
                  textAlign: "left", padding: "0.25rem 0",
                }}
              >
                {link}
              </button>
            ))}
          </nav>
        )}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 701px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}

const PHOTO_SRC = headshot;

function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem 3rem", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "3rem" }} className="hero-inner">
        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.25,
              color: "#1c1917",
              maxWidth: 620,
              marginBottom: "1.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            Informatics student focused on language technology,{" "}
            <em style={{ fontStyle: "italic", color: "#2e5440" }}>sustainability</em>,
            {" "}and responsible digital systems.
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#4a4540",
              maxWidth: 520,
              marginBottom: "2.5rem",
              fontWeight: 300,
            }}
          >
            I'm passionate about using technology to support better decisions,
            more sustainable systems, and responsible innovation. I'm especially
            drawn to projects where digital tools can turn complex information
            into something practical, useful, and meaningful.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("projects")}
              style={{
                backgroundColor: "#2e5440",
                color: "#f5f2ed",
                border: "none",
                padding: "0.65rem 1.4rem",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "background-color 0.15s",
                borderRadius: 2,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#25432f")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2e5440")}
            >
              View projects <ArrowRight size={14} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                backgroundColor: "transparent",
                color: "#1c1917",
                border: "1px solid rgba(28,25,23,0.25)",
                padding: "0.65rem 1.4rem",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                transition: "border-color 0.15s",
                borderRadius: 2,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(28,25,23,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(28,25,23,0.25)")}
            >
              Contact me
            </button>
          </div>
        </div>

        {/* Photo */}
        <div style={{ flexShrink: 0, alignSelf: "flex-start", paddingTop: "2.5rem" }} className="hero-photo">
          {PHOTO_SRC ? (
            <img
              src={PHOTO_SRC}
              alt="Thomas Dalen McMahon"
              style={{
                width: 160, height: 200,
                objectFit: "cover", objectPosition: "center top",
                borderRadius: 2, display: "block",
                border: "1px solid rgba(28,25,23,0.1)",
              }}
            />
          ) : (
            <div
              style={{
                width: 160, height: 200,
                backgroundColor: "#e5e0d8",
                border: "1px dashed rgba(28,25,23,0.2)",
                borderRadius: 2,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "0.5rem",
              }}
            >
              <span style={{ fontFamily: "'Newsreader', serif", fontSize: "2.5rem", color: "#2e5440", fontWeight: 300 }}>
                TM
              </span>
              <span style={{ fontSize: "0.7rem", color: "#6b6560", fontFamily: "'DM Sans', sans-serif", textAlign: "center", padding: "0 0.5rem", lineHeight: 1.4 }}>
                Thomas Dalen McMahon
              </span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .hero-inner { flex-direction: column-reverse !important; }
          .hero-photo { align-self: auto !important; padding-top: 0 !important; }
          .hero-photo img, .hero-photo > div { width: 100px !important; height: 125px !important; }
        }
      `}</style>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.75rem" }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#2e5440", flexShrink: 0, display: "inline-block" }} />
      <p style={{
        fontSize: "0.7rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#6b6560",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        margin: 0,
      }}>
        {children}
      </p>
    </div>
  );
}

function Divider() {
  return (
    <hr style={{ border: "none", borderTop: "1px solid rgba(28,25,23,0.1)", margin: "3rem 0 0" }} />
  );
}

function About() {
  return (
    <section id="about" style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 2rem" }}>
      <SectionLabel>About</SectionLabel>
      <div style={{ maxWidth: 760 }}>
        {[
          "I'm an informatics student interested in how technology can help us understand complex systems and make better decisions. My academic background is in language technology, AI, and digital systems, but my broader motivation is sustainability: how we can use technology in ways that create long-term value for people, organizations, and society.",
          "Spending a semester at Korea University in Seoul has strengthened my interest in international collaboration, especially in the intersection of technology, sustainability, and business. Living and studying in Asia has made me more curious about how digital transformation happens across different markets, cultures, and societies, and how technology can be used to address global challenges.",
          "I'm especially drawn to the space between technical problem-solving and real-world impact. I enjoy working with ideas that make information easier to understand, systems easier to use, and decisions more informed. Long term, I want to build an international career combining AI, sustainability, and digital transformation.",
          "My goal is not only to work with technology, but to contribute to how technology is used responsibly and meaningfully in business and society.",
        ].map((text, i, arr) => (
          <p
            key={i}
            style={{
              fontSize: i === 0 ? "1.05rem" : "1rem",
              lineHeight: 1.75,
              color: i === 0 ? "#1c1917" : "#2a2520",
              marginBottom: i < arr.length - 1 ? "1.25rem" : 0,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: i === 0 ? 400 : 300,
            }}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "What Did I Just Sign?",
    description:
      "A privacy policy analysis tool that turns long, unreadable terms into clear risk cards, summaries, and source-backed explanations.",
    tags: ["Privacy", "NLP", "React", "AI", "HCI"],
    status: "Working demo · In development",
    links: [{ label: "GitHub", href: "https://github.com/thomasdmcmahon/what-did-i-just-sign" }],
  },
  {
    title: "PostgreSQL Life Cycle Assessment Database",
    description:
      "A supply-chain database project modeling product life cycles as a queryable graph of processes, flows, and exchanges using PostgreSQL and ELCD data.",
    tags: ["PostgreSQL", "Data engineering", "Sustainability", "LCA"],
    status: "Technical project",
    links: [{ label: "GitHub", href: "https://github.com/thomasdmcmahon/LCA_Supply_Chain_Database" }],
  },
];

function Projects() {
  return (
    <section id="projects" style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 2rem" }}>
      <SectionLabel>Featured projects</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="project-grid">
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#ede9e2",
              border: "1px solid rgba(28,25,23,0.1)",
              borderTop: "3px solid #2e5440",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              borderRadius: 2,
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(46,84,64,0.1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
          >
            <div>
              <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: "1.25rem", fontWeight: 400, color: "#1c1917", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "#4a4540", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                {p.description}
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.06em",
                    backgroundColor: "rgba(46,84,64,0.1)",
                    color: "#2e5440",
                    padding: "0.2rem 0.55rem",
                    borderRadius: 2,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.75rem", color: "#6b6560", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
                {p.status}
              </span>
              <div style={{ display: "flex", gap: "1rem" }}>
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.8rem", color: "#2e5440",
                      textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500, display: "flex", alignItems: "center",
                      gap: "0.2rem", transition: "opacity 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  >
                    {l.label} <ExternalLink size={11} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .project-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const SKILLS = [
  {
    category: "AI & Language Technology",
    items: ["Natural Language Processing", "Machine Learning Fundamentals", "Python", "Linguistics", "Text Analysis"],
    bg: "#ddeae3",
    border: "rgba(46,84,64,0.15)",
    headingColor: "#1c1917",
    textColor: "#2a2520",
    ruleColor: "#2e5440",
  },
  {
    category: "Data & Digital Systems",
    items: ["Databases", "SQL", "Algorithms & Data Structures", "Information Systems", "Digital Product Thinking"],
    bg: "#dce6f0",
    border: "rgba(58,95,125,0.15)",
    headingColor: "#1c1917",
    textColor: "#2a2520",
    ruleColor: "#3a5f7d",
  },
  {
    category: "Communication & Problem Solving",
    items: ["Technical Communication", "Teaching", "User-Oriented Problem Solving", "Analytical Thinking"],
    bg: "#f0e0db",
    border: "rgba(140,74,64,0.15)",
    headingColor: "#1c1917",
    textColor: "#2a2520",
    ruleColor: "#8c4a40",
  },
];

function SkillBox({ skill, large }: { skill: typeof SKILLS[0]; large?: boolean }) {
  return (
    <div style={{
      backgroundColor: skill.bg,
      border: `1px solid ${skill.border}`,
      padding: large ? "1.75rem 2rem" : "1.4rem 1.6rem",
      borderRadius: 2,
      height: "100%",
      boxSizing: "border-box",
    }}>
      {/* Colored rule above heading */}
      <div style={{ width: 22, height: 2, backgroundColor: skill.ruleColor, marginBottom: "0.75rem" }} />

      <p style={{
        fontFamily: "'Newsreader', serif",
        fontSize: large ? "1.15rem" : "1rem",
        fontWeight: 400,
        color: skill.headingColor,
        marginBottom: "0.9rem",
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      }}>
        {skill.category}
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
        {skill.items.map((item) => (
          <li key={item} style={{
            fontSize: "0.825rem",
            color: skill.textColor,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            lineHeight: 1.4,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}>
            <span style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: skill.ruleColor, flexShrink: 0, opacity: 0.6 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 2rem" }}>
      <SectionLabel>Skills & toolkit</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <SkillBox skill={SKILLS[0]} large />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="skills-bottom">
          <SkillBox skill={SKILLS[1]} />
          <SkillBox skill={SKILLS[2]} />
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .skills-bottom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const EDUCATION = [
  {
    org: "University of Oslo",
    role: "Bachelor's in Informatics: Language Technology",
    duration: "08.2023–06.2026",
    description: "Focused on informatics, programming, language technology, and NLP, with additional interests in rhetoric, sustainability, and digital society.",
  },
  {
    org: "Korea University",
    role: "Exchange Semester",
    duration: "Spring 2026",
    description: "Exchange semester in Seoul as part of my bachelor's degree, studying at one of South Korea's leading universities.",
  },
];

const EXPERIENCE = [
  {
    org: "Talkmore / Telenor",
    role: "Customer Support & Digital Testing",
    duration: "5 years",
    description: "Worked with customer communication, technical troubleshooting, digital testing, support systems, FAQ/SEO improvements, and communication between users and technical teams.",
  },
  {
    org: "University of Oslo",
    role: "Teaching Assistant, IN1000",
    duration: "2 semesters",
    description: "Led weekly programming groups, supported beginner Python students, and helped students understand core programming concepts through practical exercises.",
  },
];

function TableRow({ org, role, duration, description, isLast }: { org: string; role: string; duration?: string; description?: string; isLast: boolean }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "2rem",
        padding: "1.75rem 0",
        borderTop: "1px solid rgba(28,25,23,0.1)",
        borderBottom: isLast ? "1px solid rgba(28,25,23,0.1)" : "none",
      }}
      className="experience-row"
    >
      <div>
        <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#1c1917", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>
          {org}
        </p>
        {duration && (
          <p style={{ fontSize: "0.775rem", color: "#2e5440", fontFamily: "'DM Sans', sans-serif", fontWeight: 400, marginTop: "0.2rem" }}>
            {duration}
          </p>
        )}
      </div>
      <div>
        <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#1c1917", marginBottom: description ? "0.35rem" : 0, fontFamily: "'DM Sans', sans-serif" }}>
          {role}
        </p>
        {description && (
          <p style={{ fontSize: "0.875rem", color: "#4a4540", lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function Education() {
  return (
    <section id="education" style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 2rem" }}>
      <SectionLabel>Education</SectionLabel>
      <div>
        {EDUCATION.map((e, i) => (
          <TableRow key={i} {...e} isLast={i === EDUCATION.length - 1} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 2rem" }}>
      <SectionLabel>Experience</SectionLabel>
      <div>
        {EXPERIENCE.map((e, i) => (
          <TableRow key={i} {...e} isLast={i === EXPERIENCE.length - 1} />
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .experience-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function Contact() {
  const links = [
    { label: "thomasdmcmahon@proton.me", href: "mailto:thomasdmcmahon@proton.me", icon: <Mail size={16} strokeWidth={1.5} /> },
    { label: "github.com/thomasdmcmahon", href: "https://github.com/thomasdmcmahon", icon: <Github size={16} strokeWidth={1.5} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thomas-dalen-mcmahon-977320233/", icon: <Linkedin size={16} strokeWidth={1.5} /> },
  ];

  return (
    <section id="contact" style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 2rem 4rem" }}>
      <SectionLabel>Contact</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="contact-grid">
        <div>
          <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: "1.6rem", fontWeight: 300, color: "#1c1917", lineHeight: 1.35, marginBottom: "1rem" }}>
            Open to internships, projects, and conversations.
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#4a4540", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
            I'm open to internships, project collaborations, and conversations about technology, AI, sustainability, and international opportunities.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.85rem 0",
                borderBottom: "1px solid rgba(28,25,23,0.1)",
                color: "#1c1917", textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem",
                fontWeight: 300, transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#2e5440")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#1c1917")}
            >
              <span style={{ color: "#2e5440" }}>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: "#f5f2ed", minHeight: "100vh" }}>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
    </div>
  );
}
