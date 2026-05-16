import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { AutoPlaySlideshow } from "../components/AutoplaySlideshow";

export const About = () => {
  const { type } = useContext(LanguageContext);

  return (
    <>
      <section id="about-container">
        <section className="flex flex-row justify-center mb-[30vh] mt-[30vh]  max-[1600px]:items-center max-[1600px]:py-20 max-[1600px]:w-[90vw] max-[1600px]:gap-20 max-[1200px]:flex-col max-[1200px]:w-[90vw]">
          <div className="w-[40vw] flex flex-col text-lg px-12 pt-0 max-[1200px]:w-[90vw] max-[1200px]:px-0">
            <h3 className="text-[100px] text-white max-[600px]:text-[50px] m-0 text-left">{type === "sv" ? "Om mig" : "About me"}</h3>
            {type === "sv" ? (
              <p className="text-left text-white font-['Inter',sans-serif]">
                Mitt namn är Moses Kinuka och jag studerar just nu mitt andra år på
                Medieinstitutet till frontendutvecklare. Efter en längre tid av att söka
                efter något som verkligen motiverar mig arbetsmässigt känns det
                fantastiskt att ha hittat rätt och dessutom kunna presentera mig själv i en miljö
                jag själv har byggt upp.
                <br /><br />
                Jag bor strax utanför Stockholms innerstad och försöker
                nu ta mina första steg in i IT- och techvärlden. Utanför studierna har jag alltid haft många olika intressen,
                men just nu är det framför allt natur, träning och matlagning som ligger mig varmt om hjärtat.
                Naturintresset har funnits med mig länge, men de senaste åren har vandring och hiking blivit något alldeles särskilt.
                Att få uppleva platser som Abisko, Lofoten, Geiranger och de schweiziska alperna har verkligen gjort mig förälskad i landskapen,
                djurlivet och mötena med människor.
                <br /><br />
                Matlagningen tog fart i tidiga 20-årsåldern och
                har blivit en passion som ständigt utvecklas. Min far arbetade som kock och introducerade mig till hantverket, och jag fick även möjligheten
                att arbeta tillsammans med honom på restaurang. Att få lära mig yrket direkt från honom var ett privilegium och en erfarenhet jag alltid kommer bära med mig.
              </p>
            ) : (
              <p className="text-left text-white font-['Inter',sans-serif]">
                My name is Moses Kinuka and I am currently in my second year at Medieinstitutet, studying frontend development.
                After a long time searching for something that truly motivates me professionally, it feels amazing to have found
                the right path and to now be able to present myself in an environment I have built myself.
                <br /><br />
                I live just outside central
                Stockholm and I am now taking my first steps into the IT and tech world. Outside of my studies I have always had many
                different interests, but right now it is mainly nature, training, and cooking that are closest to my heart.
                My passion for nature has always been there, but in recent years hiking has become something truly special.
                Experiencing places such as Abisko, Lofoten, Geiranger, and the Swiss Alps has made me fall in love with the landscapes,
                the wildlife, and the encounters with people.
                <br /><br />
                Cooking became an interest
                in my early twenties and has since grown into a passion that continues to develop. My father worked as a chef and introduced
                me to the craft, and I also had the opportunity to work alongside him in a restaurant. Learning directly from him was a privilege
                and an experience I will always carry with me.
              </p>
            )}
          </div>
          <div className="w-[40vw] flex justify-start flex-col text-sm pl-12 pt-0 text-left leading-[1.7] max-[1200px]:w-[90vw] max-[1200px]:pl-0">
            <h3 className="max-[600px]:text-[18px] text-white text-[1.5rem] pb-2">{type === "sv" ? "Hur började min resa?" : "How did my journey begin?"}</h3>
            <p className="mb-2 text-white">
              {type === "sv" ? `År 2022–2023 bestämde jag mig för att förändra min situation. Jag började med att läsa upp mina betyg för att öppna dörren till en högre utbildning. 
              Mina intressen har alltid legat inom naturvetenskap, men jag insåg tidigt att göra ett intresse till ett yrke kan ta bort glädjen med det. 
              Istället tittade jag tillbaka på gymnasietiden då jag först stötte på programmering — då hade jag bara skrapat på ytan av en värld 
              som visade sig vara mycket större än jag någonsin anat. 
              Nu är jag inne på mitt andra år på Medieinstitutet som frontendutvecklare och kunde inte vara mer nöjd med 
              både utbildningen och min personliga utveckling. Jag ser fram emot att testa mina färdigheter i det riktiga arbetslivet.`
              :
              `In 2022–2023 I decided it was time for a change. I started by improving my grades to open up opportunities for higher education. 
              Nature and science have always been big interests of mine, but I realized early on that turning a passion into work can sometimes take away the joy from it. 
              Instead, I looked back to my high school years when I was first introduced to programming — back then I had only scratched the surface 
              of a world that turned out to be far bigger than I ever imagined.
              Now I am in my second year at Medieinstitutet as a frontend developer, and I couldn't be happier with both the education 
              and the personal growth I've experienced. I'm looking forward to bringing my skills into the real working world.`}
            </p>
            <h3 className="max-[600px]:text-[18px] text-[1.5rem] text-white pb-2">{type === "sv" ? "Varför frontend utveckling?" : "Why frontend development?"}</h3>
            <p className="text-white">
              {type === "sv" ? `Faktumet är att jag både sökte som frontend och backendutvecklare. Men efter att ha läst en hel del och hittat massa 
              information om skolor och olika utbildningar lockade alltid frontend delen mer. En utav anledningarna var tiden som vi hade att lära oss. 
              Jag kände då, men även nu att lära sig båda delarna under 2års tid kommer att vara en stor utmaning och att i stället 
              specialisera mig inom ett ämne förmodligen är bättre. Backend är något jag gärna vill fördjupa mig i längre fram, men just nu 
              ligger allt fokus på att utvecklas som frontendutvecklare. Dessutom lockades jag av den hybridbaserade arbetsstilen som är vanlig 
              inom branschen. Det ger både flexibilitet och möjligheten att spendera mer tid med familjen, som inte är bosatt i Stockholm.`
              :
              `In the beginning I applied for both frontend and backend development programs. But after reading more and exploring different 
              schools and courses, frontend always stood out to me. One reason was the limited time we had to learn. 
              Even then, and still now, I felt that learning both frontend and backend within two years would be a big challenge. 
              Focusing on one path and specializing felt like the better option. Backend is something I want to dive deeper into in the future, 
              but for now my full focus is on developing as a frontend developer. I was also very drawn to the hybrid work style that is common 
              in this industry. It provides flexibility and the opportunity to spend more time with my family, who do not live in Stockholm.`}
            </p>
            <AutoPlaySlideshow />
          </div>
        </section>
      </section>
    </>
  );
};

