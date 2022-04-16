import React, { useEffect, useState } from "react";
import Link from "next/Link";
import headerStyles from "./header.module.scss";

function Header() {
  const [headerBackground, setHeaderBackground] = useState("none");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeaderBackground("none");
    } else if (window.scrollY > 70) {
      return setHeaderBackground("black");
    }
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
        Lucas Oliveira
      </h1>
      <div className={headerStyles.menu}>
        <Link href="#about">
          <a>About</a>
        </Link>
        <a>Resume</a>
        <a>Services</a>
        <a>Works</a>
        <a>Contact</a>
      </div>
    </header>
  );
}

export default Header;
