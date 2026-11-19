import { useEffect, useState } from "react";
import Project from "./Project";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: "student-information-system",
      title: "Student Information System",
      description: "A system for managing student records.",
      github_url: "https://github.com/MartinBellido-hub/portfolio-crud",
    },
    {
      id: "tic-tac-toe",
      title: "Tic Tac Toe",
      description: "A two-player browser game.",
      github_url: "https://github.com/MartinBellido-hub/tictactoe",
    },
  ]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load projects");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProjects(data);
      })
      .catch(() => {
        // The built-in project cards keep the portfolio usable without the API.
      });
  }, []);

  return (
    <section id="projects">
      <h2>My Works</h2>
      <div className="grid">
        {projects.map((p) => (
          <Project key={p.id} title={p.title}
                   description={p.description} link={p.github_url} />
        ))}
      </div>
    </section>
  );
}