import { useContext, useState } from "react";
import "../styles/Home.css";
import { LanguageContext } from "../context/LanguageContext";

export const Home = () => {
  const onMouseHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.setProperty("--x", `${x}px`);
    document.body.style.setProperty("--y", `${y}px`);
  };
  const {type, setLanguage} = useContext(LanguageContext)

  return (
    <>
      <div className="home-wrapper" onMouseMove={onMouseHandler}>
        <div className="home-container"></div>
        <div className="content-container">
          <div className="video-box">
            <video autoPlay muted loop playsInline className="video-back">
              <source src="/src/assets/video.mp4" type="video/mp4" />
            </video>
            <h1 className="name-heading">Moses Kinuka</h1>
            <div className="arrow-container">
              <h2>
                {type === "sv" ? "Scrolla ner" : "Get started"}
                {/* Get started */}
                </h2>
              <a href="#browse-section">
                <h3 className="arrow-container">
                  <i className="arrow down"></i>
                </h3>
              </a>
            </div>
          </div>
          <section id="browse-section">
            <div className="project-cards">
              <div className="the-front"><h1>
                {type === "sv" ? "Om Mig" : "About Me"}
                </h1></div>
              <div className="the-back">back card</div>
            </div>
            <div className="project-cards">
             <div className="the-front"><h1>
              {type === "sv" ? "Projekt" : "Projects"}
              </h1></div>
              <div className="the-back">
                <div className="img-wrapper">
                  <img className="img-slide" src="/src/assets/secound/webshop.png" alt="webshop" />
                  <img className="img-slide" src="/src/assets//first/The-auction.png" alt="auction" />
                  <img className="img-slide" src="/src/assets/third/fullsize1.png" alt="html-css project" />
                </div>
                
              </div>
            </div>
            <div className="project-cards">
              <div className="the-front"><h1>
                {type === "sv" ? "Kontakta mig" : "Contact"}
                </h1></div>
              <div className="the-back">back card</div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
