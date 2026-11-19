export default function Hero() {
  const goTo = (id) =>
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <h1 className="hero-name">KARL CHRISTIAN M. BELLIDO</h1>
      <h3>Aspiring IT Support Specialist</h3>
      <p>BSIT, Major in Service Management</p>
      <div className="hero-buttons">
        <button className="btn" onClick={() => goTo("projects")}>
          View My Work
        </button>
        <button className="btn btn-outline" onClick={() => goTo("about")}>
          About Me
        </button>
      </div>
    </section>
  );
}