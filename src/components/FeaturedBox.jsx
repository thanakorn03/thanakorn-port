import React from "react";
import actor from "../assets/image/01.jpg";

function FeaturedBox() {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Welcome To My Electronic Store</span>
        </div>
        <div className="featured-name">
          <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>ยินดีต้อนรับสู่ร้านค้าสำหรับการขายอุปกรณ์อิเล็กทรอนิกส์</p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Shop Now <i className="uil uil-import"></i>
          </button>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Know More <i className="uil uil-import"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/kingharem011/" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100079720480957" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/thanakorn03" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={actor} alt="Profile" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <h3>Fast Delivery</h3>
          <p>The store offers fast delivery service to customers within 48 hours.</p>
        </a>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <h3>Great Customer Service</h3>
          <p>We have staff available to talk to you 24 hours a day.</p>
        </a>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <h3>100% Authentic</h3>
          <p>100% authentic from the manufacturing center, so you don't have to worry about whether it's a fake or not.</p>
        </a>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <h3>Fast Delivery</h3>
          <p>The store offers fast delivery service to customers within 48 hours.</p>
        </a>
      </div>
    </section>
  );
}

export default FeaturedBox;
