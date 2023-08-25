import React, {useEffect, useRef} from 'react';
import { Buttons } from '../../components';
import './tt.css';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import picTt from './images/Alejanndro-Taussig_Fabian-Taussig-Marcelo-Taussig.png'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Tt() {

  let quote = useRef(null) 

  useEffect(() => {

  const el = quote.current;

  gsap.to(el, {
        scrollTrigger: {
        trigger:  el,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers:false,
        toggleActions: "restart none none none"
        },
      
      y: 0,
      duration: 0
  });
  }, [])

  return (
    <>
    
  <Slide infinite={false} autoplay={false} easing="ease-out" duration={300}>

    <div className="cv-section-TT-slide V1 slide">
     <Buttons/>
        <div className="cv-section-TT-jobtitle jobtitle">
            <h3>2015 - 2018 | Sales & Digital @ TODOCHILLER</h3>
            <p></p>
        </div>
        <div className="cv-section-TT-quote quote" ref={quote}>
            <p>First line of Alfaliq Manufactured by Thomas Tom Taussig</p>
        </div>
    </div>

    <div className="cv-section-TT-slide V2 slide">
  <Buttons/>
    <div className="cv-section-TT_V2--cardblock">
        <div className="cv-section-TT_V2-image mobile">
            <img src={picTt} alt=""/>
        </div>
        <div className="cv-section-TT_V2-text">
            <p>TODOCHILLER is an industrial manufacturer of water coolers. It stands as the enduring legacy of my family's business,
            which was established in 1960 by Tomas Tom Taussig.</p>
            <br/>
            <p>I consider myself fortunate to have shared moments with my family as we collectively nurtured the company and developed
            the business. The wisdom and heartfelt warmth I received are unparalleled.</p>
            <br/>
            <p className="mobile">In the photograph, you can observe Alejandro, Fabian, and Marcelo — the three brothers and proprietors of the
            enterprise. Their unique blend of skills, encompassing artistic, mechanical, and engineering talents, contributes to the
            company's success.
            </p>
        </div>
    </div>
    </div>
    </Slide>
    
    </>
  )
}

export default Tt