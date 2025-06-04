// import "../styles/Navigation.css";
import React, { useContext } from "react";
import { Modal } from "../components/Modal";
import { LanguageContext } from "../context/LanguageContext";
import "../styles/navigation.css"
import "flag-icons/css/flag-icons.min.css";


export const Navigation = () => {
  const {type, setLanguage} = useContext(LanguageContext)


  return (
    <>
      <nav id="nav">
      <div className="top-nav">
        <button className="lang-button" onClick={() => setLanguage(type === "sv" ? "eng" : "sv")}>
          {type === "sv" ? <span id="flag1" className="fi fi-se"></span> : <span id="flag2" className="fi fi-us"></span>}
        </button>
      </div>
      <div className="menu-nav">
        <img></img>
        <Modal />
      </div>
      </nav>
    </>
  );
};
