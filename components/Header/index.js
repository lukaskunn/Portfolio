import React from "react";

import headerStyles from "./header.module.scss";

function Header() {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.title}>Lucas Oliveira</h1>
      <div className={headerStyles.menu}>
        <a>About</a>
        <a>Resume</a>
        <a>Services</a>
        <a>Works</a>
        <a>Contact</a>
      </div>
    </div>
  );
}

export default Header;
