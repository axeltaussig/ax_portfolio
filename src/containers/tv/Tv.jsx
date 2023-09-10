import React, {useState, useLayoutEffect, useRef} from "react";

import { Buttons } from "../../components";
import { slideConfig } from "../SliderConfig";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./tv.css";

//select font TTR
  //  const theTradingRevolution = document.querySelectorAll(".cv-section-TV-TTR");


function Tv() {

//  const [transition, setTransition] = useState(false);
const TTR = useRef()
const Context = useRef()

  // const change = () => {
  //   setTransition(!transition);
  //    document.body.parentElement.classList.toggle("stop-scrolling");
  // };

  //  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {

      let ctx = gsap.context(() => {

     gsap.to(TTR.current, {
      color: "#11374D", ease: "sine", duration: 1.2,
              scrollTrigger: {
                  trigger: TTR.current,
                  start: "-500 top",
                  end: "end end",
                }   
    });

 }, Context); // <- IMPORTANT! Scopes selector text


   return () => ctx.revert(); // cleanup
  
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
  <>
    <Slide {...slideConfig} >
        <div ref={Context} className="cv-section-TV-slide V1 slide">
          <div className="cv-section-TV-jobtitle jobtitle">
            <h3>2020 | Digital Marketing Specialist @ Trade View</h3>
          </div>
          <div ref={TTR} className="cv-section-TV-TTR">
            <p>
              The
              <br />
              Trading
              <br />
              Revolution
            </p>
          </div>
          <div className="cv-section-TV-quote quote">
            <p>This website was created with HTML, CSS and Pure Vanilla</p>
          </div>
        </div>

        <div className="cv-section-TV-slide V2 slide">
          <div className="cv-section-TV_V2-about">
            <p>
              Trade View creates and develops algorithmic trading technology for
              retail traders. I was in charge of increasing online sales, client
              acquisition and creating content.
              <br />
              <br />I developed a refreshed look & feel for the website with an
              enhanced e-commerce and managed all the advertising in-house. The
              business increased sales and presence above industry benchmarks.
            </p>
          </div>
  
        </div>
      </Slide>
    </>
  );
}

export default Tv;
