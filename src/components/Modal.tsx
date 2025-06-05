import { useState, useContext } from "react";
import { NavLink } from "react-router";
import "../components/Modal.css";
import { LanguageContext } from "../context/LanguageContext";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { type } = useContext(LanguageContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleClick} className="menu-button">
        {type === "sv" ? "Meny" : "Menu"}
        {/* Menu */}
      </button>

      {isOpen && (
        <div className="test3">
          <div className="modal-container">
            <ul id="list-style">
              <li className="link-style">
                <NavLink id="link-decor" to="/" onClick={closeModal}>
                  {type === "sv" ? "Hem" : "Home"}
                </NavLink>
              </li>
              <li className="link-style">
                <NavLink id="link-decor" to="/Portfolio" onClick={closeModal}>
                  {type === "sv" ? "Min Portfolio" : "My Portfolio"}
                </NavLink>
              </li>
              <li className="link-style">
                <NavLink id="link-decor" to="/About" onClick={closeModal}>
                  {type === "sv" ? "Om Mig" : "About Me"}
                </NavLink>
              </li>
              <li className="link-style">
                <NavLink id="link-decor" to="/Contact" onClick={closeModal}>
                  {type === "sv" ? "Kontakt" : "Contact"}
                </NavLink>
              </li>
            </ul>
            <div>
              <button id="close-modal" onClick={closeModal}>
                {type === "sv" ? "Stäng" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
