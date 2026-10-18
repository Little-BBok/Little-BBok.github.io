const aboutPhrases = [
  "Business Administration at Yonsei University", "연세대학교에서 경영학을 전공",
  "data-driven insights", "human-centered empathy", "데이터 기반 인사이트", "사람 중심의 공감",
  "brand, product, and service strategies", "브랜드, 제품, 서비스 전략",
  "service development, data analytics, and branding projects", "서비스 개발, 데이터 분석, 브랜딩 프로젝트를 주도",
];

const experiencePhrases = [
  "Multi-channel E-commerce Operations / Daily Sales Reporting", "다채널 이커머스 운영 / 일일실적 관리",
  "Pre-campaign Product Data Validation", "프로모션 전 상품 정보 점검",
  "Inventory Verification & Updates", "재고 점검 및 업데이트",
  "Qoo10 Japan Shop Revamp", "Qoo10 Japan 샵 개편",
  "October Mega Po Content Planning", "10월 메가포 콘텐츠 기획",
  "Japanese Consumer Review Analysis", "일본 소비자 리뷰 분석",
  "Product & Channel Operations", "상품·채널 운영",
  "1,061", "20 Q·Special search tags", "Q·Special 검색 태그 20개",
  "end-to-end product planning and branding", "제품 기획 및 브랜딩 전 과정 리드",
  "Developed and launched POWAPOWA", "POWAPOWA 개발 및 론칭",
  "IA, wireframes, and functional prototype development", "IA·와이어프레임·기능형 프로토타입 개발 리드",
  "reducing unit production costs by 24%", "단위 생산 비용 24% 절감",
  "10 to 1,707", "10명 → 1,707명", "21,000+ views", "2.1만+ 조회수", "334,000+ views", "33.4만+",
  "48 UGC pieces", "UGC 48건", "852 comments", "댓글 852건", "732 likes", "좋아요 732회",
  "customer behavior", "purchase journey", "고객 행동 분석", "구매 여정 개선",
  "competitive analysis and usability study", "경쟁 분석 및 사용성 조사",
  "UX, GUI, and cybersickness metrics", "UX, GUI, 사이버멀미 지표",
  "comprehensive report", "종합 리포트", "24.4% follower growth", "팔로워 24.4% 성장",
  "Single-handedly planned", "오프라인 박람회 부스 단독 기획",
  "renewal planning", "애플리케이션 리뉴얼 기획 리드", "Cognitive Sports Curriculum",
  "H2 2024 OKRs", "2024년 하반기 OKR 수립", "Began product planning", "Began 제품 기획 리드",
  "1st place", "1위 수상", "Excellence Award", "우수상 수상",
  "wireframes and prototypes", "와이어프레임·프로토타입 제작",
  "IoT water-tracking device", "IoT 수분 섭취 추적 디바이스",
  "neuromarketing research", "뉴로마케팅 실험 설계·실행",
  "peer-reviewed academic journal", "동료심사 학술지 게재",
  "brand identity", "브랜드 아이덴티티", "B2C market expansion", "B2C 시장 확장 전략 수립",
  "commercialization and launch", "상용화 및 출시", "consulting project", "컨설팅 프로젝트",
];

export function EmphasizedText({ text, variant }: { text: string; variant: "about" | "experience" }) {
  const phrases = (variant === "about" ? aboutPhrases : experiencePhrases)
    .filter((phrase) => text.includes(phrase))
    .sort((a, b) => b.length - a.length);
  if (!phrases.length) return text;
  const pattern = new RegExp(`(${phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  return text.split(pattern).map((part, index) => phrases.includes(part)
    ? <strong className={`text-emphasis text-emphasis-${variant}`} key={index}>{part}</strong>
    : part);
}
