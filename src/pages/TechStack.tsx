import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiGit,
  SiTrello,
  SiPhp,
  SiWordpress,
  SiFigma,
  SiLinear,
  SiCanva,
  SiGithub,
  SiBitbucket,
  SiSupabase,
} from "react-icons/si";
import {  RiNextjsLine } from "react-icons/ri"
import { TbBrandOffice } from "react-icons/tb";
import type { TechCard } from "../types/techStack";

const cardClass =
  "relative flex flex-col items-center justify-center gap-2 w-[100px] h-[100px] max-[768px]:w-[85px] max-[768px]:h-[90px] bg-white/[0.04] border border-white/[0.08] rounded-2xl px-3 py-4 transition-all duration-[250ms] ease-in-out cursor-default hover:bg-white/[0.08] hover:border-[rgba(2,255,255,0.35)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(2,255,255,0.15)]";
  
const techStack: TechCard[] = [
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <RiNextjsLine/>, color: "#fff" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Express", icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Supabase", icon: <SiSupabase/>, color:"#34B27B" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "PHP", icon: <SiPhp />, color: "#777BB4", level: "beginner" },
  { name: "WordPress", icon: <SiWordpress />, color: "#21759B", level: "beginner" },
];

const designTools: TechCard[] = [
  { name: "Trello", icon: <SiTrello />, color: "#0052CC" },
  { name: "MS Office", icon: <TbBrandOffice />, color: "#D83B01" },
  { name: "Figma", icon: <SiFigma />, color: "#ffffff", level: "beginner" },
  { name: "Linear", icon: <SiLinear />, color: "#ffffff"},
  { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
  { name: "Github", icon: <SiGithub />, color: "#ffffff" },
  { name: "Bitbucket", icon: <SiBitbucket />, color: "#0052CC" },
];

export const TechStack = () => {
  const { type } = useContext(LanguageContext);

  return (
    <section className="min-h-[150vh] flex flex-col justify-center py-24 gap-24 max-[768px]:py-16 max-[768px]:gap-16">
      {/* Dev Stack */}
      <div className="flex flex-col items-start gap-8 w-full">
        <h2 className="text-white text-[clamp(3rem,6vw,6rem)] m-0 leading-none">Tech Stack</h2>
        <p className="font-['Inter',sans-serif] text-[1.1rem] text-white/55 m-0 max-w-[500px]">
          {type === "sv"
            ? "Tekniker och verktyg jag jobbar med dagligen."
            : "Technologies and tools I work with daily."}
        </p>
        <div className="flex flex-wrap gap-4 w-full">
          {techStack.map((tech) => (
            <div key={tech.name} className={cardClass}>
              <span
                className="text-[2.2rem] max-[768px]:text-[1.8rem] flex items-center justify-center"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </span>
              <span className="font-['Inter',sans-serif] text-[0.7rem] text-center text-white/75 tracking-[0.03em] leading-tight">
                {tech.name}
              </span>
              {tech.level === "beginner" && (
                <span className="absolute -top-2 -right-2 font-['Inter',sans-serif] text-[0.55rem] font-semibold uppercase tracking-[0.05em] bg-[rgba(119,107,180,0.3)] border border-[rgba(119,107,180,0.6)] text-[#a99fdd] px-1.5 py-0.5 rounded-full">
                  Beginner
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(2,255,255,0.3)] to-transparent" />

      {/* Design & Tools */}
      <div className="flex flex-col items-end max-[1200px]:items-start gap-8 w-full">
        <h2 className="text-white text-[clamp(3rem,6vw,6rem)] m-0 leading-none">
          {type === "sv" ? "Design & Verktyg" : "Design & Tools"}
        </h2>
        <p className="font-['Inter',sans-serif] text-[1.1rem] text-white/55 m-0 max-w-[500px] text-right max-[1200px]:text-left">
          {type === "sv"
            ? "Program och plattformar jag använder för planering och produktivitet."
            : "Software and platforms I use for planning and productivity."}
        </p>
        <div className="flex flex-wrap justify-end max-[1200px]:justify-start gap-4 w-full">
          {designTools.map((tool) => (
            <div key={tool.name} className={cardClass}>
              <span
                className="text-[2.2rem] max-[768px]:text-[1.8rem] flex items-center justify-center"
                style={{ color: tool.color }}
              >
                {tool.icon}
              </span>
              <span className="font-['Inter',sans-serif] text-[0.7rem] text-center text-white/75 tracking-[0.03em] leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
