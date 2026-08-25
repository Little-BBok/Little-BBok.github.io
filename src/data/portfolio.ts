export type ProjectCategory = "Brand & Growth" | "Product & UX" | "Data & Strategy";

export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  category: ProjectCategory;
  period?: string;
  tagline?: string;
  summary: string;
  role: string;
  outcome: string;
  accent: string;
  external?: string;
  image?: string;
  placeholderLabel?: string;
  metrics?: Array<{
    value: string;
    label: string;
    context: string;
    baseline: string;
    baselineRatio: number;
    resultRatio: number;
  }>;
  actions?: Array<{
    label: string;
    href: string;
  }>;
  sections?: Array<{
    title: string;
    text: string;
    image?: string;
    layout?:
      | "gallery"
      | "sequence"
      | "wide"
      | "workflow"
      | "feature-system"
      | "performance"
      | "impact";
    gallery?: Array<{
      title: string;
      image: string;
      note?: string;
    }>;
    previewGallery?: Array<{
      title: string;
      image: string;
      note?: string;
    }>;
    impactItems?: Array<{
      step: string;
      title: string;
      text: string;
      proof: string;
    }>;
    performanceGroups?: Array<{
      eyebrow: string;
      title: string;
      note: string;
      metrics: Array<{
        value: string;
        label: string;
        ratio: number;
      }>;
    }>;
    workflowItems?: Array<{
      step: string;
      title: string;
      text: string;
      output: string;
    }>;
    featureItems?: Array<{
      group: string;
      title: string;
      text: string;
    }>;
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
  projectId?: string;
  projectLabel?: string;
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
    projectId: "alus-healthcare",
    highlights: [
      "Led the end-to-end product planning and branding process for a VNS wellness device, designing a consistent brand experience from target definition, product color, and package composition to photoshoot direction, product detail page, homepage UX, and launch event.",
      "Developed and launched POWAPOWA, a wellness and beauty brand targeting women in their 20s and 30s, attracting inbound partnership proposals from Marriott Moxy Hotel and Qoo10 Japan.",
      "Led official e-commerce store IA, wireframes, and functional prototype development, then planned a custom-coded real-time influencer review section on the product page.",
      "Sourced manufacturing partners, compared quotes, negotiated pricing, and managed production and delivery for full-package and detailed product package manufacturing, reducing unit production costs by 24% through a new manufacturing partner.",
      "Revitalized a dormant social media channel, growing followers from 10 to 1,707.",
      "Produced short-form content inspired by the product's macaron design, achieving 21,000+ views while the Instagram channel recorded 334,000+ views during the measured period.",
      "Led 10 influencer collaborations, secured 48 UGC pieces from 11 supporters, and generated 852 comments and 732 likes on a launch quiz event.",
      "Integrated Channel Talk CRM to analyze customer behavior and improve the purchase journey.",
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
    projectId: "began",
    projectLabel: "View Service UX Case",
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
    projectId: "nft-camera",
    projectLabel: "View B2C Strategy Case",
    highlights: [
      "Strategized B2C market expansion for a B2B NFT business through a location-based camera app concept and UI/UX framework.",
      "Won 1st place in the final idea pitching, contributing to commercialization and launch by the partnering corporation.",
    ],
  },
];

const alusDetailPageSequence = Array.from({ length: 37 }, (_, index) => ({
  title: `Product detail page sequence ${String(index + 1).padStart(2, "0")}`,
  image: `/projects/alus/detail-page/detail-${String(index + 1).padStart(2, "0")}.webp`,
}));

