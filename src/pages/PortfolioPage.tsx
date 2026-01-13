import "../styles/Portfolio.css";
import { portfolioItems } from "../Data/portfolioData";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const PortfolioPage = () => {
  const { type } = useContext(LanguageContext);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      <article id="main-container">
        <h1 id="main-headiing">{type === "sv" ? "Projekt" : "Projects"}</h1>
          <a
          className="cv-download"
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          {type === "sv" ? "Ladda ner CV" : "Download CV"}
        </a>
        <section id="portfolio-section">
          {portfolioItems.map((p) => {
            const isExpanded = expandedItems.has(p[type].id);
            return (
              <div className="portfolio-container" key={p[type].id}>
                <h2 className="portfolio-heading">{p[type].title}</h2>
                {!isExpanded && (
                  <div className="image-container">
                    {p[type].imgUrl.map((i, idx) => (
                      <img key={idx} src={i} className="portfolio-img" />
                    ))}
                  </div>
                )}
                <div className="text-wrapper">
                  <p className={`portfolio-text-style ${isExpanded ? 'expanded' : ''}`}>
                    {p[type].description}
                  </p>
                  <button 
                    className="show-more-btn" 
                    onClick={() => toggleExpanded(p[type].id)}
                  >
                    {isExpanded 
                      ? (type === "sv" ? "Visa mindre" : "Show less")
                      : (type === "sv" ? "Visa mer" : "Show more")
                    }
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </article>
    </>
  );
};
