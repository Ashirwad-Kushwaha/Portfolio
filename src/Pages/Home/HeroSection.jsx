export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ashirwad</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
        </div>
        <a href="https://drive.google.com/file/d/1Fjy9rRRf9qZgUvKZxd4uSc9BGxIWv4-Z/view?usp=drive_link" download target="_blank">
        <button className="btn btn-primary">CV/Resume</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/about-me.png" alt="Hero Section" />
      </div>
    </section>
  );
}
