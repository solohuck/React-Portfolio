import React from "react";
import "../styles/Project.css";
import "../img/solo react port .jpg";

const Project = () => {
  return (
    <section id="projects" className="project__section">
      <div className="project__content">
        <ul className="project__list">
          <li className="project__list-item reat-port">
          <div className="item_container">
              <div className="item_name ">REACT PORTFOLIO</div>
              <div className="item_description">
                A portfolio website built with React.js, HTML, CSS, and JavaScript.
              </div>
              <button className="item_button">
                <a href="https://github.com/solohuck/React-Portfolio-2">REPO</a></button>
            </div>
          </li>
          <li className="project__list-item">
            <div className="item_container">
              <div className="item_name">MENTAL MATH</div>
              <div className="item_description">
                A mental math game built with React.js, HTML, CSS, and JavaScript.
              </div>
              <button className="item_button">REPO</button>
            </div>
          </li>
          <li className="project__list-item">
          <div className="item_container">
              <div className="item_name">COMING SOON...</div>
              <div className="item_description">
                
              </div>
            </div>
          </li>
          <li className="project__list-item">
          <div className="item_container">
              <div className="item_name">COMING SOON...</div>
              <div className="item_description">
               
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Project;