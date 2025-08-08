import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  Header,
  Experience,
  AboutMe,
  SkillsAndEducation,
  Projects,
  LifeStuff,
  Contact
} from "./components";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef(null);

  // This effect handles the subtle background pattern and smooth scrolling
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
      }
      body {
        background-color: #f9fafb;
        background-image: radial-gradient(#d1fae5 1px, transparent 1px);
        background-size: 15px 15px;
      }
    `;
    document.head.appendChild(style);

    // Intersection Observer for scroll spying
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sections = document.querySelectorAll(".section-marker");
    sections.forEach((section) => {
      if (observer.current) {
        observer.current.observe(section);
      }
    });

    return () => {
      document.head.removeChild(style);
      sections.forEach((section) => {
        if (observer.current) {
          observer.current.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="antialiased text-gray-800 font-sans">
      <Header activeSection={activeSection} />
      <main>
        <Home />
        <Experience />
        <AboutMe />
        <SkillsAndEducation />
        <Projects />
        <LifeStuff />
        <Contact />
      </main>
    </div>
  );
}
