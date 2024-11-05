import React from "react";

const ContactBox = () => {
  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Contact Me</h1>
        <span>Do you have a project in mind? Contact me here!</span>
      </div>
      <div className="row">
        <div className="col contact-info">
          <h2>
            Find Me <i className="uil uil-corner-right-down"></i>
          </h2>
          <p>
            <i className="uil uil-envelope"></i>
            Email: <a href="mailto:664259019@webmail.npru.ac.th">664259019@webmail.npru.ac.th</a>
          </p>
          <p>
            <i className="uil uil-phone"></i>
            Phone: +83 835 0251
          </p>
        </div>
        <div className="col form-control">
          <h3>Subscribe to Our New Products</h3>
          <div className="text-area">
            <textarea placeholder="Your message..."></textarea>
          </div>
          <div className="form-button">
            <button className="btn">
              Subscribe <i className="uil uil-message"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
