import React from "react";
import { BsPhone } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

import "./styles.css";

function ServiceItem(props) {
  const icons = {
    phone: BsPhone,
  };

  const CustomTag = icons[props.icon];
  return (
    <div className="service-item">
      <IconContext.Provider value={{ size: "3em" }}>
        <div>
          <CustomTag />
        </div>
      </IconContext.Provider>

      <h2 className="service-item-title">Desenvolvedor de Aplicativos</h2>
      <h3 className="description">
        Desenvolvedor de Aplicativos Desenvolvimento
      </h3>
    </div>
  );
}

export default ServiceItem;
