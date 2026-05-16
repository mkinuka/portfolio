import "../styles/MyWorklifeDiary.css";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import type { PageData } from "../types/pageData";

type PageProps = {
  isFlipped: boolean;
  data: PageData;
  delay?: number;
};

export const BookPage = ({ isFlipped, data, delay = 0 }: PageProps) => {
  const { type } = useContext(LanguageContext);

  const renderSide = (side: PageData["front"], sideClassName: string) => {
    if (side.isBlank) {
      return (
        <div className={sideClassName}>
          <div className="blank-side" aria-hidden="true" />
        </div>
      );
    }

    return (
      <div className={sideClassName}>
        <div className="job-side-layout">
          <div className="job-text-column">
            <section className="job-language-block" aria-label={type === "sv" ? "Swedish" : "English"}>
              <p className="job-language-label">{type === "sv" ? "Svenska" : "English"}</p>
              <h2 className="job-role">{type === "sv" ? side.svTitle : side.engTitle}</h2>
              <p className="job-meta">
                {type === "sv"
                  ? `${side.svCompany ?? ""}${side.svLocation ? `, ${side.svLocation}` : ""}`
                  : `${side.engCompany ?? ""}${side.engLocation ? `, ${side.engLocation}` : ""}`}
              </p>
              <p className="job-meta">{type === "sv" ? side.svPeriod : side.engPeriod}</p>
              <p className="job-description">{type === "sv" ? side.svDescription : side.engDescription}</p>
              <ul className="job-list">
                {((type === "sv" ? side.svResponsibilities : side.engResponsibilities) ?? []).map((responsibility, index) => (
                  <li key={`${type}-${index}`}>{responsibility}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="project-cards">
      <div
        className={`project-inner ${isFlipped ? "flipped" : ""}`}
        style={{ transitionDelay: `${delay}s` }}
      >
        {renderSide(data.front, "the-front")}
        {renderSide(data.back, "the-back")}
      </div>
    </div>
  );
};