export const projects: Project[] = [
  {
    id: "alus-healthcare",
    title: "ALUS Healthcare",
    eyebrow: "End-to-end brand management & growth execution",
    category: "Brand & Growth",
    summary:
      "As a Brand Manager at ALUS Healthcare, I designed and executed the full brand experience across wellness device product planning, beauty and wellness branding, e-commerce, content, creator marketing, and CRM.",
    role:
      "Brand Manager leading product planning, brand strategy, product color and package planning, product detail page planning, e-commerce UX, photoshoot planning and direction, social media content, influencer marketing, supporter program, CRM optimization, and manufacturing and vendor coordination.",
    outcome:
      "Grew Instagram followers from 10 to 1,707, led 10 influencer collaborations, secured 48 UGC pieces from 11 supporters, generated 852 comments and 732 likes on a launch quiz event, reduced manufacturing unit cost by 24%, reached 334,000 views during the measured 30-day period, and attracted inbound partnership proposals including Marriott Moxy Hotel and Qoo10 Japan.",
    accent: "#8d93cb",
    image: "/projects/alus/full-package-launch-visual.jpg",
    metrics: [
      {
        value: "170×",
        label: "Audience Growth",
        context: "Instagram followers",
        baseline: "10 → 1,707",
        baselineRatio: 2,
        resultRatio: 100,
      },
      {
        value: "852",
        label: "Event Comments",
        context: "Launch quiz event",
        baseline: "732 likes · 20 reposts",
        baselineRatio: 0,
        resultRatio: 100,
      },
      {
        value: "−24%",
        label: "Cost Efficiency",
        context: "Manufacturing unit cost",
        baseline: "100 → 76 cost index",
        baselineRatio: 100,
        resultRatio: 76,
      },
      {
        value: "334K",
        label: "Channel Views",
        context: "30-day professional dashboard",
        baseline: "Aug 8 – Sep 6",
        baselineRatio: 0,
        resultRatio: 100,
      },
    ],
    sections: [
      {
        title: "Project Overview",
        text:
          "This case study frames my ALUS Healthcare work as full-cycle brand management rather than simple marketing operation. I managed customer touchpoints from product planning and brand experience to content, e-commerce, and CRM so the brand could feel consistent across discovery, purchase, and post-purchase interaction.",
      },
      {
        title: "Product & Brand Launch",
        text:
          "I led VNS wellness device planning across target definition, product color, package composition, manufacturing partner sourcing, and launch planning, while developing POWAPOWA as a beauty and wellness brand for women in their 20s and 30s.",
        gallery: [
          {
            title: "Full Package Experience",
            image: "/projects/alus/launch/open-package-system.jpg",
            note:
              "An open-box view of the complete experience, connecting onboarding guidance, the device, patches, perfume, pouch, and brand illustrations in one package system.",
          },
          {
            title: "Package Component System",
            image: "/projects/alus/launch/package-components.jpg",
            note:
              "A closer view of the component hierarchy and the black-and-pink visual language carried across every element of the launch package.",
          },
          {
            title: "Daytone Kit Lineup",
            image: "/projects/alus/launch/daytone-kit-lineup.jpg",
            note:
              "The finished device, pouch, patch box, perfume package, and master kit presented as a coherent retail-ready lineup.",
          },
        ],
      },
      {
        title: "Inbound Partnership Proposals",
        text:
          "The brand's early market presence generated unsolicited partnership interest from Moxy Seoul Insadong and Qoo10 Japan. Moxy proposed collaboration options including a hotel pop-up and guest-room package, while Qoo10 Japan sent a formal platform-entry proposal covering onboarding, promotion, and commerce operations. These materials document inbound proposals rather than completed partnerships.",
        gallery: [
          {
            title: "Qoo10 Japan Entry Proposal",
            image: "/projects/alus/partnerships/qoo10-entry-proposal.webp",
            note:
              "Redacted cover of the formal Qoo10 Japan platform-entry proposal shared with POWAPOWA.",
          },
          {
            title: "Moxy Seoul Collaboration Proposal",
            image: "/projects/alus/partnerships/moxy-seoul-collaboration-proposal.webp",
            note:
              "Redacted evidence of an inbound proposal from Moxy Seoul Insadong outlining pop-up and guest-room package collaboration options.",
          },
          {
            title: "Moxy Seoul Inbound Message",
            image: "/projects/alus/instagram-evidence/moxy-inbound-message-cropped.jpg",
            note:
              "Original business-account message proposing a POWAPOWA pop-up and guest-room package collaboration at Moxy Seoul Insadong.",
          },
        ],
      },
      {
        title: "Official Store & Purchase UX",
        text:
          "I planned the official store from information architecture, wireframes, functional prototypes, and purchase journey through launch. I reorganized the brand story, products, welcome deals, reviews, events, and customer support into a clearer hierarchy, then validated category logic and campaign entry points. I also planned a custom-coded real-time influencer review experience so blog and Instagram proof could appear inside the store at the point of purchase consideration.",
        layout: "wide",
        gallery: [
          {
            title: "Information Architecture & Category Planning",
            image: "/projects/alus/store/information-architecture-board.png",
            note:
              "Working board documenting the storefront hierarchy, category alternatives, welcome-deal entry, review architecture, and customer-support flow before implementation.",
          },
          {
            title: "Live Homepage & Campaign Entry",
            image: "/projects/alus/store/live-homepage-blurred.png",
            note:
              "Launched homepage connecting the brand identity, campaign offer, product discovery, review content, and support touchpoints. Customer faces and time-sensitive promotional figures are softly blurred.",
          },
          {
            title: "Product Page Purchase UX",
            image: "/projects/alus/store/product-page-blurred.png",
            note:
              "Live product page combining package communication, scarcity messaging, review proof, purchase information, and delivery guidance. Price and discount figures are blurred.",
          },
          {
            title: "On-site Product Video",
            image: "/projects/alus/store/product-video-modal-blurred.png",
            note:
              "Product-use video embedded at the decision point so visitors could understand the device without leaving the purchase journey. Price and points figures are blurred.",
          },
          {
            title: "Blog Review Experience",
            image: "/projects/alus/store/blog-review-gallery.jpeg",
            note:
              "Custom storefront module aggregating blog reviews into a visual gallery that connected real usage contexts with product discovery.",
          },
          {
            title: "Instagram Review Experience",
            image: "/projects/alus/store/instagram-review-gallery.jpeg",
            note:
              "Instagram review gallery surfacing creator demonstrations, package unboxings, and routine content as social proof inside the official store.",
          },
        ],
      },
      {
        title: "Product Detail Page Planning",
        text:
          "I owned the detail page from narrative planning to final delivery: defining the content flow and writing the copy, aligning the visual direction with the designer, reviewing iterations, and developing each section through feedback. The conversion narrative moves from official-purchase assurance and the core hook to routine pain points, product introduction and use cases, VNS principles, research evidence, package composition, usage guidance, Q&A, safety information, and specifications.",
        layout: "sequence",
        gallery: alusDetailPageSequence,
        previewGallery: [
          alusDetailPageSequence[5],
          alusDetailPageSequence[23],
          alusDetailPageSequence[29],
        ],
      },
      {
        title: "Social & Creator Marketing",
        text:
          "I designed POWAS, POWAPOWA's content marketer crew, as a structured community program rather than a one-off supporter campaign. I defined the channel roles and weekly missions, created the recruitment identity and poster, published and managed the public listing, selected participants, and led onboarding and the offline kickoff. The listing recorded 1,812 views and 68 saves, and the crew became an operating layer for mission-based social, Reels, and blog content that fed the brand's creator-to-commerce growth loop.",
        gallery: [
          {
            title: "POWAS Crew Recruitment Poster",
            image: "/projects/alus/powas-recruitment-poster.jpg",
            note:
              "Recruitment creative defining a 10-person crew across content, Reels, and blog teams, with mission structure and program benefits.",
          },
          {
            title: "Published Linkareer Listing",
            image: "/projects/alus/powas-linkareer-listing.jpg",
            note:
              "Public recruitment listing for the first POWAS cohort, recording 1,812 views and 68 saves.",
          },
          {
            title: "POWAS Offline Kickoff Setup",
            image: "/projects/alus/community/powas-kickoff-setup.webp",
            note:
              "On-site setup prepared for the first POWAS offline kickoff, including participant welcome kits and mission materials.",
          },
        ],
      },
      {
        title: "Photoshoot Project",
        text:
          "Working within a limited production budget, I built the shoot from the ground up instead of hiring a full-service production vendor: sourcing the photographer and model, defining the concept and shot list, directing the set, and completing post-production myself. I delivered the shoot at approximately one-third of a typical vendor quote.",
        gallery: [
          {
            title: "Editorial Use-case Portrait",
            image: "/projects/alus/model-product-editorial.jpg",
            note:
              "Model-led use-case photography balancing the wearable product, skin, and soft reflective light.",
          },
          {
            title: "Macaron Color-world Still",
            image: "/projects/alus/macaron-product-still.jpg",
            note:
              "Playful product still translating the soft pink palette into a tactile confectionery scene.",
          },
          {
            title: "Sculptural Product Stack",
            image: "/projects/alus/sculptural-product-stack.jpg",
            note:
              "Vertical still-life composition using repetition and balance to make the compact device feel iconic.",
          },
        ],
      },
      {
        title: "Content Planning & Production",
        text:
          "I planned and produced channel-ready content across Instagram, paid media, the official store, participation campaigns, and creator UGC. I translated the photoshoot visual system into repeatable content formats, then connected editorial consistency with campaign response and commerce entry points.",
        gallery: [
          {
            title: "Review-led Meta Ad",
            image: "/projects/alus/meta-review-ad.jpg",
            note:
              "Paid social creative turning customer review proof into a visual advertising narrative.",
          },
          {
            title: "Official Store Product Thumbnail",
            image: "/projects/alus/official-store-bundle-thumbnail.jpg",
            note:
              "Official-store thumbnail visualizing the perfume-and-patch bundle and package system.",
          },
          {
            title: "Daytone Cherry Visual",
            image: "/projects/alus/daytone-cherry-instagram.jpg",
            note:
              "Editorial Instagram visual connecting the wellness device with a playful cherry concept.",
          },
          {
            title: "Instagram Content System",
            image: "/projects/alus/content/instagram-feed-system-clean.png",
            note:
              "A coordinated feed system combining product education, routine storytelling, campaigns, and creator-led content in one recognizable visual language.",
          },
          {
            title: "Paid Launch Preview Creative",
            image: "/projects/alus/instagram-evidence/meta-launch-preview-cropped.png",
            note:
              "A paid-social launch preview translating the open-box package experience into a clear product-and-brand narrative.",
          },
          {
            title: "Paid Package Explainer Creative",
            image: "/projects/alus/instagram-evidence/meta-package-explainer-cropped.png",
            note:
              "A Meta campaign visual reorganizing the full kit into an immediately scannable package hierarchy.",
          },
          {
            title: "Creator Unboxing UGC",
            image: "/projects/alus/content/creator-unboxing-ugc-clean.png",
            note:
              "Creator-produced unboxing content showing how the campaign system extended beyond owned channels into authentic product experiences.",
          },
        ],
      },
      {
        title: "Instagram Brand System & Audience Response",
        text:
          "I rebuilt a dormant Instagram account as a coherent brand channel rather than a collection of isolated posts. A repeatable visual system connected product education, daily-routine storytelling, launch content, paid campaigns, and follower events; the same system grew the account from 10 to 1,707 followers and created a repeatable path from acquisition to active participation.",
        layout: "gallery",
        gallery: [
          {
            title: "Instagram Visual System",
            image: "/projects/alus/instagram-evidence/instagram-visual-system-cropped.jpg",
            note:
              "The live feed shows a recognizable system spanning product demonstrations, routine education, campaign content, and launch storytelling.",
          },
          {
            title: "Verified 1,707 Follower Milestone",
            image: "/projects/alus/instagram-evidence/follower-milestone-1707-cropped.jpg",
            note:
              "Original profile capture documenting 1,707 followers after rebuilding the channel from an initial audience of 10.",
          },
          {
            title: "Follower Event Creative",
            image: "/projects/alus/instagram-evidence/follower-event-cropped.png",
            note:
              "A light-blue follower event creative extending the channel system beyond launch communication into audience acquisition and participation.",
          },
        ],
      },
      {
        title: "Growth Performance & Evidence",
        text:
          "I connected content production to a measurable growth system, using native Instagram evidence to track awareness, response, follower acquisition, and participation. The figures below preserve the original reporting context: a 30-day professional dashboard and the captured launch quiz event.",
        layout: "performance",
        performanceGroups: [
          {
            eyebrow: "01 · Organic channel",
            title: "Awareness became audience growth",
            note: "Professional dashboard · Aug 8–Sep 6",
            metrics: [
              { value: "334K", label: "Views", ratio: 100 },
              { value: "3.1K", label: "Interactions", ratio: 68 },
              { value: "+686", label: "New followers", ratio: 52 },
              { value: "74", label: "Content published", ratio: 34 },
            ],
          },
          {
            eyebrow: "02 · Participation",
            title: "Campaign reach became active response",
            note: "Quiz event · post insights",
            metrics: [
              { value: "852", label: "Comments", ratio: 100 },
              { value: "732", label: "Likes", ratio: 86 },
              { value: "20", label: "Reposts", ratio: 34 },
            ],
          },
        ],
        gallery: [
          {
            title: "Professional Dashboard Evidence",
            image: "/projects/alus/performance/professional-dashboard-clean.png",
            note:
              "Native channel evidence recording 334K views, 3.1K interactions, 686 new followers, and 74 published pieces during the measured period.",
          },
          {
            title: "Quiz-event Participation",
            image: "/projects/alus/instagram-evidence/quiz-event-response-cropped.jpg",
            note:
              "The captured launch quiz recorded 732 likes, 852 comments, and 20 reposts.",
          },
        ],
      },
      {
        title: "Impact",
        text:
          "This project is the clearest evidence that my role was not confined to campaign execution. I connected market definition, brand system, product and package development, production, commerce UX, creator acquisition, CRM feedback, and cost optimization as one operating loop. Its significance lies in owning both the customer-facing experience and the behind-the-scenes system that made it repeatable: building a launch-ready brand, turning early response into measurable growth and partnership interest, and carrying every learning back into the product and operations.",
        layout: "impact",
        impactItems: [
          {
            step: "01 · Define",
            title: "Insight & Positioning",
            text:
              "Translated the VNS opportunity and the routines of women in their 20s and 30s into a clear product target, brand promise, and launch direction.",
            proof: "Target definition + brand strategy",
          },
          {
            step: "02 · Build",
            title: "Product & Package",
            text:
              "Connected product color, device experience, package composition, fragrance, patches, onboarding, and manufacturing partners into one retail-ready system.",
            proof: "Unit cost −24%",
          },
          {
            step: "03 · Launch",
            title: "Commerce & Content",
            text:
              "Planned the detail page, official-store IA, purchase journey, photoshoot, launch assets, and review experience as one conversion narrative.",
            proof: "852 comments · 732 likes",
          },
          {
            step: "04 · Grow",
            title: "Creator Growth Engine",
            text:
              "Built a repeatable acquisition loop through social content, influencer collaboration, POWAS missions, and creator-led proof instead of isolated campaigns.",
            proof: "10 → 1,707 followers · 48 UGC",
          },
          {
            step: "05 · Learn",
            title: "CRM & Feedback Loop",
            text:
              "Connected customer behavior, review content, Channel Talk signals, and purchase friction so market response could improve the next experience decision.",
            proof: "Discovery → purchase → retention",
          },
          {
            step: "06 · Scale",
            title: "Business & Partnerships",
            text:
              "Turned a coherent early-market presence into measurable reach, operational efficiency, and inbound collaboration interest from hospitality and Japanese commerce partners.",
            proof: "334K views · 2 inbound proposals",
          },
        ],
      },
    ],
    details: [
      "Led product planning, brand strategy, package planning, photoshoot direction, product detail page planning, homepage UX, and launch event execution.",
      "Developed and launched POWAPOWA for women in their 20s and 30s while attracting inbound partnership proposals from Marriott Moxy Hotel and Qoo10 Japan.",
      "Built a growth loop across social content, influencer collaboration, supporter-generated UGC, official e-commerce traffic, and Channel Talk CRM insights.",
    ],
    capabilities: [
      "Brand Strategy",
      "Product Planning",
      "Growth Marketing",
      "Content Strategy",
      "E-commerce UX",
      "Creator Marketing",
      "CRM",
      "Photoshoot Direction",
    ],
  },
  {
    id: "fugudio",
    title: "FUGUDIO",
    eyebrow: "Independent 0→1 service built for market launch",
    category: "Product & UX",
    tagline: "From a recurring operational problem to a tested working product",
    summary:
      "I started FUGUDIO after seeing content context break across notes, calendars, spreadsheets, and platform dashboards. I owned the full 0→1 process—from problem definition and product strategy to brand, UI/UX, usability testing, and iteration.",
    role:
      "Sole product owner and designer across the full 0→1 process: problem framing, user and workflow research, product strategy, requirements, information architecture, interaction flows, UI design, brand naming and identity, prototyping, usability testing, and iterative refinement.",
    outcome:
      "Turned a self-defined operational problem into a deployed, testable product. The result demonstrates my ability to connect strategic judgment, system design, visual craft, and user evidence throughout an end-to-end product cycle—not just design isolated screens.",
    accent: "#8d93cb",
    external: "https://fugudio.vercel.app/calendar",
    image: "/projects/fugudio/product-calendar-latest.png",
    actions: [
      { label: "FUGUDIO Website", href: "https://fugudio.vercel.app/calendar" },
      { label: "Product Introduction", href: "https://fugudio.vercel.app/welcome" },
    ],
    sections: [
      {
        title: "Why I Built FUGUDIO",
        text:
          "While planning and operating content across several social channels, I kept seeing the same friction: ideas lived in notes, schedules in calendars, production status in spreadsheets or chat, and results inside separate platform dashboards. The real problem was not a lack of tools. It was the loss of context between making, publishing, learning, and deciding what to do next. I turned that recurring operational frustration into the starting hypothesis for FUGUDIO.",
      },
      {
        title: "The Problem Behind the Product",
        text:
          "I translated the observed workflow into four connected problem areas. These became design requirements and a basis for deciding what the product should—and should not—solve.",
        layout: "impact",
        impactItems: [
          {
            step: "01 · Fragmented",
            title: "Context Scattered Across Tools",
            text: "The idea, latest file, owner, deadline, publishing state, and result were stored in different places.",
            proof: "Repeated context switching",
          },
          {
            step: "02 · Invisible",
            title: "Production State Was Hard to Read",
            text: "Delays and bottlenecks depended on someone remembering and reconstructing the whole picture.",
            proof: "Operational uncertainty",
          },
          {
            step: "03 · Disposable",
            title: "Content Ended After Publishing",
            text: "The relationship between an original asset and its channel variants disappeared after each post went live.",
            proof: "Lost reuse opportunities",
          },
          {
            step: "04 · Disconnected",
            title: "Performance Did Not Guide Action",
            text: "Platform metrics showed what happened, but did not connect the evidence to a concrete next content decision.",
            proof: "Insight without follow-up",
          },
        ],
      },
      {
        title: "My 0→1 Product Process",
        text:
          "I owned the project as one continuous decision-making process. Each phase produced an artifact or testable assumption that informed the next, so strategy, UX, visual design, and validation stayed connected.",
        layout: "workflow",
        workflowItems: [
          {
            step: "01",
            title: "Discover",
            text: "Mapped recurring content-operations friction and the complete journey from idea to reuse.",
            output: "Problem framing",
          },
          {
            step: "02",
            title: "Define",
            text: "Set target users, core jobs, product hypothesis, requirements, priorities, and MVP boundaries.",
            output: "Product strategy",
          },
          {
            step: "03",
            title: "Structure",
            text: "Designed the information architecture, content model, states, permissions, and end-to-end UX flows.",
            output: "IA + UX flow",
          },
          {
            step: "04",
            title: "Design & Build",
            text: "Created the naming, identity, Hugu assistant, design system, interaction details, and working interface.",
            output: "UI + product",
          },
          {
            step: "05",
            title: "Test & Iterate",
            text: "Ran scenario-based usability tests, observed friction, and refined hierarchy, copy, states, and task flows.",
            output: "Validated iterations",
          },
        ],
      },
      {
        title: "How My Decisions Became a Product System",
        text:
          "I converted the problem framing into one shared information model and ten connected capabilities. The dashboard, calendar, pipeline, library, distribution, analytics, settings, studios, and Hugu assistant are not a feature checklist; each is a response to a specific breakdown in the original workflow.",
        layout: "feature-system",
        featureItems: [
          {
            group: "Visibility",
            title: "Operations Dashboard",
            text: "Surfaces urgent deadlines, publishing status, today's work, and channel balance in one view.",
          },
          {
            group: "Plan",
            title: "Multi-channel Calendar",
            text: "Color-codes Instagram, YouTube, TikTok, Naver Blog, and Clip schedules with independent reservation and publishing states.",
          },
          {
            group: "Produce",
            title: "Kanban Production Pipeline",
            text: "Moves content through idea, planning, filming, editing, review, scheduled, and published stages.",
          },
          {
            group: "Asset",
            title: "Content Library",
            text: "Stores ideas, scripts, and videos as master assets with every derived output and publishing record attached.",
          },
          {
            group: "Distribute",
            title: "Channel Variants",
            text: "Transforms one source into Reels, Shorts, Naver Clip, Blog, and other channel-specific formats.",
          },
          {
            group: "Learn",
            title: "Performance Analytics",
            text: "Compares views, interactions, and engagement across channels, content, topics, and formats.",
          },
          {
            group: "Extend",
            title: "Follow-up Suggestions",
            text: "Uses content state and undistributed channels to turn one-off posts into concrete reuse opportunities for Naver Clip, YouTube Shorts, and other platforms.",
          },
          {
            group: "Configure",
            title: "Custom Operating Presets",
            text: "Adapts channel, format, category, and target-mix presets to each user's operating style.",
          },
          {
            group: "Collaborate",
            title: "Personal & Team Studios",
            text: "Supports independent creator workspaces and shared studios with member roles and permissions.",
          },
          {
            group: "Assist",
            title: "Hugu Operations Co-pilot",
            text: "Delivers context-aware alerts for delays, next tasks, and reuse opportunities, then links users directly to the relevant work or recommended channel adaptation.",
          },
        ],
      },
      {
        title: "Live Product Interface",
        text:
          "These screens are captured from the latest authenticated production deployment. Together they show scheduling, production control, asset management, operational visibility, and workspace configuration inside one connected content workflow.",
        layout: "gallery",
        gallery: [
          {
            title: "Multi-channel Publishing Calendar",
            image: "/projects/fugudio/product-calendar-latest.png",
            note:
              "Maps platform, format, production state, reservation state, and publishing state onto color-coded calendar blocks so one topic can move on different channel schedules.",
          },
          {
            title: "Operations Dashboard",
            image: "/projects/fugudio/product-dashboard-latest.png",
            note:
              "Prioritizes overdue work, today's tasks, upcoming publishing, content-pillar balance, and channel distribution while Hugu surfaces the most urgent next action.",
          },
          {
            title: "Kanban Production Pipeline",
            image: "/projects/fugudio/product-pipeline-latest.png",
            note:
              "Makes production bottlenecks visible across idea, planning, filming, editing, review, scheduling, and completion, with stage changes controlled directly from each card.",
          },
          {
            title: "Master Content Library",
            image: "/projects/fugudio/product-library-latest.png",
            note:
              "Provides a searchable master-asset view across pillars, platforms, production states, distribution blocks, publishing dates, and accumulated performance.",
          },
          {
            title: "Workspace, Presets & Permissions",
            image: "/projects/fugudio/product-settings.jpg",
            note:
              "Brings plan permissions, SNS-format presets, workspace settings, member roles, and target content-pillar ratios into one operating configuration surface.",
          },
        ],
      },
      {
        title: "Context-aware Guidance & Reuse",
        text:
          "Hugu reads the user's current deadlines, production states, and channel distribution context to surface personalized alerts and next tasks. It also finds content that has not yet been distributed to other platforms, so a one-off post can become a concrete channel-specific reuse opportunity.",
        layout: "gallery",
        gallery: [
          {
            title: "Hugu Agent Panel",
            image: "/projects/fugudio/product-agent-panel.png",
            note:
              "Brings today's work, personalized alerts, reuse opportunities, and content creation into one contextual action panel.",
          },
          {
            title: "Personalized Reuse Opportunity Alert",
            image: "/projects/fugudio/product-reuse-alert.png",
            note:
              "Identifies a published asset that can be adapted for another channel and takes the user directly to the recommended reuse action.",
          },
          {
            title: "Channel-specific Repurpose Suggestions",
            image: "/projects/fugudio/product-repurpose-suggestions.png",
            note:
              "Turns the alert into executable options by recommending Naver Clip, YouTube Shorts, and TikTok adaptations from the same published Reel.",
          },
          {
            title: "Reuse States in the Content Library",
            image: "/projects/fugudio/product-reuse-library-states.png",
            note:
              "Shows reuse-ready, reviewed, and newly created derivative content in the master library so the recommendation becomes a traceable operating workflow.",
          },
        ],
      },
      {
        title: "UX Decisions I Made",
        text:
          "I used four principles to keep a complex operational product understandable: make state immediately legible, preserve the relationship between original and distributed content, let each channel move independently, and place analysis close to the next decision.",
        layout: "impact",
        impactItems: [
          {
            step: "01 · See",
            title: "Visible Operational State",
            text: "Deadlines, blockers, owners, publishing states, and channel balance stay visible without rebuilding the picture across tools.",
            proof: "Dashboard + calendar + pipeline",
          },
          {
            step: "02 · Connect",
            title: "Master-to-Variant Model",
            text: "Original ideas, scripts, and videos remain connected to every channel adaptation and publishing history.",
            proof: "One asset → many outputs",
          },
          {
            step: "03 · Control",
            title: "Channel Independence",
            text: "Each platform output keeps its own format, schedule, reservation state, publishing state, and performance record.",
            proof: "Shared topic, independent delivery",
          },
          {
            step: "04 · Learn",
            title: "Data into Next Action",
            text: "Performance is not an endpoint; strong topics, formats, and unused channels become actionable reuse suggestions.",
            proof: "Measure → recommend → extend",
          },
        ],
      },
      {
        title: "UI Kit & Design System",
        text:
          "FUGUDIO balances the professionalism of a content operations tool with the warmth of its brand. I built a reusable system around primary navy, dusty pink, iOS-inspired translucent surfaces, disciplined radii, legible system typography, Lucide icons, and domain-specific components—keeping information priority clear across desktop and mobile.",
      },
    ],
    details: [
      "Framed the recurring multi-channel operations problem, target users, product hypothesis, scope, and priorities.",
      "Designed the shared content model, information architecture, permissions, states, and end-to-end task flows.",
      "Built the brand and UI system, tested the working interface, and refined core flows with usability-test evidence.",
    ],
    capabilities: [
      "End-to-End Product Ownership",
      "Product Planning",
      "User Research",
      "Information Architecture",
      "UX Design",
      "UI Design",
      "Prototyping",
      "Usability Testing",
      "Brand Identity",
    ],
  },
  {
    id: "began",
    title: "Began Project",
    eyebrow: "Dietary-accessible product & content operations",
    category: "Product & UX",
    summary:
      "A location-based restaurant discovery service designed to reduce dining uncertainty for people with dietary restrictions—and carried from product planning into a structured Instagram launch and content operation.",
    role:
      "As Lead Product Planner and Content Operations Lead, I owned ideation, IDI, IA, user flows, business model, and end-to-end UI/UX, then built the carousel template system, content calendar, publishing schedule, feed direction, and performance review process.",
    outcome:
      "Won 1st place at the UXIM x YCC Final Project Showcase and extended the product into a measurable launch operation: within the first 10 days of Instagram operations, the channel generated 19,220 views, reached 7,321 accounts, recorded 986 interactions, and gained 33 new followers.",
    accent: "#8d93cb",
    external: "https://began-map.vercel.app/ko",
    image:
      "https://static.wixstatic.com/media/df8dea_b4166153dda44015841c8d757c843d28~mv2.png/v1/crop/x_26,y_1,w_3291,h_1803/fill/w_1906,h_1044,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-06-07%2002_38_29.png",
    actions: [
      { label: "Began Website", href: "https://began-map.vercel.app/ko" },
    ],
    metrics: [
      {
        value: "19,220",
        label: "Instagram Views",
        context: "First 10 operating days · Aug 14–Aug 23",
        baseline: "Account-level measured result",
        baselineRatio: 0,
        resultRatio: 100,
      },
      {
        value: "7,321",
        label: "Accounts Reached",
        context: "Unique accounts reached within the first 10 operating days",
        baseline: "Verified reach insight",
        baselineRatio: 0,
        resultRatio: 76,
      },
      {
        value: "986",
        label: "Content Interactions",
        context: "Posts, Reels, and Stories combined",
        baseline: "Verified interaction insight",
        baselineRatio: 0,
        resultRatio: 58,
      },
      {
        value: "+33",
        label: "New Followers",
        context: "Net follower growth within the first 10 operating days",
        baseline: "Verified professional dashboard",
        baselineRatio: 0,
        resultRatio: 42,
      },
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
      {
        title: "Content Operations I Led",
        text:
          "I treated the launch channel as an operating system rather than a series of isolated posts. I defined the content pillars, designed reusable carousel templates, built and maintained the content calendar, managed publishing, and reviewed account-level insights to decide the next production priorities.",
        layout: "workflow",
        workflowItems: [
          {
            step: "01",
            title: "Define Content Pillars",
            text:
              "Translated product value, dietary-accessibility education, restaurant discovery, and participation campaigns into repeatable editorial themes.",
            output: "Message architecture",
          },
          {
            step: "02",
            title: "Build the Template System",
            text:
              "Created the carousel grid, cover hierarchy, product demonstration frames, typography rules, and CTA endings for consistent production.",
            output: "Reusable carousel templates",
          },
          {
            step: "03",
            title: "Run the Content Calendar",
            text:
              "Planned topics and publishing order, coordinated production deadlines, and managed the feed so campaigns and evergreen product education stayed balanced.",
            output: "Calendar · schedule · publishing",
          },
          {
            step: "04",
            title: "Review and Iterate",
            text:
              "Compared reach, audience mix, interactions, and format contribution, then used the evidence to refine the next content cycle.",
            output: "Insight-led iteration",
          },
        ],
      },
      {
        title: "Instagram Feed & Carousel Template System",
        text:
          "The visual system connects a recognizable feed with a repeatable educational carousel. I designed the templates myself so service explanation, feature guidance, and calls to action could be produced consistently without rebuilding the layout for every post.",
        layout: "gallery",
        gallery: [
          {
            title: "Live Instagram Profile",
            image: "/projects/began/instagram/profile-overview.jpg",
            note: "The operated profile, feed direction, follower base, and recent account activity in one view.",
          },
          {
            title: "Feed Visual System",
            image: "/projects/began/instagram/feed-grid.jpg",
            note: "Product education, restaurant discovery, illustrations, and participation campaigns arranged as one visual system.",
          },
          {
            title: "Carousel Cover",
            image: "/projects/began/instagram/service-carousel-3.jpg",
            note: "A direct problem-led cover built around the question of why users need Began beyond a conventional map.",
          },
          {
            title: "Problem Framing",
            image: "/projects/began/instagram/service-carousel-4.jpg",
            note: "A familiar dining scenario turns the product need into an immediately understandable user problem.",
          },
          {
            title: "Service at a Glance",
            image: "/projects/began/instagram/service-carousel-5.jpg",
            note: "The map, filtering, and menu-detail experience are summarized within the same reusable editorial grid.",
          },
          {
            title: "Dietary Filter Guidance",
            image: "/projects/began/instagram/service-carousel-7.jpg",
            note: "Feature explanation stays concise through a fixed hierarchy of headline, UI proof, and supporting copy.",
          },
          {
            title: "Menu-level Verification",
            image: "/projects/began/instagram/service-carousel-8.jpg",
            note: "The final feature frame connects restaurant discovery to the menu-level evidence that reduces dining uncertainty.",
          },
          {
            title: "Consistent CTA Ending",
            image: "/projects/began/instagram/service-carousel-9.jpg",
            note: "A repeatable closing frame returns every educational story to the same product action and brand signature.",
          },
        ],
      },
      {
        title: "Measured Instagram Performance",
        text:
          "Instagram operations began on Aug 14, so the results were achieved within the first 10 days of Instagram operations, even though the professional dashboard displays a Jul 25–Aug 23 reporting window. In that launch sprint, 19,220 views reached 7,321 accounts, while 88.5% of views came from non-followers and posts generated 85.0% of all interactions.",
        layout: "performance",
        performanceGroups: [
          {
            eyebrow: "Verified Volume",
            title: "First 10-Day Launch Results",
            note: "The channel started on Aug 14; these cumulative results were reached by Aug 23. Bars are normalized within this group for readability.",
            metrics: [
              { value: "19,220", label: "Views", ratio: 100 },
              { value: "7,321", label: "Accounts reached", ratio: 38.1 },
              { value: "986", label: "Interactions", ratio: 5.1 },
              { value: "+33", label: "New followers", ratio: 3 },
            ],
          },
          {
            eyebrow: "Discovery",
            title: "Audience Beyond Followers",
            note: "The view audience mix shows that the channel reached well beyond its existing follower base.",
            metrics: [
              { value: "88.5%", label: "Non-follower views", ratio: 88.5 },
              { value: "11.5%", label: "Follower views", ratio: 11.5 },
            ],
          },
          {
            eyebrow: "Format Contribution",
            title: "Where Interactions Happened",
            note: "Direct interaction-share values from the same measured period, used to guide the next production mix.",
            metrics: [
              { value: "85.0%", label: "Posts", ratio: 85 },
              { value: "11.3%", label: "Reels", ratio: 11.3 },
              { value: "3.7%", label: "Stories", ratio: 3.7 },
            ],
          },
        ],
        gallery: [
          {
            title: "Professional Dashboard Evidence",
            image: "/projects/began/instagram/performance-overview.jpg",
            note: "The dashboard window is Jul 25–Aug 23, while actual channel operations began Aug 14—placing 19K views, 986 interactions, and 33 new followers inside the first 10 operating days.",
          },
          {
            title: "View & Reach Evidence",
            image: "/projects/began/instagram/view-insights.jpg",
            note: "19,220 views, 7,321 accounts reached, and an 88.5% non-follower audience share.",
          },
          {
            title: "Interaction Evidence",
            image: "/projects/began/instagram/interaction-insights.jpg",
            note: "986 interactions with direct audience and format contribution breakdowns.",
          },
        ],
      },
    ],
    details: [
      "Designed tailored onboarding with dietary presets and custom ingredient restrictions to reduce first-use friction.",
      "Built menu-level verification using vegan-type breakdowns and color-coded eat-or-not indicators.",
      "Added a user contribution loop for reporting vegan spots, adding menu items, and leaving ratings.",
      "Created the Instagram carousel template system and managed the content calendar, production schedule, publishing order, and feed direction.",
      "Reviewed account, reach, audience, and interaction insights and translated them into the next content priorities.",
    ],
    capabilities: [
      "Product Planning",
      "User Interviews",
      "IA",
      "UI/UX",
      "Business Model",
      "Content Strategy",
      "Editorial Calendar",
      "Template System",
      "Performance Analysis",
    ],
  },
  {
    id: "atember",
    title: "Attember",
    eyebrow: "AI agent product planning & UI/UX",
    category: "Product & UX",
    period: "OpenAI Hackathon · 2026",
    tagline: "From scattered context to an executable AI work pipeline.",
    summary:
      "Attember began with a simple question: why do people lose important work when their task list gets crowded? I designed a macOS AI work hub that turns scattered context into prioritized tasks, verified research, and approved execution.",
    role:
      "As PM and UI/UX Designer, I led problem definition, interview and community research synthesis, product strategy, information architecture, end-to-end agent workflow, desktop UI/UX design, prototype direction, and demo storytelling.",
    outcome:
      "Built and demonstrated a connected product experience that turns conversation and profile context into structured tasks, personalized research, priority placement, and Codex SDK-powered execution rather than stopping at recommendations.",
    accent: "#2478ff",
    image: "/projects/atember/pitch-cover.png",
    actions: [
      { label: "Watch Product Demo", href: "https://youtu.be/eoN4IL5sM10" },
      { label: "View GitHub Repository", href: "https://github.com/Dindb-dong/Attember_Release" },
    ],
    sections: [
      {
        title: "Why This Product",
        text:
          "Interview and community research revealed four recurring barriers: priority confusion, putting team obligations ahead of personal work, perfectionism around important tasks, and burnout-driven avoidance. The opportunity was not another to-do list, but a system that reduces the judgment and coordination cost before execution.",
        gallery: [
          {
            title: "User Problem Patterns",
            image: "/projects/atember/pitch-problem.png",
            note: "Four behavioral patterns synthesized from interview and community research.",
          },
          {
            title: "Work Overload Evidence",
            image: "/projects/atember/pitch-evidence.png",
            note: "External research connected overload, fragmented focus, and coordination cost to delayed execution.",
          },
        ],
      },
      {
        title: "From Overload to an Agent Workflow",
        text:
          "I reframed the product from a planning tool into an agent that collects approved context, turns it into tasks, places work by importance and urgency, retrieves past information, explores relevant opportunities, and executes work within a safe workspace.",
        gallery: [
          {
            title: "Before and After",
            image: "/projects/atember/pitch-solution.png",
            note: "Each recurring user burden was translated into a concrete product response.",
          },
          {
            title: "Understand · Decide · Execute · Complete",
            image: "/projects/atember/pitch-agent-pipeline.png",
            note: "The agent loop connects context understanding to follow-up instead of presenting disconnected AI features.",
          },
        ],
      },
      {
        title: "The Agent Pipeline I Designed",
        text:
          "I organized the end-to-end experience around four clear stages so users can understand what the agent knows, why it prioritizes an item, what it is doing, and what should happen next.",
        layout: "workflow",
        workflowItems: [
          {
            step: "01",
            title: "Understand",
            text: "Collect approved schedules, conversations, profile data, and goals to recover the user's working context.",
            output: "Context & intent",
          },
          {
            step: "02",
            title: "Decide",
            text: "Evaluate importance, urgency, role, fit, and evidence to determine a personalized order of action.",
            output: "Priority & rationale",
          },
          {
            step: "03",
            title: "Execute",
            text: "Research, structure tasks, prepare a safe project workspace, and call Codex SDK for approved work.",
            output: "Agent action",
          },
          {
            step: "04",
            title: "Complete",
            text: "Track progress, preserve the generated context, and return a clear result with the next recommended action.",
            output: "Result & follow-up",
          },
        ],
      },
      {
        title: "Working Product Interface",
        text:
          "The macOS interface connects Inbox, Tasks, Sources, Automations, Memory, and Auto Research around a Task Map. Users can see incoming context, the reason behind a recommendation, and where each task sits by importance and urgency.",
        layout: "wide",
        gallery: [
          {
            title: "Attember Product Overview",
            image: "/projects/atember/product-overview.png",
            note: "Task Map, Auto Research, and context tools brought together in one desktop work hub.",
          },
        ],
      },
      {
        title: "Live Demo: Context to Execution",
        text:
          "The working product connects four critical moments: seeing priorities, researching opportunities with evidence, managing generated tasks, and carrying conversation context into an actionable response.",
        gallery: [
          {
            title: "Priority Home & Task Map",
            image: "/projects/atember/product-home-hq.png",
            note: "Brings today's schedule and importance–urgency placement into one operational view.",
          },
          {
            title: "Evidence-based Auto Research",
            image: "/projects/atember/product-research-hq.png",
            note: "Matches profile context to opportunities, cross-checks sources, and explains each recommendation.",
          },
          {
            title: "Generated Task Workspace",
            image: "/projects/atember/product-tasks-hq.png",
            note: "Turns recovered context into editable tasks with deadlines, priority, and linked evidence.",
          },
          {
            title: "Context-aware Agent Chat",
            image: "/projects/atember/product-chat-hq.png",
            note: "Uses connected context, sources, and next actions to produce a useful response instead of a generic answer.",
          },
        ],
      },
    ],
    details: [
      "Synthesized interview and community research into four behavioral barriers behind delayed execution.",
      "Translated the problem into an agent product strategy spanning context collection, task creation, research, prioritization, and execution.",
      "Designed the desktop information architecture and interaction flow across Inbox, Tasks, Sources, Automations, Memory, Auto Research, and Task Map.",
      "Structured the working demo and pitch narrative to make a complex AI pipeline understandable through visible user actions and outcomes.",
    ],
    capabilities: [
      "AI Product Planning",
      "User Research",
      "Information Architecture",
      "UI/UX Design",
      "Workflow Design",
      "Prototype Direction",
      "Product Storytelling",
    ],
  },
  {
    id: "colortelier",
    title: "Colortelier",
    eyebrow: "Travel Color Archive & Creator Commerce",
    category: "Brand & Growth",
    tagline: "One photo, translated into a color record of place.",
    summary:
      "Colortelier turns a travel photo into an editorial colorboard that preserves the light, color, place, and atmosphere behind it—then connects that record to sharing, brand application, personal archiving, and creator commerce.",
    role:
      "Service Planning · UX/UI Direction · AI-assisted Prototyping across problem framing, product architecture, responsive interaction design, visual direction, and the end-to-end working prototype.",
    outcome:
      "Built a responsive product system that moves beyond HEX extraction: photo context becomes an editable artifact, reusable design output, community archive, brand guide, and personally produced Lightroom XMP presets that validate a future creator marketplace.",
    accent: "#d7e8f1",
    image: "/projects/colortelier/paris-hero.jpg",
    sections: [
      {
        title: "Problem Definition: Travel Color Is Hard to Reuse",
        text:
          "Travel photos accumulate, but the light, color, and atmosphere of a place are difficult to retrieve and reuse. Existing color extractors usually stop at a palette and HEX values, leaving users to rebuild the story, format, and application on their own.",
        layout: "impact",
        impactItems: [
          {
            step: "01 · Accumulation",
            title: "Photos Without Recall",
            text: "Images remain in camera rolls while the sensory context that made the place memorable fades.",
            proof: "Place context is lost",
          },
          {
            step: "02 · Extraction",
            title: "HEX Without Meaning",
            text: "A palette alone does not explain when, where, or why a color should be remembered or reused.",
            proof: "Utility stops at codes",
          },
          {
            step: "03 · Application",
            title: "Manual Design Burden",
            text: "Turning a discovered color into social or brand assets requires separate tools and design knowledge.",
            proof: "Inspiration becomes extra work",
          },
          {
            step: "04 · Creation",
            title: "No Contextual Market",
            text: "Travel creators lack a focused space to package and sell presets, reports, and color-led assets.",
            proof: "Creation lacks a pathway",
          },
        ],
      },
      {
        title: "Product Ecosystem: From Photo to Reusable Asset",
        text:
          "I designed one connected journey in which automation accelerates interpretation while the user keeps control over place data, color decisions, format, and publication.",
        layout: "workflow",
        workflowItems: [
          {
            step: "01",
            title: "Upload",
            text: "Begin with the travel photo rather than an isolated color code.",
            output: "Source image",
          },
          {
            step: "02",
            title: "Interpret",
            text: "Estimate representative colors and EXIF or location context with manual fallback.",
            output: "Palette + metadata",
          },
          {
            step: "03",
            title: "Edit",
            text: "Confirm the place, season, weather, time, mood, and intended use before generation.",
            output: "User-controlled record",
          },
          {
            step: "04",
            title: "Create & Export",
            text: "Generate newspaper, collage, or loyalty-card layouts for social and design workflows.",
            output: "Images + design tokens",
          },
          {
            step: "05",
            title: "Archive & Extend",
            text: "Publish to the Board and Atlas, apply the palette to brands, or connect it to creator goods.",
            output: "Community + commerce",
          },
        ],
      },
      {
        title: "Core Experience: Create Studio",
        text:
          "Create Studio keeps input, generated artifact, palette, and export actions in one workspace. A SAMPLE preview explains the destination before upload; the real result appears only after explicit generation, so example content and user output never blur together.",
        layout: "wide",
        gallery: [
          {
            title: "Newspaper Color Record",
            image: "/projects/colortelier/create-newspaper.jpg",
            note: "A generated newspaper turns the selected photograph, palette, place, light, and story into a complete editorial record ready for export.",
          },
          {
            title: "Collage Travel Diary",
            image: "/projects/colortelier/create-collage-diary.jpg",
            note: "Up to four travel photos and an eight-color palette are composed into a scrapbook-style diary while input and result stay visible together.",
          },
          {
            title: "Travel Loyalty Card",
            image: "/projects/colortelier/create-loyalty-card.jpg",
            note: "The same travel context can become a collectible loyalty card, memory pass, and reward coupon instead of ending as a one-off image export.",
          },
        ],
      },
      {
        title: "UX Decisions for Trust and Momentum",
        text:
          "The experience had to make automation legible without removing user agency. I designed state, fallback, and responsive behavior around the moments where users are most likely to hesitate or lose their work.",
        layout: "feature-system",
        featureItems: [
          {
            group: "Expectation",
            title: "SAMPLE vs Empty State",
            text: "A labeled sample shows the finished form, while the empty state clearly states that no personal result exists yet.",
          },
          {
            group: "Control",
            title: "Metadata Fallback",
            text: "If EXIF, GPS, or image inference fails, users can confirm and edit location, date, season, weather, time, and use case manually.",
          },
          {
            group: "Desktop",
            title: "Sticky Comparative Preview",
            text: "On larger screens the result and its information remain visible while users refine the input form.",
          },
          {
            group: "Mobile",
            title: "Short Guided Movement",
            text: "Template selection, upload, generation, and result review are connected through quick movement rather than a compressed desktop layout.",
          },
          {
            group: "Continuity",
            title: "Persistent Inputs",
            text: "Switching templates preserves uploaded photos and place information, preventing unnecessary re-entry.",
          },
        ],
      },
      {
        title: "Explore & Community: Records Become Discovery",
        text:
          "The Atlas organizes colors by place and context, while the Color Board archives finished newspaper, collage, and loyalty-card outputs with their palettes. Personal records therefore become discoverable service assets rather than isolated exports.",
        gallery: [
          {
            title: "Contextual Palette Atlas",
            image: "/projects/colortelier/contextual-color-atlas.jpg",
            note: "Named palettes connect a HEX value to city, time, mood, use case, and descriptive tags, making color records easier to retrieve and reuse.",
          },
          {
            title: "Travel Color Atlas",
            image: "/projects/colortelier/travel-color-atlas.jpg",
            note: "Image-led place collections support discovery by city, atmosphere, and use, with a direct path to request a missing city or create a new record.",
          },
          {
            title: "Community Color Board",
            image: "/projects/colortelier/community-colorboard.jpg",
            note: "Generated artifacts and circular palettes are stored together so users can browse, react, comment, and move between inspiration and creation.",
          },
        ],
      },
      {
        title: "Brand Application: Color Becomes a System",
        text:
          "A representative color can move into contrast checks, supporting colors, logo marks, typography, emoji, and real brand touchpoints. This closes the gap between finding a color and knowing how to use it.",
        layout: "wide",
        gallery: [
          {
            title: "Contrast & Pairing Check",
            image: "/projects/colortelier/brand-contrast-check.jpg",
            note: "The selected rose is tested against background and text colors, then expanded through complementary, analogous, and anchor combinations before application.",
          },
          {
            title: "Applied Palette Builder",
            image: "/projects/colortelier/applied-palette-builder.jpg",
            note: "Purpose-specific five-color systems translate one travel color into ready-to-use palettes for brand, beauty, and hospitality touchpoints.",
          },
          {
            title: "Window Atelier Brand System",
            image: "/projects/colortelier/window-atelier-brand-system.jpg",
            note: "Montmartre Rose becomes a complete visual system with logo variants, signature marks, typography, colorimetry, patterns, packaging, menus, and gift-note applications.",
          },
        ],
      },
      {
        title: "Creator Product Strategy: From My XMP Presets to a Platform",
        text:
          "The first filters shown in Colortelier are Lightroom XMP presets I personally created and packaged as usable products. This gives the commerce model a concrete starting point; the next stage is to let creators register their own presets or color-led goods so Colortelier can grow from a curated shop into a creator platform.",
        layout: "feature-system",
        gallery: [
          {
            title: "Lightroom XMP Preset Gallery",
            image: "/projects/colortelier/lightroom-xmp-preset-market.jpg",
            note: "Before-and-after previews make the effect of each personally authored XMP preset visible and connect saved color moods directly to product discovery.",
          },
        ],
        featureItems: [
          {
            group: "Proof",
            title: "Personally Authored XMP Filters",
            text: "I created the initial Lightroom XMP presets myself, defining the visual tone and testing how a travel color archive can become a usable digital product.",
          },
          {
            group: "Productization",
            title: "From Color Mood to Downloadable Good",
            text: "Before-and-after comparison, save, cart, and usage information turn an abstract color mood into a product users can evaluate and collect.",
          },
          {
            group: "Roadmap",
            title: "Creator Registration & Marketplace",
            text: "The planned expansion opens registration for creator-made presets and products, building a multi-seller platform rather than keeping the shop limited to my own catalog.",
          },
        ],
      },
      {
        title: "Business Model: Value Grows With Use",
        text:
          "The model starts with a free colorboard experience, validates paid utility through my own XMP presets and digital goods, and expands only when users need richer ownership or repeated use: a travel pass, annual archive membership, and eventually a multi-creator marketplace.",
        layout: "feature-system",
        gallery: [
          {
            title: "Shop & Creator Commerce",
            image: "/projects/colortelier/creator-shop.jpg",
            note: "The shop makes the value ladder visible through Travel Roll, Travel Color Report, Archive Plus Annual, and creator-made presets rather than relying on an abstract pricing diagram.",
          },
        ],
        featureItems: [
          {
            group: "Entry",
            title: "Free Experience",
            text: "Basic extraction and colorboard creation establish the product habit and the value of a contextual color record.",
          },
          {
            group: "One-off",
            title: "Digital Goods",
            text: "Travel Color Reports and Travel Rolls serve users who want a specific finished artifact without a subscription.",
          },
          {
            group: "Journey",
            title: "Travel Pass",
            text: "A pass supports a deeper set of outputs around one trip or collection.",
          },
          {
            group: "Continuity",
            title: "Annual Membership",
            text: "Archive Plus supports repeated creation, storage, and long-term access across travel records.",
          },
          {
            group: "Ecosystem",
            title: "Creator Market",
            text: "The roadmap allows creators to register their own presets, templates, color reports, and products, extending the initial in-house catalog into a platform ecosystem.",
          },
        ],
      },
      {
        title: "Final Insights: Principles That Keep the Experience Coherent",
        text:
          "The final product direction became clearer through three principles that connect photo interpretation, artifact creation, and future platform expansion.",
        layout: "feature-system",
        featureItems: [
          {
            group: "Context layer",
            title: "Context Before Color",
            text: "A color becomes memorable and reusable only when place, time, light, and mood remain attached to it.",
          },
          {
            group: "Decision layer",
            title: "User Approval After Automation",
            text: "Automation should accelerate interpretation, while the user confirms metadata, color, format, and publication.",
          },
          {
            group: "Experience layer",
            title: "Core Experience Before Expansion",
            text: "Atlas, community, brand tools, and commerce create value only after the photo-to-artifact journey is unmistakable.",
          },
        ],
      },
    ],
    details: [
      "Framed the gap between travel-photo accumulation and context-poor HEX extraction as an opportunity for a reusable color record.",
      "Designed the service architecture from upload, metadata estimation, manual correction, and template generation to export, archive, discovery, and commerce.",
      "Built responsive UX decisions for sample and empty states, metadata fallback, sticky desktop comparison, and guided mobile movement.",
      "Connected the core Create Studio to Atlas, community, brand application, and a staged creator-commerce model without overstating the implemented scope.",
      "Created the initial Lightroom XMP preset products myself and defined a staged path toward creator registration and a multi-seller marketplace.",
    ],
    capabilities: [
      "Service Planning",
      "UX/UI Direction",
      "AI-assisted Prototyping",
      "Product Architecture",
      "Responsive UX",
      "Brand Application",
      "Business Model",
      "Creator Platform Strategy",
    ],
  },
  {
    id: "sephora-analysis",
    title: "Sephora R Data Analysis",
    eyebrow: "Premium beauty pricing research",
    category: "Data & Strategy",
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
    id: "leviosa",
    title: "Leviosa AI UX Project",
    eyebrow: "Cafe24 CRM landing page UX",
    category: "Product & UX",
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
    id: "nft-camera",
    title: "B2C NFT Project",
    eyebrow: "Location-based camera app concept",
    category: "Product & UX",
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
    id: "sephora-guide",
    title: "Sephora Guide Book",
    eyebrow: "LVMH Europe career guide",
    category: "Data & Strategy",
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
