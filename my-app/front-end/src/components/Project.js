import React from "react";


const Project = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__content">
        <div className="project__title"> Projects </div>
        <p className="project__description">
          Here you will find some of the personal projects that I have created with each project 
          containing its own source code button
        </p>

        <div className="sinlge__project-container">
          <div className="project__container"></div>
          <div className="project__mini-container">
            <div className="single__project__title"> Portfolio</div>
            <p className="single__project__description">
            This is a single-page React app showcasing my work, skills, and contact information. 
            The portfolio is hosted on Digital Ocean, and the contact form is powered by email.js
            </p>
            <button className="case__study__btn"> 
              <a href="https://github.com/solohuck/React-Portfolio">source code</a>
            </button>
          </div>
        </div>

        <div className="sinlge__project-container">
          <div className="project__container_">
            <div className="lock__img"></div>
          </div>  
          <div className="project__mini-container">
            <div className="single__project__title"> Mental Math App</div>
            <p className="single__project__description">
              The mental math app is currently a work in progess. It's a simple 
              mental math trainer that's been made to feel like a game with streaks, high scores, and lives.
            </p>
            <button className="case__study__btn"> 
              <a href="https://github.com/solohuck/javaquiz-2">source code</a> 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
