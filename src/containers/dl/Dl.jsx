import React from 'react';
import { Buttons } from '../../components';
import './dl.css';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import picKookaburra from './images/DL-imageArtboard 2HQ_V2.jpg'
import picWaterfall from './images/DL-imageArtboard 3HQ_V2.jpg'


function Dl() {
  return (
<>

  <Slide infinite={false} autoplay={false} easing="ease-out" duration={300}>

    <div className="cv-section-DL-slide V1 slide">
     <Buttons/>
        <div className="cv-section-DL-jobtitle jobtitle">
            <h3>2019 | Rock Artisan @ Design Landscapes</h3>
            <p></p>
        </div>
        <div className="cv-section-DL-quote quote">
            <p>Rockwork & Aivery<br/>Wildlife Retreat at Taronga</p>
        </div>
    </div>

    <div className="cv-section-DL-slide V2 slide">
  <Buttons/>
        <div className="cv-section-DL_V2-about">
            <div className="cv-section-DL_V2-about-image1 mobile">
               <img src={picWaterfall} alt=""/> 
            </div>
            <div className="cv-section-DL_V2-about-image2 mobile">
            <img src={picKookaburra} alt=""/>
            </div>
            <div className="cv-section-DL_V2-about-text">
           <p>Expanding on my previous artificial rockwork experience with PIEDRAS, I took part in a project at Taronga Zoo that
        centered on the landscape architecture of the Wild Life Retreat exhibit.</p>
        <br/>
        <p>I collaborated with master rock artisans, contributing to the construction of the structure and the detailing of
        the water features. Working with them felt like a realisation to all my prior research efforts.</p>
        <br/>
        <p className="mobile">The image on the right highlights the primary waterfall at the retreat, sculpted and unpainted. Meanwhile, the image on
        the left captures the avian enclosure under our construction and the beauty of our natural world. Exemplified by
        the towering giraffes and the iconic Kookaburra.</p>
            </div>
        </div>
    </div>

    </Slide>

</>
  )
}

export default Dl