function Certificates() {
  const certs = [
    { name: "React Certificate", file: "/cert1.pdf" },
    { name: "JS Certificate", file: "/cert2.pdf" }
  ];

  return (
    <section className="section">
      <h2>Certificates</h2>

      <div className="grid">
        {certs.map((c, i) => (
          <a key={i} href={c.file} target="_blank" className="card">
            {c.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
