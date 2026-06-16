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
import { translateText, type Language } from "./i18n";

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
const getSavedLanguage = (): Language => {
  const saved = window.localStorage.getItem("portfolio-language");
  return saved === "ko" ? "ko" : "en";
};

function App() {
  const [route, setRoute] = useState(getRoute());
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(getSavedLanguage());
  const t = (value: string) => translateText(language, value);

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRoute());
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
    document.title =
      language === "ko" ? "이수민 포트폴리오" : "Sumin Chloe Lee Portfolio";
  }, [language]);

  useEffect(() => {
    if (route !== "home") return;

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
    if (!revealItems.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.14 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [route]);

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
      <Header
        language={language}
        route={route}
        menuOpen={menuOpen}
        setLanguage={setLanguage}
        setMenuOpen={setMenuOpen}
        t={t}
      />
      {menuOpen ? <MobileMenu route={route} /> : null}
      <main>
        {route === "home" ? <HomePage t={t} /> : null}
        {route === "about" ? <AboutPage t={t} /> : null}
        {route === "experience" ? <ExperiencePage t={t} /> : null}
        {route === "projects" ? <ProjectsPage t={t} /> : null}
        {route === "skills" ? <SkillsPage t={t} /> : null}
        {route === "documents" ? <DocumentsPage t={t} /> : null}
        {route === "interests" ? <InterestsPage t={t} /> : null}
        {route === "contact" ? <ContactPage t={t} /> : null}
        {activeProject ? <ProjectDetail project={activeProject} t={t} /> : null}
        {activeInterest ? <InterestDetail interest={activeInterest} t={t} /> : null}
        {activeDocument ? <DocumentDetail section={activeDocument} t={t} /> : null}
        {!routes.some((item) => item.id === route) &&
        !activeProject &&
        !activeInterest &&
        !activeDocument ? (
          <NotFoundPage t={t} />
        ) : null}
      </main>
      <Footer t={t} />
    </div>
  );
}

type Translator = (value: string) => string;

