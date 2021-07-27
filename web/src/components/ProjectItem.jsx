import React from "react";

import "../styles/project-item.css";


const images = {
  todayInHistory: "https://i.imgur.com/PPynIVd.png",
  corebizEcommerce: "https://i.imgur.com/cVcTa32.png",
  gaminfo: "https://i.imgur.com/lCvzWvZ.png"
};

function ProjectItem(props) {
  return (
    <div className="project-item">
      <img src={images[props.background]} className="banner-image" alt=""/>
      <h3 className="project-item-title">{props.title}</h3>
    </div>
  );
}

export default ProjectItem;
