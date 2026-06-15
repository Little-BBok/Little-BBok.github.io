# Portfolio Build Plan

## Goal

Build and deploy a React + Vite personal portfolio for Sumin (Chloe) Lee on the GitHub Pages repository connected to the GitHub account available on this computer.

## Source Material

- Existing Wix portfolio: `https://leesm5088.wixsite.com/suminleeportfolio`
- LinkedIn profile: `https://www.linkedin.com/in/sumin-lee-0270a8292/`
- Visual references supplied by the user:
  - oversized editorial typography, portfolio-deck composition, neutral base with bold accent panels
  - strong table-of-contents/navigation page
  - project cards that feel like case-study slides
  - content creator / brand strategy portfolio tone with clean product showcases

## Current Source Access Notes

- Wix pages are publicly readable and have been used as the primary content source.
- Public LinkedIn fetching is blocked in the current web fetch path. Use any overlapping public Wix/LinkedIn text already exposed through Wix, and attempt Chrome or authenticated access only if needed and safely available.
- GitHub CLI exists, but the saved GitHub token for `Little-BBok` is currently invalid. Deployment requires re-authentication or another valid local Git credential before repository creation and push.

## Content Inventory

### Identity

- Name: Sumin (Chloe) Lee
- Affiliation: Department of Business, Yonsei University, Seoul
- Positioning: Full-Cycle Brand Manager & Strategist
- Core theme: experience planner blending data-driven insights, human-centered empathy, brand/product/service strategy, UX, and global exploration.
- Contact:
  - `leesm5088@naver.com`
  - `leesm5088@yonsei.ac.kr`

### About

- Designs joyful, heartwarming experiences that linger in people's memories.
- Transforms global inspirations into structured brand, product, and service strategies rooted in data analysis and cognitive science.
- Aims to architect seamless UX that touches people's lives with joy and warmth.
- Keywords:
  - Experience Crafting
  - User-Centric Mindset
  - Global Exploration

### Work Experience

- ALUS healthcare, Brand Manager, Feb 2025 - Aug 2025
  - Grew dormant social channel from 10 to 1,700 followers.
  - Produced a short-form video with over 21,000 views and more than 334,000 Instagram profile visits.
  - Led 10 influencer collaborations and doubled official e-commerce traffic.
  - Launched first supporter program with 48 UGC pieces from 11 members.
  - Led official e-commerce store development from IA and wireframes to functional prototype.
  - Custom-coded real-time influencer review embedding for product-page social proof.
  - Integrated Channel Talk CRM for on-site behavior analysis.
  - Reduced unit production costs by 24% through manufacturing partner sourcing and management.
  - Developed and launched POWAPOWA, a wellness and beauty brand for women in their 20s and 30s.
  - Generated inbound partnership/collaboration offers including Marriott Moxy Hotel and Qoo10 Japan.
- Yonsei University Digital Media Lab, Undergraduate Intern, Sep 2024 - Nov 2024
  - Competitive analysis and usability study of best-selling commercial VR applications.
  - Evaluated UX, GUI, and cybersickness.
  - Synthesized findings into foundational report for future VR development projects.
- NOI LAB, Marketing and Strategy Intern, Dec 2023 - Oct 2024
  - Drove 24.4% follower growth through social media revitalization.
  - Planned and executed offline expo booth with cognitive mini-game, raffle, and personalized fNIRS reports.
  - Managed official blog through search trend and keyword analysis.
  - Planned renewal of Brain Training Game application.
  - Built Cognitive Sports Curriculum framework via one-month self-participation and user tests.
  - Helped set H2 2024 OKRs and execute detailed strategies.
  - Used generative AI for profile images and promotional videos.

### Association Experience

- UXIM, Product Manager, Mar 2025 - Jun 2026
  - Led Began product planning through user interviews, IA, user flows, and business model.
  - Won 1st place at UXIM x YCC Final Project Showcase.
  - Planned UX/IA for Namdong Senior Club website and delivered wireframes/prototypes.
  - Co-designed IoT water-tracking device and companion app concept for IBDA.
- CogSci:IN, Head of PR & MD Team, Mar 2024 - Dec 2024
  - Led neuromarketing research using Muse EEG on olfactory visualization and purchase intent in omni-channel retail.
  - Managed research lifecycle from experiment design to data analysis.
  - Findings were published in a peer-reviewed academic journal.
  - Directed academic society brand identity, journal cover, custom apparel, merchandising, and promotional visuals.
- KCC, Member, Mar 2024 - Dec 2024
  - Strategized B2C expansion for a B2B NFT business through a location-based camera app and UI/UX framework.
  - Won 1st place in final idea pitching, leading to commercialization and launch by the partner corporation.

### Projects

- Began Project
  - Location-based restaurant discovery service for users with dietary restrictions.
  - Reduced information uncertainty for group dining and accessibility.
  - Won 1st place at UXIM x YCC Final Project Showcase.
  - Role: Lead Product Planner; ideation, IDI, IA, user flows, BM, UI/UX.
  - Features: tailored onboarding, dietary presets, custom ingredient restrictions, menu-level verification, color-coded eat-or-not indicators, user contribution loop.
  - External: `https://began-map.vercel.app`
- B2C NFT Project
  - Known from experience page: location-based camera app concept and UI/UX framework for B2B NFT business expansion.
  - Awarded 1st place in final idea pitching; moved toward commercialization and launch by partner corporation.
- Leviosa AI UX Project
  - End-to-end UX/UI for Leviosa CS detail page, a Cafe24-integrated CRM solution.
  - Optimized CS-agent workflows by turning complex e-commerce data into intuitive, action-oriented UI.
  - Focus areas: information architecture, workflow optimization, systems thinking, design consistency, scalable UI component system.
  - External: `https://cafe24.cs.leviosa.ai.kr`
- Sephora R Data Analysis Project
  - Analyzed over 8,000 Sephora products.
  - Tested nonlinear price effects and moderating effects of Sephora exclusivity and vegan positioning.
  - Used regression analysis and binary logit model.
  - Insight: premium beauty success depends on distribution trust and value signals, not price alone.
- Sephora Guide Book Project
  - Career guidebook for Sephora/LVMH Europe entry strategy.
  - Researched beauty/luxury industry structure, Sephora business model, European market position, job functions, recruiting process, and career progression.
  - Incorporated interviews with industry professionals.

## Implementation Plan

1. Create React + Vite project files with TypeScript.
2. Add deploy tooling for GitHub Pages.
3. Build structured content data in code so pages can be expanded without rewriting layout.
4. Implement pages:
   - Home
   - About
   - Experience
   - Projects
   - Project detail pages
   - Skills / Documents summary
   - Interests
   - Contact
5. Style with editorial typography, neutral base, black/blue accent, slide-like project panels, and responsive navigation.
6. Verify with lint/build and browser screenshots on desktop/mobile.
7. Commit at each medium milestone.
8. Create or connect the GitHub Pages repository, push `main`, configure Pages, deploy, and verify the live URL.

## Commit Milestones

- `docs: add portfolio build plan`
- `chore: scaffold react vite portfolio`
- `feat: add portfolio content model`
- `feat: implement portfolio pages`
- `style: refine responsive portfolio design`
- `chore: configure github pages deployment`

