import type { PortfolioItemLangType } from "../types/portfolioType";
import auctionImg from "../assets/first/The-auction.png";
import auctionImg2 from "../assets/first/The-auction-two.png";
import webShopImg from "../assets/secound/webshop.png";
import webShopImg2 from "../assets/secound/webshop2.png";
import webShopImg3 from "../assets/secound/webshop3.png";
import firstHtmlProject from "../assets/third/fullsize1.png";
import firstHtmlProject2 from "../assets/third/fullsize2.png";
import firstHtmlProject3 from "../assets/third/mobile1.png";
import firstHtmlProject4 from "../assets/third/mobile2.png";
import firstHtmlProject5 from "../assets/third/mobile3.png";
import portfolio1 from "../assets/forth/first-portfolio.png";
import portfolio2 from "../assets/forth/first-portfolio2.png";
import portfolio3 from "../assets/forth/first-portfolio3.png";
import animalApi from "../assets/fifth/1.png"
import animalApi2 from "../assets/fifth/2.png"
import animalApi3 from "../assets/fifth/3.png"
import animalApi4 from "../assets/fifth/4.png"
import greensteps from "../assets/sixth/greensteps.png"
import greensteps2 from "../assets/sixth/greensteps2.png"
import greensteps3 from "../assets/sixth/greensteps3.png"
import greensteps4 from "../assets/sixth/greensteps4.png"
import sandtimer1 from "../assets/7/sandtimer1.png"
import sandtimer2 from "../assets/7/sandtimer2.png"
import sandtimer3 from "../assets/7/sandtimer3.png"
import caexpress1 from "../assets/8/caexpress1.png"
import caexpress2 from "../assets/8/caexpress2.png"
import caexpress3 from "../assets/8/caexpress3.png"
import caexpress4 from "../assets/8/caexpress4.png"



