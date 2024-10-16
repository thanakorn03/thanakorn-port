import React from "react";
import CV_thanakorn from "../assets/download/CV_thanakorn.pdf"; // ตรวจสอบว่านำเข้าถูกต้อง

const Header = () => {
  const menufunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Thanakorn</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list nav_list">
          <li>
            <a href="#home" className="nav-link active-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="nav-link">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <a href={CV_thanakorn} target="_blank">
          <button className="btn">
            Download CV <i className="uil uil-download-alt"></i>
          </button>
        </a>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menufunction}></i>
      </div>
    </nav>
  );
};

export default Header;
