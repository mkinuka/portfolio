import { PortfolioPage } from "./PortfolioPage";
import { InteractiveMenu } from "../components/InteractiveMenu";
import { About } from "./About";
import { Contact } from "./Contact";
import { TechStack } from "./TechStack";
import { CareerLadder } from "./CareerLadder";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

export const Home = () => {
  const { type } = useContext(LanguageContext);
  const onMouseHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.setProperty("--x", `${x}px`);
    document.body.style.setProperty("--y", `${y}px`);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden flex justify-center" onMouseMove={onMouseHandler}>
        <div className="home-gradient-bg"></div>
        <div className="w-[90vw] mb-30">
          <div className="min-h-[100vh]  mb-40 flex flex-col items-end min-[2100px]:justify-evenly max-[600px]:items-evenly">
             <div className="flex flex-col justify-start w-full">
            <h1 className="font-bold text-[5rem] text-start w-full max-[1000px]:text-[3rem] text-white">Moses Kinuka</h1>
             <div className="w-fit">
            <h4 className="typewriter-wrap">
              {type === "sv" ? (
              <><span className="tw-line1">Hejsan mitt namn är Moses,</span>
              <span className="tw-line2">Välkommen till min portfolio!</span></>
              ) : (
              <><span className="tw-line1">Hi, my name is Moses,</span>
              <span className="tw-line2">Welcome to my portfolio!</span></>
              )}
            </h4>
            </div>
           </div> 
            <InteractiveMenu />
          </div>
          <section className="w-[80vw] flex justify-center mx-auto">
            <PortfolioPage />
          </section>
          <section className="w-[80vw] mx-auto">
            <TechStack />
          </section>
          <section id="workLife-container" className="w-full">
            <CareerLadder />
          </section>
          <About />
          <section className="flex justify-center">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
};

