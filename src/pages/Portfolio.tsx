import "../styles/Portfolio.css"
import { portfolioItems } from "../Data/portfolioData"




export const Portfolio = () => {

    return <>
        <article id="main-container">
        <h1>Projects</h1>
        <section id="portfolio-section">{
        portfolioItems.map((p) => (
            <div className="portfolio-container" key={p.id}>
            <h2 className="portfolio-heading">{p.title}</h2>
            <div className="image-container"> 
                {p.imgUrl.map((i, idx) => (
                    <img key={idx} src={i} className="portfolio-img"/>
                ))}
            </div>
            <p className="portfolio-text-style">{p.description}</p>
            </div>
        ))    
            
        }
        </section>

        </article>
    
    
    </>
}