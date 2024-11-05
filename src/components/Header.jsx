import React from "react";
import CV_thanakorn from "../assets/image/01.jpg"; // ตรวจสอบว่านำเข้าถูกต้อง

const Header = () => {
  const menufunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Eletronic Equipment</p>
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
              Popular
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Review
            </a>
          </li>
        </ul>
      </div>
      
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menufunction}></i>
      </div>
    </nav>
  );
};

export default Header;
