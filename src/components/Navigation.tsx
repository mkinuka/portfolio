import { NavLink } from "react-router"
import "../styles/Navigation.css"
export const Navigation = () => {


    return <>
        <img></img>
        <ul id="list-style">
            <li className="link-style"><NavLink to="/">Hem</NavLink></li>
            <li className="link-style"><NavLink to="/Portfolio">Min Portfolio</NavLink></li>
            <li className="link-style"><NavLink to="/About">Om Mig</NavLink></li>
            <li className="link-style"><NavLink to="/Contact">Kontakt</NavLink></li>
        </ul>    
    
    </>
}