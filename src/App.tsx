import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  ChartNoAxesCombined,
  ChevronRight,
  CircleUserRound,
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
import type { CSSProperties } from "react";
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

const projectFilters = [
  "ALL",
  "Brand & Growth",
  "Product & UX",
  "Data & Strategy",
] as const;

type ProjectFilter = (typeof projectFilters)[number];

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

  const detailPageProject = route.endsWith("/detail-page") ? activeProject : undefined;

  if (detailPageProject) {
    return <DetailPageViewer project={detailPageProject} t={t} />;
  }

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

const emphasisPhrases = [
  "full brand experience",
  "full-cycle brand management",
  "product planning and brand experience",
  "The brand's early market presence generated unsolicited partnership interest from Moxy Seoul Insadong and Qoo10 Japan.",
  "Moxy Seoul Insadong and Qoo10 Japan",
  "inbound proposals rather than completed partnerships",
  "information architecture, wireframes, functional prototypes, and purchase journey",
  "narrative planning to final delivery",
  "content flow and writing the copy",
  "aligning the visual direction with the designer",
  "structured community program",
  "led onboarding and the offline kickoff",
  "sourcing the photographer and model",
  "directing the set",
  "one-third of a typical vendor quote",
  "planned and produced",
  "connected editorial consistency with campaign response and commerce entry points",
  "followers from 10 to 1,700",
  "doubled official e-commerce traffic",
  "reduced manufacturing unit cost by 24%",
  "21,000+ short-form content views",
  "전체 브랜드 경험",
  "풀사이클 브랜드 매니지먼트",
  "제품 기획과 브랜드 경험",
  "브랜드의 초기 시장 반응을 바탕으로 Moxy Seoul Insadong과 Qoo10 Japan에서 먼저 협업 의사를 보내왔습니다.",
  "Moxy Seoul Insadong과 Qoo10 Japan",
  "체결 완료가 아닌 실제 인바운드 제안",
  "정보구조, 와이어프레임, 기능형 프로토타입, 구매 여정",
  "내러티브 기획부터 최종 완성까지",
  "콘텐츠 흐름과 문구를 직접 설계",
  "디자이너와 비주얼 방향을 조율",
  "구조화된 커뮤니티 프로그램",
  "온보딩과 오프라인 발대식까지 전 과정을 리드",
  "촬영 작가와 모델을 직접 섭외",
  "현장 디렉팅부터 후가공까지 직접 수행",
  "약 3분의 1 수준",
  "채널 콘텐츠를 기획하고 제작",
  "캠페인 반응 및 커머스 진입점과 연결",
  "팔로워 10명에서 1,700명 성장",
  "공식 이커머스 트래픽 2배 성장",
  "제조 단가 24% 절감",
  "숏폼 콘텐츠 2.1만+ 조회수",
].sort((a, b) => b.length - a.length);

