import React, {useState} from 'react';

import { slideConfig } from '../SliderConfig';

import PicTaller from './images/imagesArtboard 3Piedras.png'
import picBanco from './images/imagesArtboard 4Piedras.png'
import picTaller2 from './images/imagesArtboard 5Piedras.png'
import picRaiandinomata from './images/imagesArtboard 6Piedras.png'
import picCascada from './images/imagesArtboard 7Piedras.png'
import picWaterfall from './images/PiedrasAsset 3Swimming Pool.png'
import picMt from './images/imagesArtboard 9Piedras.png'
import piedrasLogo from './images/LogoArtboard 2HQ.png'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './piedras.css';

function Piedras() {

const [transition, setTransition] = useState(false);

  const change = () => {
    setTransition(!transition);
     document.body.parentElement.classList.toggle("stop-scrolling");
  };

  return (
  <>
  
    <Slide {...slideConfig} onStartChange={change} onChange={change}>

    <div className="cv-section-Piedras-slide V1 slide">
      <div class="cv-section-Synq-jobtitle jobtitle">
            <h3>2016 - 2018 | Co-Founder @ PIEDRAS</h3>
        </div>
           <div className="cv-section-Piedras-quote quote">
            <p>Construction of Waterfall
for Swimming Pool</p>
        </div>
      </div>
    

    <div className="cv-section-Piedras-slide V2 slide">
   
        <div className="cv-section-Piedras_V2-text">
            <img src={piedrasLogo} alt=""/>
            <p>PIEDRAS was conceived with the purpose of bringing natural environments into our daily lives. The company's core
            concentration lay in the construction of rockworks for landscape architecture.</p>
            <p>I primarily was focused towards digital client acquisition, client negotiations, and project
            development.</p>
            <p className="mobile">Working alongside my dear friend Ramon Parajua, and Jatsuo Inomata, in several ecstatic projects was truly gratifying. The hone
            talents possessed by both individuals are truly inspiring.</p>
        </div>
        <div className="cv-section-Piedras_V2-grid mobile">
            <div className="image image-1"><img  src={picCascada} alt=""/></div>
            <div className="image image-2"><img  src={picRaiandinomata} alt=""/></div>
            <div className="image image-3"><img  src={picWaterfall} alt=""/></div>
            <div className="image image-4"><img  src={PicTaller} alt=""/></div>
            <div className="image image-5"><img  src={picMt} alt=""/></div>
            <div className="image image-6"><img src={picBanco} alt=""/></div>
            <div className="image image-7"><img src={picTaller2} alt=""/></div>
        </div>

    </div>

    </Slide>
 
 </>
  )
}

export default Piedras