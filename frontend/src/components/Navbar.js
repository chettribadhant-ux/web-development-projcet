function Navbar() {
  return (
    <div style={{
      position: "sticky",
      top: 0,
      background: "white",
      padding: "15px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      zIndex: 1000
    }}>
      
      <a href="#home">Home</a>
      <a href="#certificates">Certificates</a>
      <a href="#courses">Courses</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>

    </div>
  );
}

export default Navbar;
