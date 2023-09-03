import React, { useState } from 'react'

import { Buttons } from '../../components'
import { slideConfig } from '../SliderConfig'


import picFankenslogo from './images/Fankens Logo.png'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';

import './fankens.css'
import { useEffect } from 'react'

function Fankens() {

  const [transition, setTransition] = useState(false);

  const change = () => {
    setTransition(!transition);
     document.body.parentElement.classList.toggle("stop-scrolling");
  };

  return (
  <>
  
    <Slide {...slideConfig} onStartChange={change} onChange={change}>
    <div className="cv-section-Fankens-slide V1 slide">
      
        <div className="cv-section-Fankens-jobtitle jobtitle">
            <h3>2020 - 2023 | Freelance @ Fankens</h3>
        </div>
        <img src={picFankenslogo} alt=""/>
        <div className="cv-section-Fankens-quote quote">
            <p>Fankens logo designed<br/>by Ramon Parajua<i></i></p>
        </div>
    </div>

    <div className="cv-section-Fankens-slide V2 slide">
     
        <div className="cv-section-Fankens_V2-about">
        <p>Fankens was born out of love for creating ads. <br/>
        My passion for advertising and collaborating with clients to create
        their brands and improve their web visibility led to the start of my freelance work and marked the inception of my journey as an Search Engine Specialist.</p>
        </div>
  
        </div>


    </Slide>

  
  </>
  )
}

export default Fankens