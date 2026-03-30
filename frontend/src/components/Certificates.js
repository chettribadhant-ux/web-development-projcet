function Certificates() {
  return (
    <div id="certificates" style={{
      textAlign: "center",
      padding: "60px 20px"
    }}>
      
      <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
        Certificates
      </h2>

      <div style={{
        maxWidth: "600px",
        margin: "auto",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        
        <p>
          🏆 Web Development  
          <br />
          <a href="/cert1.pdf" target="_blank">View Certificate</a>
        </p>

        <p>
          🏆 Python Programming  
          <br />
          <a href="/cert2.pdf" target="_blank">View Certificate</a>
        </p>

      </div>

    </div>
  );
}

export default Certificates;
