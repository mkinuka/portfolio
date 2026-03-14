import { useParams, useNavigate } from "react-router";
import { portfolioItems } from "../Data/portfolioData";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { type } = useContext(LanguageContext);
  const navigate = useNavigate();

  const portfolioItem = portfolioItems.find((item) => item[type].id === Number(id));

  const [activeImg, setActiveImg] = useState(0);

  if (!portfolioItem) {
    return (
      <div className="max-w-[1200px] mx-auto p-8 min-h-screen text-white max-[768px]:p-4">
        <h1>{type === "sv" ? "Projekt inte hittat" : "Project not found"}</h1>
        <button
          onClick={() => navigate("/#navigate-port")}
          className="bg-[#331970] text-white border-none px-6 py-3 rounded-lg text-base cursor-pointer mb-8 transition-colors duration-300 hover:bg-[#4a2398]"
        >
          {type === "sv" ? "Tillbaka till projekt" : "Back to projects"}
        </button>
      </div>
    );
  }

  const currentItem = portfolioItem[type];
  const images = currentItem.imgUrl;

  return (
    <article className="max-w-[1200px] mx-auto px-8 py-12 min-h-screen text-white max-[768px]:px-4 max-[768px]:py-8">

      {/* Top nav row */}
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white px-5 py-2.5 rounded-full text-sm cursor-pointer transition-all duration-200"
        >
          ← {type === "sv" ? "Tillbaka" : "Back"}
        </button>
        {currentItem.githubUrl && (
          <a
            href={currentItem.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#331970] hover:bg-[#4a2398] text-white no-underline px-5 py-2.5 rounded-full text-sm transition-all duration-200"
          >
            GitHub →
          </a>
        )}
      </div>

      {/* Title */}
      <h1 className="text-[clamp(2rem,5vw,4rem)] mb-10 leading-tight">{currentItem.title}</h1>

      {/* Featured image */}
      <div className="w-full h-[60vh] p-4 overflow-hidden rounded-2xl mb-4 bg-black/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-center">
        <img
          src={images[activeImg]}
          alt={`${currentItem.title} ${activeImg + 1}`}
          className="w-full h-full object-contain transition-opacity duration-300"
        />
      </div>

      {/* Thumbnail strip — only shown when there are multiple images */}
      {images.length > 1 && (
        <div className="flex gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(idx)}
              className={`flex-shrink-0 w-24 h-16 max-[500px]:w-16 max-[500px]:h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                idx === activeImg
                  ? "border-[rgba(2,255,255,0.7)] shadow-[0_0_12px_rgba(2,255,255,0.3)]"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={img}
                alt={`thumb ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Description */}
      <div className="text-[1.1rem] text-left leading-[1.8] bg-[rgba(101,2,126,0.15)] border border-white/[0.06] p-8 rounded-2xl mb-8 [&_ul]:my-4 [&_ul]:pl-8 [&_li]:my-2 [&_b]:text-[#a78bfa] max-[768px]:text-base max-[768px]:p-6">
      <h3 className="text-[2rem] font-semibold">Info</h3>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(2,255,255,0.3)] to-transparent my-4" />

        {currentItem.description}
      </div>

    </article>
  );
};
