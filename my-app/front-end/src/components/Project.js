import React from "react";
import "../styles/Project.css";

const Project = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__content">
        <div className="project__title"> Projects </div>
        <p className="project__description">
          Here you will find some of the personal and 
          clients projects that I created with each project 
          containing its own case study
        </p>

        <div className="sinlge__project-container">
          <div className="project__container"></div>
          <div className="project__mini-container">
            <div className="single__project__title"> Portfolio</div>
            <p className="single__project__description">
              Dopefolio is a successful Open-Source project that I created 
              which have been featured on some of the biggest tech sites like 
              CSS-Tricks, Hostinger, etc & used by thousands of developers globally
            </p>
            <button className="case__study__btn"> source code </button>
          </div>
        </div>

        <div className="sinlge__project-container">
          <div className="project__container"></div>
          <div className="project__mini-container">
            <div className="single__project__title"> Portfolio</div>
            <p className="single__project__description">
              Dopefolio is a successful Open-Source project that I created 
              which have been featured on some of the biggest tech sites like 
              CSS-Tricks, Hostinger, etc & used by thousands of developers globally
            </p>
            <button className="case__study__btn"> source code </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
