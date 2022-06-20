import React, { useState } from "react";

import langEN from "../../../content/en.json";
import langPT from "../../../content/pt.json";

export const LanguageContext = React.createContext({});

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState(langPT);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, langEN, langPT }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
