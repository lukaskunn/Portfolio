import React from "react";
import PageHeader from "../../components/PageHeader";
import ProjectItem from "../../components/ProjectItem";
import ServiceItem from "../../components/ServiceItem";
import { FiChevronDown } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import "./styles.css";
import { IconContext } from "react-icons/lib";
import { HashLink } from 'react-router-hash-link'

function Landing() {
  return (
    <div className="landing">
      <PageHeader />
      <div className="content">
        <div className="home" id="home">
          <div className="title">
            <h1 className="title-name">Lucas Oliveira</h1>
            <h4 className="sub-title">Computer Science Student</h4>
            <h4 className="sub-title">technology enthusiast</h4>
            <IconContext.Provider value={{ size: "2.5em" }}>
              <HashLink
                smooth to="/#about" 
                className="page-link"
              >
                <FiChevronDown className="down-icon" />
              </HashLink>
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
                started programming when i was 16 years old making small games
                for fun. lover of JavaScript and React, actually working with IT
                support but looking for jobs for web development or programming.
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              <p>
                Computer Science student (05/08) and technology enthusiast.
                Working in 2 web/mobile projects and 1 arduino project. I
                started programming when i was 16 years old making small games
                for fun. lover of JavaScript and React, actually working with IT
                support but looking for jobs for web development or programming.
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
              <p>
                Computer Science student (05/08) and technology enthusiast.
                Working in 2 web/mobile projects and 1 arduino project. I
                started programming when i was 16 years old making small games
                for fun. lover of JavaScript and React, actually working with IT
                support but looking for jobs for web development or programming.
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </i>
          </div>
        </div>
        <div className="services" id="services">
          <h2>SERVICES</h2>
          <div className="services-itens">
            <ServiceItem
              title="Desenvolvedor de Aplicativos"
              description="Desenvolvedor de Aplicativos Mobile para IOS e Android baseados em React native e Flutter"
              icon="phone"
              className="item1"
            />
            <ServiceItem
              title="Criação de Sites"
              description="Desenvolvedor de Sites em HTML, CSS, JavaScript, Node.js, MySql"
              icon="laptop"
            />
            <ServiceItem
              title="Desenvolvedor Front-End React"
              description="Desenvolvedor de aplicações frontend baseadas em React.js"
              icon="css"
            />
            <ServiceItem
              title="Desenvolvedor de Sistemas"
              description="Desenvolvedor de sistemas com linguagem c/c++, Python, Java"
              icon="code"
            />
          </div>
        </div>
        <div className="projects" id="projects">
          <h2>PROJECTS</h2>
          <div className="project-itens">
            <ProjectItem title="Today in History" background="todayInHistory" />
          </div>
        </div>
        <div className="contact" id="contact">
          <h2>CONTACT</h2>
          <div className="contacts">
              <a href="https://www.linkedin.com/in/lucas-oliveira-997810198/" target="_blank" className="contact-item" rel="noopener noreferrer">
                <IconContext.Provider value={{ size: "1.3em" }}>
                  <div>
                    <FaLinkedin />
                  </div>
                </IconContext.Provider>
                <h4>linkedin.com/in/lucas-oliveira-997810198/</h4>
              </a>
              <a href="https://github.com/lukaskunn" target="_blank"className="contact-item" rel="noopener noreferrer">
                <IconContext.Provider value={{ size: "1.3em" }}>
                  <div>
                    <FaGithub />
                  </div>
                </IconContext.Provider>
                <h4>github.com/lukaskunn</h4>
              </a>

              <div className="contact-item">
                <IconContext.Provider value={{ size: "1.3em" }}>
                  <div>
                    <HiMail />
                  </div>
                </IconContext.Provider>
                <h4>lucassioliveira098@gmail.com</h4>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
