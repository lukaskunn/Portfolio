import React from "react";
import { IconContext } from "react-icons/lib";
import {
  FaLaptopCode,
  FaCss3,
  FaReact,
  FaMobileAlt,
  FaCode,
} from "react-icons/fa";

import "../styles/service-item.css";

function ServiceItem(props) {
  const icons = {
    phone: FaMobileAlt,
    laptop: FaLaptopCode,
    css: FaCss3,
    react: FaReact,
    code: FaCode,
  };

  const CustomTag = icons[props.icon];
  return (
    <div className="service-item">
      <IconContext.Provider value={{ size: "3.5em" }}>
        <div>
          <CustomTag />
        </div>
      </IconContext.Provider>

      <h2 className="service-item-title">{props.title}</h2>
      <h3 className="description">{props.description}</h3>
    </div>
  );
}

export default ServiceItem;
