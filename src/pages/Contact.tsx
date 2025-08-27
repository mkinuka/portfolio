import "../styles/Contact.css"
import picture from "../assets/moses.png"
import { useContext, useRef } from "react"
import  emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";


export const Contact = () => {
const { type } = useContext(LanguageContext);
const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

        if (form.current) {
      emailjs
        .sendForm(
          "service_iri2nm2",
          "template_3h0yqkn",
          form.current,
          "n5fFKz3p9E5-kKFMQ"
        )
        .then(
          (result) => {
            console.log("Message sent ✅", result.text);
            alert("Tack! Ditt meddelande har skickats.");
          },
          (error) => {
            console.error("Error ❌", error.text);
            alert("Oj, något gick fel. Försök igen.");
          }
        );
    }
  };

    return <>
        <div id="contact-container">
        <div className="contact-text-container">
            <div className="info-container">
            <img src={picture} className="contact-img" alt="Picture of me"></img>
            <h3>{type === "sv" ? "Kontakt" : "Contact"}</h3>
            <p className="contact-paragraph"> {type === "sv" ? "Har du frågor, idéer eller funderingar? Tveka inte att höra av dig! Jag svarar gärna på allt som rör mina projekt, samarbeten eller frontend-utveckling i allmänhet. Fyll i formuläret så hör jag av mig så snart jag kan." 
            : "Do you have any questions, ideas, or thoughts? Don’t hesitate to get in touch! I’ll be happy to answer anything related to my projects, collaborations, or frontend development in general. Fill out the form and I’ll get back to you as soon as I can."}
            </p>
            <div className="socials-container">
                <h3>{type === "sv" ? "Du kan också Kontakta mig här" : "You can also contact me here"}</h3>
                <a className="project-links-contact-linke"  href="https://www.linkedin.com/in/moses-kinuka-581b3b2a8" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="linkedin-icon" /> {type === "sv" ? "Linkedin" : "Linkedin"}</a>
                <a className="project-links-contact-git"  href="https://www.github.com/mkinuka" target="_blank" rel="noopener noreferrer"><FaGithub className="github-icon" />{type === "sv" ? "Github" : "Github"}</a>
            </div>
            </div>
            <div className="form-container">
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <h2>{type === "sv" ? "Kontakta mig" : "Contact me"}</h2>
                    <div className="form-group">
                    <label className="label" htmlFor="name">{type === "sv" ? "Name" : "Name"}</label>
                    <input type="text" id="name" name="name" placeholder={type === "sv" ? "Ditt namn" : "Your name" } required />
                    </div>

                    <div className="form-group">
                    <label className="label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder={type === "sv" ? "din@mail.se" : "your@mail.com"} required />
                    </div>

                    <div className="form-group">
                    <label className="label" htmlFor="message">{type === "sv" ? "Meddelande" : "Message"}</label>
                    <textarea id="message" name="message" placeholder={type === "sv" ? "Skriv ditt meddelande här..." : "Write your message here.."} required />
                    </div>
                    <button id="submit-button" type="submit" value="Send">{type === "sv" ? "Skicka meddelande" : "Send message"}</button>
                </form>
            </div>
        </div>
        </div>
    </>
}