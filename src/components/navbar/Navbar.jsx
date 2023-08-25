import React, { useState, useEffect } from "react";
import axios from "axios";
import "./navbar.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {



  // Declarando la constante de cada section

  let quote = document.querySelector('.slide.quote');

  //No se porq no me lo declara null.
  let section = document.querySelector('.slide.V1, .slide.V2');

  console.log(section)

  // No pude cambiar el estilo
  // let changeColor = quote.style.Color = 'red';

  // const [names, setNames] = useState([]);

  useEffect(() => {


    // axios
    //   .get("https://api.api-ninjas.com/v1/babynames?gender=neutral", {
    //     headers: {
    //       "x-api-key": "A+Ncz8PzDeMNU8+IoLgv5A==MBYIfTL1vkeKCwdq",
    //     },
    //   })
    //   .then(function (response) {
    //     // handle success
    //     setNames(response.data);
    //     //console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });

  ScrollTrigger.create({
  
  trigger: ('section.text-change'),
  start: 'top -=100px', 
  
  onEnter: function() {
    gsap.set('h2.one', { display: "none" })
    gsap.set('h2.two', { display: "unset" })
  },
  
  onLeaveBack: function() {
    gsap.set('h2.one', { display: "unset" })
    gsap.set('h2.two', { display: "none" })
  }
  
})

  }, []);

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
            <li>Digital Marketing Specialist</li>
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
