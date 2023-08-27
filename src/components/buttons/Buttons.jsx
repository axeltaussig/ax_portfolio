import React from "react";
import "./buttons.css";
import leftArrow from "../../assets/images/buttons/ArrowAsset 1Left.svg";
import buttomArrow from "../../assets/images/buttons/ArrowAsset 2bottom.svg";
import rightArrow from "../../assets/images/buttons/ArrowAsset 3right.svg";

function Buttons() {
  return (
    <>
      <div className="buttons">
        <button className="button bottom">
          <span />
          <img src={buttomArrow} alt="" />
        </button>
      </div>
    </>
  );
}

export default Buttons;
