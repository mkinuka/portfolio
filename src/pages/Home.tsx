import "../styles/Home.css";

export const Home = () => {
  const onMouseHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;

    // Update CSS variables globally on the body
    document.body.style.setProperty("--x", `${x}px`);
    document.body.style.setProperty("--y", `${y}px`);
  };

  return (
    <>
      <div className="home-wrapper" onMouseMove={onMouseHandler}>
        <div className="home-container"></div>
        <div className="content-container">
          <div className="video-box">
            <video autoPlay muted loop playsInline className="video-back">
              <source src="/src/assets/video.mp4" type="video/mp4" />
            </video>
            <h1 className="name-heading">Moses Kinuka</h1>

            <div className="arrow-container">
              <a href="#browse-section">
                <h3 className="arrow-container">
                  <i className="arrow down"></i>
                </h3>
              </a>
            </div>
          </div>
          <section id="browse-section"></section>
        </div>
      </div>
    </>
  );
};
