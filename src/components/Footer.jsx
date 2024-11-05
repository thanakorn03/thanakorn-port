import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <h2>Contact</h2>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <a href="https://www.instagram.com/kingharem011/" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="uil uil-instagram-alt"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100079720480957" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="uil uil-facebook"></i>
        </a>
        <a href="https://github.com/thanakorn03" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
      <div className="bottom-footer">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            Thanakron
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
