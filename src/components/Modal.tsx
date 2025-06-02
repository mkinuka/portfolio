import { useState } from "react";
import { NavLink } from "react-router";
import "../components/Modal.css";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleClick} className="menu-button">
        Menu
      </button>

      {isOpen && (
        <div className="test3">
          <div className="modal-container">
            <ul id="list-style">
              <li className="link-style">
                <NavLink id="link-decor" to="/" onClick={closeModal}>
                  Hem
                </NavLink>
              </li>
              <li className="link-style">
                <NavLink id="link-decor" to="/Portfolio" onClick={closeModal}>
                  Min Portfolio
                </NavLink>
              </li>
              <li className="link-style">
                <NavLink id="link-decor" to="/About" onClick={closeModal}>
                  Om Mig
                </NavLink>
              </li>
              <li className="link-style">
                <NavLink id="link-decor" to="/Contact" onClick={closeModal}>
                  Kontakt
                </NavLink>
              </li>
            </ul>
            <div>
              <button id="close-modal" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
