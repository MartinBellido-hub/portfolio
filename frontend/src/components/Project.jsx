export default function Project({ title, description, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="btn" href={link} target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  );
}