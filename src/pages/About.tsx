import { useContext } from "react";
import Picture from "../assets/moses2.png";
import "../styles/About.css";
import { LanguageContext } from "../context/LanguageContext";

export const About = () => {
  const {type} = useContext(LanguageContext)

  return (
    <>
      <div className="about-container">
        <img src={Picture} alt="Picture of me" id="about-img"></img>
        <div className="text-container">
          <h3>
            {type === "sv" ? "Om Mig" : "About me"}
          </h3>
          <p id="font-style">
            {type === "sv" ? "Hej, jag heter Moses Kinuka och är en 29-årig förstaårsstuderande frontendutvecklare med passion för att skapa interaktiva och responsiva webbplatser och applikationer. Utanför studierna är min största passion matlagning, och jag tycker om att experimentera med nya recept när jag kan. När jag inte står i köket eller kodar hittar du mig ofta ute i naturen – vandrande, fiskande eller bouldrande – eller hemma där jag spelar tv-spel. Jag har alltid med mig en positiv inställning och trivs bäst på arbetsplatser med en rolig och vänlig atmosfär. Jag tror att en bra miljö inspirerar till kreativitet och samarbete, och jag ser fram emot att utveckla mina färdigheter och bidra till verkliga projekt." : `  Hi, my name Moses Kinuka, I’m a 29-year-old first-year student
            front-end developer with a passion for creating interactive and
            responsive websites and applications. Outside of work, my biggest
            passion is cooking, and I enjoy experimenting with new recipes
            whenever I can. When I’m not in the kitchen or coding, you’ll find
            me outdoors hiking, fishing, or bouldering, or at home playing video
            games. I bring a positive attitude wherever I go, and I’m happiest
            in a workplace that fosters a fun and friendly atmosphere. I believe
            that a great environment can inspire creativity and collaboration,
            and I’m excited to grow my skills and contribute to real life
            projects.`}
            {/* // Hi, my name Moses Kinuka, I’m a 29-year-old first-year student
            // front-end developer with a passion for creating interactive and
            // responsive websites and applications. Outside of work, my biggest
            // passion is cooking, and I enjoy experimenting with new recipes
            // whenever I can. When I’m not in the kitchen or coding, you’ll find
            // me outdoors hiking, fishing, or bouldering, or at home playing video
            // games. I bring a positive attitude wherever I go, and I’m happiest
            // in a workplace that fosters a fun and friendly atmosphere. I believe
            // that a great environment can inspire creativity and collaboration,
            // and I’m excited to grow my skills and contribute to real life
            // projects. */}
          </p>
        </div>
      </div>
    </>
  );
};
