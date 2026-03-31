function Certificates() {
  const data = [
    "html", "css", "java",
    "frontend", "mongodb",
    "nodejs", "github"
  ];

  return (
    <div className="section fade" id="cert">
      <h2>Certificates</h2>

      <div className="grid">
        {data.map((c, i) => (
          <div className="card" key={i}>
            <h4>{c.toUpperCase()}</h4>

            <a href={`/certificates/${c}.pdf`} target="_blank">
              <button className="btn">View</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;