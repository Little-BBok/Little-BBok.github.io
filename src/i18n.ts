export type Language = "en" | "ko";

const ko: Record<string, string> = {
  Home: "홈",
  About: "소개",
  Experience: "경험",
  Projects: "프로젝트",
  Skills: "역량",
  Documents: "문서",
  Interests: "관심사",
  Contact: "연락처",
  "Go to home": "홈으로 이동",
  "Open navigation": "메뉴 열기",
  "Close navigation": "메뉴 닫기",
  "Portfolio 2026": "Portfolio 2026",
  "Who is": "수민은",
  "Sumin?": "누구인가요?",
  "Brand Strategy": "브랜드 전략",
  "UX Planning": "UX 기획",
  "Data Insight": "데이터 인사이트",
  "View Projects": "프로젝트 보기",
  "These Keywords show me": "세 가지 키워드",
  "Table of Contents": "목차",
  "Choose a page": "Explore the Portfolio",
  "Project Highlights": "주요 프로젝트",
  Introduction: "소개",
  "About Me": "나에 대해",
  "My Story": "나의 이야기",
  "I'm always looking for new and exciting opportunities. Let's connect.":
    "새로운 기회와 흥미로운 대화를 언제나 환영합니다. 편하게 연락해 주세요.",
  "Three Keywords": "세 가지 키워드",
  Career: "커리어",
  "My experience spans brand management, growth marketing, product planning, UI/UX design, and user research across startups, labs, and student associations.":
    "저의 경험은 스타트업, 연구실, 학생 단체를 넘나들며 브랜드 매니지먼트, 그로스 마케팅, 제품 기획, UI/UX 디자인, 사용자 리서치로 확장되어 왔습니다.",
  "Work Experience": "실무 경험",
  "Association Experience": "학회 및 단체 경험",
  Work: "실무",
  Association: "학회 및 단체",
  "Selected Work": "주요 작업",
  Project: "프로젝트",
  "View case": "케이스 보기",
  "Open Project": "프로젝트 열기",
  "My Role": "나의 역할",
  Outcome: "성과",
  "Process Notes": "프로세스 노트",
  "Project Materials": "프로젝트 자료",
  Capabilities: "역량",
  "Tools I Use": "활용 도구",
  "Developed Skills": "개발한 역량",
  Archive: "아카이브",
  "Back to Documents": "문서 목록으로",
  "Download Resume": "이력서 다운로드",
  "Personal Archive": "개인 아카이브",
  "View works": "작업 보기",
  "Back to Interests": "관심사 목록으로",
  Works: "작업",
  "Contact Me": "연락하기",
  "Curious about my projects, work experience, travel stories, or a casual coffee chat? Feel free to reach out.":
    "프로젝트, 실무 경험, 여행에서 얻은 영감에 대해 궁금한 점이 있다면 편하게 연락해 주세요.",
  "Seoul, Korea": "서울, 한국",
  "Reach out for": "이런 이야기를 나눌 수 있어요",
  "Open conversation, clear next steps.": "궁금한 이야기를 편하게 남겨주세요",
  "More portfolio details, project collaboration, work experience questions, travel-inspired stories, career conversations, or coffee chats are all welcome.":
    "포트폴리오에 대한 더 자세한 이야기, 프로젝트 협업, 실무 경험 질문, 여행에서 얻은 영감, 커리어 대화, 커피챗 모두 환영합니다.",
  "More projects": "더 많은 프로젝트",
  "Work experience": "실무 경험",
  "Travel stories": "여행 이야기",
  "Coffee chat": "커피챗",
  Collaboration: "협업",
  "Page not found": "페이지를 찾을 수 없습니다",
  "Back Home": "홈으로 돌아가기",
  Email: "이메일",
  "Wix Portfolio": "Wix 포트폴리오",
  LinkedIn: "링크드인",

  "Sumin (Chloe) Lee": "이수민 (Chloe Lee)",
  "Sumin Lee": "Sumin Lee",
  "Department of Business, Yonsei University, Seoul": "연세대학교 경영학과, 서울",
  "Full-Cycle Brand Manager & Strategist": "풀사이클 브랜드 매니저 & 전략 기획자",
  "An experience planner who explores global insights to design seamless, user-centered solutions.":
    "세계 곳곳의 영감과 데이터를 바탕으로, 사람에게 자연스럽게 닿는 브랜드와 사용자 경험을 기획합니다.",
  "Hello, I'm Sumin Lee. I craft joyful and heartwarming experiences that linger in people's memories. Explore this website to discover my journey and work!":
    "안녕하세요, 저는 이수민입니다. 브랜드 전략과 UX, 데이터 인사이트를 연결해 사람들의 기억에 오래 남는 경험을 만들고 있습니다. 이곳에서 제가 걸어온 과정과 작업들을 천천히 살펴봐 주세요.",
  "I craft joyful and heartwarming experiences that linger in people's memories, blending data-driven insight with human-centered empathy.":
    "데이터 기반 인사이트와 사람 중심의 공감을 결합해, 사람들의 기억에 오래 남는 즐겁고 따뜻한 경험을 만듭니다.",
  "My journey began by exploring the world and capturing global inspirations that broadened my perspective. I transform raw insights into structured brand, product, and service strategies rooted in data analysis and cognitive science. Beyond numbers, my goal is to architect seamless UX that touches people's lives with joy and warmth.":
    "저의 여정은 세계를 탐험하며 시야를 넓혀준 글로벌 영감을 포착하는 데서 시작되었습니다. 저는 날것의 인사이트를 데이터 분석과 인지과학에 기반한 브랜드, 제품, 서비스 전략으로 구조화합니다. 숫자를 넘어, 사람들의 삶에 즐거움과 따뜻함을 남기는 매끄러운 UX를 설계하는 것이 저의 목표입니다.",

  "Experience Crafting": "기억에 남는 경험 설계",
  "Weaving strategy and empathy together to design joyful, heartwarming brand memories.":
    "전략과 공감을 연결해 사용자의 마음에 오래 남는 브랜드 경험을 만듭니다.",
  "User-Centric Mindset": "사용자 중심의 사고",
  "Deeply understanding human behavior and prioritizing seamless user experiences above all else.":
    "사람의 행동과 맥락을 먼저 이해하고, 자연스럽게 이어지는 사용 경험을 우선합니다.",
  "Global Exploration": "글로벌 인사이트 탐색",
  "Thriving on exploring new places and turning world-wide inspirations into fresh business insights.":
    "여행과 관찰을 통해 얻은 감각을 새로운 비즈니스 아이디어와 브랜드 전략으로 확장합니다.",
  "Insight Translator": "인사이트 번역가",
  "I turn user interviews, market signals, and cultural observations into clear strategic directions.":
    "사용자 인터뷰, 시장 신호, 문화적 관찰을 명확한 전략 방향으로 바꿉니다.",
  "Full-cycle Builder": "풀사이클 빌더",
  "I enjoy moving from concept to IA, prototype, launch, content, CRM, and performance iteration.":
    "콘셉트부터 IA, 프로토타입, 론칭, 콘텐츠, CRM, 성과 개선까지 전 과정을 실행하는 것을 즐깁니다.",
  "Warm Visual Storyteller": "따뜻한 비주얼 스토리텔러",
  "I shape brand and product narratives so complex ideas feel approachable, memorable, and human.":
    "복잡한 아이디어도 친근하고 기억에 남으며 인간적으로 느껴지도록 브랜드와 제품의 이야기를 만듭니다.",
  "I am an experience planner who blends data-driven insights with human-centered empathy. Driven by a curiosity to explore the world, my mission is to design seamless user experiences that leave joyful and lasting brand memories in people's lives.":
    "저는 데이터 기반 인사이트와 사람 중심의 공감을 함께 다루는 경험 기획자입니다. 새로운 장소와 문화를 탐색하는 호기심을 바탕으로, 사용자의 일상에 자연스럽게 스며드는 브랜드 경험을 설계하고자 합니다.",
  "My journey began by exploring the world, capturing unique global inspirations that broadened my perspective. I transform these raw insights into structured brand, product, and service strategies deeply rooted in data analysis and cognitive science.":
    "저의 작업은 세계 곳곳에서 발견한 장면과 사람들의 행동을 관찰하는 데서 시작됩니다. 그렇게 얻은 감각과 데이터를 브랜드, 제품, 서비스 전략으로 구조화합니다.",
  "Beyond numbers, my ultimate goal is to architect seamless user experiences that touch people's lives with joy and warmth, scaling this positive impact outwards. Driven by this vision, I continuously push my boundaries by actively leading diverse service development, data analytics, and branding projects to grow as a multi-dimensional planner.":
    "숫자 너머의 맥락을 읽고, 사람들에게 즐거움과 따뜻함으로 기억되는 경험을 만드는 것이 저의 목표입니다. 서비스 개발, 데이터 분석, 브랜딩 프로젝트를 주도하며 더 입체적인 기획자로 성장하고 있습니다.",

  "Project Collaboration": "프로젝트 협업",
  "Brand strategy, UX planning, service design, CRM, growth marketing, and beauty or wellness projects are the best starting points for a conversation.":
    "브랜드 전략, UX 기획, 서비스 디자인, CRM, 그로스 마케팅, 뷰티 및 웰니스 프로젝트는 대화를 시작하기 좋은 주제입니다.",
  "Research & Insight": "리서치 & 인사이트",
  "I enjoy translating interviews, market signals, cultural references, and quantitative analysis into clear business and product directions.":
    "인터뷰, 시장 신호, 문화적 레퍼런스, 정량 분석을 명확한 비즈니스 및 제품 방향으로 번역하는 일을 즐깁니다.",
  "Open Conversation": "열린 대화",
  "Portfolio reviews, career conversations, student association work, and global brand experience discussions are always welcome.":
    "포트폴리오 리뷰, 커리어 대화, 학생 단체 활동, 글로벌 브랜드 경험에 관한 이야기를 언제나 환영합니다.",

  "ALUS healthcare": "ALUS healthcare",
  "Brand Manager": "브랜드 매니저",
  "Feb 2025 - Aug 2025": "2025.02 - 2025.08",
  "Revitalized a dormant social media channel, growing followers from 10 to 1,700.":
    "비활성 소셜 미디어 채널 재활성화 및 팔로워 10명 → 1,700명 성장",
  "Produced a viral short-form video inspired by the product's macaron design, achieving 21,000+ views and 334,000+ Instagram profile visits.":
    "제품의 마카롱 디자인에서 착안한 숏폼 영상 제작, 2.1만+ 조회수 및 33.4만+ 인스타그램 프로필 방문 달성",
  "Led 10 influencer collaborations, doubled traffic to the official e-commerce website, and launched a supporter program that secured 48 UGC pieces from 11 members.":
    "인플루언서 협업 10건 리드, 공식 이커머스 웹사이트 트래픽 2배 성장, 서포터즈 11명 기반 UGC 48건 확보",
  "Led official e-commerce store development from IA and wireframes to functional prototype, then custom-coded real-time influencer reviews into the product page.":
    "공식 이커머스 스토어 IA, 와이어프레임, 기능형 프로토타입 개발 리드 및 제품 페이지 실시간 인플루언서 리뷰 영역 커스텀 코딩",
  "Integrated Channel Talk CRM to analyze customer behavior and reduced unit production costs by 24% through a new manufacturing partner.":
    "채널톡 CRM 연동을 통한 고객 행동 분석 및 신규 제조 파트너 확보로 단위 생산 비용 24% 절감",
  "Developed and launched POWAPOWA, a wellness and beauty brand for women in their 20s and 30s, generating inbound partnership offers from Marriott Moxy Hotel and Qoo10 Japan.":
    "20~30대 여성 타깃 웰니스·뷰티 브랜드 POWAPOWA 개발 및 론칭, Marriott Moxy Hotel·Qoo10 Japan 인바운드 파트너십 제안 유치",
  "Yonsei University Digital Media Lab": "연세대학교 디지털미디어랩",
  "Undergraduate Intern": "학부 인턴",
  "Sep 2024 - Nov 2024": "2024.09 - 2024.11",
  "Conducted competitive analysis and usability study of best-selling commercial VR applications.":
    "상위 판매 상용 VR 애플리케이션 경쟁 분석 및 사용성 조사",
  "Evaluated content using UX, GUI, and cybersickness metrics.":
    "UX, GUI, 사이버멀미 지표 기반 콘텐츠 평가",
  "Synthesized research findings into a comprehensive report for future VR development projects.":
    "향후 VR 개발 프로젝트를 위한 연구 결과 종합 리포트 작성",
  "NOI LAB": "NOI LAB",
  "Marketing and Strategy Intern": "마케팅·전략 인턴",
  "Dec 2023 - Oct 2024": "2023.12 - 2024.10",
  "Spearheaded social media revitalization, driving 24.4% follower growth through data-backed content planning and performance analysis.":
    "데이터 기반 콘텐츠 기획과 성과 분석을 통한 소셜 미디어 재활성화 및 팔로워 24.4% 성장",
  "Single-handedly planned an offline expo booth with a cognitive mini-game, follow-to-win raffle, and personalized fNIRS reports.":
    "인지 미니게임, 팔로우 이벤트, 개인 맞춤형 fNIRS 리포트를 포함한 오프라인 박람회 부스 단독 기획",
  "Managed the official blog through search trend and keyword analysis, securing multiple sponsorships and identifying high-impact influencers.":
    "검색 트렌드 및 키워드 분석 기반 공식 블로그 운영, 다수 협찬 확보 및 고효율 인플루언서 발굴",
  "Led renewal planning for the Brain Training Game application and built the Cognitive Sports Curriculum framework through self-participation and user tests.":
    "Brain Training Game 애플리케이션 리뉴얼 기획 리드 및 직접 참여·사용자 테스트 기반 Cognitive Sports Curriculum 프레임워크 구축",
  "Contributed to H2 2024 OKRs and used generative AI to create profile images and promotional videos.":
    "2024년 하반기 OKR 수립 기여 및 생성형 AI 기반 프로필 이미지·홍보 영상 제작",
  UXIM: "UXIM",
  "Product Manager": "프로덕트 매니저",
  "Mar 2025 - Jun 2026": "2025.03 - 2026.06",
  "HCI/UX Society": "HCI/UX 학회",
  "Led Began product planning through user interviews, IA, user flows, and business model definition.":
    "사용자 인터뷰, IA, 유저 플로우, 비즈니스 모델 정의 기반 Began 제품 기획 리드",
  "Won 1st place at the UXIM x YCC Final Project Showcase.":
    "UXIM x YCC Final Project Showcase 1위 수상",
  "Planned UX/IA for Namdong Senior Club's official website and delivered wireframes and prototypes.":
    "남동시니어클럽 공식 웹사이트 UX/IA 기획 및 와이어프레임·프로토타입 제작",
  "Co-designed an IoT water-tracking device and companion app concept for the Busan International Design Award.":
    "부산국제디자인어워드 출품용 IoT 수분 섭취 추적 디바이스 및 연동 앱 콘셉트 공동 설계",
  "CogSci:IN": "CogSci:IN",
  "Head of PR & MD Team": "PR & MD 팀장",
  "Mar 2024 - Dec 2024": "2024.03 - 2024.12",
  "Cognitive Science Society": "인지과학학회",
  "Designed and executed neuromarketing research with Muse EEG to study olfactory visualization and purchase intent in omni-channel retail.":
    "Muse EEG 기반 옴니채널 리테일 환경의 후각 시각화 및 구매 의도 뉴로마케팅 실험 설계·실행",
  "Managed the full research lifecycle from experimental design to data analysis, with findings published in a peer-reviewed academic journal.":
    "실험 설계부터 데이터 분석까지 연구 전 과정 관리 및 동료심사 학술지 게재",
  "Directed brand identity, journal cover design, custom apparel, merchandising production, distribution, and promotional visuals.":
    "브랜드 아이덴티티, 학술지 표지, 커스텀 의류, 굿즈 제작·배포, 홍보 비주얼 총괄",
  KCC: "KCC",
  Member: "멤버",
  "Commerce & Strategy Society": "커머스 & 전략 학회",
  "Strategized B2C market expansion for a B2B NFT business through a location-based camera app concept and UI/UX framework.":
    "위치 기반 카메라 앱 콘셉트와 UI/UX 프레임워크 기반 B2B NFT 비즈니스의 B2C 시장 확장 전략 수립",
  "Won 1st place in the final idea pitching, contributing to commercialization and launch by the partnering corporation.":
    "최종 아이디어 피칭 1위 수상 및 파트너 기업 사업화·론칭 과정 기여",

  "Began Project": "Began 프로젝트",
  "Dietary-accessible discovery service": "식이 제한 친화 맛집 탐색 서비스",
  "A location-based restaurant discovery service designed to reduce dining uncertainty for people with dietary restrictions.":
    "식이 제한이 있는 사람들이 외식할 때 느끼는 정보 불확실성을 줄이기 위해 설계한 위치 기반 맛집 탐색 서비스입니다.",
  "Lead Product Planner responsible for ideation, IDI, IA, user flows, business model, and end-to-end UI/UX.":
    "아이데이션, IDI, IA, 유저 플로우, 비즈니스 모델, 엔드투엔드 UI/UX를 담당한 리드 제품 기획자였습니다.",
  "Won 1st place at the UXIM x YCC Final Project Showcase for a user-centered approach to real dining accessibility challenges.":
    "실제 외식 접근성 문제를 사용자 중심으로 풀어낸 점을 인정받아 UXIM x YCC Final Project Showcase에서 1위를 수상했습니다.",
  "Began Website": "Began 웹사이트",
  "Project Overview": "프로젝트 개요",
  "'Began' is a location-based restaurant discovery service designed to reduce information uncertainty when dining with individuals who have specific dietary restrictions. The project won 1st place at the UXIM x YCC Final Project Showcase, recognizing its user-centered approach to solving real-world dining accessibility challenges.":
    "'Began'은 특정 식이 제한이 있는 사람들과 함께 외식할 때 발생하는 정보 불확실성을 줄이기 위해 설계한 위치 기반 맛집 탐색 서비스입니다. 실제 외식 접근성 문제를 사용자 중심으로 해결한 접근을 인정받아 UXIM x YCC Final Project Showcase에서 1위를 수상했습니다.",
  "Tailored Onboarding": "맞춤형 온보딩",
  "To solve the fragmented nature of dietary preferences, I designed an intuitive onboarding experience featuring dietary preference presets. Users can quickly select their baseline dietary type or customize specific ingredient restrictions, including allergies and fine-tuned choices, from the very beginning. By minimizing initial user friction and mapping precise user profiles early on, this feature eliminates unnecessary search steps and delivers highly personalized restaurant curation from the first interaction.":
    "식이 선호가 파편화되어 있는 문제를 해결하기 위해 식이 선호 프리셋을 제공하는 직관적인 온보딩 경험을 설계했습니다. 사용자는 첫 단계에서 기본 식이 유형을 빠르게 선택하거나 알레르기와 세부 제한 식재료까지 직접 설정할 수 있습니다. 초기 사용 마찰을 줄이고 정확한 사용자 프로필을 초기에 매핑함으로써 불필요한 검색 단계를 없애고 첫 사용부터 개인화된 맛집 큐레이션을 제공합니다.",
  "Menu-Level Verification & Crowdsourced Ecosystem": "메뉴 단위 검증과 크라우드소싱 생태계",
  "I developed a menu-level verification system that breaks down restaurant menus by specific vegan types, using a color-coded indicator to show eat-or-not availability at a glance. This high visual hierarchy reduces information uncertainty for users dining in groups. I also integrated a user-driven contribution loop where users can report new vegan spots, add menu items, and leave ratings, transforming Began into a self-sustaining crowdsourced ecosystem driven by community trust.":
    "레스토랑 메뉴를 세부 비건 유형별로 나누고, 색상 기반 표시로 섭취 가능 여부를 한눈에 확인할 수 있는 메뉴 단위 검증 시스템을 개발했습니다. 높은 시각적 위계는 단체 외식 상황에서 정보 불확실성을 줄여줍니다. 또한 사용자가 새로운 비건 장소를 제보하고 메뉴를 추가하며 평점을 남길 수 있는 기여 루프를 통합해, Began을 커뮤니티 신뢰 기반의 자생적 크라우드소싱 생태계로 확장했습니다.",
  "Designed tailored onboarding with dietary presets and custom ingredient restrictions to reduce first-use friction.":
    "첫 사용 마찰을 줄이기 위해 식이 프리셋과 맞춤 식재료 제한을 포함한 온보딩을 설계했습니다.",
  "Built menu-level verification using vegan-type breakdowns and color-coded eat-or-not indicators.":
    "비건 유형 분류와 색상 기반 섭취 가능 여부 표시를 활용한 메뉴 단위 검증을 구축했습니다.",
  "Added a user contribution loop for reporting vegan spots, adding menu items, and leaving ratings.":
    "비건 장소 제보, 메뉴 추가, 평점 남기기를 위한 사용자 기여 루프를 추가했습니다.",
  "Product Planning": "제품 기획",
  "User Interviews": "사용자 인터뷰",
  IA: "IA",
  "UI/UX": "UI/UX",
  "Business Model": "비즈니스 모델",
  "B2C NFT Project": "B2C NFT 프로젝트",
  "Location-based camera app concept": "위치 기반 카메라 앱 콘셉트",
  "A B2C expansion strategy for a B2B NFT business, framed as a location-based camera app with a UI/UX framework.":
    "B2B NFT 비즈니스를 위치 기반 카메라 앱과 UI/UX 프레임워크로 재구성한 B2C 확장 전략입니다.",
  "Strategist and UX planner developing the consumer-facing idea, user flow, and market expansion proposal.":
    "소비자 대상 아이디어, 유저 플로우, 시장 확장 제안을 개발한 전략 및 UX 기획자였습니다.",
  "Won 1st place in the final idea pitching and moved toward commercialization and launch by the partner corporation.":
    "최종 아이디어 피칭에서 1위를 수상했고, 파트너 기업의 사업화와 론칭 방향으로 이어졌습니다.",
  "I participated in an industry-academic collaboration project to propose a B2C service expansion strategy for a company that had previously provided B2B NFT solutions. Our team planned NFTCamera, a service combining location- and time-based limited AR filters with NFT issuance, storage, and verification features. By proposing a strategy to expand consumer touchpoints through brand collaborations, user-participation missions, and scarcity-based reward structures, our team won 1st place in the project.":
    "기존에 B2B NFT 솔루션을 제공하던 기업의 B2C 서비스 확장 전략을 제안하는 산학협력 프로젝트에 참여했습니다. 우리 팀은 위치와 시간 기반 한정 AR 필터, NFT 발급·보관·인증 기능을 결합한 NFTCamera 서비스를 기획했습니다. 브랜드 협업, 사용자 참여 미션, 희소성 기반 보상 구조를 통해 소비자 접점을 확장하는 전략을 제안해 프로젝트 1위를 수상했습니다.",
  "Main Features": "주요 기능",
  "NFTCamera is a location- and time-based NFT camera service where users can access limited AR filters only under specific conditions. Users can capture moments with exclusive filters, store them in an NFT archive, verify ownership, and track NFT issuance history.":
    "NFTCamera는 특정 조건에서만 한정 AR 필터를 사용할 수 있는 위치·시간 기반 NFT 카메라 서비스입니다. 사용자는 독점 필터로 순간을 촬영하고, NFT 아카이브에 저장하며, 소유권을 인증하고 발급 이력을 확인할 수 있습니다.",
  "Brand Collaboration": "브랜드 협업",
  "I planned collaboration-based limited filters for festivals, fandom events, sports games, exhibitions, campaigns, and offline brand spaces. These collaborations were designed to help brands create interactive consumer experiences while attracting new users to the service.":
    "페스티벌, 팬덤 이벤트, 스포츠 경기, 전시, 캠페인, 오프라인 브랜드 공간에 적용할 수 있는 협업형 한정 필터를 기획했습니다. 이러한 협업은 브랜드가 인터랙티브한 소비자 경험을 만들고, 서비스에는 신규 사용자를 유입시키도록 설계되었습니다.",
  "User-Participation Missions": "사용자 참여 미션",
  "I designed participatory missions such as first-come-first-served filters, limited-user filters, community voting, filter co-creation, and location-based challenges. These features aimed to increase app engagement, repeat usage, and the number of photo captures per user.":
    "선착순 필터, 한정 사용자 필터, 커뮤니티 투표, 필터 공동 제작, 위치 기반 챌린지 등 참여형 미션을 설계했습니다. 이 기능들은 앱 참여도, 반복 사용, 사용자당 촬영 수를 높이는 것을 목표로 했습니다.",
  "Reframed B2B NFT assets into an accessible consumer experience anchored in place, camera behavior, and collectable moments.":
    "B2B NFT 자산을 장소, 카메라 행동, 수집 가능한 순간을 중심으로 접근성 높은 소비자 경험으로 재구성했습니다.",
  "Designed a UI/UX framework that connected location discovery, capture, ownership, and sharing.":
    "위치 탐색, 촬영, 소유, 공유를 연결하는 UI/UX 프레임워크를 설계했습니다.",
  "Presented the strategy as a business expansion path rather than a standalone design concept.":
    "전략을 단순 디자인 콘셉트가 아니라 비즈니스 확장 경로로 제시했습니다.",
  "Market Strategy": "시장 전략",
  "Service Concept": "서비스 콘셉트",
  Pitching: "피칭",
  "UI/UX Framework": "UI/UX 프레임워크",
  "Leviosa AI UX Project": "Leviosa AI UX 프로젝트",
  "Cafe24 CRM detail page UX": "Cafe24 CRM 랜딩페이지 UX",
  "Cafe24 CRM landing page UX": "Cafe24 CRM 랜딩페이지 UX",
  "End-to-end UX/UI for the detail page of Leviosa CS, a high-performance CRM solution integrated with Cafe24.":
    "Cafe24와 연동되는 CRM 서비스 Leviosa CS를 소개하는 랜딩페이지 UX/UI 프로젝트입니다.",
  "UX planning and UI design for a landing page that explains Leviosa CS, a Cafe24-connected CRM service.":
    "Cafe24와 연동되는 CRM 서비스 Leviosa CS를 설명하는 랜딩페이지의 UX를 기획하고 UI를 디자인한 프로젝트입니다.",
  "UX/UI designer translating complex e-commerce data into an intuitive, action-oriented interface for CS agents.":
    "서비스의 핵심 가치와 기능 흐름을 명확하게 전달하는 랜딩페이지 UX/UI를 설계했습니다.",
  "UX planner and UI designer responsible for structuring the landing page narrative, information flow, and visual interface.":
    "랜딩페이지의 메시지 흐름, 정보 구조, 시각 인터페이스를 설계한 UX 기획자이자 UI 디자이너였습니다.",
  "Reduced cognitive load through clearer hierarchy, task-centric workflows, and a scalable SaaS component system.":
    "랜딩페이지의 정보 구조와 시각 위계를 정리해 서비스의 가치와 기능을 이해하기 쉽게 전달했습니다.",
  "Clarified the service value proposition and feature flow through landing page UX, hierarchy, and UI design.":
    "랜딩페이지 UX와 시각 위계를 통해 서비스의 핵심 가치와 기능 흐름을 명확하게 전달했습니다.",
  "UX Sample": "UX 샘플",
  "I designed the end-to-end UX/UI for the Detail Page of Leviosa CS, a high-performance CRM solution integrated with Cafe24, Korea's leading e-commerce platform. The project focused on optimizing CS-agent workflow by transforming complex e-commerce data into an intuitive, action-oriented interface.":
    "국내 대표 이커머스 플랫폼 Cafe24와 연동되는 CRM 서비스 Leviosa CS를 소개하는 랜딩페이지 UX/UI를 설계했습니다. 제품의 가치와 기능을 명확하게 전달할 수 있도록 페이지 구조, 기능 스토리텔링, 전환을 고려한 인터페이스를 구성했습니다.",
  "I planned the UX and designed the UI for a landing page that introduces Leviosa CS, a Cafe24-connected CRM service, with a focus on clear page structure, feature storytelling, and conversion-oriented interface design.":
    "Cafe24와 연동되는 CRM 서비스 Leviosa CS를 소개하는 랜딩페이지의 UX를 기획하고 UI를 디자인했습니다. 제품의 가치와 기능을 명확하게 전달할 수 있도록 페이지 구조, 기능 스토리텔링, 전환을 고려한 인터페이스를 구성했습니다.",
  "Information Architecture": "정보구조",
  "I structured multi-layered data, including order history, customer profiles, and real-time logs, into a clear visual hierarchy to reduce cognitive load for CS agents.":
    "방문자가 서비스 맥락, 핵심 기능, 사용 이점, 제품 가치를 빠르게 이해할 수 있도록 랜딩페이지 정보 흐름을 구성했습니다.",
  "I organized the landing page flow so visitors could quickly understand the service context, key features, usage benefits, and product value without confusion.":
    "방문자가 서비스 맥락, 핵심 기능, 사용 이점, 제품 가치를 빠르게 이해할 수 있도록 랜딩페이지 정보 흐름을 구성했습니다.",
  "Workflow Optimization": "랜딩페이지 흐름 설계",
  "Landing Flow Design": "랜딩페이지 흐름 설계",
  "The task-centric layout enables agents to process refunds, shipping updates, and inquiries with minimal clicks, while still keeping essential context visible.":
    "문제 인식에서 솔루션의 이점, 기능 설명, 행동 유도로 이어지는 흐름을 설계해 사용자가 서비스의 필요성을 자연스럽게 이해하도록 했습니다.",
  "I designed the page narrative to move from problem awareness to solution benefits, feature explanation, and action, helping users grasp why the service matters.":
    "문제 인식에서 솔루션의 이점, 기능 설명, 행동 유도로 이어지는 페이지 내러티브를 설계해 사용자가 서비스의 필요성을 자연스럽게 이해하도록 했습니다.",
  "Systems Thinking": "UI 디자인 시스템",
  "UI Design System": "UI 디자인 시스템",
  "I ensured deep integration with Cafe24 API data structures, bridging the gap between technical constraints and user needs, and developed a scalable UI component system for the SaaS environment.":
    "B2B CRM 제품을 설명하기에 적합한 재사용 가능한 섹션, 명확한 시각 위계, SaaS 스타일의 UI 컴포넌트 방향을 설계했습니다.",
  "I created a clean SaaS-style UI direction with reusable sections, clear visual hierarchy, and interface components suited to explaining a B2B CRM product.":
    "B2B CRM 제품을 설명하기에 적합한 재사용 가능한 섹션, 명확한 시각 위계, SaaS 스타일의 UI 컴포넌트 방향을 설계했습니다.",
  "Structured multi-layered data such as order history, customer profiles, and real-time logs into a clear visual hierarchy.":
    "Leviosa CS 랜딩페이지의 정보 구조와 콘텐츠 흐름 기획",
  "Planned the landing page information architecture and content flow for Leviosa CS.":
    "Leviosa CS 랜딩페이지의 정보 구조와 콘텐츠 흐름 기획",
  "Designed a task-centric layout for refunds, shipping updates, and inquiries with minimal clicks.":
    "서비스 기능, 이점, 제품 맥락을 설명하는 UI 섹션 디자인",
  "Designed UI sections that explain service features, benefits, and product context.":
    "서비스 기능, 이점, 제품 맥락을 설명하는 UI 섹션 디자인",
  "Aligned UI with Cafe24 API data structures to bridge technical constraints and agent needs.":
    "명확한 이해와 전환을 고려한 SaaS 스타일 랜딩페이지 인터페이스 설계",
  "Created a SaaS-style landing page interface optimized for clarity and conversion.":
    "명확한 이해와 전환을 고려한 SaaS 스타일 랜딩페이지 인터페이스 설계",
  "SaaS UX": "SaaS UX",
  "Landing Page UX": "랜딩페이지 UX",
  "Workflow Design": "워크플로우 설계",
  "Component System": "컴포넌트 시스템",
  "UI Design": "UI 디자인",
  "Sephora R Data Analysis": "Sephora R 데이터 분석",
  "Premium beauty pricing research": "프리미엄 뷰티 가격 연구",
  "An R-based analysis of 8,000+ Sephora products examining when beauty product pricing is accepted in consumer ratings.":
    "8,000개 이상의 Sephora 제품 데이터를 바탕으로 뷰티 제품 가격이 소비자 평점에서 언제 수용되는지 분석한 R 기반 연구입니다.",
  "Data analyst testing nonlinear price effects and moderating effects of Sephora exclusivity and vegan positioning.":
    "가격의 비선형 효과와 Sephora 독점성, 비건 포지셔닝의 조절 효과를 검증한 데이터 분석가였습니다.",
  "Found that premium beauty success depends on distribution trust and value signals that make consumers perceive price as justified.":
    "프리미엄 뷰티의 성공은 소비자가 가격을 정당하다고 인식하게 만드는 유통 신뢰와 가치 신호에 달려 있음을 확인했습니다.",
  "English Version": "영문 버전",
  "Korean Version": "국문 버전",
  "Based on data from over 8,000 Sephora products, I analyzed the conditions under which beauty product pricing is accepted in consumer ratings. I tested the nonlinear effect of price, as well as the moderating effects of Sephora exclusivity and vegan positioning, using regression analysis and a binary logit model.":
    "8,000개 이상의 Sephora 제품 데이터를 기반으로 뷰티 제품 가격이 소비자 평점에서 수용되는 조건을 분석했습니다. 회귀분석과 이항 로짓 모델을 활용해 가격의 비선형 효과와 Sephora 독점성, 비건 포지셔닝의 조절 효과를 검증했습니다.",
  "Analytical Focus": "분석 초점",
  "The analysis showed that the success of premium beauty products depends not merely on price itself, but on designing distribution trust and value signals that help consumers perceive the price as justified.":
    "분석 결과 프리미엄 뷰티 제품의 성공은 가격 자체만이 아니라, 소비자가 가격을 정당하다고 인식하도록 돕는 유통 신뢰와 가치 신호 설계에 달려 있음을 확인했습니다.",
  "Cover Question": "커버 질문",
  "Research Background": "연구 배경",
  "Questions & Objectives": "질문과 목표",
  "Data Overview": "데이터 개요",
  "Conceptual Model": "개념 모델",
  Hypotheses: "가설",
  "Analysis Design": "분석 설계",
  "Price Distribution": "가격 분포",
  "Price-Rating Trend": "가격-평점 추세",
  "Used regression analysis and a binary logit model on product-level beauty data.":
    "제품 단위 뷰티 데이터에 회귀분석과 이항 로짓 모델을 적용했습니다.",
  "Compared pricing, exclusivity, vegan positioning, and consumer rating acceptance.":
    "가격, 독점성, 비건 포지셔닝, 소비자 평점 수용도를 비교했습니다.",
  "Translated analytical findings into brand and distribution strategy implications.":
    "분석 결과를 브랜드 및 유통 전략 시사점으로 전환했습니다.",
  R: "R",
  Regression: "회귀분석",
  "Binary Logit": "이항 로짓",
  "Consumer Insight": "소비자 인사이트",
  "Beauty Strategy": "뷰티 전략",
  "Sephora Guide Book": "Sephora 가이드북",
  "LVMH Europe career guide": "LVMH 유럽 커리어 가이드",
  "A career guidebook project focused on entry strategies into Sephora and LVMH in Europe.":
    "유럽 Sephora와 LVMH 진입 전략에 초점을 맞춘 커리어 가이드북 프로젝트입니다.",
  "Researcher mapping industry structure, business model, market position, job functions, recruitment, and career progression.":
    "산업 구조, 비즈니스 모델, 시장 포지션, 직무, 채용, 커리어 경로를 조사한 리서처였습니다.",
  "Developed an actionable guidebook for students exploring practical career paths in Sephora and the LVMH network.":
    "Sephora와 LVMH 네트워크에서 실질적인 커리어 경로를 탐색하는 학생들을 위한 실행 가능한 가이드북을 개발했습니다.",
  "View Guidebook": "가이드북 보기",
  "Created a career guidebook project focused on entry strategies into Sephora/LVMH in Europe by analyzing the beauty and luxury industry structure and Sephora's business model. I researched Sephora's European market position, job functions, recruitment process, and career progression pathways, while incorporating insights from interviews with industry professionals.":
    "뷰티·럭셔리 산업 구조와 Sephora의 비즈니스 모델을 분석해 유럽 Sephora/LVMH 진입 전략에 초점을 맞춘 커리어 가이드북을 제작했습니다. Sephora의 유럽 시장 포지션, 직무, 채용 프로세스, 커리어 성장 경로를 조사하고 업계 전문가 인터뷰 인사이트를 반영했습니다.",
  "Why Our Guidebook?": "왜 이 가이드북인가요?",
  "The guidebook was designed to offer uncommon retail insights, a gateway into Sephora/LVMH career paths, and honest, actionable advice that students cannot easily find through surface-level online search.":
    "이 가이드북은 단순 검색으로 찾기 어려운 리테일 인사이트, Sephora/LVMH 커리어 진입 경로, 솔직하고 실행 가능한 조언을 제공하도록 설계되었습니다.",
  "Guidebook Structure": "가이드북 구성",
  "The contents move from Sephora business and industry context to career paths, recruitment preparation, and interviews with professionals across Sephora and the LVMH network.":
    "콘텐츠는 Sephora 비즈니스와 산업 맥락에서 시작해 커리어 경로, 채용 준비, Sephora 및 LVMH 네트워크 전문가 인터뷰로 이어집니다.",
  "Analyzed the beauty and luxury industry structure and Sephora's business model.":
    "뷰티·럭셔리 산업 구조와 Sephora의 비즈니스 모델을 분석했습니다.",
  "Researched European market position, job functions, recruiting process, and career progression pathways.":
    "유럽 시장 포지션, 직무, 채용 프로세스, 커리어 성장 경로를 조사했습니다.",
  "Incorporated interviews with industry professionals to ground the guidebook in practical insight.":
    "업계 전문가 인터뷰를 반영해 가이드북을 실질적인 인사이트에 기반하도록 구성했습니다.",
  "Industry Research": "산업 리서치",
  "Career Strategy": "커리어 전략",
  "Luxury Beauty": "럭셔리 뷰티",
  "Interview Insight": "인터뷰 인사이트",
  "Growth Marketing": "그로스 마케팅",
  "UI/UX Design": "UI/UX 디자인",
  "User Research": "사용자 리서치",
  "Data Analysis": "데이터 분석",
  "Regression Analysis": "회귀분석",
  "CRM Optimization": "CRM 최적화",
  "Generative AI Asset Production": "생성형 AI 에셋 제작",
  "Community Building": "커뮤니티 빌딩",
  Merchandising: "머천다이징",
  "R / Data Analysis": "R / 데이터 분석",
  SQL: "SQL",
  Design: "디자인",
  Photoshop: "Photoshop",
  Illustrator: "Illustrator",
  "Premiere Pro": "Premiere Pro",
  Slack: "Slack",
  Notion: "Notion",
  Productivity: "생산성",
  Excel: "Excel",
  PowerPoint: "PowerPoint",
  Resume: "이력서",
  "Career snapshot": "커리어 스냅샷",
  "A concise overview of academic background, professional experiences, and project-based achievements across brand strategy, marketing planning, data analysis, and collaboration.":
    "학업 배경, 실무 경험, 브랜드 전략, 마케팅 기획, 데이터 분석, 협업 기반 프로젝트 성과를 간결하게 정리한 문서입니다.",
  "Brand strategy": "브랜드 전략",
  "Marketing planning": "마케팅 기획",
  "Data-driven analysis": "데이터 기반 분석",
  Certificate: "수료증",
  "Learning archive": "학습 아카이브",
  "Certificates from UX/HCI, digital marketing, beauty brand management, design, content creation, and related programs that support both strategic and creative practice.":
    "전략적·창의적 실무를 뒷받침하는 UX/HCI, 디지털 마케팅, 뷰티 브랜드 매니지먼트, 디자인, 콘텐츠 제작 등 관련 프로그램 수료증입니다.",
  "A dedicated archive of completion certificates from the original portfolio, gathered here so the materials can be reviewed without leaving this site.":
    "기존 포트폴리오의 수료증 자료를 이 사이트 안에서 바로 검토할 수 있도록 모은 전용 아카이브입니다.",
  "View Certificates": "수료증 보기",
  "UX / HCI": "UX / HCI",
  "Digital marketing": "디지털 마케팅",
  "Beauty brand management": "뷰티 브랜드 매니지먼트",
  License: "자격증",
  "Verified capability": "검증된 역량",
  "Licenses and certifications that demonstrate practical capability across structured data, AI prompt workflows, accounting, digital design, and content production.":
    "구조화 데이터, AI 프롬프트 워크플로우, 회계, 디지털 디자인, 콘텐츠 제작 분야의 실무 역량을 보여주는 자격 및 인증 자료입니다.",
  "A dedicated archive of licenses and verified capability documents from the original portfolio, kept inside this portfolio for a smoother review flow.":
    "기존 포트폴리오의 자격증과 검증 자료를 더 매끄러운 검토 흐름을 위해 이 포트폴리오 안에 정리한 전용 아카이브입니다.",
  "View Licenses": "자격증 보기",
  "SQLD / AI-POT": "SQLD / AI-POT",
  "Accounting management": "회계관리",
  "Adobe Photoshop / After Effects": "Adobe Photoshop / After Effects",
  "Resume, completion certificates, and licenses are organized as separate review pages so the supporting materials can be checked inside this portfolio.":
    "이력서, 수료증, 자격증은 이 포트폴리오 안에서 바로 확인할 수 있도록 별도의 검토 페이지로 정리했습니다.",
  "On this page, you can explore a more personal and introspective side of who I am. I love traveling and taking photographs, and I also enjoy working on design projects as a hobby. You can find more details about my work on the pages below.":
    "이 페이지에서는 저의 더 개인적이고 내면적인 면을 살펴볼 수 있습니다. 저는 여행과 사진 촬영을 좋아하고, 취미로 디자인 작업을 이어가고 있습니다. 아래 페이지에서 관련 작업을 더 자세히 확인할 수 있습니다.",
  "Traveling & Photography": "여행 & 사진",
  "I travel around the world to broaden my perspective and gain new insights and inspiration for my creative work.":
    "저는 시야를 넓히고 창작 작업을 위한 새로운 인사이트와 영감을 얻기 위해 세계 곳곳을 여행합니다.",
  "I enjoy turning ideas into tangible visual outcomes and continue to pursue design as a hobby.":
    "아이디어를 구체적인 시각 결과물로 바꾸는 것을 즐기며, 취미로도 꾸준히 디자인 작업을 이어가고 있습니다.",
  Photography: "사진",
  "Travel Photo": "여행 사진",
  "Poster Design": "포스터 디자인",
  "Graphic Design": "그래픽 디자인",
  "Art Direction": "아트 디렉션",
  "Character Design": "캐릭터 디자인",
  "Editorial Design": "에디토리얼 디자인",
  "3D / Visual Study": "3D / 비주얼 스터디",
  "Urban Texture": "도시의 질감",
  "Memory Frame": "기억의 프레임",
  "Perspective Archive": "시선 아카이브",
  "Travel Light Study": "여행 빛 스터디",
  "City Rhythm": "도시의 리듬",
  "Travel Portrait": "여행 포트레이트",
  "Global Inspiration": "글로벌 인스피레이션",
  "Moment Archive": "순간 아카이브",
  "NOI Lab Poster": "NOI Lab 포스터",
  "NOI Lab Card News": "NOI Lab 카드뉴스",
  "Love Art Poster": "Love Art 포스터",
  "Brand Character": "브랜드 캐릭터",
  "Brand Character Variant": "브랜드 캐릭터 변형",
  "Visual Layout Study": "비주얼 레이아웃 스터디",
  "Design Object Study": "디자인 오브젝트 스터디",
  "Observation-led photography focused on place, light, and cultural texture.":
    "장소, 빛, 문화적 질감에 주목한 관찰 중심 사진입니다.",
  "Travel moments translated into visual references for brand mood and storytelling.":
    "여행의 순간을 브랜드 무드와 스토리텔링을 위한 시각 레퍼런스로 전환했습니다.",
  "A personal image archive that keeps global inspiration close to strategy work.":
    "전략 작업 가까이에 글로벌 영감을 두기 위한 개인 이미지 아카이브입니다.",
  "A moment from the travel archive, captured to keep color, light, and memory vivid.":
    "색, 빛, 기억을 선명하게 남기기 위해 포착한 여행 아카이브의 한 장면입니다.",
  "A visual note from places I visited while observing local details and pace.":
    "현지의 디테일과 리듬을 관찰하며 남긴 시각 노트입니다.",
  "Personal travel photography from the archive shown on the original portfolio.":
    "기존 포트폴리오에 담긴 개인 여행 사진 아카이브입니다.",
  "Travel around Thailand, Japan, Switzerland, France, the United Kingdom, Germany, Vietnam, China, and more.":
    "태국, 일본, 스위스, 프랑스, 영국, 독일, 베트남, 중국 등 여러 나라를 여행하며 얻은 기록입니다.",
  "The photos are taken while traveling and kept as personal references for creative work.":
    "여행 중 촬영한 사진들을 창작 작업을 위한 개인 레퍼런스로 보관하고 있습니다.",
  "Promotional poster work for a cognitive training program.":
    "인지 훈련 프로그램을 위한 홍보 포스터 작업입니다.",
  "Card-news style design work balancing information clarity and brand tone.":
    "정보 명료성과 브랜드 톤의 균형을 맞춘 카드뉴스 스타일 디자인 작업입니다.",
  "Editorial-style visual composition exploring emotional tone and typography.":
    "감정적 톤과 타이포그래피를 탐구한 에디토리얼 스타일의 비주얼 구성입니다.",
  "Mascot-style illustration for approachable product and brand storytelling.":
    "친근한 제품 및 브랜드 스토리텔링을 위한 마스코트 스타일 일러스트입니다.",
  "A softer mascot variation designed for approachable product communication.":
    "친근한 제품 커뮤니케이션을 위해 설계한 부드러운 마스코트 변형입니다.",
  "A hobby design piece from the original portfolio archive.":
    "기존 포트폴리오 아카이브에 담긴 취미 디자인 작업입니다.",
  "A playful visual study balancing glossy form, object memory, and pop color.":
    "글로시한 형태, 오브젝트의 기억, 팝한 색감의 균형을 탐구한 장난스러운 비주얼 스터디입니다.",
};

export function translateText(language: Language, value: string) {
  if (language === "en") return value;
  return ko[value] ?? value;
}

export function translateList(language: Language, values: string[]) {
  return values.map((value) => translateText(language, value));
}
