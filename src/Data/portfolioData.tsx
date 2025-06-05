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

export const portfolioItems: PortfolioItemLangType[] = [
  {
    sv: {
      id: 1,
      title: "Auktionsprojektet",
      imgUrl: [auctionImg, auctionImg2],
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
      imgUrl: [auctionImg, auctionImg2],
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
      imgUrl: [webShopImg, webShopImg2, webShopImg3],
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
      imgUrl: [webShopImg, webShopImg2, webShopImg3],
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
  {
    sv: {
      id: 4,
      title: "Andra HTML/CSS-projektet - Portfolioprojekt",
      imgUrl: [portfolio1, portfolio2, portfolio3],
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
      imgUrl: [portfolio1, portfolio2, portfolio3],
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
];
