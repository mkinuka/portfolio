import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "flag-icons/css/flag-icons.min.css";


export const Navigation = () => {
  const {type, setLanguage} = useContext(LanguageContext)

  return (
    <>
      <nav id="nav">
        <div className="flex justify-end">
          <button
            className="w-8 h-8 flex justify-center items-center cursor-pointer bg-transparent border-0 mr-2.5"
            onClick={() => setLanguage(type === "sv" ? "eng" : "sv")}
          >
            {type === "sv"
              ? <span className="fi fi-us text-[2rem] w-8 h-8"></span>
              : <span className="fi fi-se text-[2rem] w-8 h-8"></span>}
          </button>
        </div>
      </nav>
    </>
  );
};
