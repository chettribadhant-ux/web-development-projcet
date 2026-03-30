import "./hero.css";

function hero() {
  return (
    <div id="home" className="hero-container">

      {/* LEFT SIDE TEXT */}
      <div className="hero-left">
        <h1 className="hero-title">
          WEB DEVELOPMENT PROJECT
        </h1>

        <p className="hero-subtitle">
          I am a passionate Full Stack Developer building modern web applications.
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-right">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="hero-image"
        />
      </div>

    </div>
  );
}

export default hero;





