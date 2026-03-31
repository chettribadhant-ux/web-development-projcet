function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "React", "Node.js", "MongoDB",
    "Git", "UI/UX"
  ];

  return (
    <div className="section fade" id="skills">
      <h2>Skills</h2>

      <div className="grid">
        {skills.map((s, i) => (
          <div key={i} className="card">{s}</div>
        ))}
      </div>
    </div>
  );
}

export default Skills;