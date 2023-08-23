import React from 'react';
import { Buttons } from '../../components';
import './personal.css';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



function Personal() {
  return (
   <>
   
   <Slide>

    <div className="cv-section-Personal-slide V1 slide">
    <Buttons/>
        <div className="cv-section-Personal-jobtitle jobtitle">
            <h3>Work & Play</h3>
        </div>
        <div className="cv-section-Personal--images">
            <div className="cv-section-Personal--image1"></div>
            <div className="cv-section-Personal--image2"></div>
            <div className="cv-section-Personal--image3"></div>
        </div>
        <div className="cv-section-Personal-quote quote">
            <p>This website was created with HTML, CSS and Pure Vanilla</p>
        </div>
    </div>

    <div className="cv-section-Personal-slide V2 slide">
     <Buttons/>
        <div className="cv-section-Personal_V2-about">
            <img src="./Img/Profile/imagesArtboard 6All.png" alt=""/>
            <p>I love
            <br/>
            Coffee, soccer, roller hockey, rollerblades at the skatepark, peace, talking on the phone, riding my bike,
            stories, crafts, editing, alfajores, creating videos, botanicals, reggae, playing the drums, kindness, challenges, funky stuff,
            taking pictures, more of that, tennis, cumbia, self-help books, rock & roll, spending time with
            friends and family, water, challenging the status quo, the cold wind on my face, crazy ideas, wise people, dulce de leche, mate, experimenting, wine, empanadas,
            playing board games, amaros, Dr House, sleeping, fernet, exploring, accepting, reading, investigating, cosy places, and lots more.</p>
        </div>
    </div>

</Slide>

   
   </>
  )
}

export default Personal