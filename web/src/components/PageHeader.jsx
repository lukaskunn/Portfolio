import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

import "../styles/page-header.css";

function PageHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  let x = ["page-header"];
  if (scrolled) {
    x.push("scrolled");
  }

  return (
    <div className={scrolled ? "page-header scrolled" : "page-header"}>
      <div className="logo">
        <h3>Lucas OLIVEIRA</h3>
      </div>
      <div className="top-menu">
        <div className={click ? "menu active" : "menu"}>
          <HashLink
            smooth
            to="/#home"
            className="menu-item"
            onClick={closeMobileMenu}
          >
            Inicio
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="menu-item"
            onClick={closeMobileMenu}
          >
            Sobre
          </HashLink>
          <HashLink
            smooth
            to="/#services"
            className="menu-item"
            onClick={closeMobileMenu}
          >
            Serviços
          </HashLink>
          <HashLink
            smooth
            to="/#projects"
            className="menu-item"
            onClick={closeMobileMenu}
          >
            Projetos
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className="menu-item"
            onClick={closeMobileMenu}
          >
            Contatos
          </HashLink>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <IoClose className="menu-icon" />
          ) : (
            <HiMenu className="menu-icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
