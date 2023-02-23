import React from "react";
import { randomImages } from "./images";
import imgBgStyle from "./ImageBackground.module.scss";

function ImageBackground() {
  return (
    <div className={imgBgStyle["img-bg-container"]}>
      {randomImages.map((image, index) => {
        return (
          <img
            src={image}
            className={imgBgStyle[`image_${index + 1}`]}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default ImageBackground;
