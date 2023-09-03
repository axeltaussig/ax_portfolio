import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./navbar.css";

function Navbar() {

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelectorAll(".slide.V1");
  const array = Array.from(section);


  let navbarValue = useRef(null);
  let innerTextQuote = ""; // Initialize the variable

  

   useEffect(() => {

    for (let index = 0; index < array.length; index++) {
      const elementSection = array[index];

      const jobTitle = elementSection.querySelector(".jobtitle h3");
      console.log(navbarValue.current.style.backgroundColor)

      if (jobTitle) {
        ScrollTrigger.create({
          trigger: elementSection,
          start: "50% +=90%",
          end: "150% bottom",
          

          onEnter: function () {
         navbarValue.current.innerText = jobTitle.innerText;
        //  navbarValue.current.style.backgroundColor = "#AA0000";
          },
          onEnterBack: function () {
         navbarValue.current.innerText = jobTitle.innerText;
          }
        });
      }
    }
  }, [array]);

  return (
    <>
      <header className="main-head">
        <nav className="navbar">
          <a className="name" href="/">
          <div className="name">
            <span>
              <i className="fa-solid fa-circle" />
            </span>
            <h1>Axel Taussig</h1>
          </div>
          </a>
          <ul>
            <li ref={navbarValue}>Digital Marketing Specialist</li>
          </ul>
          <a target="_blank" rel="noreferrer" href="https://www.hyperfocus.au">
            <p>Personal Projects</p>
            <h2>Hyperfocus</h2>
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
