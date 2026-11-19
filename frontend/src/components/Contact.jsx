const contacts = [
  { label: "Email", value: "karlchristian.bellido@lspu.edu.ph", link: "karlchristian.bellido@lspu.edu.ph" },
  { label: "Phone", value: "09948876018", link: "tel:09948876018" },
  { label: "GitHub", value: "https://github.com/MartinBellido-hub", link: "https://github.com/MartinBellido-hub" },
  { label: "Facebook", value: "https://www.facebook.com/karlchristian.bellido.3", link: "https://www.facebook.com/karlchristian.bellido.3" },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-list">
        {contacts.map((c) => (
          <div className="card" key={c.label}>
            <small>{c.label}</small>
            {c.link ? (
              <p><a href={c.link} target="_blank" rel="noreferrer">{c.value}</a></p>
            ) : (
              <p>{c.value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}