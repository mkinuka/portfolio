import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { LanguageProvider } from "../context/LanguageContext";
export const Layout = () => {
  return (
    <>
    <LanguageProvider>
      <header id="navigation-container">
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </LanguageProvider>
    </>
  );
};
