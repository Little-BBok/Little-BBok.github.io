export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  period?: string;
  summary: string;
  role: string;
  outcome: string;
  accent: string;
  external?: string;
  image?: string;
  details: string[];
  capabilities: string[];
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  category: "Work" | "Association";
  highlights: string[];
};

export const profile = {
  name: "Sumin (Chloe) Lee",
  shortName: "Sumin Lee",
  school: "Department of Business, Yonsei University, Seoul",
  title: "Full-Cycle Brand Manager & Strategist",
  tagline:
    "An experience planner who explores global insights to design seamless, user-centered solutions.",
  landingIntro:
    "Hello, I'm Sumin Lee. I craft joyful and heartwarming experiences that linger in people's memories. Explore this website to discover my journey and work!",
  intro:
    "I craft joyful and heartwarming experiences that linger in people's memories, blending data-driven insight with human-centered empathy.",
  story:
    "My journey began by exploring the world and capturing global inspirations that broadened my perspective. I transform raw insights into structured brand, product, and service strategies rooted in data analysis and cognitive science. Beyond numbers, my goal is to architect seamless UX that touches people's lives with joy and warmth.",
  emails: ["leesm5088@naver.com", "leesm5088@yonsei.ac.kr"],
  links: [
    {
      label: "Wix Portfolio",
      href: "https://leesm5088.wixsite.com/suminleeportfolio",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sumin-lee-0270a8292/",
    },
  ],
  heroImage:
    "https://static.wixstatic.com/media/df8dea_2f377dd74ee742a9a7d40e8b6fa4e8c2~mv2.jpeg/v1/crop/x_0,y_842,w_3000,h_2316/fill/w_1422,h_1098,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/KakaoTalk_Photo_2026-06-07-01-42-48.jpeg",
  portrait:
    "https://static.wixstatic.com/media/df8dea_92ff19e4f5e744d58508ef5db79d7f5f~mv2.jpeg/v1/fill/w_640,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/df8dea_92ff19e4f5e744d58508ef5db79d7f5f~mv2.jpeg",
};

export const keywords = [
  {
    title: "Experience Crafting",
    text: "Weaving strategy and empathy together to design joyful, heartwarming brand memories.",
  },
  {
    title: "User-Centric Mindset",
    text: "Deeply understanding human behavior and prioritizing seamless user experiences above all else.",
  },
  {
    title: "Global Exploration",
    text: "Thriving on exploring new places and turning world-wide inspirations into fresh business insights.",
  },
];

