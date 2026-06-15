import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  ChartNoAxesCombined,
  ChevronRight,
  CircleUserRound,
  Download,
  FileText,
  FolderKanban,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  aboutNarrative,
  aboutKeywords,
  documentSections,
  experiences,
  interests,
  interestsIntro,
  keywords,
  profile,
  projects,
  skills,
  softwareTools,
  type Interest,
  type DocumentSection,
  type Project,
} from "./data/portfolio";

const routes = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "documents", label: "Documents" },
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

  const activeInterest = useMemo(() => {
    if (!route.startsWith("interest/")) return undefined;
    return interests.find((interest) => interest.id === route.split("/")[1]);
  }, [route]);

  const activeDocument = useMemo(() => {
    if (!route.startsWith("document/")) return undefined;
    return documentSections.find((section) => section.id === route.split("/")[1]);
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
        {route === "documents" ? <DocumentsPage /> : null}
        {route === "interests" ? <InterestsPage /> : null}
        {route === "contact" ? <ContactPage /> : null}
        {activeProject ? <ProjectDetail project={activeProject} /> : null}
        {activeInterest ? <InterestDetail interest={activeInterest} /> : null}
        {activeDocument ? <DocumentDetail section={activeDocument} /> : null}
        {!routes.some((item) => item.id === route) &&
        !activeProject &&
        !activeInterest &&
        !activeDocument ? (
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
            className={
              route === item.id ||
              (item.id === "interests" && route.startsWith("interest/")) ||
              (item.id === "documents" && route.startsWith("document/"))
                ? "active"
                : ""
            }
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
          className={
            route === item.id ||
            (item.id === "interests" && route.startsWith("interest/")) ||
            (item.id === "documents" && route.startsWith("document/"))
              ? "active"
              : ""
          }
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
            Who is
            <span>Sumin?</span>
          </h1>
          <p>{profile.tagline}</p>
          <div className="hero-proof-row" aria-label="Sumin Lee focus areas">
            <span>Brand Strategy</span>
            <span>UX Planning</span>
            <span>Data Insight</span>
          </div>
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

      <section className="featured-project-section">
        <div className="section-title">
          <FolderKanban />
          <h3>Project Highlights</h3>
        </div>
        <div className="featured-strip">
          {projects.slice(0, 5).map((project, index) => (
            <a
              className={`project-tile ${
                project.accent.toLowerCase() === "#ffdbed" ? "project-tile-light" : ""
              }`}
              href={`#/project/${project.id}`}
              key={project.id}
              style={{ "--accent": project.accent } as React.CSSProperties}
            >
              <span>{index + 1}</span>
              <strong>{project.title}</strong>
              <small>{project.eyebrow}</small>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <PageFrame eyebrow="Introduction" title="About Me">
      <section className="about-wix-layout">
        <div className="about-profile-panel">
          <div className="portrait-card">
            <img src={profile.portrait} alt="Sumin Lee portrait" />
          </div>
          <div className="about-socials" aria-label="Sumin Lee profile links">
            <a href="mailto:leesm5088@naver.com?subject=Portfolio%20Contact">
              <Mail size={17} />
              Email
            </a>
            <a href="https://www.linkedin.com/in/sumin-lee-0270a8292/" target="_blank">
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="about-main-copy">
          <h2>{profile.title}</h2>
          <p className="about-opening">{aboutNarrative[0]}</p>
          <section className="about-story-block">
            <h3>My Story</h3>
            {aboutNarrative.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <section className="about-contact-block">
            <h3>Contact</h3>
            <p>I'm always looking for new and exciting opportunities. Let's connect.</p>
            <div className="about-contact-list">
              {profile.emails.map((email) => (
                <a href={`mailto:${email}?subject=Portfolio%20Contact`} key={email}>
                  {email}
                </a>
              ))}
            </div>
          </section>
          <section className="about-keyword-section">
            <p className="kicker">Three Keywords</p>
            <div className="keyword-grid about-keyword-grid">
              {aboutKeywords.map((keyword) => (
                <article className="keyword-card" key={keyword.title}>
                  <Sparkles size={18} />
                  <h4>{keyword.title}</h4>
                  <p>{keyword.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
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
              {item.description ? (
                <p className="timeline-description">{item.description}</p>
              ) : null}
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
    <PageFrame eyebrow="Selected Work" title="Project">
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
      className={`project-card ${
        project.accent.toLowerCase() === "#ffdbed" ? "project-card-light" : ""
      }`}
      href={`#/project/${project.id}`}
      style={{ "--accent": project.accent } as React.CSSProperties}
    >
      <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
      <div
        className={`project-media ${project.id === "nft-camera" ? "project-media-contain" : ""} ${
          project.id === "sephora-guide" ? "project-media-document" : ""
        }`}
      >
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
  const actions =
    project.actions ?? (project.external ? [{ label: "Open Project", href: project.external }] : []);

  return (
    <PageFrame eyebrow={project.eyebrow} title={project.title}>
      <section
        className="case-hero"
        style={{ "--accent": project.accent } as React.CSSProperties}
      >
        <div>
          <p>{project.summary}</p>
          {actions.length ? (
            <div className="case-actions">
              {actions.map((action, index) => (
                <a
                  className={`button ${index === 0 ? "primary" : "ghost"}`}
                  href={action.href}
                  target="_blank"
                  key={action.href}
                >
                  {action.label} <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <div
          className={`case-image ${project.id === "nft-camera" ? "case-image-contain" : ""} ${
            project.id === "sephora-guide" ? "case-image-document" : ""
          } ${project.id === "leviosa" ? "case-image-leviosa" : ""}`}
        >
          {project.image ? <img src={project.image} alt={`${project.title} interface`} /> : null}
        </div>
      </section>

      <section className="case-columns">
        <article className="role-card">
          <h3>My Role</h3>
          <p>{project.role}</p>
          <div className="chip-row role-skill-row">
            {project.capabilities.map((capability) => (
              <span className="chip" key={capability}>
                {capability}
              </span>
            ))}
          </div>
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

      {project.sections?.length ? (
        <section className="case-story-grid">
          {project.sections.map((section) => (
            <article
              className={`case-story-card ${
                project.id === "sephora-guide" && section.title === "Why Our Guidebook?"
                  ? "guidebook-why-card"
                  : ""
              } ${
                project.id === "sephora-guide" && section.title === "Guidebook Structure"
                  ? "guidebook-toc-card"
                  : ""
              }`}
              key={section.title}
            >
              {section.image ? (
                <div className="case-story-media">
                  <img src={section.image} alt={`${project.title} ${section.title}`} />
                </div>
              ) : null}
              <div className="case-story-copy">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            </article>
          ))}
        </section>
      ) : null}

      {project.gallery?.length ? (
        <section className="case-gallery-section">
          <div className="section-title">
            <FolderKanban />
            <h3>Project Materials</h3>
          </div>
          <div className="case-gallery">
            {project.gallery.map((item) => (
              <article className="case-gallery-item" key={item.title}>
                <img src={item.image} alt={`${project.title} ${item.title}`} />
                <div className="case-gallery-copy">
                  <h3>{item.title}</h3>
                  {item.note ? <p>{item.note}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

    </PageFrame>
  );
}

function SkillsPage() {
  return (
    <PageFrame eyebrow="Capabilities" title="Skills">
      <div className="skills-stack">
        <section className="tool-section">
          <div className="section-title">
            <Sparkles />
            <h3>Tools I Use</h3>
          </div>
          <div className="tool-grid">
            {softwareTools.map((tool) => (
              <article className="tool-card" key={tool.name}>
                <div className="tool-logo">
                  <img src={tool.icon} alt={`${tool.name} logo`} />
                </div>
                <div>
                  <span>{tool.category}</span>
                  <h4>{tool.name}</h4>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skill-panel">
          <div className="section-title">
            <FolderKanban />
            <h3>Developed Skills</h3>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}

function DocumentsPage() {
  return (
    <PageFrame eyebrow="Archive" title="Documents">
      <p className="page-lede">
        Resume, completion certificates, and licenses are organized as separate
        review pages so the supporting materials can be checked inside this
        portfolio.
      </p>
      <div className="document-stack">
        {documentSections.map((section) => (
          <DocumentCard section={section} key={section.id} />
        ))}
      </div>
    </PageFrame>
  );
}

function DocumentCard({ section }: { section: DocumentSection }) {
  const isExternal = !section.href.startsWith("#/");

  return (
    <article className="document-card">
      <div className="document-preview">
        <img
          src={section.preview}
          alt={`${section.title} preview`}
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="document-copy">
        <span>{section.eyebrow}</span>
        <h3>{section.title}</h3>
        <p>{section.text}</p>
        <div className="chip-row">
          {section.highlights.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
        <a
          className={`button ${isExternal ? "ghost" : "primary"}`}
          href={section.href}
          target={isExternal ? "_blank" : undefined}
        >
          {section.action}
          {section.title === "Resume" ? <Download size={18} /> : <FileText size={18} />}
        </a>
      </div>
    </article>
  );
}

function DocumentDetail({ section }: { section: DocumentSection }) {
  const images = Array.from(new Set([section.preview, ...(section.gallery ?? [])]));
  const isResume = section.id === "resume";

  return (
    <PageFrame eyebrow={section.eyebrow} title={section.title}>
      <section className="document-detail-hero">
        <div>
          <p className="page-lede">{section.detailIntro ?? section.text}</p>
          <div className="chip-row">
            {section.highlights.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="document-detail-actions">
          <a className="button ghost" href="#/documents">
            Back to Documents
          </a>
          {isResume ? (
            <a className="button primary" href={section.href} target="_blank">
              Download Resume <Download size={18} />
            </a>
          ) : null}
        </div>
      </section>

      <section className="document-detail-gallery" aria-label={`${section.title} materials`}>
        {images.map((image, index) => (
          <figure className="document-detail-image" key={image}>
            <img
              src={image}
              alt={`${section.title} document ${index + 1}`}
              loading="eager"
              decoding="async"
            />
            <figcaption>
              {section.title} {String(index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </section>
    </PageFrame>
  );
}

function InterestsPage() {
  return (
    <PageFrame eyebrow="Personal Archive" title="Interests">
      <p className="page-lede interest-page-lede">{interestsIntro}</p>
      <div className="interest-grid">
        {interests.map((interest) => (
          <a
            className="interest-card"
            href={`#/interest/${interest.id}`}
            key={interest.id}
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
          </a>
        ))}
      </div>
    </PageFrame>
  );
}

function InterestDetail({ interest }: { interest: Interest }) {
  const galleryColumns = getInterestGalleryColumns(interest);

  return (
    <PageFrame eyebrow="Interests" title={interest.title}>
      <div className="interest-detail-head">
        <p className="page-lede">{interest.text}</p>
        <a className="button ghost" href="#/interests">
          Back to Interests
        </a>
      </div>
      <section className="interest-detail">
        <div className="section-title">
          <FolderKanban />
          <h3>Works</h3>
        </div>
        <div className="interest-gallery">
          {galleryColumns.map((column, columnIndex) => (
            <div className="interest-gallery-column" key={`${interest.id}-${columnIndex}`}>
              {column.map((item) => (
                <article className="interest-gallery-item" key={item.title}>
                  <img
                    src={item.image}
                    alt={`${item.title} ${item.type}`}
                    loading="eager"
                    decoding="async"
                  />
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

function getInterestGalleryColumns(interest: Interest) {
  if (interest.id === "traveling-photography") {
    const leftIndexes = new Set([0, 3, 6, 7]);
    return [
      interest.gallery.filter((_, index) => leftIndexes.has(index)),
      interest.gallery.filter((_, index) => !leftIndexes.has(index)),
    ];
  }

  if (interest.id === "design") {
    const leftIndexes = new Set([0, 3, 5, 6]);
    return [
      interest.gallery.filter((_, index) => leftIndexes.has(index)),
      interest.gallery.filter((_, index) => !leftIndexes.has(index)),
    ];
  }

  return [
    interest.gallery.filter((_, index) => index % 2 === 0),
    interest.gallery.filter((_, index) => index % 2 === 1),
  ];
}

function ContactPage() {
  return (
    <PageFrame eyebrow="Contact" title="Contact Me">
      <section className="contact-hero">
        <div className="contact-intro">
          <CircleUserRound size={30} />
          <h3>{profile.name}</h3>
          <p>
            Curious about my projects, work experience, travel stories, or a
            casual coffee chat? Feel free to reach out.
          </p>
          <span>
            <MapPin size={18} />
            {profile.school}
          </span>
        </div>
        <div className="contact-links">
          {profile.emails.map((email) => (
            <a href={`mailto:${email}?subject=Portfolio%20Contact`} key={email}>
              <Mail size={18} />
              {email}
            </a>
          ))}
          {profile.links.map((link) => (
            <a href={link.href} target="_blank" key={link.label}>
              {link.label === "LinkedIn" ? <Linkedin size={18} /> : <ArrowUpRight size={18} />}
              {link.label}
            </a>
          ))}
          <span>
            <MapPin size={18} />
            Seoul, Korea
          </span>
        </div>
      </section>
      <section className="contact-reachout-panel">
        <div>
          <p className="kicker">Reach out for</p>
          <h3>Open conversation, clear next steps.</h3>
        </div>
        <p>
          More portfolio details, project collaboration, work experience questions,
          travel-inspired stories, career conversations, or coffee chats are all welcome.
        </p>
        <div className="contact-topic-list">
          <span>More projects</span>
          <span>Work experience</span>
          <span>Travel stories</span>
          <span>Coffee chat</span>
          <span>Collaboration</span>
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
