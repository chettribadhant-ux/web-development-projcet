function Certificates() {
  const data = [
    { name: "HTML", file: "/certificates/html.pdf" },
    { name: "CSS", file: "/certificates/css.pdf" },
    { name: "Java", file: "/certificates/java.pdf" },
    { name: "Frontend Development", file: "/certificates/frontend.pdf" },
    { name: "MongoDB", file: "/certificates/mongodb.pdf" },
    { name: "Node.js", file: "/certificates/nodejs.pdf" },
    { name: "GitHub", file: "/certificates/github.pdf" }
  ];

  return (
    <div className="section fade">
      <h2>Certificates</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: "20px"
      }}>
        
        {data.map((c, i) => (
          <div key={i} className="card">
            <h4>{c.name}</h4>

            <a href={c.file} target="_blank" rel="noreferrer">
              View Certificate →
            </a>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Certificates;