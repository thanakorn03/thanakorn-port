import React from "react";

const ProjectsBox = () => {
  return (
    <section className="section" id="project">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Completed</h3>
          <label>15+ Finished projects</label> 
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Cliets</h3>
          <label>25+ happy</label>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Completed</h3>
          <label>15+ Finished projects</label>
        </div>
      </div>
    </section>
  )
}

export default ProjectsBox;
