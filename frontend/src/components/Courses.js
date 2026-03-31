function Courses() {
  const courses = ["Java", "Python", "C", "C++", "MySQL"];

  return (
    <div className="section fade">
      <h2>Courses Completed</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {courses.map((c, i) => (
          <div key={i} className="card">{c}</div>
        ))}
      </div>
    </div>
  );
}

export default Courses;