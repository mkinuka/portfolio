import { PortfolioPage } from "./PortfolioPage";
import { InteractiveMenu } from "../components/InteractiveMenu";
import { About } from "./About";
import { Contact } from "./Contact";
import { TechStack } from "./TechStack";

export const Home = () => {
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
          <div className="min-h-[100vh] mb-40 flex flex-col items-center min-[2100px]:justify-evenly">
            <div className="flex justify-row justify-start w-full">
            <div className="flex flex-col justify-start">
            <h1 className="font-bold text-[5rem] text-start w-full max-[1000px]:text-[3rem]">Moses Kinuka</h1>
            <h4 className="cursor typewriter-animation">Hejsan mitt namn är Moses, välkommen till min portfolio!</h4>
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
          <About />
          <section className="flex justify-center">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
};

