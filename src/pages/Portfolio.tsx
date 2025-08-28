import "../styles/Portfolio.css";
import { portfolioItems } from "../Data/portfolioData";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const Portfolio = () => {
  const { type } = useContext(LanguageContext);

  return (
    <>
      <article id="main-container">
        <h1 id="main-headiing">{type === "sv" ? "Projekt" : "Projects"}</h1>
        <section id="portfolio-section">
          {portfolioItems.map((p) => (
            <div className="portfolio-container" key={p[type].id}>
              <h2 className="portfolio-heading">{p[type].title}</h2>
              <div className="image-container">
                {p[type].imgUrl.map((i, idx) => (
                  <img key={idx} src={i} className="portfolio-img" />
                ))}
              </div>
              <p className="portfolio-text-style">{p[type].description}</p>
            </div>
          ))}
        </section>
        <h1>Resumé</h1>
        <object
           data={`${import.meta.env.BASE_URL}cv.pdf`}
          type="application/pdf"
          id="cv-pdf"
        ></object>
      </article>
    </>
  );
};
