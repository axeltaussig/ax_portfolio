import React from "react";
import { Buttons } from "../../components";
import "./intro.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Intro() {
  return (
    <>
      <Slide infinite={false} autoplay={false} easing="ease-out" duration={300}>
        <div className="cv-section-Intro-slide V1 slide">
          <Buttons />

          <div className="cv-section-Intro-jobtitle jobtitle">
            <h3>Digital Marketing Specialist</h3>
          </div>
          <div className="cv-section-Intro-about-V1">
            <p>My experiences, discoveries and passions.</p>
          </div>
          <div className="cv-section-Intro-quote quote">
            <p>
              This website is currently under construction - created with HTML,
              CSS and Vanilla JS
            </p>
          </div>
        </div>

        <div className="cv-section-Intro-slide V2 slide">
          <Buttons />
          <div className="cv-section-Intro-about-V2">
            <p>I deliver meaningful experiences. </p>
            <p>My vision is to inspire you, to spark up your soul.</p>
            <p>
              I'm a digital marketing expert, with experience working in diverse
              creative projects from concept to realisation. My passion is my
              profession.
            </p>
            <p>
              In my day-to-day, I venture into cultivating inspiring ideas and
              nurturing the synergy of collaboration to transform them into
              reality.
            </p>
          </div>
        </div>
      </Slide>
    </>
  );
}

export default Intro;
