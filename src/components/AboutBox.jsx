import React from "react";
import CV_thanakorn from "../assets/download/CV_thanakorn.pdf";

const AboutBox = () => {
  return (
    <section className="section" id="about"> {/* เปลี่ยนจาก "#about" เป็น "about" สำหรับ ID ที่ถูกต้อง */}
      <div className="top-header">
        <h1>About me</h1>
      </div>
      <div className="row"> 
        {/* About Me Section */}
        <div className="col">
          <div className="about-info">
            <h3>Information about our equipment store</h3>
            <p>
            Our shop sells everything from electrical appliances to computer and mobile phone equipment and many more.
            </p>
            <div className="about-btn">
              <a href={CV_thanakorn} target="_blank" rel="noopener noreferrer">
              Source of equipment
              </a>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default AboutBox;
