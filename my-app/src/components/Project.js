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
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__box-container">
          <div className="project__mini-container">
            <div className="project__box project__1 hidden">1</div>
            <div className="project__box project__2 hidden">2</div>
          </div>
          <div className="project__mini-container">
            <div className="project__box project__3 hidden">3</div>
            <div className="project__box project__4 hidden">4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