export const portfolioItems: PortfolioItemLangType[] = [
  {
    sv: {
      id: 1,
      title: "Auktionsprojektet",
      githubUrl: "https://github.com/mkinuka/Auction-project.git",
      imgUrl: [auctionImg, auctionImg2],
      shortDescription: "Fullstack auktionsplattform med realtidsbudgivning via Socket.IO, nedräkningstimer och säker inloggning med bcrypt.",
      description: (
        <>
          Jag byggde en dynamisk auktionsplattform med MongoDB, Express och
          Socket.IO. Funktioner inkluderar:
          <ul>
            <li>
              <b>Realtidsbudgivning:</b> Alla bud visas direkt med sockets,
              vilket ger en live-upplevelse utan siduppdateringar.
            </li>
            <li>
              <b>Nedräkningstimer:</b> Varje auktion har en live-nedräkning som
              uppdateras i realtid.
            </li>
            <li>
              <b>Säker inloggning:</b> Användarautentisering hanteras med bcrypt
              för krypterad lösenordslagring.
            </li>
            <li>
              <b>Backend:</b> MongoDB hanterar all datalagring, inklusive
              användare, objekt och bud.
            </li>
          </ul>
          Detta projekt visar fullstack-utveckling med realtidsinteraktivitet
          och säker autentisering.
        </>
      ),
    },
    eng: {
      id: 1,
      title: "The Auction Project",
      githubUrl: "https://github.com/mkinuka/Auction-project.git",
      imgUrl: [auctionImg, auctionImg2],
      shortDescription: "Full-stack auction platform with real-time bidding via Socket.IO, live countdown timers, and secure login using bcrypt.",
      description: (
        <>
          I built a dynamic auction platform using MongoDB, Express, and
          Socket.IO. The site features:
          <ul>
            <li>
              <b>Real-time bidding:</b> All bids are instantly displayed using
              sockets, ensuring a live auction experience without page
              refreshes.
            </li>
            <li>
              <b>Countdown timer:</b> Each auction includes a live countdown
              that updates in real time, adding urgency and excitement.
            </li>
            <li>
              <b>Secure login:</b> User authentication is handled with bcrypt
              for encrypted password storage, providing a fully functional and
              secure login system.
            </li>
            <li>
              <b>Backend:</b> MongoDB handles all data storage, including users,
              items, and bids.
            </li>
          </ul>
          This project demonstrates full-stack development with real-time
          interactivity and secure authentication.
        </>
      ),
    },
  },
  {
    sv: {
      id: 2,
      title: "Webbshopprojektet",
      githubUrl: "https://github.com/mkinuka/Webshop.git",
      imgUrl: [webShopImg, webShopImg2, webShopImg3],
      shortDescription: "Modern webbshop i TypeScript med interaktiv kundvagn, LocalStorage-persistens och responsiv design.",
      description: (
        <>
          Detta är en modern webbshop byggd med TypeScript, med fokus på en ren
          och responsiv UI/UX-design. Funktioner inkluderar:
          <ul>
            <li>
              En interaktiv kundvagn som uppdateras i realtid när användare
              lägger till eller tar bort produkter.
            </li>
            <li>
              All kundvagnsdata sparas med LocalStorage, så dina objekt finns
              kvar även efter en siduppdatering.
            </li>
            <li>
              Designad med användaren i fokus — minimalistisk layout, smidiga
              övergångar och mobilvänlighet.
            </li>
          </ul>
          Projektet lyfter fram både frontend-utveckling och användarupplevelse,
          och kombinerar funktionalitet med en polerad design.
        </>
      ),
    },
    eng: {
      id: 2,
      title: "The Webshop Project",
      githubUrl: "https://github.com/mkinuka/Webshop.git",
      imgUrl: [webShopImg, webShopImg2, webShopImg3],
      shortDescription: "Modern TypeScript webshop with an interactive cart, LocalStorage persistence, and a clean responsive design.",
      description: (
        <>
          This is a modern webshop built with TypeScript, focused on a clean and
          responsive UI/UX design. It features:
          <ul>
            <li>
              An interactive shopping cart that updates in real-time as users
              add or remove products.
            </li>
            <li>
              All cart data is saved using LocalStorage, so your items stay even
              after a page refresh.
            </li>
            <li>
              Designed with a user-first mindset — minimalistic layout, smooth
              transitions, and mobile-friendliness.
            </li>
          </ul>
          The project highlights both front-end development and user experience,
          combining functionality with polished design.
        </>
      ),
    },
  },
  {
    sv: {
      id: 3,
      title: "Första HTML/CSS-projektet",
      imgUrl: [
        firstHtmlProject,
        firstHtmlProject2,
        firstHtmlProject3,
        firstHtmlProject4,
        firstHtmlProject5,
      ],
      shortDescription: "Mitt första skolprojekt — en responsiv webbsida byggd med ren HTML & CSS med hamburgarmeny för mobil.",
      description: (
        <>
          Detta var mitt allra första skolprojekt, byggt helt med HTML och CSS.
          Huvudmålet var att lära sig grunderna i responsiv webbdesign.
          Webbplatsen anpassar sig till olika skärmstorlekar och inkluderar en
          fullt fungerande hamburgarmeny för mobil navigering. Det var en bra
          introduktion till att strukturera semantisk HTML, styla med CSS och
          tänka på hur layouter förändras mellan enheter.
        </>
      ),
    },
    eng: {
      id: 3,
      title: "The First HTML/CSS Project",
      imgUrl: [
        firstHtmlProject5,
        firstHtmlProject4,
        firstHtmlProject,
        firstHtmlProject2,
        firstHtmlProject3,
      ],
      shortDescription: "My first school project — a responsive site built with pure HTML & CSS including a hamburger menu for mobile.",
      description: (
        <>
          This was my very first school project, built entirely with HTML and
          CSS. The main goal was to learn the basics of responsive web design.
          The site adapts to different screen sizes and includes a fully
          functional hamburger menu for mobile navigation. It was a great
          introduction to structuring semantic HTML, styling with CSS, and
          thinking about how layouts change across devices.
        </>
      ),
    },
  },
  // 4th //
  {
    sv: {
      id: 4,
      title: "Andra HTML/CSS-projektet - Portfolioprojekt",
      githubUrl: "https://github.com/mkinuka/uppgift_2.git",
      imgUrl: [portfolio1, portfolio2, portfolio3],
      shortDescription: "Mitt andra skolprojekt — en portfoliosida byggd med HTML & CSS från en Figma-design, med fokus på designfidelitet.",
      description: (
        <>
          Detta var mitt andra skolprojekt och min första portfoliosida, byggd
          helt med HTML och CSS. Huvudfokus var att ta en design från Figma och
          återskapa den så exakt som möjligt i kod. Genom detta projekt övade
          jag på att översätta layout, färger, avstånd och typografi till en
          riktig webbsida, vilket förbättrade min förståelse för både
          designfidelitet och responsiv styling.
        </>
      ),
    },
    eng: {
      id: 4,
      title: "The Second HTML/CSS Project - Portfolio Project",
      githubUrl: "https://github.com/mkinuka/uppgift_2.git",
      imgUrl: [portfolio1, portfolio2, portfolio3],
      shortDescription: "My second school project — a portfolio site built with HTML & CSS from a Figma design, focusing on design fidelity.",
      description: (
        <>
          This was my second school project and my first portfolio website,
          built entirely with HTML and CSS. The main focus was to take a design
          from Figma and recreate it as accurately as possible in code. Through
          this project, I practiced translating layout, colors, spacing, and
          typography into a real webpage, improving my understanding of both
          design fidelity and responsive styling.
        </>
      ),
    },
  },
  // 5th //
  {
    sv: {
      id: 5,
      title: "The Zoo",
      githubUrl: "https://github.com/mkinuka/fed24s-the-zoo-mkinuka.git",
      imgUrl: [animalApi, animalApi2, animalApi3, animalApi4],
      shortDescription: "React-app för ett zoo med API-hämtning, Context/Reducer för state, React Router och tidsbaserat matningssystem.",
      description: (
        <>
          <p>I det här projektet byggde jag en webbapplikation för ett zoo där användaren 
            kan utforska olika djur, läsa mer detaljerad information och mata dem utifrån ett tidsbaserat system. 
            Applikationen är uppbyggd med React och använder React Router för att hantera startsidan, 
            översiktssidan och djurens egna detaljsidor. 
            <br></br><br></br>
            Datan hämtas från ett externt API och hanteras med hjälp av Context och Reducer 
            för att hålla koll på djurens status. På översiktssidan kan man se om djuren är mätta, 
            snart behöver mat eller om de är hungriga. När man går in på ett enskilt djur presenteras mer information 
            och man kan mata djuret, men knappen styrs av regler för hur lång tid som gått sedan senaste matning. 
            <br></br><br></br>
            För styling använde jag Tailwind CSS för att bygga en responsiv 
            och tydlig design, och jag hanterade trasiga bildlänkar genom att visa en 
            fallback-bild. Projektet gav mig en bra förståelse för hur man kombinerar API-hämtning, 
            state management och routing i en mer komplett applikation.
            </p>
        </>
      ),
    },
    eng: {
      id: 5,
      title: "The Zoo",
      githubUrl: "https://github.com/mkinuka/fed24s-the-zoo-mkinuka.git",
      imgUrl: [animalApi, animalApi2, animalApi3, animalApi4],
      shortDescription: "React zoo app with external API, Context/Reducer state management, React Router, and a time-based animal feeding system.",
      description: (
        <>
          <p>In this project, I built a web application for a zoo where users can explore different animals, 
          read detailed information, and feed them based on a time-based system. The application is built with React and 
          uses React Router to manage the homepage, the overview page, and individual animal detail pages.
          <br></br><br></br>
          The data is fetched from an external API and managed using Context and Reducer to keep track of 
          the animals’ status. On the overview page, users can see if the animals are full, soon need food, or are hungry. 
          On the detail page, more information about the animal is displayed, and the feeding button follows specific 
          rules depending on how much time has passed since the last feeding.
          <br></br><br></br>
          For styling, I used Tailwind CSS to create a responsive and clean design, and I handled broken image 
          links by showing a fallback image. This project gave me a solid understanding of how to combine 
          API fetching, state management, and routing in a complete application.
          </p>
        </>
      ),
    },
  },
  // 6th
  {
    sv: {
      id:6,
      title: "Greensteps",
      githubUrl: "https://github.com/mkinuka/Greensteps.git",
      imgUrl: [greensteps,greensteps2,greensteps3,greensteps4],
      shortDescription: "Hållbarhetsapp som hjälper användare att förstå och minska sitt koldiox idavtryck med visuella översikter och tips.",
      description: (
        <>
        <p><b>GreenSteps</b> är en hållbarhetsapp som hjälper användare att förstå och minska sitt dagliga klimatavtryck. Appen gör komplex miljödata lättillgänglig genom att visa hur vardagliga val inom till exempel mat, transporter och konsumtion påverkar utsläppen av koldioxid.</p>
        <br></br>
        <p>Genom att registrera vad man äter, hur man reser eller vad man handlar kan GreenSteps uppskatta tillhörande CO₂-utsläpp baserat på tillförlitlig och forskningsbaserad data. Fokus ligger inte på exakta siffror, utan på att skapa medvetenhet och ge en tydlig bild av vilka val som har störst påverkan.</p>
        <br></br>
        <p>GreenSteps är inte utformad för att skuldbelägga användaren, utan för att uppmuntra till små, realistiska förbättringar över tid. Med visuella översikter, jämförelser och konkreta tips gör appen det enklare att ta mer hållbara beslut i vardagen. Målet med GreenSteps är att göra klimatpåverkan synlig, begriplig och hanterbar, ett steg i taget.</p>
        </>
      )
    },
    eng: {
      id: 6,
      title: "Greensteps",
      githubUrl: "https://github.com/mkinuka/Greensteps.git",
      imgUrl: [greensteps,greensteps2,greensteps3,greensteps4],
      shortDescription: "Sustainability app that helps users understand and reduce their carbon footprint with visual insights and actionable tips.",
      description: (
        <>
        <p><b>GreenSteps</b> is a sustainability app designed to help users understand and reduce their everyday carbon footprint. The app turns complex environmental data into clear, practical insights by showing how daily choices such as: food, transportation, and consumption affect CO₂ emissions.</p>
        <br></br>
        <p>By logging what you eat, how you travel, or what you buy, GreenSteps estimates the associated emissions using reliable, research-based data. Rather than focusing on absolute precision, the app aims to build awareness and highlight which actions have the greatest environmental impact.</p>
        <br></br>
        <p>GreenSteps is not about guilt or perfection. It is built to encourage gradual, realistic improvements over time. Through visual summaries, comparisons, and actionable tips, the app supports users in making more sustainable decisions in their daily lives. The goal of GreenSteps is to make climate impact visible, understandable, and manageable one step at a time.</p>
        </>
      )
    }

  },
  // 7th //
  {
    sv: {
      id: 7,
      title: "Sandtimer",
      imgUrl: [sandtimer1, sandtimer2, sandtimer3],
      shortDescription: "Intern postproduktionsapp för att automatisera arbetsflöden, byggd med React, Supabase och Google Cloud Storage.",
      description: (
        <>
          <p><b>Sandtimer</b> utvecklades som en intern app för ett postproduktionsbolag, med målet att automatisera och effektivisera deras processer. Appen skapades för att hantera komplexa arbetsflöden och göra vardagliga uppgifter smidigare för teamet.</p>
          <br></br>
          <p>På frontend användes <b>React</b> för att bygga en responsiv och interaktiv användargränssnitt som möjliggör snabb navigation och enkel datahantering. Backend-lösningen är baserad på <b>Supabase</b>, som hanterar databas och autentisering, tillsammans med <b>Google Cloud Storage</b> för säker filhantering och lagring av media.</p>
          <br></br>
          <p>Projektet visar hur moderna teknologier kan kombineras för att skapa skräddarsydda verktyg som löser verkliga problem och förbättrar produktiviteten i en professionell miljö.</p>
        </>
      ),
    },
    eng: {
      id: 7,
      title: "Sandtimer",
      imgUrl: [sandtimer1, sandtimer2, sandtimer3],
      shortDescription: "Internal post-production app to automate workflows, built with React, Supabase, and Google Cloud Storage.",
      description: (
        <>
          <p><b>Sandtimer</b> was developed as an internal app for a post-production company, with the goal of automating and streamlining their processes. The app was designed to handle complex workflows and make everyday tasks more efficient for the team.</p>
          <br></br>
          <p>The frontend was built using <b>React</b> to create a responsive and interactive user interface that enables fast navigation and easy data management. The backend solution is based on <b>Supabase</b>, which handles database and authentication, along with <b>Google Cloud Storage</b> for secure file handling and media storage.</p>
          <br></br>
          <p>This project demonstrates how modern technologies can be combined to create custom tools that solve real-world problems and improve productivity in a professional environment.</p>
        </>
      ),
    },
  },
  // 8th //
  {
    sv: {
      id: 8,
      title: "Catering Express",
      imgUrl: [caexpress1, caexpress2, caexpress3, caexpress4],
      shortDescription: "Modernisering av UI för e-handelsplattform med catering, inklusive avancerad filtrering och köksplaneringsverktyg.",
      description: (
        <>
          <p><b>Catering Express</b> är en pågående uppdatering av UI:t för det företag jag jobbar på. Projektet fokuserar på att ge plattformen ett modernt ramverk och en uppdaterad visuell design, samtidigt som nya funktioner läggs till för att förbättra användarupplevelsen och effektiviteten.</p>
          <br></br>
          <p>Bland de nya funktionerna ingår <b>avancerad filtrering</b>, vilket gör det enklare för användare att hitta det de söker. Plattformen hanterar både <b>e-handel för butik och catering</b>, med kraftfulla verktyg för köksplanering, inköp och orderhantering.</p>
          <br></br>
          <p><b>Funktioner inkluderar:</b></p>
          <ul>
            <li><b>Köksplanering:</b> Verktyg för att organisera och planera produktionen i köket</li>
            <li><b>Inköp- och planeringsunderlag:</b> Sortering efter datum, leverantör och avdelning</li>
            <li><b>Ordernummervisning:</b> Tydliga utskrifter med ordernummer för enkel hantering</li>
            <li><b>Flexibel råvaruhantering:</b> Välj vilka råvaror som ska visas på utskrifter för effektiv användning i köket</li>
            <li><b>Historisk data:</b> Se råvarumängder från tidigare perioder för att planera kommande behov</li>
            <li><b>Flera butiker i samma gränssnitt:</b> Hantera flera platser från en central plattform</li>
            <li><b>Distribution mellan butiker:</b> En butik kan förbereda beställningar och distribuera dem till andra butiker för upphämtning</li>
            <li><b>Kalender och statistik:</b> Visar vad som är populärt och när kunderna vill hämta sina beställningar</li>
            <li><b>Tidsberäkning:</b> Beräkna tidsåtgång för orderförberedelser per dag för att säkerställa rätt bemanning</li>
          </ul>
          <br></br>
          <p>Detta projekt visar på arbete med komplexa affärssystem och modern frontend-utveckling i en produktionsmiljö.</p>
        </>
      ),
    },
    eng: {
      id: 8,
      title: "Catering Express",
      imgUrl: [caexpress1, caexpress2, caexpress3, caexpress4],
      shortDescription: "UI modernization for an e-commerce platform with catering, including advanced filtering and kitchen planning tools.",
      description: (
        <>
          <p><b>Catering Express</b> is an ongoing UI update for the company I work for. The project focuses on giving the platform a modern framework and updated visual design, while adding new features to improve user experience and efficiency.</p>
          <br></br>
          <p>Among the new features is <b>advanced filtering</b>, making it easier for users to find what they're looking for. The platform handles both <b>e-commerce for retail and catering</b>, with powerful tools for kitchen planning, procurement, and order management.</p>
          <br></br>
          <p><b>Features include:</b></p>
          <ul>
            <li><b>Kitchen planning:</b> Tools to organize and plan kitchen production</li>
            <li><b>Procurement and planning foundation:</b> Sort by date, vendor, and department</li>
            <li><b>Order number display:</b> Clear printouts with order numbers for easy handling</li>
            <li><b>Flexible ingredient management:</b> Choose which ingredients to display on printouts for efficient kitchen use</li>
            <li><b>Historical data:</b> View ingredient quantities from previous periods to plan future needs</li>
            <li><b>Multiple stores in one interface:</b> Manage several locations from a central platform</li>
            <li><b>Distribution between stores:</b> One store can prepare orders and distribute them to other stores for pickup</li>
            <li><b>Calendar and statistics:</b> Shows what's popular and when customers want to pick up their orders</li>
            <li><b>Time calculation:</b> Calculate time needed for order preparations per day to ensure proper staffing</li>
          </ul>
          <br></br>
          <p>This project demonstrates work with complex business systems and modern frontend development in a production environment.</p>
        </>
      ),
    },
  }
];
