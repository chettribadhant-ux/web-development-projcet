function Hero() {
  return (
    <div id="home" style={{
      textAlign: "center",
      padding: "80px 20px",
      backgroundColor: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}>
      
      <img
        src="/profile.jpg"
        alt="profile"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #007bff"
        }}
      />

      <h1 style={{ marginTop: "20px", fontSize: "32px" }}>
        Hi, I'm Badhant
      </h1>

      <p style={{ color: "#555", fontSize: "18px" }}>
        Full Stack Developer
      </p>

    </div>
  );
}

export default Hero;
