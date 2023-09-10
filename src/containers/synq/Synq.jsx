import React, {useState} from 'react'

import { slideConfig } from '../SliderConfig';

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';

import './synq.css'

function Synq() {

const [transition, setTransition] = useState(false);

  const change = () => {
    setTransition(!transition);
     document.body.parentElement.classList.toggle("stop-scrolling");
  };

  return (
  <>
  
    <Slide {...slideConfig } onStartChange={change} onChange={change}>

    <div class="cv-section-Synq-slide V1 slide">
        
        <div class="cv-section-Synq-jobtitle jobtitle">
            <h3>Current - 2022 | SEM Account Manager @ SYNQ</h3>
        </div>
        <div class="cv-section-Synq-ad">
            <span>Ad • Brands-with-Hearts</span>
            <h4>Making Brands Memorable. Crafting Perfect Ads.</h4>
            <p>Establishing relationships between brands and people since 2019. Solid Strategies & Captivating Ads. Analytical | Passionate. Learn more ></p>
        </div>
            <div class="cv-section-Synq-quote quote">
                <p>This website was created with HTML, CSS and Pure Vanilla</p>
            </div>
    </div>

    <div class="cv-section-Synq-slide V2 slide">
       
        <div class="cv-section-Synq-about">
           <p>
            I'm currently part of the SYNQ team working as a Search Engine Marketing account manager, creating strategies and content for a portfolio of B2B and B2C
            Brands. My duties centre on increasing performance; budget planning, ad creation, reporting, website optimisation, and tracking implementation.
            </p>
        </div>
       
    </div>

</Slide>

  </>
  )
}

export default Synq