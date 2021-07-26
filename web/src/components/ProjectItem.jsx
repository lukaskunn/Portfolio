import React from "react";
import styled from "styled-components";

import "../styles/project-item.css";


const images = {
  todayInHistory: "https://i.imgur.com/PPynIVd.png",
  corebizEcommerce: "https://i.imgur.com/cVcTa32.png",
  gaminfo: "https://i.imgur.com/lCvzWvZ.png"
};

function ProjectItem(props) {
  const Banner = styled.div`
    background-image: url(${images[props.background]});
    width: 190px;
    height: 190px;
    filter: grayscale(100%);
    transition: all 0.2s ease-out;
    background-size: cover;
    background-position: center;
    box-shadow: 7px 7px, -7px -7px;

    &:hover {
      background-image: url(${images[props.background]});
    }
  `;

  return (
    <div className="project-item">
      <Banner />
      <h3 className="project-item-title">{props.title}</h3>
    </div>
  );
}

export default ProjectItem;