const emphasisPattern = new RegExp(
  `(${emphasisPhrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g",
);

function EmphasizedText({ children }: { children: string }) {
  return children.split(emphasisPattern).map((part, index) =>
    emphasisPhrases.includes(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part,
  );
}

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
    <img className="brand-logo-image" src="/portfolio-logo.png" alt="" />
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
            {item.projectId ? (
              <a className="timeline-case-link" href={`#/project/${item.projectId}`}>
                {t("View Brand Case")} <ArrowUpRight size={15} />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage({ t }: { t: Translator }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("ALL");
  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <PageFrame eyebrow="Selected Work" title="Project" t={t}>
      <div className="project-filter" aria-label={t("Project category filter")}>
        {projectFilters.map((filter) => (
          <button
            className={activeFilter === filter ? "active" : ""}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            key={filter}
          >
            {t(filter)}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filteredProjects.map((project, index) => (
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
        ) : (
          <div className="project-media-placeholder">
            <span>{t(project.category)}</span>
            <strong>{t(project.placeholderLabel ?? project.title)}</strong>
          </div>
        )}
      </div>
      <div className="project-card-copy">
        <span className="project-category-label">{t(project.category)}</span>
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
          {project.tagline ? <span className="case-tagline">{t(project.tagline)}</span> : null}
          <p>
            <EmphasizedText>{t(project.summary)}</EmphasizedText>
          </p>
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
          {project.image ? (
            <img src={project.image} alt={t(project.title)} />
          ) : (
            <div className="case-image-placeholder">
              <span>{t(project.category)}</span>
              <strong>{t(project.placeholderLabel ?? project.title)}</strong>
            </div>
          )}
        </div>
      </section>

      {project.metrics?.length ? (
        <section className="case-impact-chart" aria-label={t("Measured business impact")}>
          <div className="case-impact-heading">
            <span>{t("Measured Impact")}</span>
            <h3>{t("Brand work translated into business movement")}</h3>
          </div>
          <div className="case-impact-plot">
            {project.metrics.map((metric) => (
              <article
                style={
                  {
                    "--baseline-ratio": `${metric.baselineRatio}%`,
                    "--result-ratio": `${metric.resultRatio}%`,
                  } as React.CSSProperties
                }
                key={`${metric.value}-${metric.label}`}
              >
                <div className="case-impact-label">
                  <span>{t(metric.label)}</span>
                  <strong>{t(metric.value)}</strong>
                  <p>{t(metric.context)}</p>
                </div>
                <div className="case-impact-bars" aria-hidden="true">
                  <i className="baseline" />
                  <i className="result" />
                </div>
                <span className="case-impact-baseline">{t(metric.baseline)}</span>
              </article>
            ))}
          </div>
          <p className="case-impact-note">{t("Each row is normalized within its own metric.")}</p>
        </section>
      ) : null}

      <section className="case-columns">
        <article className="role-card">
          <h3>{t("My Role")}</h3>
          <p>
            <EmphasizedText>{t(project.role)}</EmphasizedText>
          </p>
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
          <p>
            <EmphasizedText>{t(project.outcome)}</EmphasizedText>
          </p>
        </article>
      </section>

      <section className="case-detail-list">
        <h3>{t("Process Notes")}</h3>
        {project.details.map((detail, index) => (
          <div className="detail-row" key={detail}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>
              <EmphasizedText>{t(detail)}</EmphasizedText>
            </p>
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
              } ${section.gallery?.length ? "case-story-card-gallery" : ""} ${
                section.layout === "sequence" ? "case-story-card-sequence" : ""
              } ${
                section.layout === "impact" ? "case-story-card-impact" : ""
              } ${
                section.layout === "performance" ? "case-story-card-performance" : ""
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
                <p>
                  <EmphasizedText>{t(section.text)}</EmphasizedText>
                </p>
              </div>
              {section.layout === "impact" && section.impactItems?.length ? (
                <div className="case-impact-lifecycle">
                  {section.impactItems.map((item) => (
                    <article key={item.step}>
                      <span>{t(item.step)}</span>
                      <h4>{t(item.title)}</h4>
                      <p>{t(item.text)}</p>
                      <strong>{t(item.proof)}</strong>
                    </article>
                  ))}
                </div>
              ) : null}
              {section.layout === "performance" && section.performanceGroups?.length ? (
                <div className="case-performance-groups">
                  {section.performanceGroups.map((group) => (
                    <article key={group.eyebrow}>
                      <span className="case-performance-eyebrow">{t(group.eyebrow)}</span>
                      <h4>{t(group.title)}</h4>
                      <p>{t(group.note)}</p>
                      <div className="case-performance-metrics">
                        {group.metrics.map((metric) => (
                          <div className="case-performance-metric" key={metric.label}>
                            <div>
                              <strong>{metric.value}</strong>
                              <span>{t(metric.label)}</span>
                            </div>
                            <i
                              aria-hidden="true"
                              style={{ "--performance-ratio": `${metric.ratio}%` } as CSSProperties}
                            />
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              ) : null}
              {section.gallery?.length ? (
                <>
                  <div
                    className={`case-story-gallery ${
                      section.layout === "sequence" ? "case-story-gallery-sequence" : ""
                    } ${
                      section.layout === "sequence" ? "case-story-gallery-sequence-preview" : ""
                    } ${
                      section.layout === "sequence" && section.previewGallery?.length
                        ? "case-story-gallery-curated-preview"
                        : ""
                    } ${section.layout === "wide" ? "case-story-gallery-wide" : ""} ${
                      section.layout === "performance" ? "case-story-gallery-performance" : ""
                    }`}
                  >
                    {(section.previewGallery ??
                      section.gallery.slice(
                        0,
                        section.layout === "sequence" ? 6 : section.gallery.length,
                      ))
                      .map((item, itemIndex) => (
                        <figure key={item.title}>
                          <img
                            src={item.image}
                            alt={`${t(project.title)} ${t(item.title)}`}
                            loading={
                              section.layout === "sequence" || itemIndex > 3 ? "lazy" : "eager"
                            }
                            decoding="async"
                          />
                          {section.layout !== "sequence" ? (
                            <figcaption>
                              <strong>{t(item.title)}</strong>
                              {item.note ? (
                                <span>
                                  <EmphasizedText>{t(item.note)}</EmphasizedText>
                                </span>
                              ) : null}
                            </figcaption>
                          ) : null}
                        </figure>
                      ))}
                  </div>
                  {section.layout === "sequence" ? (
                    <div className="case-sequence-actions">
                      <a
                        href={`${window.location.pathname}#/project/${project.id}/detail-page`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("View Full Detail Page")} <ArrowUpRight size={16} />
                      </a>
                    </div>
                  ) : null}
                </>
              ) : null}
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

function DetailPageViewer({ project, t }: { project: Project; t: Translator }) {
  const detailSection = project.sections?.find((section) => section.layout === "sequence");

  useEffect(() => {
    document.title = `${t(project.title)} · ${t("Full Product Detail Page")}`;
  }, [project.title, t]);

  if (!detailSection?.gallery?.length) {
    return <NotFoundPage t={t} />;
  }

  return (
    <div className="detail-page-viewer">
      <header className="detail-page-viewer-header">
        <div>
          <span>{t(project.title)}</span>
          <h1>{t("Full Product Detail Page")}</h1>
        </div>
        <a href={`#/project/${project.id}`}>{t("Back to case study")}</a>
      </header>
      <main className="detail-page-viewer-document">
        {detailSection.gallery.map((item, index) => (
          <img
            src={item.image}
            alt={`${t(project.title)} ${t(item.title)}`}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            key={item.title}
          />
        ))}
      </main>
    </div>
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
  const showDocumentAction = section.id !== "resume";

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
        {showDocumentAction ? (
          <a
            className={`button ${isExternal ? "ghost" : "primary"}`}
            href={section.href}
            target={isExternal ? "_blank" : undefined}
          >
            {t(section.action)}
            <FileText size={18} />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function DocumentDetail({ section, t }: { section: DocumentSection; t: Translator }) {
  const images = Array.from(new Set([section.preview, ...(section.gallery ?? [])]));

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
