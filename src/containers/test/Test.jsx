import React from "react";

import { Buttons } from "../../components";
import { slideConfig } from '../sliderConfig'

import HubspotContactForm from '../../components/forms/form-hubspot'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./test.css";

 function Test() {

  // useEffect(() => {
  
  //         //Hubspot

  //     const script = document.createElement('script');
  //       script.src='https://js.hsforms.net/forms/v2.js';
  //       document.body.appendChild(script);

  //       script.addEventListener('load', () => {
  //           // @TS-ignore
  //           if (window.hbspt) {
  //               // @TS-ignore
  //               window.hbspt.forms.create({
  //                   region: "eu1",
  //                 portalId: "143188444",
  //                 formId: "112aabe1-9c86-4326-b579-04049492d548"
  //               })
  //           }
  //       });

        //porque no funciono esta?

//         <script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/embed/v2.js"></script>
// <script>
//   hbspt.forms.create({
//     region: "eu1",
//     portalId: "143188444",
//     formId: "112aabe1-9c86-4326-b579-04049492d548"
//   });
// </script>
  
   
  // }, [])
  

  
  return (
    <>
      <Slide {...slideConfig} >
        <div className="cv-section-Test-slide V1 slide">
          

          <div className="cv-section-Test-jobtitle jobtitle">
            <h3>Digital Marketing Specialist</h3>
          </div>
          <div className="cv-section-Test-about-V1">
            <p>Test Slide</p>

          <HubspotContactForm />

          </div>
          <div className="cv-section-Test-quote quote">
            <p>
              This website is currently under construction - created with HTML,
              CSS and Vanilla JS
            </p>
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
