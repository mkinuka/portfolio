import "../styles/AutoPlaySlideshow.css"
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";

export const AutoPlaySlideshow = () => {


    return <>
            <section className="slideshow-container">
                      <div className="slideshow-track">
        {/* Duplicera ikonerna för att skapa en oändlig loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="slideshow-icons">
            <FaHtml5 className="html-icon" />
            <FaCss3Alt className="css-icon" />
            <FaJsSquare className="js-icon" />
            <FaReact className="react-icon" />
            <FaNodeJs className="node-icon" />
            <FaGitAlt className="git-icon" />
          </div>
        ))}
      </div>
                
                
            </section>    
    
    </>
}