import { useContext } from "react";
import "../styles/Home.css";
import { LanguageContext } from "../context/LanguageContext";
import { PortfolioPage } from "./PortfolioPage";
import { InteractiveMenu } from "../components/InteractiveMenu";
import { About } from "./About";
import { Contact } from "./Contact";

export const Home = () => {
  const onMouseHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.setProperty("--x", `${x}px`);
    document.body.style.setProperty("--y", `${y}px`);
  };
  const { type } = useContext(LanguageContext);

  return (
    <>
      <div className="home-wrapper" onMouseMove={onMouseHandler}>
        <div className="home-container"></div>
        <div className="content-container">
          <div className="introduction-container">
            <div className="lightIntro">
              <section className="split2">
              <h1 className="intro-heading">{type === "sv" ? "Hej! Mitt namn är Moses Kinuka" :  "Hi! My name is Moses Kinuka" }</h1>
              <h3 className="intro-text">{type === "sv" ? "Varmt välkommen till min portfolio. Här kan du utforska mina färdigheter inom front-end utveckling och UX/UI-design, samt ta del av de projekt jag har jobbat med under min resa in i techvärlden." : 
              "A warm welcome to my portfolio. Here you can explore my skills in front-end development and UX/UI design, and discover the projects I’ve worked on throughout my journey into the tech world." } 
              </h3>
              </section>
              <section className="split">
                <div className="lia-sektion">
                  <p>{type === "sv" ? "Just nu söker jag en LIA/praktikplats inom frontend utveckling. Jag är tillgänglig under följande perioder:" : "Currently, I am looking for an internship (LIA) within frontend development. I am available during the following periods:"}</p>
                  <ul>
                    <li>{type === "sv" ? "Vecka 39–48, 2025" : "Weeks 39–48, 2025"}</li>
                    <li>{type === "sv" ? "Vecka 3–18, 2026" : "Weeks 3-18, 2026"}</li>
                  </ul>
                  <p>{type === "sv" ? "Är du eller ditt företag intresserade? Hör gärna av dig via mitt" : "Are you or your company interested? Feel free to reach out via my"} <a href="#contact-container">{type === "sv" ? "Kontaktformulär" : "contact form"}</a> {type === "sv" ? "eller på LinkedIn!": "or on Linkedin!"}</p>
                </div>
              </section>
            </div>
            {/* <div className="arrow-container">
                <a href="#browse-section">
                  <h3 className="arrow-container">
                    <i className="arrow down"></i>
                  </h3>
                </a>
            </div>   */}
          </div>
          <InteractiveMenu></InteractiveMenu>
          <section className="port-center-pos">
          <PortfolioPage></PortfolioPage>
          </section>
            <About></About>
          <section className="contact-center-pos">
            <Contact></Contact>
          </section>
            
        </div>
      </div>
    </>
  );
};
