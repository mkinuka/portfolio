import { portfolioItems } from "../Data/portfolioData";
import { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router";

export const PortfolioPage = () => {
  const { type } = useContext(LanguageContext);
  const containerRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    containerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <article  id="navigate-port" className=" w-[90vw] flex flex-col items-center mb-[20vh]">
      <h1 className="text-white text-4xl font-bold mb-4" id="main-headiing">
        {type === "sv" ? "Projekt" : "Projects"}
      </h1>
      <a
        className="inline-block mb-12 px-4 py-2 rounded-lg font-semibold bg-white text-gray-900 no-underline hover:bg-[#331970] hover:text-gray-200 transition-colors duration-200"
        href={`${import.meta.env.BASE_URL}cv.pdf`}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        {type === "sv" ? "Ladda ner CV" : "Download CV"}
      </a>

        <section className="flex flex-wrap gap-10 justify-center">
        {portfolioItems.map((p, index) => (
          <div key={p[type].id} className="flex flex-col items-center">
            <Link
              to={`/portfolio/${p[type].id}`}
              className="portfolio-card-link flex flex-col w-[420px] max-[2000px]:w-[350px] rounded-2xl overflow-hidden bg-purple-950/10 shadow-lg shadow-black/80 backdrop-blur-sm no-underline cursor-pointer"
              ref={(el) => { containerRefs.current[index] = el; }}
            >
              <img
                src={p[type].imgUrl[0]}
                className="w-full h-[208px] max-[2000px]:h-[173px] object-cover"
                alt=""
              />
              <div className="flex flex-col items-center px-3 py-3 gap-3">
                <h2 className="text-white w-full text-sm text-left font-semibold text-center m-0">
                  {p[type].title}
                </h2>
                <div className=" flex flex-row justify-start w-full">
                <div className="w-full h-px bg-gradient-to-r  via-[rgba(2,255,255,0.3)] to-transparent" />
                </div>
                <p className="text-purple-200/80 text-xs text-center text-left  mt-2 leading-relaxed px-1">
                  {p[type].shortDescription}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </article>
  );
};


