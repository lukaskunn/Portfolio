import React from "react";
import PageHeader from "../components/PageHeader.jsx";
import ProjectItem from "../components/ProjectItem.jsx";
import ServiceItem from "../components/ServiceItem.jsx";
import { FiChevronDown } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import "../styles/landing.css";
import { IconContext } from "react-icons/lib";
import { HashLink } from "react-router-hash-link";

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
              <HashLink smooth to="/#about" className="page-link">
                <FiChevronDown className="down-icon" />
              </HashLink>
            </IconContext.Provider>
          </div>
        </div>

        <div className="about" id="about">
          <h2>SOBRE MIM</h2>
          <div className="about-text">
            <h3 className="name">Lucas Oliveira</h3>
            <i>
              <p>
                20 anos, estudante de Ciência da Computação e entusiasta da
                tecnologia, sempre buscando entender como as mínimas coisas
                funcionam e apaixonado por competições de programação.
                Trabalhando há 2 anos com Infraestrutura e IT suporte,
                atualmente trabalhando em 2 projetos web/mobile e 1 projeto de
                automação com arduino. Iniciei no mundo da programação com 16
                anos fazendo pequenos jogos por diversão e acabei me apaixonando
                por tecnologia.
              </p>
              <p>
                Amante de JavaScript e React, me interessei por front-end e
                back-end no início da faculdade e desde então venho
                desenvolvendo projetos para melhorar o uso dessas tecnologias.
                Estou sempre procurando novas ferramentas e tecnologias para
                desenvolver meu conhecimento. Atualmente estou estudando Elixir
                para projetos de back-end e React Native e Flutter para projetos
                mobile. Estou sempre buscando aprender coisas novas.
              </p>
              <p>
                Já desenvolvi projetos na faculdade com C/C++ e Java, e projetos
                de análise de dados com Python. Atualmente me desenvolvendo com
                Banco de Dados e procurando entender melhor sobre Arquitetura de
                computadores.
              </p>
            </i>
          </div>
        </div>
        <div className="services" id="services">
          <h2>SERVIÇOS</h2>
          <div className="services-itens">
            <ServiceItem
              title="Desenvolvedor de Aplicativos"
              description="Desenvolvedor de Aplicativos Mobile para IOS e Android baseados em React native e Flutter"
              icon="phone"
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
          <h2>PROJETOS</h2>
          <div className="project-list">
            <a
              href="https://github.com/lukaskunn/corebiz_interview"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectItem
                title="Corebiz eCommerce"
                background="corebizEcommerce"
              />
            </a>
            <a
              href="https://github.com/lukaskunn/gaminfo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectItem title="Gaminfo" background="gaminfo" />
            </a>
            <a
              href="https://github.com/lukaskunn/today-in-history-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectItem
                title="Today in History"
                background="todayInHistory"
              />
            </a>
          </div>
        </div>
        <div className="contact" id="contact">
          <h2>CONTATOS</h2>
          <div className="contacts">
            <a
              href="https://www.linkedin.com/in/lucas-oliveira-997810198/"
              target="_blank"
              className="contact-item"
              rel="noopener noreferrer"
            >
              <IconContext.Provider value={{ size: "1.3em" }}>
                <div>
                  <FaLinkedin />
                </div>
              </IconContext.Provider>
              <h4>linkedin.com/in/lucas-oliveira-997810198/</h4>
            </a>
            <a
              href="https://github.com/lukaskunn"
              target="_blank"
              className="contact-item"
              rel="noopener noreferrer"
            >
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
