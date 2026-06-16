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
  actions?: Array<{
    label: string;
    href: string;
  }>;
  sections?: Array<{
    title: string;
    text: string;
    image?: string;
  }>;
  gallery?: Array<{
    title: string;
    image: string;
    note?: string;
  }>;
  details: string[];
  capabilities: string[];
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  category: "Work" | "Association";
  description?: string;
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
  id: string;
  title: string;
  eyebrow: string;
  text: string;
  detailIntro?: string;
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

export const aboutNarrative = [
  "I am an experience planner who blends data-driven insights with human-centered empathy. Driven by a curiosity to explore the world, my mission is to design seamless user experiences that leave joyful and lasting brand memories in people's lives.",
  "My journey began by exploring the world, capturing unique global inspirations that broadened my perspective. I transform these raw insights into structured brand, product, and service strategies deeply rooted in data analysis and cognitive science.",
  "Beyond numbers, my ultimate goal is to architect seamless user experiences that touch people's lives with joy and warmth, scaling this positive impact outwards. Driven by this vision, I continuously push my boundaries by actively leading diverse service development, data analytics, and branding projects to grow as a multi-dimensional planner.",
];

export const contactHighlights = [
  {
    title: "Project Collaboration",
    text:
      "Brand strategy, UX planning, service design, CRM, growth marketing, and beauty or wellness projects are the best starting points for a conversation.",
  },
  {
    title: "Research & Insight",
    text:
      "I enjoy translating interviews, market signals, cultural references, and quantitative analysis into clear business and product directions.",
  },
  {
    title: "Open Conversation",
    text:
      "Portfolio reviews, career conversations, student association work, and global brand experience discussions are always welcome.",
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
    description: "HCI/UX Society",
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
    description: "Cognitive Science Society",
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
    description: "Commerce & Strategy Society",
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
    accent: "#8d93cb",
    external: "https://began-map.vercel.app/ko",
    image:
      "https://static.wixstatic.com/media/df8dea_b4166153dda44015841c8d757c843d28~mv2.png/v1/crop/x_26,y_1,w_3291,h_1803/fill/w_1906,h_1044,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2002_38_29.png",
    actions: [
      { label: "Began Website", href: "https://began-map.vercel.app/ko" },
    ],
    sections: [
      {
        title: "Project Overview",
        text:
          "'Began' is a location-based restaurant discovery service designed to reduce information uncertainty when dining with individuals who have specific dietary restrictions. The project won 1st place at the UXIM x YCC Final Project Showcase, recognizing its user-centered approach to solving real-world dining accessibility challenges.",
        image:
          "https://static.wixstatic.com/media/df8dea_6faf4a86efe04d7ca1aa29d870318743~mv2.png/v1/fill/w_660,h_966,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EB%B9%84%EA%B1%B4%20%EC%98%81%EC%96%B4%20%ED%8F%AC%EC%8A%A4%ED%84%B0.png",
      },
      {
        title: "Tailored Onboarding",
        text:
          "To solve the fragmented nature of dietary preferences, I designed an intuitive onboarding experience featuring dietary preference presets. Users can quickly select their baseline dietary type or customize specific ingredient restrictions, including allergies and fine-tuned choices, from the very beginning. By minimizing initial user friction and mapping precise user profiles early on, this feature eliminates unnecessary search steps and delivers highly personalized restaurant curation from the first interaction.",
        image:
          "https://static.wixstatic.com/media/df8dea_4e1d9404b1124b51b0056a56bdd9ce9f~mv2.png/v1/crop/x_0,y_0,w_883,h_872/fill/w_834,h_824,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2002_42_02.png",
      },
      {
        title: "Menu-Level Verification & Crowdsourced Ecosystem",
        text:
          "I developed a menu-level verification system that breaks down restaurant menus by specific vegan types, using a color-coded indicator to show eat-or-not availability at a glance. This high visual hierarchy reduces information uncertainty for users dining in groups. I also integrated a user-driven contribution loop where users can report new vegan spots, add menu items, and leave ratings, transforming Began into a self-sustaining crowdsourced ecosystem driven by community trust.",
        image:
          "https://static.wixstatic.com/media/df8dea_caa2917f6508474196b2230c15b7b792~mv2.png/v1/crop/x_0,y_310,w_712,h_1007/fill/w_712,h_1007,al_c,q_90,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2002_42_33.png",
      },
    ],
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
    accent: "#8d93cb",
    image:
      "https://static.wixstatic.com/media/df8dea_b364d89cad604cc7a393e9faa4304fa1~mv2.png/v1/fill/w_1235,h_486,al_c,q_90,enc_avif,quality_auto/NFT%20%ED%94%BC%EA%B7%B8%EB%A7%88%20%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85.png",
    sections: [
      {
        title: "Project Overview",
        text:
          "I participated in an industry-academic collaboration project to propose a B2C service expansion strategy for a company that had previously provided B2B NFT solutions. Our team planned NFTCamera, a service combining location- and time-based limited AR filters with NFT issuance, storage, and verification features. By proposing a strategy to expand consumer touchpoints through brand collaborations, user-participation missions, and scarcity-based reward structures, our team won 1st place in the project.",
        image:
          "https://static.wixstatic.com/media/df8dea_04f1077c2d5f4c9f8d6d7a97743f8a11~mv2.png/v1/fill/w_542,h_1010,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/NFT%20%EB%A9%94%EC%9D%B8%20%ED%8E%98%EC%9D%B4%EC%A7%80-05.png",
      },
      {
        title: "Main Features",
        text:
          "NFTCamera is a location- and time-based NFT camera service where users can access limited AR filters only under specific conditions. Users can capture moments with exclusive filters, store them in an NFT archive, verify ownership, and track NFT issuance history.",
      },
      {
        title: "Brand Collaboration",
        text:
          "I planned collaboration-based limited filters for festivals, fandom events, sports games, exhibitions, campaigns, and offline brand spaces. These collaborations were designed to help brands create interactive consumer experiences while attracting new users to the service.",
      },
      {
        title: "User-Participation Missions",
        text:
          "I designed participatory missions such as first-come-first-served filters, limited-user filters, community voting, filter co-creation, and location-based challenges. These features aimed to increase app engagement, repeat usage, and the number of photo captures per user.",
      },
    ],
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
    eyebrow: "Cafe24 CRM landing page UX",
    summary:
      "UX planning and UI design for a landing page that explains Leviosa CS, a Cafe24-connected CRM service.",
    role:
      "UX planner and UI designer responsible for structuring the landing page narrative, information flow, and visual interface.",
    outcome:
      "Clarified the service value proposition and feature flow through landing page UX, hierarchy, and UI design.",
    accent: "#f7769b",
    external: "https://cafe24.cs.leviosa.ai.kr/leviosa_cs/detail",
    image:
      "https://static.wixstatic.com/media/df8dea_f551a8e7576d46ada41881d17c9158e9~mv2.png/v1/fill/w_1960,h_1022,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2003_15_27.png",
    actions: [
      { label: "UX Sample", href: "https://cafe24.cs.leviosa.ai.kr/leviosa_cs/detail" },
    ],
    sections: [
      {
        title: "Project Overview",
        text:
          "I planned the UX and designed the UI for a landing page that introduces Leviosa CS, a Cafe24-connected CRM service, with a focus on clear page structure, feature storytelling, and conversion-oriented interface design.",
      },
      {
        title: "Information Architecture",
        text:
          "I organized the landing page flow so visitors could quickly understand the service context, key features, usage benefits, and product value without confusion.",
      },
      {
        title: "Landing Flow Design",
        text:
          "I designed the page narrative to move from problem awareness to solution benefits, feature explanation, and action, helping users grasp why the service matters.",
      },
      {
        title: "UI Design System",
        text:
          "I created a clean SaaS-style UI direction with reusable sections, clear visual hierarchy, and interface components suited to explaining a B2B CRM product.",
      },
    ],
    details: [
      "Planned the landing page information architecture and content flow for Leviosa CS.",
      "Designed UI sections that explain service features, benefits, and product context.",
      "Created a SaaS-style landing page interface optimized for clarity and conversion.",
    ],
    capabilities: ["SaaS UX", "Landing Page UX", "Information Architecture", "UI Design"],
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
    accent: "#8d93cb",
    image:
      "https://static.wixstatic.com/media/df8dea_b225d5375cfa445bbddbcda2cb4f0431~mv2.png/v1/crop/x_0,y_3,w_3389,h_1836/fill/w_1960,h_1060,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2003_36_58.png",
    actions: [
      {
        label: "English Version",
        href: "https://www.miricanvas.com/v2/ko/design2/v/d02089ca-ef51-4e6f-ade6-11baf139db32",
      },
      {
        label: "Korean Version",
        href: "https://www.miricanvas.com/v2/ko/design2/v/bcbf6459-b3cc-42fb-aae0-0cdf6c58ab30",
      },
    ],
    sections: [
      {
        title: "Project Overview",
        text:
          "Based on data from over 8,000 Sephora products, I analyzed the conditions under which beauty product pricing is accepted in consumer ratings. I tested the nonlinear effect of price, as well as the moderating effects of Sephora exclusivity and vegan positioning, using regression analysis and a binary logit model.",
      },
      {
        title: "Analytical Focus",
        text:
          "The analysis showed that the success of premium beauty products depends not merely on price itself, but on designing distribution trust and value signals that help consumers perceive the price as justified.",
      },
    ],
    gallery: [
      {
        title: "Cover Question",
        image: "/projects/sephora-r/cover.png",
      },
      {
        title: "Research Background",
        image: "/projects/sephora-r/background.png",
      },
      {
        title: "Questions & Objectives",
        image: "/projects/sephora-r/objectives.png",
      },
      {
        title: "Data Overview",
        image: "/projects/sephora-r/data-overview.png",
      },
      {
        title: "Conceptual Model",
        image: "/projects/sephora-r/conceptual-model.png",
      },
      {
        title: "Hypotheses",
        image: "/projects/sephora-r/hypotheses.png",
      },
      {
        title: "Analysis Design",
        image: "/projects/sephora-r/analysis-design.png",
      },
      {
        title: "Price Distribution",
        image: "/projects/sephora-r/price-distribution.png",
      },
      {
        title: "Price-Rating Trend",
        image: "/projects/sephora-r/price-rating-trend.png",
      },
    ],
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
    accent: "#ffdbed",
    image:
      "https://static.wixstatic.com/media/df8dea_b6fafbd4c98342908d236927c1147c52~mv2.png/v1/crop/x_0,y_88,w_1200,h_1576/fill/w_540,h_710,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2002_03_04.png",
    actions: [
      {
        label: "View Guidebook",
        href: "https://50e217fb-c32f-4fb0-a6a1-228397b343ae.filesusr.com/ugd/df8dea_7e881145adb148dc978708f53a532950.pdf",
      },
    ],
    sections: [
      {
        title: "Project Overview",
        text:
          "Created a career guidebook project focused on entry strategies into Sephora/LVMH in Europe by analyzing the beauty and luxury industry structure and Sephora's business model. I researched Sephora's European market position, job functions, recruitment process, and career progression pathways, while incorporating insights from interviews with industry professionals.",
        image:
          "https://static.wixstatic.com/media/df8dea_b6fafbd4c98342908d236927c1147c52~mv2.png/v1/crop/x_0,y_88,w_1200,h_1576/fill/w_540,h_710,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2002_03_04.png",
      },
      {
        title: "Why Our Guidebook?",
        text:
          "The guidebook was designed to offer uncommon retail insights, a gateway into Sephora/LVMH career paths, and honest, actionable advice that students cannot easily find through surface-level online search.",
        image: "/projects/sephora-guide/why-guidebook.png",
      },
      {
        title: "Guidebook Structure",
        text:
          "The contents move from Sephora business and industry context to career paths, recruitment preparation, and interviews with professionals across Sephora and the LVMH network.",
        image: "/projects/sephora-guide/table-of-contents.png",
      },
    ],
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
    id: "resume",
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
    id: "certificate",
    title: "Certificate",
    eyebrow: "Learning archive",
    text:
      "Certificates from UX/HCI, digital marketing, beauty brand management, design, content creation, and related programs that support both strategic and creative practice.",
    detailIntro:
      "A dedicated archive of completion certificates from the original portfolio, gathered here so the materials can be reviewed without leaving this site.",
    href: "#/document/certificate",
    action: "View Certificates",
    preview: "/documents/cert-uxim.png",
    highlights: ["UX / HCI", "Digital marketing", "Beauty brand management"],
    gallery: [
      "/documents/cert-uxim.png",
      "/documents/cert-ycc.png",
      "/documents/cert-ydec.png",
      "/documents/cert-buddy-2023.png",
      "/documents/cert-buddy-2024.png",
      "/documents/cert-aiffel.png",
      "/documents/cert-comento.png",
    ],
  },
  {
    id: "license",
    title: "License",
    eyebrow: "Verified capability",
    text:
      "Licenses and certifications that demonstrate practical capability across structured data, AI prompt workflows, accounting, digital design, and content production.",
    detailIntro:
      "A dedicated archive of licenses and verified capability documents from the original portfolio, kept inside this portfolio for a smoother review flow.",
    href: "#/document/license",
    action: "View Licenses",
    preview: "/documents/license-sqld.png",
    highlights: ["SQLD / AI-POT", "Accounting management", "Adobe Photoshop / After Effects"],
    gallery: [
      "/documents/license-sqld.png",
      "/documents/license-accounting.png",
      "/documents/license-aipot.png",
      "/documents/license-photoshop.png",
      "/documents/license-after-effects.png",
    ],
  },
];

