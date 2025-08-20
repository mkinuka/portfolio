import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/InteractiveMenu.css"


export const InteractiveMenu = () => {
      const { type } = useContext(LanguageContext);
    

    return <>
    
      <section id="browse-section">
            <div className="project-cards">
              <div className="the-front">
                <h1>{type === "sv" ? "Om Mig" : "About Me"}</h1>
              </div>
              <div className="the-back">back card</div>
            </div>
            <div className="project-cards">
              <div className="the-front">
                <h1>{type === "sv" ? "Projekt" : "Projects"}</h1>
              </div>
              <div className="the-back">
                <div className="img-wrapper">
                  <img
                    className="img-slide"
                    src="/src/assets/secound/webshop.png"
                    alt="webshop"
                  />
                  <img
                    className="img-slide"
                    src="/src/assets//first/The-auction.png"
                    alt="auction"
                  />
                  <img
                    className="img-slide"
                    src="/src/assets/third/fullsize1.png"
                    alt="html-css project"
                  />
                </div>
                <div className="link-box-style">
                <a href="#main-container">{type === "sv" ? "Besök Mina projekt" : "Visit my Projects"}</a>
                <a href="#cv-pdf">{type === "sv" ? "Mitt CV" : "My Resumé"}</a>
                </div>
              </div>
            </div>
            <div className="project-cards">
              <div className="the-front">
                <h1>{type === "sv" ? "Kontakta mig" : "Contact"}</h1>
              </div>
              <div className="the-back">back card</div>
            </div>
          </section>
    
    </>
}