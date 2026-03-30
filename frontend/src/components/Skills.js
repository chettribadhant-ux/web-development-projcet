function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((s, i) => (
          <div key={i} className="card">{s}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;