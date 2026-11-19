import { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about">
      <h2>About Me</h2>
      <p>I'm a BSIT student majoring in Service Management. I enjoy helping people solve technical problems, which is why I want to work in IT support.</p>
      {showMore && (
        <p>I am interested in troubleshooting, network and system support, and improving service management processes. My goal is to become a dependable IT professional who communicates clearly and solves problems efficiently.</p>
      )}
      <button className="btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}