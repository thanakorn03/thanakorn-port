import React from "react";

const ProjectsBox = () => {
  return (
    
    <section className="section" id="project">
      <div className="top-header">
        <h1>Popular</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>nick bay</h3>
          <label>สินค้าของคุณส่งไว ของไม่มีการพักหรือชำรุท</label> 
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>bobbe</h3>
          <label>ผมสั่งไปใน1-2วันของก็มาถึงแล้วส่งเร็วมาก</label>
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
