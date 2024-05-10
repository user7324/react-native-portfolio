export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Isaac</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">React Native</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Hi, I'm Isaac, a React Native developer with experience in building cross platform mobile applications for iOS and Android. I am proficient in creating intuitive user interfaces and ensuring smooth functionality. I'm currently seeking new opportunities to collaborate on exciting projects and contribute to the world of mobile development.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="img/computer1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