export const interestsIntro =
  "On this page, you can explore a more personal and introspective side of who I am. I love traveling and taking photographs, and I also enjoy working on design projects as a hobby. You can find more details about my work on the pages below.";

export const interests: Interest[] = [
  {
    id: "traveling-photography",
    title: "Traveling & Photography",
    text:
      "I travel around the world to broaden my perspective and gain new insights and inspiration for my creative work.",
    cover:
      "https://static.wixstatic.com/media/df8dea_8352e2fe23334b8192d9813e5a899b8c~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_90,enc_avif,quality_auto/df8dea_8352e2fe23334b8192d9813e5a899b8c~mv2.jpg",
    gallery: [
      {
        title: "Urban Texture",
        type: "Photography",
        image: "/interests/travel/urban-texture.jpg",
        note: "Observation-led photography focused on place, light, and cultural texture.",
      },
      {
        title: "Memory Frame",
        type: "Photography",
        image: "/interests/travel/memory-frame.jpg",
        note: "Travel moments translated into visual references for brand mood and storytelling.",
      },
      {
        title: "Perspective Archive",
        type: "Travel Photo",
        image: "/interests/travel/perspective-archive.jpeg",
        note: "A personal image archive that keeps global inspiration close to strategy work.",
      },
      {
        title: "Travel Light Study",
        type: "Travel Photo",
        image: "/interests/travel/travel-light.jpg",
        note: "A moment from the travel archive, captured to keep color, light, and memory vivid.",
      },
      {
        title: "City Rhythm",
        type: "Photography",
        image: "/interests/travel/city-rhythm.jpg",
        note: "A visual note from places I visited while observing local details and pace.",
      },
      {
        title: "Travel Portrait",
        type: "Travel Photo",
        image: "/interests/travel/travel-portrait.jpg",
        note: "Personal travel photography from the archive shown on the original portfolio.",
      },
      {
        title: "Global Inspiration",
        type: "Travel Photo",
        image: "/interests/travel/global-inspiration.jpg",
        note: "Travel around Thailand, Japan, Switzerland, France, the United Kingdom, Germany, Vietnam, China, and more.",
      },
      {
        title: "Moment Archive",
        type: "Photography",
        image: "/interests/travel/moment-archive.jpeg",
        note: "The photos are taken while traveling and kept as personal references for creative work.",
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    text:
      "I enjoy turning ideas into tangible visual outcomes and continue to pursue design as a hobby.",
    cover:
      "/interests/design/design-object.png",
    gallery: [
      {
        title: "NOI Lab Poster",
        type: "Poster Design",
        image: "/interests/design/noi-lab-poster.png",
        note: "Promotional poster work for a cognitive training program.",
      },
      {
        title: "NOI Lab Card News",
        type: "Graphic Design",
        image: "/interests/design/noi-lab-card-news.png",
        note: "Card-news style design work balancing information clarity and brand tone.",
      },
      {
        title: "Love Art Poster",
        type: "Art Direction",
        image: "/interests/design/love-art-poster.png",
        note: "Editorial-style visual composition exploring emotional tone and typography.",
      },
      {
        title: "Brand Character",
        type: "Character Design",
        image: "/interests/design/bear-glasses.png",
        note: "Mascot-style illustration for approachable product and brand storytelling.",
      },
      {
        title: "Brand Character Variant",
        type: "Character Design",
        image: "/interests/design/bear-variant.png",
        note: "A softer mascot variation designed for approachable product communication.",
      },
      {
        title: "Visual Layout Study",
        type: "Editorial Design",
        image: "/interests/design/visual-layout.png",
        note: "A hobby design piece from the original portfolio archive.",
      },
      {
        title: "Design Object Study",
        type: "3D / Visual Study",
        image: "/interests/design/design-object.png",
        note: "A playful visual study balancing glossy form, object memory, and pop color.",
      },
    ],
  },
];
