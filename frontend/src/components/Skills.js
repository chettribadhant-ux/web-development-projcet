function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "React", "Node.js", "MongoDB",
    "Git", "UI Design"
  ];

  return (
    <div className="section fade">
      <h2>Skills</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {skills.map((s, i) => (
          <div key={i} className="card">{s}</div>
        ))}
      </div>
    </div>
  );
}

export default Skills;