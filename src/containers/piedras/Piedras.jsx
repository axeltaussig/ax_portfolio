import React from 'react';
import { Buttons } from '../../components';
import './piedras.css';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Piedras() {
  return (
 <>
 <Slide className="cv-section-Piedras">

    <div className="cv-section-Piedras-slide V1 slide">
     <Buttons/>
      </div>

    <div className="cv-section-Piedras-slide V2 slide">
   <Buttons/>
        <div className="cv-section-Piedras_V2-text">
            <img src="./Img/Piedras/1x/LogoArtboard 2HQ.png" alt=""/>
            <p>PIEDRAS was conceived with the purpose of bringing natural environments into our daily lives. The company's core
            concentration lay in the construction of rockworks for landscape architecture.</p>
            <p>I primarily was focused towards digital client acquisition, client negotiations, and project
            development.</p>
            <p className="mobile">Working alongside my dear friend Ramon Parajua, and Jatsuo Inomata, in several ecstatic projects was truly gratifying. The hone
            talents possessed by both individuals are truly inspiring.</p>
        </div>
        <div className="cv-section-Piedras_V2-grid mobile">
            <div className="image image-1"><img  src="./Img/Piedras/1x/imagesArtboard 7Piedras.png" alt=""/></div>
            <div className="image image-2"><img  src="./Img/Piedras/1x/imagesArtboard 6Piedras.png" alt=""/></div>
            <div className="image image-3"><img  src="./Img/Piedras/Site (1).jpg" alt=""/></div>
            <div className="image image-4"><img  src="./Img/Piedras/1x/imagesArtboard 3Piedras.png" alt=""/></div>
            <div className="image image-5"><img  src="./Img/Piedras/1x/imagesArtboard 9Piedras.png" alt=""/></div>
            <div className="image image-6"><img src="./Img/Piedras/1x/imagesArtboard 4Piedras.png" alt=""/></div>
            <div className="image image-7"><img src="./Img/Piedras/1x/imagesArtboard 5Piedras.png" alt=""/></div>
        </div>
    </div>

    </Slide>
 
 </>
  )
}

export default Piedras