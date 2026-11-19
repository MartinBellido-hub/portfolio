import { useState, useEffect } from "react";

const links = ["home", "about", "skills", "credentials", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      links.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      <strong>BELLIDO</strong>
      <div>
        {links.map((id) => (
          <a key={id} className={active === id ? "active" : ""}
             onClick={() => handleClick(id)}>
            {id.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
}