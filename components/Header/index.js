import React, { useEffect, useState } from "react";
// import Link from "next/Link";
import headerStyles from "./header.module.scss";
import { MdClose, MdMenu } from "react-icons/md";

function Header() {
  const [headerBackground, setHeaderBackground] = useState("none");
  const [menuHamburgerIsOpen, setMenuHamburgerIsOpen] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeaderBackground("none");
    } else if (window.scrollY > 70) {
      return setHeaderBackground("black");
    }
  };

  const handleMenuHamburger = () => {
    setMenuHamburgerIsOpen(!menuHamburgerIsOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      className={headerStyles.header}
      style={{
        background: headerBackground,
        justifyContent: headerBackground == "none" ? "center" : "space-between",
      }}
    >
      <h1
        className={headerStyles.title}
        style={{ display: headerBackground == "none" ? "none" : "block" }}
      >
        {`<Lucas Oliveira />`}
      </h1>
      <div className={headerStyles.menu}>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#services">Skills</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={headerStyles.menuHamburger}>
        <button
          className={headerStyles.handleMenuHamburger}
          onClick={handleMenuHamburger}
        >
          {menuHamburgerIsOpen ? (
            <MdClose style={{ color: "white" }} size="2em" />
          ) : (
            <MdMenu style={{ color: "white" }} size="2em" />
          )}
        </button>

        <div
          className={`${headerStyles.menuHamburgerMenu}`}
          style={{
            left: menuHamburgerIsOpen ? "50px" : "100vw",
            transitionDelay: menuHamburgerIsOpen ? "0.3s" : "0s",
          }}
          onClick={handleMenuHamburger}
        >
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#services">Skills</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
        <div
          className={`${headerStyles.menuHamburgerBackground}`}
          style={{
            left: menuHamburgerIsOpen ? "0" : "100vw",
            transitionDelay: menuHamburgerIsOpen ? "0s" : "0.3s",
          }}
        />
      </div>
    </header>
  );
}

export default Header;
