import React, { useEffect } from "react";
import "../styles/Project.css";

const Project = () => {
  useEffect(() => {
    const hiddenElement = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } 
      });
    });
    hiddenElement.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <section id="projects" className="project-hero">
      <div className="main-container">
        <div className="project-container">
          <div className="project-single hidden">1</div>
          <div className="project-single hidden">2</div>
          <div className="project-single hidden">3</div>
        </div>
      </div>
    </section>
  );
};

export default Project;
