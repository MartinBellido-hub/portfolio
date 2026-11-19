import Skill from "./Skill";

const skills = ["Java", "HTML", "CSS", "SQL", "JavaScript", "React", "Python", "Node.js"];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Tools I'm Learning</h2>
      <div className="grid">
        {skills.map((s) => <Skill key={s} name={s} />)}
      </div>
    </section>
  );
}