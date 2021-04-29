import React from "react";
import PageHeader from "../../components/PageHeader";
import ProjectItem from '../../components/ProjectItem'
import { FiChevronDown } from "react-icons/fi";

import "./styles.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

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
            <IconContext.Provider value={{ size: "2.5em" }}>
              <Link
                to={{
                  pathname: "/",
                  search: "?sort=name",
                  hash: "#about",
                  state: { fromDashboard: true },
                }}
                className="page-link"
              >
                <FiChevronDown className="down-icon" />
              </Link>
            </IconContext.Provider>
          </div>
        </div>

        <div className="about" id="about">
          <h2>ABOUT</h2>
          <div className="about-text">
            <h3 className="name">Lucas Oliveira</h3>
            <i>
              <p>
                Computer Science student (05/08) and technology enthusiast.
                Working in 2 web/mobile projects and 1 arduino project. I
                started programming at the age of 16 with small games. lover of
                JavaScript and React, currently looking for jobs for web
                development aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </i>
          </div>
        </div>

        <div className="projects">
          <h2>PROJECTS</h2>
          <div className="project-itens">
            <ProjectItem title="Today in History"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
