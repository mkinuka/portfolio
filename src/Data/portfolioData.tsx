import type { PortfolioArray } from "../types/portfolioType"
import auctionImg from "../assets/first/The-auction.png";
import auctioneImg2 from "../assets/first/The-auction-two.png"
import webShopImg from "../assets/secound/webshop.png"
import webShopImg2 from "../assets/secound/webshop2.png"
import webShopImg3 from "../assets/secound/webshop3.png"
import firstHtmlProject from "../assets/third/mobile1.png"
import firstHtmlProject2 from "../assets/third/mobile2.png"
import firstHtmlProject3 from "../assets/third/mobile3.png"
import firstHtmlProject4 from "../assets/third/fullsize1.png"
import firstHtmlProject5 from "../assets/third/fullsize2.png"
import portfolio1 from "../assets/forth/first-portfolio.png"
import portfolio2 from "../assets/forth/first-portfolio2.png"
import portfolio3 from "../assets/forth/first-portfolio3.png"


 
 
 
 
 export const portfolioItems:PortfolioArray  = [
    {
        id:1,
        title:"The Auction project",
        imgUrl: [auctionImg, auctioneImg2],
        description: (
            <>
                I built a dynamic auction platform using MongoDB, Express, and Socket.IO. The site features:
                <ul>
                    <li><b>Real-time bidding:</b> All bids are instantly displayed using sockets, ensuring a live auction experience without page refreshes.</li>
                    <li><b>Countdown timer:</b> Each auction includes a live countdown that updates in real time, adding urgency and excitement.</li>
                    <li><b>Secure login:</b> User authentication is handled with bcrypt for encrypted password storage, providing a fully functional and secure login system.</li>
                    <li><b>Backend:</b> MongoDB handles all data storage, including users, items, and bids.</li>
                </ul>
                This project demonstrates full-stack development with real-time interactivity and secure authentication.
            </>
        )
    },
    {
        id:2,
        title:"The WebbShop Project",
        imgUrl:[webShopImg, webShopImg2, webShopImg3],
        description:(<>
         This is a modern webshop built with TypeScript, focused on a clean and responsive UI/UX design. It features:
                    <ul>
                        <li>An interactive shopping cart that updates in real-time as users add or remove products.</li>
                        <li>All cart data is saved using LocalStorage, so your items stay even after a page refresh.</li>
                        <li>Designed with a user-first mindset — minimalistic layout, smooth transitions, and mobile</li>
                    </ul>
                    The project highlights both front-end development and user experience, combining functionality with polished design.
         </>)
    },
    {
        id:3,
        title:"The first HTML/css project",
        imgUrl:[firstHtmlProject5, firstHtmlProject4, firstHtmlProject, firstHtmlProject2, firstHtmlProject3],
        description:(<>
                     This was my very first school project, built entirely with HTML and CSS. The main goal was to learn the basics of responsive web design. The site adapts to different screen sizes and includes a fully functional hamburger menu for mobile navigation. 
                     It was a great introduction to structuring semantic HTML, styling with CSS, and thinking about how layouts change across devices.
                    </>
                 ) 
    },
    {
        id:4,
        title: "The second HTML/css project - Portfolio project",
        imgUrl: [portfolio1, portfolio2, portfolio3],
        description: (<>
                    This was my second school project and my first portfolio website, built entirely with HTML and CSS. The main focus was to take a design from Figma and recreate it as accurately as possible in code.
                    Through this project, I practiced translating layout, colors, spacing, and typography into a real webpage, improving my understanding of both design fidelity and responsive styling.
        
                </>
            ),
    }
    ]