import React from "react";
import CV_thanakorn from "../assets/download/CV_thanakorn.pdf";

const AboutBox = () => {
  return <div>AboutBox</div>;

    const Aboutbox = () => {
      return (
        <section className="section" id="#about">
          <div className="top-header">
            <h1>About me</h1>
          </div>
          <dev className="row"> 
            {/** ABout me **/}
            <div className="col">
              <div className="about-info">
                <h3>My introduction</h3>
                <p>...
                  <div className="about-btu">
                    <a href={cv_wuttha} target="_blank">
                    </a>
                  </div>
                </p>
              </div>
            </div>
          {/** Skills **/}
          <div className="col">
            <div className="skills-box">
              <div className="skills-header"></div>
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
                <span>Mysql</span>
                <span>PHP</span>
                <span>node</span>
            </div>
            <div className="skills-box"></div>
            <div className="skills-box"></div>
          </div>
          </dev>
        </section>
        
      );




    }
};

export default AboutBox;
