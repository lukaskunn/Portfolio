import React, { useEffect, useState } from "react";
// import Link from "next/Link";
import headerStyles from "./header.module.scss";
import { MdClose, MdMenu } from "react-icons/md";
import { LanguageContext } from "../contexts/Language";

function Header() {
  const [headerBackground, setHeaderBackground] = useState("none");
  const [menuHamburgerIsOpen, setMenuHamburgerIsOpen] = useState(false);
  const [englishSelected, setEnglishSelected] = useState(true);

  const { language, setLanguage, langEN, langPT } =
    React.useContext(LanguageContext);
  console.log(language);

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

  const setLanguageToEnglish = () => {
    setLanguage(langEN);
    setEnglishSelected(true);
  };
  const setLanguageToPortuguese = () => {
    setLanguage(langPT);
    setEnglishSelected(false);
  };

  useEffect(() => {
    setLanguage(langEN);
  }, []);

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
        style={{ opacity: headerBackground == "none" ? "0" : "1" }}
      >
        {`<Lucas Oliveira />`}
      </h1>
      <div className={headerStyles.menu}>
        <a href="#about">{language.aboutMe.headerTitle}</a>
        <a href="#resume">{language.resume.headerTitle}</a>
        <a href="#services">{language.services.headerTitle}</a>
        <a href="#works">{language.works.headerTitle}</a>
        <a href="#contact">{language.contact.headerTitle}</a>
      </div>
      <div
        className={headerStyles.switchLanguageDesktop}
        style={{ opacity: headerBackground == "none" ? "0" : "1" }}
      >
        <h3
          onClick={setLanguageToEnglish}
          className={englishSelected ? headerStyles.switchLanguageSelected : ""}
        >
          EN
        </h3>
        <h3
          onClick={setLanguageToPortuguese}
          className={englishSelected ? "" : headerStyles.switchLanguageSelected}
        >
          PT
        </h3>
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
          <div className={headerStyles.switchLanguageMobile}>
            <h3
              onClick={setLanguageToEnglish}
              className={
                englishSelected ? headerStyles.switchLanguageSelected : ""
              }
            >
              EN
            </h3>
            <h3
              onClick={setLanguageToPortuguese}
              className={
                englishSelected ? "" : headerStyles.switchLanguageSelected
              }
            >
              PT
            </h3>
          </div>
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
