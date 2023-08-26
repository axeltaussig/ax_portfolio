
import arrowPrev from '../assets/images/buttons/ArrowAsset 1Left.svg'
import arrowNext from '../assets/images/buttons/ArrowAsset 3right.svg'

export const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
    margin: '0 50px',
};

export const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><img src={arrowPrev} alt=""/></button>,
    nextArrow: <button style={{ ...buttonStyle }}><img src={arrowNext} alt=""/></button>
}

export const slideConfig = {
    infinite: false,
    autoplay:false,
    easing:"ease-out",
    duration:300,
    ...properties
}