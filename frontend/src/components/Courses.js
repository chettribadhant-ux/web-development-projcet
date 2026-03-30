function Courses() {
  const courses = [
    "Full Stack Development",
    "React Basics",
    "JavaScript Advanced"
  ];

  return (
    <section className="section">
      <h2>Courses Completed</h2>
      <div className="grid">
        {courses.map((c, i) => (
          <div key={i} className="card">{c}</div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
