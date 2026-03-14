import picture from "../assets/moses-wasabiweb.webp"
import { useContext, useRef } from "react"
import  emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
const { type } = useContext(LanguageContext);
const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

        if (form.current) {
      emailjs
        .sendForm(
          serviceId,
          templateId,
          form.current,
          publicKey
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
        <div id="contact-container" className="w-[70vw] flex items-center mb-[20vh]">
        <div className="w-[70vw] flex flex-row max-[1200px]:flex-col max-[1200px]:items-center text-lg p-4 mb-20 gap-8">
            <div className="w-[30vw] max-[1200px]:w-[60vw] mr-8 max-[1200px]:mr-0 max-[1200px]:mb-20 flex items-center flex-col">
                <img src={picture} className="m-8 w-[15vw] max-[1200px]:w-[30vw]  rounded-xl" alt="Picture of me" />
                <h3 className="text-start font-bold ">{type === "sv" ? "Kontakt" : "Contact"}</h3>
                <p className="text-left"> {type === "sv" ? "Har du frågor, idéer eller funderingar? Tveka inte att höra av dig! Jag svarar gärna på allt som rör mina projekt, samarbeten eller frontend-utveckling i allmänhet. Fyll i formuläret så hör jag av mig så snart jag kan." 
                : "Do you have any questions, ideas, or thoughts? Don't hesitate to get in touch! I'll be happy to answer anything related to my projects, collaborations, or frontend development in general. Fill out the form and I'll get back to you as soon as I can."}
                </p>
                <div className="flex flex-row justify-center gap-4 max-[1200px]:gap-8 w-full mt-6">
                    {/* <h3 className="text-start">{type === "sv" ? "Du kan också Kontakta mig här" : "You can also contact me here"}</h3> */}
                    <a className="inline-flex items-center gap-2 px-4 py-2 rounded-[15px] no-underline text-2xl mb-2 bg-[aliceblue] text-gray-900 hover:bg-[rgb(29,67,148)] hover:text-gray-200 transition-colors duration-200"
                       href="https://www.linkedin.com/in/moses-kinuka-581b3b2a8" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn /> {type === "sv" ? "Linkedin" : "Linkedin"}
                    </a>
                    <a className="inline-flex items-center gap-2 px-4 py-2 rounded-[15px] no-underline text-2xl mb-2 bg-[aliceblue] text-gray-900 hover:bg-black hover:text-gray-200 transition-colors duration-200"
                       href="https://www.github.com/mkinuka" target="_blank" rel="noopener noreferrer">
                        <FaGithub />{type === "sv" ? "Github" : "Github"}
                    </a>
                </div>
            </div>
            <div className="w-[30vw] max-[1200px]:w-[60vw] h-fit justify-center items-center rounded-2xl px-8 py-7 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-sm border border-white/30">
            {/* <h2>Har du frågor eller funderingar</h2> */}
                <form className="flex flex-col w-full" ref={form} onSubmit={sendEmail}>
                    <h2 className="font-semibold text-[2rem] mb-6 text-left">{type === "sv" ? "Kontakta mig" : "Contact me"}</h2>
                    <div className="flex flex-col mb-8">
                        <label className="text-left" htmlFor="name">{type === "sv" ? "Namn" : "Name"}</label>
                        <input className="w-full bg-gray-600 rounded-xl p-2" type="text" id="name" name="name" placeholder={type === "sv" ? "Ditt namn" : "Your name"} required />
                    </div>
                    <div className="flex flex-col mb-8">
                        <label className="text-left" htmlFor="email">Email</label>
                        <input className="w-full bg-gray-600 rounded-xl p-2" type="email" id="email" name="email" placeholder={type === "sv" ? "din@mail.se" : "your@mail.com"} required />
                    </div>
                    <div className="flex flex-col mb-8">
                        <label className="text-left" htmlFor="message">{type === "sv" ? "Meddelande" : "Message"}</label>
                        <textarea className="h-40 bg-gray-600 rounded-xl p-2" id="message" name="message" placeholder={type === "sv" ? "Skriv ditt meddelande här..." : "Write your message here.."} required />
                    </div>
                    <button className="cursor-pointer text-gray-900 px-4 py-2 rounded-[15px] text-2xl bg-[aliceblue] border-0 hover:bg-[#331970] hover:text-gray-200 transition-colors duration-200" type="submit">
                        {type === "sv" ? "Skicka meddelande" : "Send message"}
                    </button>
                </form>
            </div>
        </div>
        </div>
    </>
}
