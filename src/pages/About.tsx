import Picture from "../assets/moses2.png";
import "../styles/About.css";

export const About = () => {
  return (
    <>
      <div className="about-container">
        <img src={Picture} alt="Picture of me" id="about-img"></img>
        <div className="text-container">
          <h3>About Me</h3>
          <p id="font-style">
            Hi, my name Moses Kinuka, I’m a 29-year-old first-year student
            front-end developer with a passion for creating interactive and
            responsive websites and applications. Outside of work, my biggest
            passion is cooking, and I enjoy experimenting with new recipes
            whenever I can. When I’m not in the kitchen or coding, you’ll find
            me outdoors hiking, fishing, or bouldering, or at home playing video
            games. I bring a positive attitude wherever I go, and I’m happiest
            in a workplace that fosters a fun and friendly atmosphere. I believe
            that a great environment can inspire creativity and collaboration,
            and I’m excited to grow my skills and contribute to real life
            projects.
          </p>
        </div>
      </div>
    </>
  );
};
