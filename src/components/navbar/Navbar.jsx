import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./navbar.css";

function Navbar() {

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelectorAll(".slide.V1");
  const array = Array.from(section);

  let navbarValue = useRef(null);
  let Name = useRef(null);
  let backgroundColor = useRef(null);
  let PP = useRef(null);
  let Hyperfocus = useRef(null);


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
            // set value of text
         navbarValue.current.innerText = jobTitle.innerText;

        //  change nav colours
        backgroundColor.current.className = `navbar ${elementSection.classList[0].toString()}-backgroundColor`;
        Name.current.className = `${elementSection.classList[0].toString()}-Name`;
        PP.current.className = `${elementSection.classList[0].toString()}-PP`;
        Hyperfocus.current.className = `${elementSection.classList[0].toString()}-Hyperfocus`;
        navbarValue.current.className = `${elementSection.classList[0].toString()}-Name`;
  
          },
         onEnterBack: function () {
             // set value of text
         navbarValue.current.innerText = jobTitle.innerText;

              //  change nav colours
         backgroundColor.current.className = `navbar ${elementSection.classList[0].toString()}-backgroundColor`;
               Name.current.className = `${elementSection.classList[0].toString()}-Name`;
        PP.current.className = `${elementSection.classList[0].toString()}-PP`;
        Hyperfocus.current.className = `${elementSection.classList[0].toString()}-Hyperfocus`;
         navbarValue.current.className = `${elementSection.classList[0].toString()}-Name`;

          },
        });
      }
    }
  
  }, [array]);

  return (
    <>
      <header className="main-head" >
        <nav ref={backgroundColor} className="navbar">
          <a className="name" href="/">
          <div ref={Name} className="name">
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
            <p ref={PP}>Personal Projects</p>
            <h2 ref={Hyperfocus}>Hyperfocus</h2>
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
