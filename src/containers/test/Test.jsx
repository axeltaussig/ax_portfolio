import React, {useState} from "react";

import { slideConfig } from '../SliderConfig'
import Navbar from "../../components/navbar/Navbar"

import HubspotContactForm from '../../components/forms/form-hubspot'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./test.css";

 function Test() {

const [transition, setTransition] = useState(false);

  const change = () => {
    setTransition(!transition);
     document.body.parentElement.classList.toggle("stop-scrolling");
  };

  return (
  <>
    <Navbar />
    <Slide {...slideConfig} onStartChange={change} onChange={change}>
        <div className="cv-section-Test-slide V1 slide">
          

          <div className="cv-section-Test-jobtitle jobtitle">
            <h3>Test slide</h3>
          </div>
          <div className="cv-section-Test-about-V1">
          <HubspotContactForm />
          </div>
        </div>

        <div className="cv-section-Test-slide V2 slide">
          
          <div className="cv-section-Test-about-V2">
            <p>Test Slide
            </p>
          </div>
        </div>

      </Slide>
    </>
  );
}

export default Test;