function Header({
  language,
  route,
  menuOpen,
  setLanguage,
  setMenuOpen,
  t,
}: {
  language: Language;
  route: string;
  menuOpen: boolean;
  setLanguage: (language: Language) => void;
  setMenuOpen: (open: boolean) => void;
  t: Translator;
}) {
  return (
    <header className="site-header">
      <a className="brand-pill" href="#/home" aria-label={t("Go to home")}>
        <PortfolioLogo />
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
      <div className="header-actions">
        <LanguageToggle language={language} setLanguage={setLanguage} />
      </div>
      <button
        className="icon-button mobile-only"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? t("Close navigation") : t("Open navigation")}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

function LanguageToggle({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div className="language-toggle" aria-label="Language switcher">
      <button
        className={language === "en" ? "active" : ""}
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
      <button
        className={language === "ko" ? "active" : ""}
        type="button"
        onClick={() => setLanguage("ko")}
        aria-pressed={language === "ko"}
      >
        KO
      </button>
    </div>
  );
}

function PortfolioLogo() {
  return (
    <>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 44 44" role="img">
          <path
            className="brand-mark-s"
            d="M29.5 13.8c-2-2.2-6.4-2.7-9.5-1.1-3.4 1.8-3.7 5 .1 6.5l6.6 2.7c4.5 1.9 4.1 6.1-.3 8.3-4 2-9.7 1.1-12.1-1.9"
          />
          <path className="brand-mark-l" d="M32 10.5v22h7" />
        </svg>
      </span>
      <span className="brand-wordmark">
        Sumin Lee
      </span>
    </>
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

function HomePage({ t }: { t: Translator }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="kicker">Portfolio 2026</p>
          <h1>
            Who is
            <span>Sumin?</span>
          </h1>
          <p>{t(profile.tagline)}</p>
          <div className="hero-proof-row" aria-label="Sumin Lee focus areas">
            <span>{t("Brand Strategy")}</span>
            <span>{t("UX Planning")}</span>
            <span>{t("Data Insight")}</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#/projects">
              {t("View Projects")} <ArrowUpRight size={18} />
            </a>
            <a className="button ghost" href="#/contact">
              {t("Contact")} <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Sumin Lee portfolio portrait">
          <img src={profile.heroImage} alt={t("Sumin Lee")} />
        </div>
      </section>

      <section className="landing-intro-section">
        <div className="intro-statement reveal-on-scroll">
          <p>{t(profile.landingIntro)}</p>
        </div>
        <div className="landing-keywords">
          <p className="kicker reveal-on-scroll">{t("These Keywords show me")}</p>
          <div className="landing-keyword-grid">
            {keywords.map((keyword, index) => (
              <article className="landing-keyword-card reveal-on-scroll" key={keyword.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{t(keyword.title)}</h2>
                <p>{t(keyword.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="toc-section reveal-on-scroll">
        <div>
          <p className="kicker">{t("Table of Contents")}</p>
          <h2>{t("Choose a page")}</h2>
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

      <section className="featured-project-section reveal-on-scroll">
        <div className="section-title">
          <FolderKanban />
          <h3>{t("Project Highlights")}</h3>
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
              <strong>{t(project.title)}</strong>
              <small>{t(project.eyebrow)}</small>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage({ t }: { t: Translator }) {
  return (
    <PageFrame eyebrow="Introduction" title="About Me" t={t}>
      <section className="about-wix-layout">
        <div className="about-profile-panel">
          <div className="portrait-card">
            <img src={profile.portrait} alt={t("Sumin Lee")} />
          </div>
          <div className="about-socials" aria-label="Sumin Lee profile links">
            <a href="mailto:leesm5088@naver.com?subject=Portfolio%20Contact">
              <Mail size={17} />
              {t("Email")}
            </a>
            <a href="https://www.linkedin.com/in/sumin-lee-0270a8292/" target="_blank">
              <Linkedin size={17} />
              {t("LinkedIn")}
            </a>
          </div>
        </div>
        <div className="about-main-copy">
          <h2>{t(profile.title)}</h2>
          <p className="about-opening">{t(aboutNarrative[0])}</p>
          <section className="about-story-block">
            <h3>My Story</h3>
            {aboutNarrative.slice(1).map((paragraph) => (
              <p key={paragraph}>{t(paragraph)}</p>
            ))}
          </section>
          <section className="about-contact-block">
            <h3>Contact</h3>
            <p>{t("I'm always looking for new and exciting opportunities. Let's connect.")}</p>
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
                  <h4>{t(keyword.title)}</h4>
                  <p>{t(keyword.text)}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </PageFrame>
  );
}

function ExperiencePage({ t }: { t: Translator }) {
  const work = experiences.filter((item) => item.category === "Work");
  const associations = experiences.filter((item) => item.category === "Association");

  return (
    <PageFrame eyebrow="Career" title="Experience" t={t}>
      <p className="page-lede">
        {t("My experience spans brand management, growth marketing, product planning, UI/UX design, and user research across startups, labs, and student associations.")}
      </p>
      <Timeline title="Work Experience" items={work} icon={<BriefcaseBusiness />} t={t} />
      <Timeline title="Association Experience" items={associations} icon={<GraduationCap />} t={t} />
    </PageFrame>
  );
}

function Timeline({
  title,
  items,
  icon,
  t,
}: {
  title: string;
  items: typeof experiences;
  icon: React.ReactNode;
  t: Translator;
}) {
  return (
    <section className="timeline-block">
      <div className="section-title">
        {icon}
        <h3>{t(title)}</h3>
      </div>
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-item" key={`${item.organization}-${item.role}`}>
            <div>
              <span>{t(item.period)}</span>
              <h4>{t(item.organization)}</h4>
              {item.description ? (
                <p className="timeline-description">{t(item.description)}</p>
              ) : null}
              <p>{t(item.role)}</p>
            </div>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{t(highlight)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage({ t }: { t: Translator }) {
  return (
    <PageFrame eyebrow="Selected Work" title="Project" t={t}>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.id} t={t} />
        ))}
      </div>
    </PageFrame>
  );
}

function ProjectCard({ project, index, t }: { project: Project; index: number; t: Translator }) {
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
            alt={t(project.title)}
            loading="eager"
            decoding="async"
          />
        ) : null}
      </div>
      <div className="project-card-copy">
        <p>{t(project.eyebrow)}</p>
        <h3>{t(project.title)}</h3>
        <span>
          {t("View case")} <ArrowUpRight size={16} />
        </span>
      </div>
    </a>
  );
}

function ProjectDetail({ project, t }: { project: Project; t: Translator }) {
  const actions =
    project.actions ?? (project.external ? [{ label: "Open Project", href: project.external }] : []);

  return (
    <PageFrame eyebrow={project.eyebrow} title={project.title} t={t}>
      <section
        className="case-hero"
        style={{ "--accent": project.accent } as React.CSSProperties}
      >
        <div>
          <p>{t(project.summary)}</p>
          {actions.length ? (
            <div className="case-actions">
              {actions.map((action, index) => (
                <a
                  className={`button ${index === 0 ? "primary" : "ghost"}`}
                  href={action.href}
                  target="_blank"
                  key={action.href}
                >
                  {t(action.label)} <ArrowUpRight size={18} />
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
          {project.image ? <img src={project.image} alt={t(project.title)} /> : null}
        </div>
      </section>

      <section className="case-columns">
        <article className="role-card">
          <h3>{t("My Role")}</h3>
          <p>{t(project.role)}</p>
          <div className="chip-row role-skill-row">
            {project.capabilities.map((capability) => (
              <span className="chip" key={capability}>
                {t(capability)}
              </span>
            ))}
          </div>
        </article>
        <article>
          <h3>{t("Outcome")}</h3>
          <p>{t(project.outcome)}</p>
        </article>
      </section>

      <section className="case-detail-list">
        <h3>{t("Process Notes")}</h3>
        {project.details.map((detail, index) => (
          <div className="detail-row" key={detail}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{t(detail)}</p>
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
                  <img src={section.image} alt={`${t(project.title)} ${t(section.title)}`} />
                </div>
              ) : null}
              <div className="case-story-copy">
                <h3>{t(section.title)}</h3>
                <p>{t(section.text)}</p>
              </div>
            </article>
          ))}
        </section>
      ) : null}

      {project.gallery?.length ? (
        <section className={`case-gallery-section case-gallery-section-${project.id}`}>
          <div className="section-title">
            <FolderKanban />
            <h3>{t("Project Materials")}</h3>
          </div>
          <div className="case-gallery">
            {project.gallery.map((item) => (
              <article className="case-gallery-item" key={item.title}>
                <img src={item.image} alt={`${t(project.title)} ${t(item.title)}`} />
                <div className="case-gallery-copy">
                  <h3>{t(item.title)}</h3>
                  {item.note ? <p>{t(item.note)}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

    </PageFrame>
  );
}

function SkillsPage({ t }: { t: Translator }) {
  return (
    <PageFrame eyebrow="Capabilities" title="Skills" t={t}>
      <div className="skills-stack">
        <section className="tool-section">
          <div className="section-title">
            <Sparkles />
            <h3>{t("Tools I Use")}</h3>
          </div>
          <div className="tool-grid">
            {softwareTools.map((tool) => (
              <article className="tool-card" key={tool.name}>
                <div className="tool-logo">
                  <img src={tool.icon} alt={t(tool.name)} />
                </div>
                <div>
                  <span>{t(tool.category)}</span>
                  <h4>{t(tool.name)}</h4>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skill-panel">
          <div className="section-title">
            <FolderKanban />
            <h3>{t("Developed Skills")}</h3>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{t(skill)}</span>
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}

function DocumentsPage({ t }: { t: Translator }) {
  return (
    <PageFrame eyebrow="Archive" title="Documents" t={t}>
      <p className="page-lede">
        {t("Resume, completion certificates, and licenses are organized as separate review pages so the supporting materials can be checked inside this portfolio.")}
      </p>
      <div className="document-stack">
        {documentSections.map((section) => (
          <DocumentCard section={section} key={section.id} t={t} />
        ))}
      </div>
    </PageFrame>
  );
}

function DocumentCard({ section, t }: { section: DocumentSection; t: Translator }) {
  const isExternal = !section.href.startsWith("#/");

  return (
    <article className="document-card">
      <div className="document-preview">
        <img
          src={section.preview}
          alt={t(section.title)}
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="document-copy">
        <span>{t(section.eyebrow)}</span>
        <h3>{t(section.title)}</h3>
        <p>{t(section.text)}</p>
        <div className="chip-row">
          {section.highlights.map((item) => (
            <span className="chip" key={item}>
              {t(item)}
            </span>
          ))}
        </div>
        <a
          className={`button ${isExternal ? "ghost" : "primary"}`}
          href={section.href}
          target={isExternal ? "_blank" : undefined}
        >
          {t(section.action)}
          {section.title === "Resume" ? <Download size={18} /> : <FileText size={18} />}
        </a>
      </div>
    </article>
  );
}

function DocumentDetail({ section, t }: { section: DocumentSection; t: Translator }) {
  const images = Array.from(new Set([section.preview, ...(section.gallery ?? [])]));
  const isResume = section.id === "resume";

  return (
    <PageFrame eyebrow={section.eyebrow} title={section.title} t={t}>
      <section className="document-detail-hero">
        <div>
          <p className="page-lede">{t(section.detailIntro ?? section.text)}</p>
          <div className="chip-row">
            {section.highlights.map((item) => (
              <span className="chip" key={item}>
                {t(item)}
              </span>
            ))}
          </div>
        </div>
        <div className="document-detail-actions">
          <a className="button ghost" href="#/documents">
            {t("Back to Documents")}
          </a>
          {isResume ? (
            <a className="button primary" href={section.href} target="_blank">
              {t("Download Resume")} <Download size={18} />
            </a>
          ) : null}
        </div>
      </section>

      <section className="document-detail-gallery" aria-label={`${section.title} materials`}>
        {images.map((image, index) => (
          <figure className="document-detail-image" key={image}>
            <img
              src={image}
              alt={`${t(section.title)} ${index + 1}`}
              loading="eager"
              decoding="async"
            />
            <figcaption>
              {t(section.title)} {String(index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </section>
    </PageFrame>
  );
}

function InterestsPage({ t }: { t: Translator }) {
  return (
    <PageFrame eyebrow="Personal Archive" title="Interests" t={t}>
      <p className="page-lede interest-page-lede">{t(interestsIntro)}</p>
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
                alt={t(interest.title)}
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="interest-card-copy">
              {interest.title.includes("Travel") ? <Camera /> : <ChartNoAxesCombined />}
              <h3>{t(interest.title)}</h3>
              <p>{t(interest.text)}</p>
              <span>
                {t("View works")} <ArrowUpRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageFrame>
  );
}

function InterestDetail({ interest, t }: { interest: Interest; t: Translator }) {
  const galleryColumns = getInterestGalleryColumns(interest);

  return (
    <PageFrame eyebrow="Interests" title={interest.title} t={t}>
      <div className="interest-detail-head">
        <p className="page-lede">{t(interest.text)}</p>
        <a className="button ghost" href="#/interests">
          {t("Back to Interests")}
        </a>
      </div>
      <section className="interest-detail">
        <div className="section-title">
          <FolderKanban />
          <h3>{t("Works")}</h3>
        </div>
        <div className="interest-gallery">
          {galleryColumns.map((column, columnIndex) => (
            <div className="interest-gallery-column" key={`${interest.id}-${columnIndex}`}>
              {column.map((item) => (
                <article className="interest-gallery-item" key={item.title}>
                  <img
                    src={item.image}
                    alt={`${t(item.title)} ${t(item.type)}`}
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

function ContactPage({ t }: { t: Translator }) {
  return (
    <PageFrame eyebrow="Contact" title="Contact Me" t={t}>
      <section className="contact-hero">
        <div className="contact-intro">
          <CircleUserRound size={30} />
          <h3>{t(profile.name)}</h3>
          <p>
            {t("Curious about my projects, work experience, travel stories, or a casual coffee chat? Feel free to reach out.")}
          </p>
          <span>
            <MapPin size={18} />
            {t(profile.school)}
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
              {t(link.label)}
            </a>
          ))}
          <span>
            <MapPin size={18} />
            {t("Seoul, Korea")}
          </span>
        </div>
      </section>
      <section className="contact-reachout-panel">
        <div>
          <p className="kicker">{t("Reach out for")}</p>
          <h3>{t("Open conversation, clear next steps.")}</h3>
        </div>
        <p>
          {t("More portfolio details, project collaboration, work experience questions, travel-inspired stories, career conversations, or coffee chats are all welcome.")}
        </p>
        <div className="contact-topic-list">
          <span>{t("More projects")}</span>
          <span>{t("Work experience")}</span>
          <span>{t("Travel stories")}</span>
          <span>{t("Coffee chat")}</span>
          <span>{t("Collaboration")}</span>
        </div>
      </section>
    </PageFrame>
  );
}

function PageFrame({
  eyebrow,
  title,
  children,
  t,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  t: Translator;
}) {
  return (
    <section className="page-frame">
      <div className="page-heading">
        <p className="kicker">{t(eyebrow)}</p>
        <h1>{title}</h1>
      </div>
      {children}
    </section>
  );
}

function NotFoundPage({ t }: { t: Translator }) {
  return (
    <PageFrame eyebrow="404" title="Page not found" t={t}>
      <a className="button primary" href="#/home">
        {t("Back Home")}
      </a>
    </PageFrame>
  );
}

function Footer({ t }: { t: Translator }) {
  return (
    <footer className="site-footer">
      <span>{t(profile.name)}</span>
      <span>{t(profile.school)}</span>
      <a href="#/contact">{t("Contact")}</a>
    </footer>
  );
}

export default App;
