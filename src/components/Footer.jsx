import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <p>K</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu"></ul>
      </div>
      <div className="footer-social-icons">
      <a href="https://www.instagram.com/kingharem011/">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100079720480957">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/thanakorn03">
              <i className="uil uil-github-alt"></i>
        </a>
      </div>
      <div className="bottom-footer">
        <p>
          copyright &copy;{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            Thanakron
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  )
};

export default Footer;
