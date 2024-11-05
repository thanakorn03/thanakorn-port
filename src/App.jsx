import "./App.css";
import Header from "./components/Header";
import FeaturedBox from "./components/FeaturedBox";
import AboutBox from "./components/AboutBox";
import ProjectsBox from "./components/ProjectsBox";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    /** Change active link */
    const sections = document.querySelectorAll("section[id]"); // Fixed typo 'section' should be 'sections' and '[id' should be '[id]'
    const scrollActive = () => {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight, // Fixed typo 'offsetHeighr' to 'offsetHeight'
          sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link"); // Fixed typo 'active-linlk' to 'active-link'
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link"); // Fixed typo 'active-linlk' to 'active-link'
        }
      });
    };

    /** scroll reveal */
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px", // Fixed typo 'disrace' to 'distance'
      duration: 2000,
      reset: true,
    });

    // HOME
    sr.reveal(".feature-text-card", {}); // Fixed typo 'reveakl' to 'reveal'
    sr.reveal(".feature-name", {});

    //Heading
    sr.reveal(".project-box", { interval: 200 }); // Fixed typo 'reveakl' to 'reveal

    //left-right animetion
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    

    window.addEventListener("scroll", scrollActive); // Fixed typo 'allEventlistenar' to 'addEventListener'

    // type Effect
    const typingEffect = new Typed(".typedText", {
      strings: ["Welcome To"," My Shop", "ElectronicShop"],
      loop: true,
      typeSpeed: 100, // Fixed typo 'typSpeed' to 'typeSpeed'
      backSpeed: 100, // Fixed typo 'backspeed' to 'backSpeed'
      backDelay: 2000,
    });

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <div>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <ProjectsBox />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
