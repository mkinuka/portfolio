import { Outlet, useLocation } from "react-router";
import { Navigation } from "../components/Navigation";
import { LanguageProvider } from "../context/LanguageContext";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const Layout = () => {
  return (
    <>
    <LanguageProvider>
      <ScrollToTop />
      <header id="navigation-container">
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </LanguageProvider>
    </>
  );
};
