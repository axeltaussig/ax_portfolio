import React from 'react';

import arrowPrev from '../assets/images/buttons/ArrowsArtboard 1.svg'
import arrowNext from '../assets/images/buttons/ArrowsArtboard 1 copy.svg'

export const properties = {
    prevArrow: <button className='button-style'><img src={arrowPrev} alt=""/></button>,
    nextArrow: <button className='button-style'><img src={arrowNext} alt=""/></button>
}

export  const slideConfig = {
    infinite: false,
    autoplay:false,
    easing:"ease-out",
    duration:200,
    ...properties,
};



