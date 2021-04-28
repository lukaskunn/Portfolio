import React from "react";
import PageHeader from "../../components/PageHeader";
import { FiChevronDown } from "react-icons/fi";

import "./styles.css";

function Landing() {
  return (
    <div className="landing">
      <PageHeader />
      <div className="content">
        <div className="home">
          <div className="title">
            <h1 className="title-name">Lucas Oliveira</h1>
            <h4 className="sub-title">Computer Science Student</h4>
            <h4 className="sub-title">technology enthusiast</h4>
          </div>
          <FiChevronDown />
        </div>

        <div className="about">
          <h2>About</h2>
          <p></p>
        </div>
        <div className="about">
          <h2>About</h2>
          <p></p>
        </div>
        <div className="about">
          <h2>About</h2>
          <p></p>
        </div>
        <div className="about">
          <h2>About</h2>
          <p></p>
        </div>
        <div className="about">
          <h2>About</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
