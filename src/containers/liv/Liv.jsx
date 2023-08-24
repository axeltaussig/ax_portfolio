import React from 'react'
import './liv.css'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';

import { Buttons } from '../../components'

function Liv() {
  return (
   <>
   
        <Slide infinite={false} autoplay={false} easing="ease-out" duration={300}>

    <div className="cv-section-LIV-slide V1 slide">
      
    <Buttons />

        <div className="cv-section-LIV-jobtitle jobtitle">
            <h3>2021-2022 | Digital Marketing @ LIV</h3>
        </div>
        <div className="cv-section-LIV-quote quote">
            <p>Artwork inspired by the LIV aesthetics</p>
        </div>
    </div>

    <div className="cv-section-LIV-slide V2 slide">
     
      <Buttons />


        <div className="cv-section-LIV-about">
            <p>I worked for the Law Institute of Victoria developing, tracking and optimising multi-channel content marketing
            strategies; placing an emphasis on website optimisation, SEO/SEM, email campaigns and display advertising.
            </p>
            <p>
            Projects I worked on include the creation of a new company website from concept to release, an increased membership year by a net 3%, 200+ empowerment initiatives, and Coordinated the Diverse Voices in the Law publication.
        </p>
        </div>
    </div>
    </Slide>
   
   </>
  )
}

export default Liv