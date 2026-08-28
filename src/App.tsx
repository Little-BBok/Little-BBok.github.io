import {
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  CircleUserRound,
  FileText,
  FolderKanban,
  GraduationCap,
  HelpCircle,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Menu,
  PanelLeft,
  Search,
  Smartphone,
  Sparkles,
  Trash2,
  Upload,
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
const visibleProjects = projects.filter((project) => !project.hidden);

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
    return visibleProjects.find((project) => project.id === route.split("/")[1]);
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
  const slideDeckMatch = route.match(/^project\/sephora-analysis\/slides\/(ko|en)$/);
  const activeProjectSlideLanguage = slideDeckMatch?.[1] as "ko" | "en" | undefined;

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
        {activeProject ? (
          activeProjectSlideLanguage ? (
            <ProjectSlideViewer
              project={activeProject}
              deckLanguage={activeProjectSlideLanguage}
              t={t}
            />
          ) : (
            <ProjectDetail project={activeProject} t={t} />
          )
        ) : null}
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
  "followers from 10 to 1,707",
  "generated 852 comments and 732 likes on a launch quiz event",
  "reduced manufacturing unit cost by 24%",
  "334,000 views during the measured 30-day period",
  "content context break",
  "full 0→1 process",
  "problem definition and product strategy",
  "brand, UI/UX, usability testing, and iteration",
  "Sole product owner and designer",
  "deployed, testable product",
  "the loss of context between making, publishing, learning, and deciding what to do next",
  "one continuous decision-making process",
  "scenario-based usability tests",
  "not a feature checklist",
  "the master-to-variant relationship the core product model",
  "four principles",
  "product hypothesis, target workflow, scope, and priorities",
  "service architecture, brand, UI system, and working interface",
  "usability tests",
  "macOS AI work hub",
  "turns scattered context into prioritized tasks, verified research, and approved execution",
  "PM and UI/UX Designer",
  "problem definition, interview and community research synthesis, product strategy, information architecture, end-to-end agent workflow",
  "connected product experience",
  "four clear stages",
  "seeing priorities, researching opportunities with evidence, managing generated tasks, and carrying conversation context into an actionable response",
  "Lead Product Planner and Content Operations Lead",
  "carousel template system, content calendar, publishing schedule, feed direction, and performance review process",
  "1st place at the UXIM x YCC Final Project Showcase",
  "Excellence Award at the 2026 Season Summer Workstation Final Showcase",
  "Won 1st place in the final idea pitching",
  "one month of validation expanded restaurant data 5.3× and connected 297 of 300 database records",
  "19,220 Instagram views, 7,321 accounts reached, 986 interactions, and 365 new followers",
  "defined the content pillars, designed reusable carousel templates, built and maintained the content calendar, managed publishing",
  "19,220 views reached 7,321 accounts",
  "88.5% of views came from non-followers",
  "posts generated 85.0% of all interactions",
  "location-based restaurant discovery service",
  "reduce dining uncertainty for people with dietary restrictions",
  "within the first 10 days of Instagram operations",
  "editorial colorboard",
  "R-based analysis of 8,000+ Sephora products",
  "an inverted-U relationship",
  "Sephora exclusivity strengthened price acceptance",
  "vegan claims improved the probability of high ratings at higher price points",
  "premium pricing works only when channel trust, value signals, and category context align",
  "landing page that explains Leviosa CS",
  "location-based camera app",
  "career guidebook project",
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
  "팔로워 10명에서 1,707명 성장",
  "론칭 퀴즈 이벤트 댓글 852건과 좋아요 732건",
  "제조 단가 24% 절감",
  "측정된 30일간 조회수 33.4만회",
  "콘텐츠 맥락이 끊기는 문제",
  "0→1 전 과정을 직접 수행했습니다",
  "문제 정의와 제품 전략",
  "브랜드·UI/UX 설계, 사용성 테스트와 반복 개선",
  "0→1 전 과정을 단독으로 이끈 제품 오너이자 디자이너",
  "배포된 검증 가능 제품",
  "제작, 발행, 학습, 다음 의사결정 사이에서 맥락이 끊기는 것",
  "하나의 연속된 의사결정 과정",
  "시나리오 기반 사용성 테스트",
  "기능 목록이 아니라",
  "마스터와 파생 결과물의 관계를 핵심 제품 모델로 정했습니다",
  "네 가지 원칙",
  "제품 가설, 타깃 워크플로, 범위, 우선순위",
  "서비스 구조, 브랜드, UI 시스템, 실제 동작 인터페이스",
  "사용성 테스트",
  "macOS AI 워크 허브",
  "흩어진 맥락을 우선순위가 정리된 Task, 검증된 리서치, 사용자가 승인한 실행으로 전환",
  "PM 및 UI/UX 디자이너",
  "문제 정의, 인터뷰·커뮤니티 리서치 종합, 제품 전략, 정보구조, 엔드투엔드 에이전트 워크플로우",
  "실제 제품 경험",
  "네 단계",
  "우선순위 확인, 근거 기반 기회 탐색, 생성된 Task 관리, 대화 맥락을 활용한 실행 가능한 응답",
  "리드 제품 기획자이자 콘텐츠 운영 총괄",
  "캐러셀 템플릿 시스템, 콘텐츠 캘린더, 발행 일정, 피드 방향, 성과 리뷰 프로세스",
  "UXIM x YCC Final Project Showcase 1위",
  "2026 시즌 썸머 워크스테이션 최종성과발표회 우수상",
  "최종 아이디어 피칭에서 1위를 수상",
  "한 달간 식당 데이터를 5.3배로 확장해 DB 300건 중 297건을 연결",
  "인스타그램 조회 19,220회, 도달 계정 7,321개, 반응 986회, 신규 팔로워 365명",
  "콘텐츠 기둥을 정의하고, 재사용 가능한 캐러셀 템플릿을 설계하고, 콘텐츠 캘린더를 구축·관리하며, 발행까지 총괄",
  "조회 19,220회로 7,321개 계정에 도달",
  "조회수의 88.5%가 비팔로워에게서 발생",
  "전체 반응의 85.0%를 게시물이 생성",
  "위치 기반 맛집 탐색 서비스",
  "식이 제한이 있는 사람들이 외식할 때 느끼는 정보 불확실성을 줄이기",
  "인스타그램 운영 시작 후 첫 10일 이내",
  "반복 가능한 에디토리얼 주제",
  "캐러셀 그리드, 커버 위계, 제품 시연 프레임, 타이포그래피 규칙, CTA 엔딩",
  "주제와 발행 순서를 기획하고 제작 마감을 조율하며",
  "피드를 운영했습니다",
  "근거를 다음 콘텐츠 사이클 개선에 반영",
  "에디토리얼 컬러보드",
  "8,000개 이상의 Sephora 제품 데이터를 바탕으로",
  "역U자형 관계",
  "Sephora 독점성이 가격 수용도를 강화",
  "비건 소구가 고가 제품에서 높은 평가 확률을 높였으며",
  "채널 신뢰, 가치 신호, 카테고리 맥락이 맞을 때만 프리미엄 가격이 설득력을 갖습니다",
  "Leviosa CS를 소개하는 랜딩페이지",
  "위치 기반 카메라 앱",
  "커리어 가이드북 프로젝트",
  "repeatable editorial themes",
  "carousel grid, cover hierarchy, product demonstration frames, typography rules, and CTA endings",
  "Planned topics and publishing order, coordinated production deadlines, and managed the feed",
  "used the evidence to refine the next content cycle",
  "Lightroom XMP presets I personally created",
  "personally produced Lightroom XMP presets",
  "제가 직접 만든 Lightroom XMP 프리셋",
  "직접 제작한 Lightroom XMP 프리셋",
  "creator marketplace",
  "크리에이터 마켓플레이스",
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

type FugudioFeatureItem = NonNullable<
  NonNullable<Project["sections"]>[number]["featureItems"]
>[number];

type ProjectWorkflowItem = NonNullable<
  NonNullable<Project["sections"]>[number]["workflowItems"]
>[number];

function FugudioSystemMap({
  items,
  t,
}: {
  items: FugudioFeatureItem[];
  t: Translator;
}) {
  const layers = [
    {
      label: "01 · Operations layer",
      title: "See & prioritize",
      groups: ["Visibility", "Plan"],
    },
    {
      label: "02 · Content core",
      title: "Create & distribute",
      groups: ["Produce", "Asset", "Distribute"],
    },
    {
      label: "03 · Learning loop",
      title: "Measure & extend",
      groups: ["Learn", "Extend"],
    },
    {
      label: "04 · Workspace foundation",
      title: "Configure & collaborate",
      groups: ["Configure", "Collaborate", "Assist"],
    },
  ];

  return (
    <div className="fugudio-system-map">
      <div className="fugudio-system-hub">
        <header>
          <div>
            <span>{t("Core data model")}</span>
            <h4>{t("Master Content Model")}</h4>
          </div>
          <strong>{t("One shared source")}</strong>
        </header>
        <div className="fugudio-system-schema" aria-label={t("Master content data structure")}>
          <b>{t("Idea")}</b>
          <i aria-hidden="true">→</i>
          <b>{t("Master asset")}</b>
          <i aria-hidden="true">→</i>
          <b>{t("Channel variant")}</b>
        </div>
        <footer>
          <span>{t("State")}</span>
          <span>{t("Schedule")}</span>
          <span>{t("Performance")}</span>
        </footer>
      </div>
      <div className="fugudio-system-layers">
        {layers.map((layer) => (
          <section key={layer.label}>
            <header>
              <span>{t(layer.label)}</span>
              <h4>{t(layer.title)}</h4>
            </header>
            <div>
              {items
                .filter((item) => layer.groups.includes(item.group))
                .map((item) => (
                  <article key={item.title} title={t(item.text)}>
                    <small>{t(item.group)}</small>
                    <strong>{t(item.title)}</strong>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function ColortelierEcosystemMap({
  items,
  t,
}: {
  items: ProjectWorkflowItem[];
  t: Translator;
}) {
  const icons = [
    <Upload size={20} aria-hidden="true" />,
    <Sparkles size={20} aria-hidden="true" />,
    <Check size={20} aria-hidden="true" />,
    <FileText size={20} aria-hidden="true" />,
    <FolderKanban size={20} aria-hidden="true" />,
  ];

  return (
    <div className="colortelier-ecosystem-map">
      <div className="colortelier-ecosystem-summary" aria-hidden="true">
        <span>{t("Photo evidence")}</span>
        <i />
        <strong>{t("Reusable color asset")}</strong>
      </div>
      <div className="colortelier-ecosystem-track">
        {items.map((item, index) => (
          <div className="colortelier-ecosystem-unit" key={item.step}>
            <article>
              <header>
                <span>{item.step}</span>
                <i>{icons[index]}</i>
              </header>
              <div>
                <h4>{t(item.title)}</h4>
                <p>{t(item.text)}</p>
              </div>
              <strong>{t(item.output)}</strong>
            </article>
            {index < items.length - 1 ? (
              <span className="colortelier-ecosystem-connector" aria-hidden="true">
                <ChevronRight size={16} />
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="colortelier-ecosystem-lanes" aria-label={t("Product value layers")}>
        <span><b>{t("Capture context")}</b><small>01—02</small></span>
        <span><b>{t("Compose artifact")}</b><small>03—04</small></span>
        <span><b>{t("Extend value")}</b><small>05</small></span>
      </div>
    </div>
  );
}

function FugudioBrandSystem({ t }: { t: Translator }) {
  const colors = [
    { name: "Primary Navy", hex: "#2E4060", use: "Text · CTA · active" },
    { name: "Brand Pink", hex: "#DD8C96", use: "Brand · selected" },
    { name: "Soft Pink", hex: "#F4DAD4", use: "Highlight · support" },
    { name: "Paper", hex: "#FFF8F6", use: "Cards · content" },
    { name: "Canvas", hex: "#F5E8E6", use: "App background" },
    { name: "Secondary Text", hex: "#66738B", use: "Descriptions" },
    { name: "Muted Text", hex: "#758096", use: "Metadata · disabled" },
    { name: "Divider", hex: "#EAD6D6", use: "Borders · dividers" },
    { name: "Success", hex: "#3F8B68", use: "Published · normal" },
    { name: "Warning", hex: "#C56F7B", use: "Deadline · attention" },
  ];
  const platforms = [
    { name: "Instagram", color: "#DD4E91" },
    { name: "YouTube", color: "#F04450" },
    { name: "TikTok", color: "#171717" },
    { name: "Naver", color: "#20A85A" },
    { name: "Tistory", color: "#F56B22" },
    { name: "WordPress", color: "#287AA9" },
  ];
  const componentGroups = [
    { title: "Form control", items: ["Text input", "Search", "Date picker", "File upload", "Bubble select"] },
    { title: "Cards", items: ["KPI", "Content", "Calendar block", "Kanban", "Distribution"] },
    { title: "Chip & badge", items: ["Platform", "Production", "Publish state", "Pillar", "Role"] },
    { title: "Feedback", items: ["Tooltip", "Toast", "Alert", "Empty state", "Confirm dialog"] },
    { title: "Navigation", items: ["Sidebar", "Header", "Mobile tabs", "Active indicator", "Transition"] },
    { title: "Domain-specific", items: ["Calendar block", "Kanban card", "Master panel", "SNS preset", "Hugu insight"] },
  ];

  return (
    <div className="fugudio-brand-system">
      <header className="fugudio-kit-header">
        <div>
          <span>FUGUDIO</span>
          <h4>UI KIT<br />& SYSTEM</h4>
        </div>
        <p>{t("A professional content workspace softened by dusty pink, translucent layers, and a disciplined radius system.")}</p>
        <small>v1.0 · PRODUCT SYSTEM</small>
      </header>
      <section className="fugudio-kit-foundation">
        <div className="fugudio-kit-section-heading"><span>01</span><strong>{t("Design direction")}</strong></div>
        <div className="fugudio-foundation-grid">
          <article><strong>{t("Professional foundation")}</strong><p>{t("Navy, clear hierarchy, and restrained decoration support dense content operations.")}</p></article>
          <article><strong>{t("Friendly brand layer")}</strong><p>{t("Dusty pink, Hugu, and soft surfaces make repeated operational work feel approachable.")}</p></article>
          <article><strong>{t("Translucent, not fragile")}</strong><p>{t("iOS-inspired glass stays 80–94% opaque so depth never compromises readability.")}</p></article>
        </div>
      </section>
      <section className="fugudio-kit-type">
        <div className="fugudio-kit-section-heading"><span>02</span><strong>{t("Typography")}</strong></div>
        <div className="fugudio-type-samples fugudio-type-samples-detailed">
          <article><b>Ag</b><span>Inter · Apple SD Gothic Neo · Segoe UI</span><small>{t("Body · buttons · inputs · system sans-serif fallback")}</small></article>
          <article><b>후구</b><span>{t("Momoment Kkukkuk")}</span><small>{t("Limited brand headlines · local only by license policy")}</small></article>
          <article><b>01</b><span>Mona12 · OFL 1.1</span><small>{t("Eyebrow · labels · status data")}</small></article>
          <article><b>38%</b><span>HiKR ExtraBold</span><small>{t("KPI · metrics · table headers")}</small></article>
        </div>
        <p className="fugudio-kit-note">{t("System font fallbacks preserve legibility without external webfonts; expressive type is used only where it carries meaning.")}</p>
      </section>
      <section className="fugudio-kit-colors">
        <div className="fugudio-kit-section-heading"><span>03</span><strong>{t("Color system")}</strong></div>
        <ul>
          {colors.map((color) => (
            <li key={color.hex} style={{ "--brand-color": color.hex } as CSSProperties}>
              <i />
              <strong>{t(color.name)}</strong>
              <small>{color.hex}</small>
              <em>{t(color.use)}</em>
            </li>
          ))}
        </ul>
        <div className="fugudio-platform-colors">
          <strong>{t("Platform colors")}</strong>
          {platforms.map((platform) => <span key={platform.name}><i style={{ "--platform-color": platform.color } as CSSProperties} />{platform.name}</span>)}
          <p>{t("Platform color identifies the channel; a separate badge communicates publishing state.")}</p>
        </div>
      </section>
      <section className="fugudio-kit-surface">
        <div className="fugudio-kit-section-heading"><span>04</span><strong>{t("Component sizing & layers")}</strong></div>
        <div className="fugudio-surface-examples">
          <article><span className="surface-control">{t("Input · button")}</span><strong>15px</strong><small>{t("Controls")}</small></article>
          <article><span className="surface-card"><i /><i /></span><strong>24px</strong><small>{t("Content cards")}</small></article>
          <article><span className="surface-panel"><i /></span><strong>30px</strong><small>{t("Panels · modals")}</small></article>
          <article><span className="surface-badge">{t("Published")}</span><strong>Pill</strong><small>{t("Chips · status")}</small></article>
        </div>
        <div className="fugudio-layer-map">
          <span><small>01</small>{t("Canvas")}</span><i>→</i><span><small>02</small>{t("Translucent panel")}</span><i>→</i><span><small>03</small>{t("Action card")}</span>
          <p>{t("80–94% opacity and 18–30px blur create depth while preserving text contrast.")}</p>
        </div>
      </section>
      <section className="fugudio-kit-icons">
        <div className="fugudio-kit-section-heading"><span>05</span><strong>{t("Icon system")}</strong></div>
        <div className="fugudio-icon-samples" aria-label={t("Lucide React icon samples")}>
          <Search /><Bell /><HelpCircle /><CalendarDays /><Upload /><Trash2 /><CircleCheck /><CircleAlert /><LoaderCircle />
        </div>
        <p className="fugudio-kit-note">{t("Lucide React · 14–18px · 1.8px stroke · labels remain visible beside icons.")}</p>
      </section>
      <section className="fugudio-kit-controls">
        <div className="fugudio-kit-section-heading"><span>06</span><strong>{t("Buttons & interaction states")}</strong></div>
        <div className="fugudio-kit-button-row">
          <button type="button">{t("Primary action")} <span>＋</span></button>
          <button type="button">{t("Secondary")} <span>↗</span></button>
          <button type="button" className="is-ghost"><Bell size={14} />{t("Ghost")}</button>
          <button type="button" className="is-danger"><Trash2 size={14} />{t("Danger")}</button>
          <button type="button" disabled>{t("Completed")}</button>
        </div>
        <div className="fugudio-kit-status-row">
          <span>{t("Idea")}</span><span>{t("In production")}</span><span>{t("Needs review")}</span><span>{t("Published")}</span>
        </div>
      </section>
      <section className="fugudio-kit-forms">
        <div className="fugudio-kit-section-heading"><span>07</span><strong>{t("Form controls")}</strong></div>
        <div className="fugudio-form-preview">
          <label><small>{t("Text input")}</small><span>{t("Content title")}</span></label>
          <label><small>{t("Search input")}</small><span><Search size={13} />{t("Search content or tags")}</span></label>
          <label><small>{t("Bubble select")}</small><span>{t("Instagram Reels")}<Check size={13} /></span></label>
          <label><small>{t("File upload")}</small><span><Upload size={13} />{t("Choose file")}</span></label>
        </div>
      </section>
      <section className="fugudio-kit-components">
        <div className="fugudio-kit-section-heading"><span>08</span><strong>{t("Component architecture")}</strong></div>
        <div className="fugudio-component-groups">
          {componentGroups.map((group) => <article key={group.title}><strong>{t(group.title)}</strong><div>{group.items.map((item) => <span key={item}>{t(item)}</span>)}</div></article>)}
        </div>
        <article className="fugudio-kit-assistant">
          <img src="/projects/fugudio/hugu-mascot.jpg" alt={t("Hugu mascot")} />
          <div><small>FUGUDIO AGENT</small><strong>{t("I found a reuse opportunity.")}</strong><span>{t("Domain guidance combines status, explanation, and a direct next action.")}</span></div>
          <button type="button">↗</button>
        </article>
      </section>
      <section className="fugudio-kit-responsive">
        <div className="fugudio-kit-section-heading"><span>09</span><strong>{t("Responsive navigation")}</strong></div>
        <div><span><PanelLeft />{t("Desktop sidebar + header")}</span><i>→</i><span><Smartphone />{t("Mobile top bar + bottom tabs")}</span></div>
      </section>
      <section className="fugudio-kit-motion">
        <div className="fugudio-kit-section-heading"><span>10</span><strong>{t("Interaction & motion")}</strong></div>
        <div><span>{t("Fade · Slide")}</span><span>{t("Hover lift")}</span><span>{t("Tooltip · Toast")}</span><span>{t("Bottom sheet")}</span><span>prefers-reduced-motion</span></div>
        <p className="fugudio-kit-note">{t("Motion explains page changes, selection results, and layer relationships instead of decorating the interface.")}</p>
      </section>
    </div>
  );
}

function FugudioGuidanceGallery({ t }: { t: Translator }) {
  const alerts = [
    { src: "/projects/fugudio/product-reuse-alert.png", alt: "Reuse opportunity alert" },
    { src: "/projects/fugudio/alert-overdue-priority.png", alt: "Overdue priority alert" },
    { src: "/projects/fugudio/alert-upcoming-schedule.png", alt: "Upcoming schedule alert" },
    { src: "/projects/fugudio/alert-delayed-task.png", alt: "Delayed task alert" },
    { src: "/projects/fugudio/alert-pillar-target.png", alt: "Content pillar target alert" },
  ];

  return (
    <div className="fugudio-guidance-gallery">
      <figure className="fugudio-guidance-agent">
        <div><img src="/projects/fugudio/product-agent-panel.png" alt={t("Hugu Agent Panel")} /></div>
        <figcaption>
          <strong>{t("Hugu Agent Panel")}</strong>
          <span>{t("Brings today's work, personalized alerts, reuse opportunities, and content creation into one contextual action panel.")}</span>
        </figcaption>
      </figure>
      <figure className="fugudio-guidance-alerts">
        <div className="fugudio-alert-stack">
          {alerts.map((alert) => <img key={alert.src} src={alert.src} alt={t(alert.alt)} />)}
        </div>
        <figcaption>
          <strong>{t("Personalized Operations Alerts")}</strong>
          <span>{t("Hugu adapts its message and direct action to reuse opportunities, overdue work, upcoming publishing, delayed production, and content-pillar balance.")}</span>
        </figcaption>
      </figure>
      <figure>
        <div><img src="/projects/fugudio/product-repurpose-suggestions.png" alt={t("Channel-specific Repurpose Suggestions")} /></div>
        <figcaption>
          <strong>{t("Channel-specific Repurpose Suggestions")}</strong>
          <span>{t("Turns the alert into executable options by recommending Naver Clip, YouTube Shorts, and TikTok adaptations from the same published Reel.")}</span>
        </figcaption>
      </figure>
      <figure>
        <div><img src="/projects/fugudio/product-reuse-library-states.png" alt={t("Reuse States in the Content Library")} /></div>
        <figcaption>
          <strong>{t("Reuse States in the Content Library")}</strong>
          <span>{t("Shows reuse-ready, reviewed, and newly created derivative content in the master library so the recommendation becomes a traceable operating workflow.")}</span>
        </figcaption>
      </figure>
    </div>
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
          {visibleProjects.slice(0, 5).map((project, index) => (
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
              {item.projectId ? (
                <a className="timeline-case-link" href={`#/project/${item.projectId}`}>
                  {t(item.projectLabel ?? "View Brand Case")} <ArrowUpRight size={15} />
                </a>
              ) : null}
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
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("ALL");
  const filteredProjects =
    activeFilter === "ALL"
      ? visibleProjects
      : visibleProjects.filter((project) => project.category === activeFilter);

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
        } ${
          project.id === "atember" ? "project-media-atember" : ""
        } ${
          project.id === "colortelier" ? "project-media-colortelier" : ""
        } ${
          project.id === "travel-content-growth" ? "project-media-travel" : ""
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
            {project.cardMetrics?.length ? (
              <div className="project-card-performance">
                {project.cardMetrics.map((metric) => (
                  <div key={metric.label}>
                    <b>{metric.value}</b>
                    <small>{t(metric.label)}</small>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
      <div className="project-card-copy">
        <span className="project-category-label">{t(project.category)}</span>
        <p>{t(project.eyebrow)}</p>
        <h3>{t(project.title)}</h3>
        {project.keywords?.length ? (
          <div className="project-card-keywords" aria-label={t("Project keywords")}>
            {project.keywords.map((keyword) => (
              <small key={keyword}>{t(keyword)}</small>
            ))}
          </div>
        ) : null}
        <span>
          {t(project.id === "travel-content-growth" ? "View operation" : "View case")} <ArrowUpRight size={16} />
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
        className={`case-hero ${project.id === "fugudio" ? "case-hero-fugudio" : ""} ${
          project.id === "atember" ? "case-hero-atember" : ""
        } ${
          project.id === "colortelier" ? "case-hero-colortelier" : ""
        }`}
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
          } ${project.id === "leviosa" ? "case-image-leviosa" : ""} ${
            project.id === "fugudio" ? "case-image-fugudio" : ""
          } ${
            project.id === "atember" ? "case-image-atember" : ""
          } ${
            project.id === "colortelier" ? "case-image-colortelier" : ""
          }`}
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
        <section
          className={`case-impact-chart ${project.id === "began" ? "began-impact-chart" : ""}`}
          aria-label={t("Measured business impact")}
        >
          <div className="case-impact-heading">
            <span>{t("Measured Impact")}</span>
            <h3>
              {t(
                project.id === "began"
                  ? "From the first 10 days of channel growth to user, data, and early market validation"
                  : "Brand work translated into business movement",
              )}
            </h3>
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

      <section className={`case-columns ${project.id === "began" ? "began-case-columns" : ""}`}>
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
              } ${
                project.id === "fugudio" && section.title === "Live Product Interface"
                  ? "fugudio-product-ui-card"
                  : ""
              } ${
                project.id === "fugudio" && section.title === "My 0→1 Product Process"
                  ? "fugudio-process-card"
                  : ""
              } ${
                project.id === "fugudio" && section.title === "The Problem Behind the Product"
                  ? "fugudio-problem-card"
                  : ""
              } ${
                project.id === "fugudio" &&
                section.title === "How My Decisions Became a Product System"
                  ? "fugudio-system-card"
                  : ""
              } ${
                project.id === "fugudio" && section.title === "UX Decisions I Made"
                  ? "fugudio-ux-card"
                  : ""
              } ${
                project.id === "fugudio" && section.title === "UI Kit & Design System"
                  ? "fugudio-brand-card"
                  : ""
              } ${
                project.id === "fugudio" && section.title === "Context-aware Guidance & Reuse"
                  ? "fugudio-guidance-card"
                  : ""
              } ${
                project.id === "atember" ? "atember-story-card" : ""
              } ${
                project.id === "colortelier" ? "colortelier-story-card" : ""
              } ${
                project.id === "began" ? "began-story-card" : ""
              } ${
                project.id === "sephora-analysis" ? "sephora-analysis-story-card" : ""
              } ${
                project.id === "began" && section.title === "Content Operations I Led"
                  ? "began-operations-card"
                  : ""
              } ${
                project.id === "began" &&
                section.title === "Instagram Feed & Carousel Template System"
                  ? "began-instagram-card"
                  : ""
              } ${
                project.id === "began" &&
                (section.title === "Measured Instagram Performance" ||
                  section.title === "One-Month Product, Data & Market Validation")
                  ? "began-performance-card"
                  : ""
              } ${
                project.id === "began" &&
                section.title === "One-Month Product, Data & Market Validation"
                  ? "began-validation-card"
                  : ""
              } ${
                project.id === "colortelier" &&
                section.title === "Problem Definition: Travel Color Is Hard to Reuse"
                  ? "colortelier-opportunity-card"
                  : ""
              } ${
                project.id === "colortelier" &&
                section.title === "Product Ecosystem: From Photo to Reusable Asset"
                  ? "colortelier-journey-card"
                  : ""
              } ${
                project.id === "colortelier" && section.title === "Core Experience: Create Studio"
                  ? "colortelier-create-card"
                  : ""
              } ${
                project.id === "colortelier" &&
                section.title === "UX Decisions for Trust and Momentum"
                  ? "colortelier-ux-card"
                  : ""
              } ${
                project.id === "colortelier" &&
                section.title === "Explore & Community: Records Become Discovery"
                  ? "colortelier-explore-card"
                  : ""
              } ${
                project.id === "colortelier" &&
                section.title === "Brand Application: Color Becomes a System"
                  ? "colortelier-brand-card"
                  : ""
              } ${
                project.id === "colortelier" &&
                section.title === "Business Model: Value Grows With Use"
                  ? "colortelier-business-card"
                  : ""
              } ${
                project.id === "colortelier" &&
                section.title === "Creator Product Strategy: From My XMP Presets to a Platform"
                  ? "colortelier-creator-card"
                  : ""
              } ${
                project.id === "colortelier" &&
                section.title === "Final Insights: Principles That Keep the Experience Coherent"
                  ? "colortelier-insights-card"
                  : ""
              } ${
                project.id === "atember" && section.title === "Live Demo: Context to Execution"
                  ? "atember-product-gallery"
                  : ""
              } ${
                project.id === "alus-healthcare" &&
                section.title === "Instagram Brand System & Audience Response"
                  ? "case-story-card-instagram-evidence"
                  : ""
              } ${
                project.id === "alus-healthcare" &&
                section.title === "Inbound Partnership Proposals"
                  ? "case-story-card-partnership-evidence"
                  : ""
              } ${
                project.id === "alus-healthcare" &&
                section.title === "Content Planning & Production"
                  ? "case-story-card-content-planning"
                  : ""
              } ${section.gallery?.length ? "case-story-card-gallery" : ""} ${
                section.layout === "sequence" ? "case-story-card-sequence" : ""
              } ${
                section.layout === "impact" ? "case-story-card-impact" : ""
              } ${
                section.layout === "performance" ? "case-story-card-performance" : ""
              } ${
                section.layout === "workflow" ? "case-story-card-workflow" : ""
              } ${
                section.layout === "feature-system" ? "case-story-card-feature-system" : ""
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
              {section.layout === "workflow" && section.workflowItems?.length ? (
                project.id === "colortelier" &&
                section.title === "Product Ecosystem: From Photo to Reusable Asset" ? (
                  <ColortelierEcosystemMap items={section.workflowItems} t={t} />
                ) : (
                  <div className="case-workflow-loop">
                    {section.workflowItems.map((item, index) => (
                      <article key={item.step}>
                        <div className="case-workflow-heading">
                          <span>{item.step}</span>
                          <i aria-hidden="true" />
                        </div>
                        <h4>{t(item.title)}</h4>
                        <p>
                          <EmphasizedText>{t(item.text)}</EmphasizedText>
                        </p>
                        <strong>{t(item.output)}</strong>
                        {index < section.workflowItems!.length - 1 ? (
                          <b aria-hidden="true">→</b>
                        ) : null}
                      </article>
                    ))}
                  </div>
                )
              ) : null}
              {section.layout === "feature-system" && section.featureItems?.length ? (
                project.id === "fugudio" &&
                section.title === "How My Decisions Became a Product System" ? (
                  <FugudioSystemMap items={section.featureItems} t={t} />
                ) : (
                  <div className="case-feature-system">
                    {section.featureItems.map((item, index) => (
                      <article key={item.title}>
                        <div>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <small>{t(item.group)}</small>
                        </div>
                        <h4>{t(item.title)}</h4>
                        <p>{t(item.text)}</p>
                      </article>
                    ))}
                  </div>
                )
              ) : null}
              {project.id === "fugudio" && section.title === "UI Kit & Design System" ? (
                <FugudioBrandSystem t={t} />
              ) : null}
              {project.id === "fugudio" && section.title === "Context-aware Guidance & Reuse" ? (
                <FugudioGuidanceGallery t={t} />
              ) : null}
              {section.gallery?.length &&
              !(project.id === "fugudio" && section.title === "Context-aware Guidance & Reuse") ? (
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
                          <div
                            className={`case-story-gallery-media ${
                              project.id === "alus-healthcare" &&
                              item.title === "Live Homepage & Campaign Entry"
                                ? "alus-privacy-live"
                                : project.id === "alus-healthcare" &&
                                    item.title === "Blog Review Experience"
                                  ? "alus-privacy-blog"
                                  : project.id === "alus-healthcare" &&
                                      item.title === "Instagram Review Experience"
                                    ? "alus-privacy-instagram-review"
                                  : project.id === "alus-healthcare" &&
                                      item.title === "Verified 1,707 Follower Milestone"
                                    ? "alus-privacy-follower-evidence"
                                    : ""
                            }`}
                          >
                              <img
                                src={item.image}
                                alt={`${t(project.title)} ${t(item.title)}`}
                                loading={
                                  project.id === "colortelier"
                                    ? "lazy"
                                    : section.layout === "sequence" || itemIndex > 3
                                      ? "lazy"
                                      : "eager"
                                }
                                decoding="async"
                                fetchPriority="auto"
                              />
                              {project.id === "alus-healthcare" &&
                              item.title === "Live Homepage & Campaign Entry" ? (
                                <>
                                  <i className="alus-privacy-mask mask-1" aria-hidden="true" />
                                  <i className="alus-privacy-mask mask-2" aria-hidden="true" />
                                </>
                              ) : null}
                              {project.id === "alus-healthcare" &&
                              item.title === "Verified 1,707 Follower Milestone" ? (
                                <i
                                  className="alus-privacy-mask mask-follower-1"
                                  aria-hidden="true"
                                />
                              ) : null}
                              {project.id === "alus-healthcare" &&
                              item.title === "Blog Review Experience" ? (
                                <>
                                  <i className="alus-privacy-mask mask-1" aria-hidden="true" />
                                  <i className="alus-privacy-mask mask-2" aria-hidden="true" />
                                  <i className="alus-privacy-mask mask-3" aria-hidden="true" />
                                </>
                              ) : null}
                              {project.id === "alus-healthcare" &&
                              item.title === "Instagram Review Experience" ? (
                                <i
                                  className="alus-privacy-mask mask-instagram-review-1"
                                  aria-hidden="true"
                                />
                              ) : null}
                          </div>
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

function ProjectSlideViewer({
  project,
  deckLanguage,
  t,
}: {
  project: Project;
  deckLanguage: "ko" | "en";
  t: Translator;
}) {
  const pdfPath = `/documents/sephora-analysis/sephora-beauty-pricing-${deckLanguage}.pdf`;
  const alternateLanguage = deckLanguage === "ko" ? "en" : "ko";

  return (
    <PageFrame eyebrow="Project Materials" title={project.title} t={t}>
      <section className="project-slide-viewer">
        <div className="project-slide-viewer-heading">
          <div>
            <span>{t(deckLanguage === "ko" ? "Korean Presentation" : "English Presentation")}</span>
            <h2>{t("20-slide analysis deck")}</h2>
            <p>{t("Use the PDF toolbar to move between slides, zoom, present, or download the original file.")}</p>
          </div>
          <div className="project-slide-viewer-actions">
            <a className="button ghost" href={`#/project/${project.id}`}>
              {t("Back to case study")}
            </a>
            <a
              className="button ghost"
              href={`#/project/${project.id}/slides/${alternateLanguage}`}
            >
              {t(alternateLanguage === "ko" ? "Korean Version" : "English Version")}
            </a>
            <a className="button primary" href={pdfPath} download>
              {t("Download PDF")} <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="project-slide-frame">
          <iframe
            src={`${pdfPath}#page=1&view=FitH&toolbar=1&navpanes=0`}
            title={t(deckLanguage === "ko" ? "Korean Presentation" : "English Presentation")}
          />
        </div>
      </section>
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
