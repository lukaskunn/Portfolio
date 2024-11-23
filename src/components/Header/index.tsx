import React, { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import headerStyles from "../../styles/header.module.scss";
import { PageContext } from "../../contexts/PageContext";

declare const window: any;

function Header() {
  const [headerBackground, setHeaderBackground] = useState("none");
  const [menuHamburgerIsOpen, setMenuHamburgerIsOpen] = useState(false);
  const [englishSelected, setEnglishSelected] = useState(true);
  const { language, setLanguage, langEN, langPT, setCurrentLanguage } =
    React.useContext(PageContext) as any;

  const { header } = language;
  const { headerTitle, menuItems } = header;
  const pathName = usePathname();

  const listenScrollEvent = () => {
    if (window.scrollY < 150 || window.innerWidth < 768) {
      return setHeaderBackground("none");
    } else {
      return setHeaderBackground("black");
    }
  };

  const handleMenuHamburger = () => {
    setMenuHamburgerIsOpen(!menuHamburgerIsOpen);
  };

  const setLanguageToEnglish = () => {
    setLanguage(langEN);
    setCurrentLanguage("en");
    setEnglishSelected(true);
  };
  const setLanguageToPortuguese = () => {
    setLanguage(langPT);
    setCurrentLanguage("pt");
    setEnglishSelected(false);
  };

  useEffect(() => {
    setLanguage(langEN);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const renderHeader = pathName !== "/all-my-links";

  return (
    renderHeader && (
      <header
        className={headerStyles.header}
        style={{
          opacity: "1",
          background: headerBackground,
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          className={`${headerStyles.title} ${headerStyles["title-desktop"]}`}
          style={{ opacity: "1" }}
          scroll={false}
        >
          {headerTitle}
        </Link>
        <div className={headerStyles["spacing"]} />

        <div className={headerStyles.menu}>
          {menuItems.map((item: any, index: any) => {
            const { text, href, isExternalLink } = item;
            console.log(text, isExternalLink);
            return (
              <a
                href={href}
                key={`${text}_${index}`}
                className={headerStyles.menuItem}
                target="_blank"
                rel="noreferrer"
              >
                {text}
              </a>
            );
          })}
        </div>
        <div
          className={headerStyles.switchLanguageDesktop}
          style={{ opacity: "1" }}
        >
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
        <div className={headerStyles.menuHamburger}>
          <button
            className={headerStyles.handleMenuHamburger}
            onClick={handleMenuHamburger}
            style={{ background: menuHamburgerIsOpen ? "none" : "#ffffff" }}
          >
            {menuHamburgerIsOpen ? (
              <MdClose style={{ color: "white" }} size="2em" />
            ) : (
              <MdMenu style={{ color: "black" }} size="2em" />
            )}
          </button>

          <div
            className={`${headerStyles.menuHamburgerMenu}`}
            style={{
              left: menuHamburgerIsOpen ? "50px" : "115vw",
              transitionDelay: menuHamburgerIsOpen ? "0.2s" : "0s",
            }}
            onClick={handleMenuHamburger}
          >
            <Link
              href="/"
              className={`${headerStyles.title} ${headerStyles["title-mobile"]}`}
              style={{ opacity: "1" }}
              scroll={false}
            >
              {headerTitle}
            </Link>
            {menuItems.map((item: any, index: any) => {
              const { text, href, isExternalLink } = item;
              return isExternalLink ? (
                <a
                  href={href}
                  key={`${text}_${index}`}
                  className={headerStyles.menuItem}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text}
                </a>
              ) : (
                <Link
                  passHref
                  href={href}
                  key={`${text}_${index}`}
                  className={headerStyles.menuItem}
                >
                  {text}
                </Link>
              );
            })}
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
              left: menuHamburgerIsOpen ? "0" : "115vw",
              transitionDelay: menuHamburgerIsOpen ? "0s" : "0.2s",
            }}
          />
        </div>
      </header>
    )
  );
}

export default Header;

