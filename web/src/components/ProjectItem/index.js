import React from "react";
import styled from "styled-components";

import "./styles.css";
import todayInHistory from "../../static/images/today_in_history_print1.PNG";

const images = {
  todayInHistory: todayInHistory,
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
      filter: grayscale(0%);
      width: 250px;
      height: 250px;
      box-shadow: 0px 0px, 0px 0px;
      border: 2px outset white;
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
