import { useState } from "react";
import { Highlighter, Languages } from "lucide-react";
import { resumeHighlights } from "../data/resumeHighlights";
import { KoreanResume } from "./KoreanResume";

export function ResumeViewer({ image, t }: { image: string; t: (text: string) => string }) {
  const [highlighted, setHighlighted] = useState(false);
  const [koreanResume, setKoreanResume] = useState(false);
  const ko = t("Resume") === "이력서";
  return (
    <section className="resume-viewer" aria-label={t("Resume")}>
      <div className="resume-toolbar">
        <div>
          <h3>{ko ? "이력서 한눈에 보기" : "A closer look at my resume"}</h3>
          <p>{ko ? "핵심 성과를 강조해 빠르게 살펴보세요." : "Highlight key results for a quick scan."}</p>
        </div>
        <div className="resume-controls">
          <button type="button" className={`button ${highlighted ? "primary" : "ghost"}`} aria-pressed={highlighted} onClick={() => setHighlighted(!highlighted)}>
          <Highlighter size={18} aria-hidden="true" />
          {ko ? "핵심 성과 강조" : "Highlight key results"}
          <span>{highlighted ? "ON" : "OFF"}</span>
          </button>
          <button type="button" className="button ghost" aria-pressed={koreanResume} onClick={() => setKoreanResume(!koreanResume)}>
            <Languages size={18} aria-hidden="true" />
            {koreanResume ? (ko ? "영문 원본 보기" : "View English original") : (ko ? "한국어로 보기" : "View in Korean")}
          </button>
        </div>
      </div>
      <div className="resume-paper">
        {koreanResume ? <KoreanResume highlighted={highlighted} /> : <>
          <img src={image} alt={ko ? "이수민 영문 이력서" : "Sumin Lee English resume"} />
          {highlighted && resumeHighlights.flatMap((item) => item.rects.map((rect, index) => (
            <span key={`${item.id}-${index}`} className="resume-highlight" aria-hidden="true" style={{ left: `${rect.left}%`, top: `${rect.top}%`, width: `${rect.width}%`, height: `${rect.height}%` }} />
          )))}
        </>}
      </div>
      {highlighted && <div className="resume-results" role="region" aria-label={ko ? "핵심 성과 요약" : "Key results summary"}>
        <p className="kicker">{ko ? "핵심 성과" : "KEY RESULTS"}</p>
        <ul>{resumeHighlights.map((item) => <li key={item.en}>{ko ? item.ko : item.en}</li>)}</ul>
      </div>}
    </section>
  );
}
