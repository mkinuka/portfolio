import { createBrowserRouter } from "react-router"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { PortfolioPage } from "./pages/PortfolioPage"
import { PortfolioDetail } from "./pages/PortfolioDetail"
import { Home } from "./pages/Home"
import { Layout } from "./pages/Layout"
import { CareerLadder } from "./pages/CareerLadder"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/Portfoliopage",
                element: <PortfolioPage/>
            },
            {
                path: "/portfolio/:id",
                element: <PortfolioDetail/>
            },
            {
                path: "/About",
                element: <About/>
            },
            {
                path: "/Contact",
                element: <Contact/>
            },
            {
                path: "/CareerLadder",
                element: <CareerLadder/>
            }

        ]
    }
],

)