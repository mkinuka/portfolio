import { createBrowserRouter } from "react-router"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Portfolio } from "./pages/Portfolio"
import { Home } from "./pages/Home"
import { Layout } from "./pages/Layout"

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
                path: "/portfoliopage",
                element: <Portfolio/>
            },
            {
                path: "/About",
                element: <About/>
            },
            {
                path: "/Contact",
                element: <Contact/>
            }

        ]
    }
],
  {
    basename: "/portfolio" // <-- detta är korrekt
  }

)