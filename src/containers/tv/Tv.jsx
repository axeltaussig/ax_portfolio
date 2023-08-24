import React from 'react'
import { Buttons } from '../../components'
import './tv.css'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';

function Tv() {
  return (
   <>
   
   
      <Slide infinite={false} autoplay={false} easing="ease-out" duration={300}>
    <div className="cv-section-TV-slide V1 slide">
     <Buttons/>
        <div className="cv-section-TV-jobtitle jobtitle">
            <h3>2020 | Digital Marketing Specialist @ Trade View</h3>
        </div>
        <div className="cv-section-TV-TTR">
            <p>The<br/>Trading<br/>Revolution</p>
        </div>
        <div className="cv-section-TV-quote quote">
            <p>This website was created with HTML, CSS and Pure Vanilla</p>
        </div>
    </div>

    <div className="cv-section-TV-slide V2 slide">
      <Buttons/>
        <div className="cv-section-TV_V2-about">
            <p>Trade View creates and develops algorithmic trading technology for retail traders.
            I was in charge of increasing online sales, client acquisition and creating content.
            <br/><br />
            I developed a refreshed look & feel for the website with an enhanced e-commerce and managed all the advertising
            in-house. The business increased sales and presence above industry benchmarks.
        </p>
        </div>    
    </div>
</Slide>

   </>
  )
}

export default Tv