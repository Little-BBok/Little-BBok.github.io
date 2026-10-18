// Korean translation of the uploaded PDF; dates and claims follow the document.
export function KoreanResume({ highlighted }: { highlighted: boolean }) {
  return <article className={`resume-korean${highlighted ? " is-highlighted" : ""}`} lang="ko" aria-label="이수민 한국어 이력서">
    <header className="resume-document-header">
      <h2>이수민 <span>Sumin Lee</span></h2>
      <div>서울특별시 서대문구<br />(+82) 10-8355-5088 | leesm5088@naver.com<br />LinkedIn: sumin-lee-0270a8292<br />Portfolio: little-bbok.github.io</div>
    </header>
    <section>
      <h3>학력</h3>
      <div className="resume-entry-heading"><h4>연세대학교 · 서울, 대한민국</h4><span>2023.03 – 현재</span></div>
      <p className="resume-document-role">경영학 학사 과정 · 2028년 2월 졸업 예정</p>
      <ul><li>학점: 4.23 / 4.3</li></ul>
    </section>
    <section>
      <h3>실무 경험</h3>
      <div className="resume-entry-heading"><h4>비나우 (넘버즈인 · 퓌 · 노크) · 서울</h4><span>2026.09 – 현재</span></div>
      <p className="resume-document-role">일본사업 MD 인턴 | 넘버즈인 &amp; 퓌</p>
      <ul>
        <li>Qoo10·@cosme의 <mark data-result="reviews">일본어 소비자 리뷰 1,061건을 분석</mark>하고, 넘버즈인의 국내 시장을 위한 스킨케어 시간 절약·메이크업 전 준비 중심의 메시지 제안</li>
        <li>성분·피부 고민 중심으로 넘버즈인 Qoo10 샵 개편: 추천 검색어, 기획전 태그 20개, 제품 라인별 타이틀 정비 및 메가포 메인 비주얼·라이브 배너·쿠폰 배너 기획</li>
        <li>퓌의 5개 이커머스 채널(Qoo10·Rakuten·Amazon·TikTok Shop·자사몰) 일일 매출 데이터 취합, 행사 전 상품코드 검증 및 Qoo10 재고 업데이트</li>
      </ul>
      <div className="resume-entry-heading"><h4>ALUS Healthcare · 서울</h4><span>2025.03 – 2025.09</span></div>
      <p className="resume-document-role">브랜드 매니저</p>
      <ul>
        <li>웰니스·뷰티 브랜드 <mark data-result="partnerships">POWAPOWA 론칭</mark>, 브랜드 아이덴티티·포지셔닝 수립 및 <mark data-result="partnerships">Qoo10 Japan·메리어트 목시 서울 인사동의 인바운드 협업 제안 유치</mark></li>
        <li><mark data-result="product">디바이스·패키지 기획 및 이커머스 UX(정보 구조·와이어프레임) 리드</mark>, 제조사 소싱·가격 협상을 통해 <mark data-result="product">단위 생산 비용 24% 절감</mark></li>
        <li>소셜 콘텐츠·인플루언서 협업 10건·브랜드 서포터즈 프로그램을 통해 <mark data-result="growth">인스타그램 팔로워 10명 → 1,707명 성장</mark>, <mark data-result="growth">UGC 콘텐츠 48건 제작</mark></li>
      </ul>
      <div className="resume-entry-heading"><h4>NOI LAB · 서울</h4><span>2023.12 – 2024.10</span></div>
      <p className="resume-document-role">콘텐츠팀 서비스 기획·사업 지원 인턴</p>
      <ul>
        <li>반복 사용 유인 부족·제한적인 진척도 피드백 개선을 위해 게이미피케이션·포인트 시스템 기반 트레이닝 앱 리뉴얼 기획, 2024년 OKR·KPI 수립 및 실행 우선순위 제안</li>
        <li>유아·아동·고령층 대상 5개 발달 영역의 인지 스포츠 커리큘럼 설계, <mark data-result="program">아동 테스트를 통한 개선 후 회사 공식 프로그램으로 채택</mark></li>
      </ul>
    </section>
    <section>
      <h3>주요 프로젝트 및 활동</h3>
      <div className="resume-entry-heading"><h4>began | UXIM (HCI/UX 학회)</h4><span>2026.03 – 2026.09</span></div>
      <p className="resume-document-role">프로덕트 매니저</p>
      <ul>
        <li>식이 제약이 있는 사용자를 위한 <mark data-result="began">began 기획 리드</mark>: 콘셉트·타깃·페르소나부터 사용성 테스트·반복적 UI/UX 설계까지 수행. 팀은 <mark data-result="began">UXIM × YCC 1위 및 2026 썸머 워크스테이션 우수상 수상</mark></li>
        <li><mark data-result="marketing">서비스 마케팅·외부 제휴 리드</mark>, <mark data-result="marketing">채널 개설 첫 10일간 인스타그램 조회수 19,220회·신규 팔로워 365명 확보</mark> (2026.08)</li>
      </ul>
      <div className="resume-entry-heading"><h4>3HOURSAGO (여행 플랫폼)</h4><span>2025.04 – 2026.03</span></div>
      <p className="resume-document-role">제휴 콘텐츠 크리에이터</p>
      <ul><li>제휴 링크를 통한 <mark data-result="travel">여행 상품 누적 매출 17,000달러 달성</mark>, 성과 데이터를 활용한 콘텐츠·예약 안내 개선</li></ul>
      <div className="resume-entry-heading"><h4>KCC (커머스·전략 학회)</h4><span>2024.08 – 2024.11</span></div>
      <p className="resume-document-role">서비스 기획·UI/UX 디자인 리드</p>
      <ul><li>B2C 확장을 위한 위치 기반 카메라 앱 콘셉트·UI/UX 개발, <mark data-result="kcc">최종 피칭 1위 및 파트너사 상용 출시 기여</mark></li></ul>
    </section>
    <section>
      <h3>역량</h3>
      <dl className="resume-document-skills">
        <dt>데이터·업무 도구</dt><dd>SQL, R, Excel, PowerPoint, Word</dd>
        <dt>디자인</dt><dd>Figma, Adobe Photoshop, Illustrator, Premiere Pro</dd>
        <dt>언어</dt><dd>한국어 (모국어), 영어 (유창), 일본어 (기초)</dd>
      </dl>
    </section>
  </article>;
}
