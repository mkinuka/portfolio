import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/InteractiveMenu.css";
import img1 from "../assets/interactiveMenuimg/mosesk1.jpeg";
import img2 from "../assets/interactiveMenuimg/mosesk2.jpeg"
import img3 from "../assets/interactiveMenuimg/interactiveMenuImg.png"
import img4 from "../assets/interactiveMenuimg/interactiveMenuImg2.png"
import img5 from "../assets/interactiveMenuimg/mail.jpg"
import img6 from "../assets/interactiveMenuimg/mail2.jpg"
import {FaGithub, FaLinkedin, FaLinkedinIn} from "react-icons/fa"

export const InteractiveMenu = () => {
      const { type } = useContext(LanguageContext);
    

    return <>
    
      <section id="browse-section">
            <div className="project-cards">
               <div className="the-front">
                <img className="container-img" src={img1} alt="img of me"></img>
                <h1 className="interactiv-header">{type === "sv" ? "Om Mig" : "About Me"}</h1>
              </div>
              <div className="the-back">
              <img className="container-img-back" src={img2} alt="img of project"></img>
                <div className="link-box-style">
                <a className="project-links1" href="#about-container">{type === "sv" ? "Lär känna mig" : "Get to know me"}</a>
                </div>
              </div>
            </div>
            <div className="project-cards">
              <div className="the-front">
                <img className="container-img" src={img3} alt="img of project"></img>
                <h1 className="interactiv-header">{type === "sv" ? "Projekt" : "Projects"}</h1>
              </div>
              <div className="the-back">
                <img className="container-img-back" src={img4} alt="img of project"></img>
                <div className="link-box-style">
                <a className="project-links1" href="#main-container">{type === "sv" ? "Besök Mina projekt" : "Visit my Projects"}</a>
                <a className="project-links2" href="#cv-pdf">{type === "sv" ? "Mitt CV" : "My Resumé"}</a>
                </div>
              </div>
            </div>
            <div className="project-cards">
              <div className="the-front">
                <img className="container-img" src={img5} alt="img of a mailbox"></img>
                <h1 className="interactiv-header">{type === "sv" ? "Kontakta mig" : "Contact"}</h1>
              </div>
              <div className="the-back">
              <img className="container-img-back" src={img6} alt="img of project"></img>
              <div className="link-box-style">
              <a className="project-links1" href="#contact-container"> {type === "sv" ? "Kontakta mig" : "Contact me"}</a>
              <a className="project-links1"  href="https://www.linkedin.com/in/moses-kinuka-581b3b2a8" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="linkedin-icon" /> {type === "sv" ? "Linkedin" : "Linkedin"}</a>
              <a className="project-links1"  href="https://www.github.com/mkinuka" target="_blank" rel="noopener noreferrer"><FaGithub className="github-icon" />{type === "sv" ? "Github" : "Github"}</a>
                </div>
              </div>
            </div>
          </section>
    
    </>
}