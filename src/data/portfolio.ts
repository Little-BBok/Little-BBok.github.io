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

export type Interest = {
  id: string;
  title: string;
  text: string;
  cover: string;
  gallery: Array<{
    title: string;
    type: string;
    image: string;
    note: string;
  }>;
};

export type SoftwareTool = {
  name: string;
  category: string;
  icon: string;
};

export type DocumentSection = {
  title: string;
  eyebrow: string;
  text: string;
  href: string;
  action: string;
  preview: string;
  highlights: string[];
  gallery?: string[];
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

export const aboutKeywords = [
  {
    title: "Insight Translator",
    text: "I turn user interviews, market signals, and cultural observations into clear strategic directions.",
  },
  {
    title: "Full-cycle Builder",
    text: "I enjoy moving from concept to IA, prototype, launch, content, CRM, and performance iteration.",
  },
  {
    title: "Warm Visual Storyteller",
    text: "I shape brand and product narratives so complex ideas feel approachable, memorable, and human.",
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
    image:
      "https://static.wixstatic.com/media/df8dea_b364d89cad604cc7a393e9faa4304fa1~mv2.png/v1/fill/w_1235,h_486,al_c,q_90,enc_avif,quality_auto/NFT%20%ED%94%BC%EA%B7%B8%EB%A7%88%20%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85.png",
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
    image:
      "https://static.wixstatic.com/media/df8dea_8929fc4e6874426fac25461f7a8531c4~mv2.png/v1/crop/x_0,y_57,w_2022,h_1071/fill/w_1402,h_744,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2003_57_36.png",
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

export const softwareTools: SoftwareTool[] = [
  {
    name: "R / Data Analysis",
    category: "Data Analysis",
    icon: "https://static.wixstatic.com/media/df8dea_0520e81272434275bf8dc73cd64ad657~mv2.jpeg/v1/fill/w_304,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/df8dea_0520e81272434275bf8dc73cd64ad657~mv2.jpeg",
  },
  {
    name: "SQL",
    category: "Data Analysis",
    icon: "https://static.wixstatic.com/media/df8dea_9d64b724f20341c4abfc0c3da5edbc77~mv2.png/v1/fill/w_304,h_296,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(1)_edited.png",
  },
  {
    name: "Figma",
    category: "Design",
    icon: "https://static.wixstatic.com/media/df8dea_8bc5f0c945764beeb5a13fe3bc4dda4d~mv2.jpeg/v1/fill/w_356,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_%20(6).jpeg",
  },
  {
    name: "Photoshop",
    category: "Design",
    icon: "https://static.wixstatic.com/media/df8dea_67adb15d60544f35bd32de7d82948e2a~mv2.jpeg/v1/fill/w_304,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Adobe%20Photoshop.jpeg",
  },
  {
    name: "Illustrator",
    category: "Design",
    icon: "https://static.wixstatic.com/media/df8dea_27ffb8f5669649dcbed5f9aa59206da1~mv2.jpeg/v1/fill/w_304,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Illustrator%20free%20icons%20designed%20by%20Maniprasanth.jpeg",
  },
  {
    name: "Premiere Pro",
    category: "Design",
    icon: "https://static.wixstatic.com/media/df8dea_84b30157d1c94391a2c2b1b52620cc24~mv2.jpeg/v1/fill/w_304,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/My%20Travel%20Gear%20-.jpeg",
  },
  {
    name: "Slack",
    category: "Collaboration",
    icon: "https://static.wixstatic.com/media/df8dea_0a16a44408ee42e08ba1edf4b83ce218~mv2.jpeg/v1/fill/w_356,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Slack.jpeg",
  },
  {
    name: "Notion",
    category: "Productivity",
    icon: "https://static.wixstatic.com/media/df8dea_ae175660f6174a1b96ca57c3504a32b5~mv2.jpeg/v1/fill/w_304,h_296,al_c,q_80,enc_avif,quality_auto/How%20to%20Build%20a%20Second%20Brain%20in%20Notion%2C%20by%20Maria%20Aldrey%20-%20Forte%20Labs.jpeg",
  },
  {
    name: "Excel",
    category: "Productivity",
    icon: "https://static.wixstatic.com/media/df8dea_2c32193cbff54861851ce6e8870f9623~mv2.jpeg/v1/fill/w_304,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_%20(7).jpeg",
  },
  {
    name: "PowerPoint",
    category: "Productivity",
    icon: "https://static.wixstatic.com/media/df8dea_34e91ffb08cc4911bc578a920376a2d1~mv2.jpeg/v1/fill/w_304,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Microsoft%20Powerpoint%20Logo%20PNG%20Vector%20(SVG)%20Free%20Download.jpeg",
  },
];

export const documentSections: DocumentSection[] = [
  {
    title: "Resume",
    eyebrow: "Career snapshot",
    text:
      "A concise overview of academic background, professional experiences, and project-based achievements across brand strategy, marketing planning, data analysis, and collaboration.",
    href: "https://50e217fb-c32f-4fb0-a6a1-228397b343ae.filesusr.com/ugd/df8dea_f28ccd40b1564612b437039aba384d6f.pdf",
    action: "Download Resume",
    preview:
      "https://static.wixstatic.com/media/df8dea_02c9d4f1949a476191cb60a6e93826d8~mv2.png/v1/crop/x_5,y_0,w_1233,h_1747/fill/w_980,h_1390,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2018_22_27.png",
    highlights: ["Brand strategy", "Marketing planning", "Data-driven analysis"],
  },
  {
    title: "Certificate",
    eyebrow: "Learning archive",
    text:
      "Certificates from UX/HCI, digital marketing, beauty brand management, design, content creation, and related programs that support both strategic and creative practice.",
    href: "https://leesm5088.wixsite.com/suminleeportfolio/certificate",
    action: "View Original",
    preview:
      "https://static.wixstatic.com/media/df8dea_6544e03da14c478fa75977ce91499f27~mv2.jpeg/v1/fill/w_592,h_784,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/KakaoTalk_Photo_2026-06-07-18-44-26.jpeg",
    highlights: ["UX / HCI", "Digital marketing", "Beauty brand management"],
    gallery: [
      "https://static.wixstatic.com/media/df8dea_e72f899ec7354337938ae868815a9068~mv2.jpeg/v1/fill/w_592,h_836,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/KakaoTalk_Photo_2026-06-07-18-44-40.jpeg",
      "https://static.wixstatic.com/media/df8dea_f32636c5db9e49f6ada29aafc025b2b3~mv2.png/v1/fill/w_592,h_866,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2018_36_21.png",
      "https://static.wixstatic.com/media/df8dea_d018506c23f746dea3d91ff65fd949ce~mv2.png/v1/crop/x_0,y_10,w_2098,h_1474/fill/w_826,h_580,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2018_38_37.png",
    ],
  },
  {
    title: "License",
    eyebrow: "Verified capability",
    text:
      "Licenses and certifications that demonstrate practical capability across structured data, AI prompt workflows, accounting, digital design, and content production.",
    href: "https://leesm5088.wixsite.com/suminleeportfolio/license",
    action: "View Original",
    preview:
      "https://static.wixstatic.com/media/df8dea_a53630cf541d4de491cd5ec5d8c5e1c4~mv2.png/v1/fill/w_642,h_904,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2019_01_03.png",
    highlights: ["SQLD / AI-POT", "Accounting management", "Adobe Photoshop / After Effects"],
    gallery: [
      "https://static.wixstatic.com/media/df8dea_4a84c69cf5834f1f809adb67d044ae5d~mv2.png/v1/fill/w_642,h_904,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2019_01_30.png",
      "https://static.wixstatic.com/media/df8dea_6a5f59b0c67d407ebab8c3345013371c~mv2.png/v1/crop/x_0,y_21,w_1412,h_1035/fill/w_910,h_668,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2018_57_28.png",
      "https://static.wixstatic.com/media/df8dea_bc4252d60d474491a2d1c8ff3fbb750e~mv2.png/v1/crop/x_0,y_40,w_1412,h_1038/fill/w_910,h_668,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2018_57_22.png",
    ],
  },
];

export const interests: Interest[] = [
  {
    id: "traveling-photography",
    title: "Traveling & Photography",
    text: "Exploring places, observing local culture, and translating global inspiration into business and brand insight.",
    cover:
      "https://static.wixstatic.com/media/df8dea_8352e2fe23334b8192d9813e5a899b8c~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/df8dea_8352e2fe23334b8192d9813e5a899b8c~mv2.jpg",
    gallery: [
      {
        title: "Hong Kong Color Study",
        type: "Travel Photo",
        image:
          "https://static.wixstatic.com/media/df8dea_8352e2fe23334b8192d9813e5a899b8c~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/df8dea_8352e2fe23334b8192d9813e5a899b8c~mv2.jpg",
        note: "Street color, repetition, and small visual details collected through travel.",
      },
      {
        title: "Urban Texture",
        type: "Photography",
        image:
          "https://static.wixstatic.com/media/df8dea_4ca345d29e914f6cb6c3ab5fbb4605d6~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90,enc_avif,quality_auto/df8dea_4ca345d29e914f6cb6c3ab5fbb4605d6~mv2.jpg",
        note: "Observation-led photography focused on place, light, and cultural texture.",
      },
      {
        title: "Memory Frame",
        type: "Photography",
        image:
          "https://static.wixstatic.com/media/df8dea_e1040cd17b0d497c8de5dfc2d1cb7a32~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90,enc_avif,quality_auto/df8dea_e1040cd17b0d497c8de5dfc2d1cb7a32~mv2.jpg",
        note: "Travel moments translated into visual references for brand mood and storytelling.",
      },
      {
        title: "Perspective Archive",
        type: "Travel Photo",
        image:
          "https://static.wixstatic.com/media/df8dea_edce9942f9e6408d9a311b32cf3ad887~mv2.jpeg/v1/fill/w_900,h_1200,al_c,q_90,enc_avif,quality_auto/df8dea_edce9942f9e6408d9a311b32cf3ad887~mv2.jpeg",
        note: "A personal image archive that keeps global inspiration close to strategy work.",
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    text: "Building visual systems that make complex ideas warm, structured, and easy to remember.",
    cover:
      "https://static.wixstatic.com/media/df8dea_c827554ca8de4dbfbec77db157cffac5~mv2.png/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/df8dea_c827554ca8de4dbfbec77db157cffac5~mv2.png",
    gallery: [
      {
        title: "NOI Lab Poster",
        type: "Poster Design",
        image:
          "https://static.wixstatic.com/media/df8dea_23b449d516694ac1b4c6d79a956d5cd6~mv2.png/v1/fill/w_1648,h_940,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EB%85%B8%EC%9D%B4%EB%9E%A9%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EA%B7%B8%EB%9E%A8%20%ED%8F%AC%EC%8A%A4%ED%84%B0%20%EC%B5%9C%EC%A2%85_%EB%8C%80%EC%A7%80%201.png",
        note: "Promotional poster work for a cognitive training program.",
      },
      {
        title: "Love Art Poster",
        type: "Art Direction",
        image:
          "https://static.wixstatic.com/media/df8dea_b96ea95b11854d078f2d33b6f26fb74a~mv2.png/v1/fill/w_666,h_940,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EB%9F%AC%EB%B8%8C%20%EC%95%84%ED%8A%B8%20%EC%95%84%ED%8A%B8%20%EC%B5%9C%EC%A2%85%EB%B3%B8.png",
        note: "Editorial-style visual composition exploring emotional tone and typography.",
      },
      {
        title: "Brand Character",
        type: "Character Design",
        image:
          "https://static.wixstatic.com/media/df8dea_53fab8e19f7f45799632f371d032422f~mv2.png/v1/fill/w_466,h_660,al_c,lg_1,q_85,enc_avif,quality_auto/%ED%8C%8C%EC%9A%B0%EC%B9%98%20%EA%B3%B0%EB%8F%8C%EC%9D%B4%20%EC%95%88%EA%B2%BD%20%EB%B2%84%EC%A0%84.png",
        note: "Mascot-style illustration for approachable product and brand storytelling.",
      },
      {
        title: "Design Object Study",
        type: "3D / Visual Study",
        image:
          "https://static.wixstatic.com/media/df8dea_c827554ca8de4dbfbec77db157cffac5~mv2.png/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/df8dea_c827554ca8de4dbfbec77db157cffac5~mv2.png",
        note: "A playful visual study balancing glossy form, object memory, and pop color.",
      },
    ],
  },
];