export const experiences: Experience[] = [
  {
    organization: "ALUS healthcare",
    role: "Brand Manager",
    period: "Feb 2025 - Aug 2025",
    category: "Work",
    highlights: [
      "Revitalized a dormant social media channel, growing followers from 10 to 1,700.",
      "Produced a viral short-form video inspired by the product's macaron design, achieving 21,000+ views and 334,000+ Instagram profile visits.",
      "Led 10 influencer collaborations, doubled traffic to the official e-commerce website, and launched a supporter program that secured 48 UGC pieces from 11 members.",
      "Led official e-commerce store development from IA and wireframes to functional prototype, then custom-coded real-time influencer reviews into the product page.",
      "Integrated Channel Talk CRM to analyze customer behavior and reduced unit production costs by 24% through a new manufacturing partner.",
      "Developed and launched POWAPOWA, a wellness and beauty brand for women in their 20s and 30s, generating inbound partnership offers from Marriott Moxy Hotel and Qoo10 Japan.",
    ],
  },
  {
    organization: "Yonsei University Digital Media Lab",
    role: "Undergraduate Intern",
    period: "Sep 2024 - Nov 2024",
    category: "Work",
    highlights: [
      "Conducted competitive analysis and usability study of best-selling commercial VR applications.",
      "Evaluated content using UX, GUI, and cybersickness metrics.",
      "Synthesized research findings into a comprehensive report for future VR development projects.",
    ],
  },
  {
    organization: "NOI LAB",
    role: "Marketing and Strategy Intern",
    period: "Dec 2023 - Oct 2024",
    category: "Work",
    highlights: [
      "Spearheaded social media revitalization, driving 24.4% follower growth through data-backed content planning and performance analysis.",
      "Single-handedly planned an offline expo booth with a cognitive mini-game, follow-to-win raffle, and personalized fNIRS reports.",
      "Managed the official blog through search trend and keyword analysis, securing multiple sponsorships and identifying high-impact influencers.",
      "Led renewal planning for the Brain Training Game application and built the Cognitive Sports Curriculum framework through self-participation and user tests.",
      "Contributed to H2 2024 OKRs and used generative AI to create profile images and promotional videos.",
    ],
  },
  {
    organization: "UXIM",
    role: "Product Manager",
    period: "Mar 2025 - Jun 2026",
    category: "Association",
    highlights: [
      "Led Began product planning through user interviews, IA, user flows, and business model definition.",
      "Won 1st place at the UXIM x YCC Final Project Showcase.",
      "Planned UX/IA for Namdong Senior Club's official website and delivered wireframes and prototypes.",
      "Co-designed an IoT water-tracking device and companion app concept for the Busan International Design Award.",
    ],
  },
  {
    organization: "CogSci:IN",
    role: "Head of PR & MD Team",
    period: "Mar 2024 - Dec 2024",
    category: "Association",
    highlights: [
      "Designed and executed neuromarketing research with Muse EEG to study olfactory visualization and purchase intent in omni-channel retail.",
      "Managed the full research lifecycle from experimental design to data analysis, with findings published in a peer-reviewed academic journal.",
      "Directed brand identity, journal cover design, custom apparel, merchandising production, distribution, and promotional visuals.",
    ],
  },
  {
    organization: "KCC",
    role: "Member",
    period: "Mar 2024 - Dec 2024",
    category: "Association",
    highlights: [
      "Strategized B2C market expansion for a B2B NFT business through a location-based camera app concept and UI/UX framework.",
      "Won 1st place in the final idea pitching, contributing to commercialization and launch by the partnering corporation.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "began",
    title: "Began Project",
    eyebrow: "Dietary-accessible discovery service",
    summary:
      "A location-based restaurant discovery service designed to reduce dining uncertainty for people with dietary restrictions.",
    role:
      "Lead Product Planner responsible for ideation, IDI, IA, user flows, business model, and end-to-end UI/UX.",
    outcome:
      "Won 1st place at the UXIM x YCC Final Project Showcase for a user-centered approach to real dining accessibility challenges.",
    accent: "#7ba86f",
    external: "https://began-map.vercel.app",
    image:
      "https://static.wixstatic.com/media/df8dea_b4166153dda44015841c8d757c843d28~mv2.png/v1/crop/x_26,y_1,w_3291,h_1803/fill/w_1906,h_1044,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2002_38_29.png",
    details: [
      "Designed tailored onboarding with dietary presets and custom ingredient restrictions to reduce first-use friction.",
      "Built menu-level verification using vegan-type breakdowns and color-coded eat-or-not indicators.",
      "Added a user contribution loop for reporting vegan spots, adding menu items, and leaving ratings.",
    ],
    capabilities: ["Product Planning", "User Interviews", "IA", "UI/UX", "Business Model"],
  },
  {
    id: "nft-camera",
    title: "B2C NFT Project",
    eyebrow: "Location-based camera app concept",
    summary:
      "A B2C expansion strategy for a B2B NFT business, framed as a location-based camera app with a UI/UX framework.",
    role:
      "Strategist and UX planner developing the consumer-facing idea, user flow, and market expansion proposal.",
    outcome:
      "Won 1st place in the final idea pitching and moved toward commercialization and launch by the partner corporation.",
    accent: "#3385c6",
    details: [
      "Reframed B2B NFT assets into an accessible consumer experience anchored in place, camera behavior, and collectable moments.",
      "Designed a UI/UX framework that connected location discovery, capture, ownership, and sharing.",
      "Presented the strategy as a business expansion path rather than a standalone design concept.",
    ],
    capabilities: ["Market Strategy", "Service Concept", "Pitching", "UI/UX Framework"],
  },
  {
    id: "leviosa",
    title: "Leviosa AI UX Project",
    eyebrow: "Cafe24 CRM detail page UX",
    summary:
      "End-to-end UX/UI for the detail page of Leviosa CS, a high-performance CRM solution integrated with Cafe24.",
    role:
      "UX/UI designer translating complex e-commerce data into an intuitive, action-oriented interface for CS agents.",
    outcome:
      "Reduced cognitive load through clearer hierarchy, task-centric workflows, and a scalable SaaS component system.",
    accent: "#c44c4c",
    external: "https://cafe24.cs.leviosa.ai.kr",
    image:
      "https://static.wixstatic.com/media/df8dea_f551a8e7576d46ada41881d17c9158e9~mv2.png/v1/fill/w_1960,h_1022,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2003_15_27.png",
    details: [
      "Structured multi-layered data such as order history, customer profiles, and real-time logs into a clear visual hierarchy.",
      "Designed a task-centric layout for refunds, shipping updates, and inquiries with minimal clicks.",
      "Aligned UI with Cafe24 API data structures to bridge technical constraints and agent needs.",
    ],
    capabilities: ["SaaS UX", "Information Architecture", "Workflow Design", "Component System"],
  },
  {
    id: "sephora-analysis",
    title: "Sephora R Data Analysis",
    eyebrow: "Premium beauty pricing research",
    summary:
      "An R-based analysis of 8,000+ Sephora products examining when beauty product pricing is accepted in consumer ratings.",
    role:
      "Data analyst testing nonlinear price effects and moderating effects of Sephora exclusivity and vegan positioning.",
    outcome:
      "Found that premium beauty success depends on distribution trust and value signals that make consumers perceive price as justified.",
    accent: "#b9bed0",
    image:
      "https://static.wixstatic.com/media/df8dea_b225d5375cfa445bbddbcda2cb4f0431~mv2.png/v1/crop/x_0,y_3,w_3389,h_1836/fill/w_1960,h_1060,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2003_36_58.png",
    details: [
      "Used regression analysis and a binary logit model on product-level beauty data.",
      "Compared pricing, exclusivity, vegan positioning, and consumer rating acceptance.",
      "Translated analytical findings into brand and distribution strategy implications.",
    ],
    capabilities: ["R", "Regression", "Binary Logit", "Consumer Insight", "Beauty Strategy"],
  },
  {
    id: "sephora-guide",
    title: "Sephora Guide Book",
    eyebrow: "LVMH Europe career guide",
    summary:
      "A career guidebook project focused on entry strategies into Sephora and LVMH in Europe.",
    role:
      "Researcher mapping industry structure, business model, market position, job functions, recruitment, and career progression.",
    outcome:
      "Developed an actionable guidebook for students exploring practical career paths in Sephora and the LVMH network.",
    accent: "#d6cbb7",
    details: [
      "Analyzed the beauty and luxury industry structure and Sephora's business model.",
      "Researched European market position, job functions, recruiting process, and career progression pathways.",
      "Incorporated interviews with industry professionals to ground the guidebook in practical insight.",
    ],
    capabilities: ["Industry Research", "Career Strategy", "Luxury Beauty", "Interview Insight"],
  },
];

export const skills = [
  "Brand Strategy",
  "Growth Marketing",
  "Product Planning",
  "UI/UX Design",
  "User Research",
  "Information Architecture",
  "Data Analysis",
  "Regression Analysis",
  "CRM Optimization",
  "Generative AI Asset Production",
  "Community Building",
  "Merchandising",
];

export const interests = [
  {
    title: "Traveling & Photography",
    text: "Exploring places, observing local culture, and translating global inspiration into business and brand insight.",
  },
  {
    title: "Design",
    text: "Building visual systems that make complex ideas warm, structured, and easy to remember.",
  },
];
