import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  ChartNoAxesCombined,
  ChevronRight,
  CircleUserRound,
  FolderKanban,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  aboutKeywords,
  experiences,
  interests,
  keywords,
  profile,
  projects,
  skills,
  type Project,
} from "./data/portfolio";

const routes = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

const getRoute = () => window.location.hash.replace("#/", "") || "home";

function App() {
  const [route, setRoute] = useState(getRoute());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRoute());
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  const activeProject = useMemo(() => {
    if (!route.startsWith("project/")) return undefined;
    return projects.find((project) => project.id === route.split("/")[1]);
  }, [route]);

  return (
    <div className="site-shell">
      <Header route={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen ? <MobileMenu route={route} /> : null}
      <main>
        {route === "home" ? <HomePage /> : null}
        {route === "about" ? <AboutPage /> : null}
        {route === "experience" ? <ExperiencePage /> : null}
        {route === "projects" ? <ProjectsPage /> : null}
        {route === "skills" ? <SkillsPage /> : null}
        {route === "interests" ? <InterestsPage /> : null}
        {route === "contact" ? <ContactPage /> : null}
        {activeProject ? <ProjectDetail project={activeProject} /> : null}
        {!routes.some((item) => item.id === route) && !activeProject ? (
          <NotFoundPage />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

function Header({
  route,
  menuOpen,
  setMenuOpen,
}: {
  route: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="site-header">
      <a className="brand-pill" href="#/home" aria-label="Go to home">
        {profile.shortName}
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {routes.map((item) => (
          <a
            className={route === item.id ? "active" : ""}
            href={`#/${item.id}`}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button
        className="icon-button mobile-only"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

function MobileMenu({ route }: { route: string }) {
  return (
    <nav className="mobile-menu" aria-label="Mobile navigation">
      {routes.map((item) => (
        <a
          className={route === item.id ? "active" : ""}
          href={`#/${item.id}`}
          key={item.id}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="kicker">Portfolio 2026</p>
          <h1>
            Creative
            <span>{profile.name}</span>
            Portfolio
          </h1>
          <p>{profile.tagline}</p>
          <div className="hero-actions">
            <a className="button primary" href="#/projects">
              View Projects <ArrowUpRight size={18} />
            </a>
            <a className="button ghost" href="#/contact">
              Contact <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Sumin Lee portfolio portrait">
          <img src={profile.heroImage} alt="Sumin Lee smiling outdoors" />
          <div className="visual-badge">
            <Sparkles size={18} />
            Brand Strategy / UX / Data
          </div>
        </div>
      </section>

      <section className="landing-intro-section">
        <div className="intro-statement">
          <p>{profile.landingIntro}</p>
        </div>
        <div className="landing-keywords">
          <p className="kicker">These Keywords show me</p>
          <div className="landing-keyword-grid">
            {keywords.map((keyword, index) => (
              <article className="landing-keyword-card" key={keyword.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{keyword.title}</h2>
                <p>{keyword.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="toc-section">
        <div>
          <p className="kicker">Table of Contents</p>
          <h2>Choose a page</h2>
        </div>
        <div className="toc-grid">
          {routes.slice(1).map((item, index) => (
            <a href={`#/${item.id}`} className="toc-link" key={item.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
              <ChevronRight size={18} />
            </a>
          ))}
        </div>
      </section>

      <section className="featured-strip">
        {projects.slice(0, 5).map((project, index) => (
          <a
            className="project-tile"
            href={`#/project/${project.id}`}
            key={project.id}
            style={{ "--accent": project.accent } as React.CSSProperties}
          >
            <span>{index + 1}</span>
            <strong>{project.title}</strong>
            <small>{project.eyebrow}</small>
          </a>
        ))}
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <PageFrame eyebrow="Introduction" title="About Sumin">
      <div className="about-layout">
        <div className="portrait-card">
          <img src={profile.portrait} alt="Sumin Lee portrait" />
        </div>
        <div className="rich-copy">
          <h3>{profile.title}</h3>
          <p>{profile.intro}</p>
          <p>{profile.story}</p>
          <div className="keyword-grid">
            {aboutKeywords.map((keyword) => (
              <article className="keyword-card" key={keyword.title}>
                <Sparkles size={18} />
                <h4>{keyword.title}</h4>
                <p>{keyword.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

function ExperiencePage() {
  const work = experiences.filter((item) => item.category === "Work");
  const associations = experiences.filter((item) => item.category === "Association");

  return (
    <PageFrame eyebrow="Career" title="Experience">
      <p className="page-lede">
        My experience spans brand management, growth marketing, product
        planning, UI/UX design, and user research across startups, labs, and
        student associations.
      </p>
      <Timeline title="Work Experience" items={work} icon={<BriefcaseBusiness />} />
      <Timeline title="Association Experience" items={associations} icon={<GraduationCap />} />
    </PageFrame>
  );
}

function Timeline({
  title,
  items,
  icon,
}: {
  title: string;
  items: typeof experiences;
  icon: React.ReactNode;
}) {
  return (
    <section className="timeline-block">
      <div className="section-title">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-item" key={`${item.organization}-${item.role}`}>
            <div>
              <span>{item.period}</span>
              <h4>{item.organization}</h4>
              <p>{item.role}</p>
            </div>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <PageFrame eyebrow="Selected Work" title="Project Portfolio">
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </PageFrame>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      className="project-card"
      href={`#/project/${project.id}`}
      style={{ "--accent": project.accent } as React.CSSProperties}
    >
      <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
      <div className="project-media">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="eager"
            decoding="async"
          />
        ) : null}
      </div>
      <div className="project-card-copy">
        <p>{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <span>
          View case <ArrowUpRight size={16} />
        </span>
      </div>
    </a>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <PageFrame eyebrow={project.eyebrow} title={project.title}>
      <section
        className="case-hero"
        style={{ "--accent": project.accent } as React.CSSProperties}
      >
        <div>
          <p>{project.summary}</p>
          {project.external ? (
            <a className="button primary" href={project.external} target="_blank">
              Open Project <ArrowUpRight size={18} />
            </a>
          ) : null}
        </div>
        <div className="case-image">
          {project.image ? <img src={project.image} alt={`${project.title} interface`} /> : null}
        </div>
      </section>

      <section className="case-columns">
        <article>
          <h3>My Role</h3>
          <p>{project.role}</p>
        </article>
        <article>
          <h3>Outcome</h3>
          <p>{project.outcome}</p>
        </article>
      </section>

      <section className="case-detail-list">
        <h3>Process Notes</h3>
        {project.details.map((detail, index) => (
          <div className="detail-row" key={detail}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{detail}</p>
          </div>
        ))}
      </section>

      <div className="chip-row">
        {project.capabilities.map((capability) => (
          <span className="chip" key={capability}>
            {capability}
          </span>
        ))}
      </div>
    </PageFrame>
  );
}

function SkillsPage() {
  return (
    <PageFrame eyebrow="Capabilities" title="Skills & Documents">
      <div className="skills-layout">
        <section className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </section>
        <section className="document-panel">
          <h3>Document Archive</h3>
          <p>
            Resume, certificates, licenses, project documents, and guidebooks
            are represented through the source portfolio's document section and
            project case links.
          </p>
          <a className="button ghost" href={profile.links[0].href} target="_blank">
            Original Archive <ArrowUpRight size={18} />
          </a>
        </section>
      </div>
    </PageFrame>
  );
}

function InterestsPage() {
  const [activeInterestId, setActiveInterestId] = useState(interests[0]?.id ?? "");
  const activeInterest =
    interests.find((interest) => interest.id === activeInterestId) ?? interests[0];

  return (
    <PageFrame eyebrow="Interests" title="Traveling, Photography & Design">
      <div className="interest-grid">
        {interests.map((interest) => (
          <button
            className={`interest-card ${
              activeInterest?.id === interest.id ? "active" : ""
            }`}
            key={interest.id}
            type="button"
            onClick={() => setActiveInterestId(interest.id)}
            aria-pressed={activeInterest?.id === interest.id}
          >
            <div className="interest-card-media">
              <img
                src={interest.cover}
                alt={`${interest.title} preview`}
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="interest-card-copy">
              {interest.title.includes("Travel") ? <Camera /> : <ChartNoAxesCombined />}
              <h3>{interest.title}</h3>
              <p>{interest.text}</p>
              <span>
                View works <ArrowUpRight size={16} />
              </span>
            </div>
          </button>
        ))}
      </div>
      {activeInterest ? (
        <section className="interest-detail">
          <div className="section-title">
            <FolderKanban />
            <h3>{activeInterest.title}</h3>
          </div>
          <div className="interest-gallery">
            {activeInterest.gallery.map((item) => (
              <article className="interest-gallery-item" key={item.title}>
                <img
                  src={item.image}
                  alt={`${item.title} ${item.type}`}
                  loading="eager"
                  decoding="async"
                />
                <div className="interest-gallery-copy">
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </PageFrame>
  );
}

function ContactPage() {
  return (
    <PageFrame eyebrow="Contact" title="Let's connect">
      <section className="contact-panel">
        <div>
          <CircleUserRound size={34} />
          <h3>{profile.name}</h3>
          <p>{profile.school}</p>
        </div>
        <div className="contact-links">
          {profile.emails.map((email) => (
            <a href={`mailto:${email}`} key={email}>
              <Mail size={18} />
              {email}
            </a>
          ))}
          {profile.links.map((link) => (
            <a href={link.href} target="_blank" key={link.label}>
              <ArrowUpRight size={18} />
              {link.label}
            </a>
          ))}
          <span>
            <MapPin size={18} />
            Seoul, Korea
          </span>
        </div>
      </section>
    </PageFrame>
  );
}

function PageFrame({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page-frame">
      <div className="page-heading">
        <p className="kicker">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      {children}
    </section>
  );
}

function NotFoundPage() {
  return (
    <PageFrame eyebrow="404" title="Page not found">
      <a className="button primary" href="#/home">
        Back Home
      </a>
    </PageFrame>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>{profile.name}</span>
      <span>{profile.school}</span>
      <a href="#/contact">Contact</a>
    </footer>
  );
}

export default App;
