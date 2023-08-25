import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./navbar.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function Navbar() {

  gsap.registerPlugin(ScrollTrigger);

  // Declarando la constante de cada section y quote

  let section = document.querySelectorAll('.slide.V1')

  //Pasando cada nodeElement a array

  const array = Array.from(section);


  // Declarando navbar Value

  let navbarValue = useRef(null); 
  const el = navbarValue.current;

  //  Looping all the sections

  for (let index = 0; index < array.length; index++) {
    
  const elementSection = array[index];
  
  let elementQuote = elementSection.querySelectorAll('.jobtitle h3').innerText;

  let innerTextQuote = elementQuote


  ScrollTrigger.create({

  trigger: (elementSection),
  start: '50% =+200',
  end: '=+500 bottom',
  markers: true,
  
  onEnter: function() {
    // gsap.set(elementQuote, { color: "red" })
      // el.innerText = {innerTextQuote}

      console.log(innerTextQuote)
  
  },
  
  onEnterBack: function() {
  //  gsap.set(elementQuote, { color: "black" })
      // console.log(innerTextQuote)
  }
  
})

  }

  // USEEFFECT 

  // |
  // |
  // |
  // V

  // No pude cambiar el estilo
  // let changeColor = quote.style.Color = 'red';

  // const [names, setNames] = useState([]);

  // useEffect(() => {


  //   // axios
  //   //   .get("https://api.api-ninjas.com/v1/babynames?gender=neutral", {
  //   //     headers: {
  //   //       "x-api-key": "A+Ncz8PzDeMNU8+IoLgv5A==MBYIfTL1vkeKCwdq",
  //   //     },
  //   //   })
  //   //   .then(function (response) {
  //   //     // handle success
  //   //     setNames(response.data);
  //   //     //console.log(response);
  //   //   })
  //   //   .catch(function (error) {
  //   //     // handle error
  //   //     console.log(error);
  //   //   });

 



  // }, [array]);

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

