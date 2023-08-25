import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./navbar.css";

function Navbar() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelectorAll(".slide.V1");
  const array = Array.from(section);

  let navbarValue = useRef(null);

  useEffect(() => {
    for (let index = 0; index < array.length; index++) {
      const elementSection = array[index];
      const jobTitle = elementSection.querySelector(".jobtitle h3");

      if (jobTitle) {
        ScrollTrigger.create({
          trigger: elementSection,
          start: "50% +=200",
          end: "+=500 bottom",
          markers: true,
          onEnter: function () {
            let innerTextQuote = jobTitle.innerText;


            
            console.log(innerTextQuote)
            //I don't understand the current
            console.log(navbarValue.current.innerText)
            
            navbarValue.current.innerText = innerTextQuote

          },
          onEnterBack: function () {
            // Handle exit animation or other actions if needed
             navbarValue.current.innerText = innerTextQuote
            
          }
        });
      }
    }
  }, [array]);

  return (
    <>
      <header className="main-head">
        <nav className="navbar">
          <div className="name">
            <span>
              <i className="fa-solid fa-circle" />
            </span>
            <h1>Axel Taussig</h1>
          </div>
          <ul>
            <li ref={navbarValue}>Digital Marketing Specialist</li>
          </ul>
          <a href="https://www.hyperfocus.au">
            <p>Personal Projects</p>
            <h2>Hyperfocus</h2>
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
