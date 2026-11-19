export default function Credentials() {
  const items = [
    "Bachelor of Science in Information Technology",
    "Major in Service Management",
  ];
  return (
    <section id="credentials">
      <h2>Credentials</h2>
      <div className="grid">
        {items.map((c) => <div className="card" key={c}>{c}</div>)}
      </div>
    </section>
  );
}