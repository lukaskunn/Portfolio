import React, { useState } from "react";

import langEN from "../../content/en.json";
import langPT from "../../content/pt.json";

export const PageContext = React.createContext({});

interface PageContextProviderProps {
  children: React.ReactNode;
}

export const PageContextProvider = (props: PageContextProviderProps) => {
  const {children} = props;
  const [language, setLanguage] = useState(langPT);
  const [currentLanguage, setCurrentLanguage] = useState("pt" as "pt" | "en");
  const [showTransition, setShowTransition] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [hoverImportantText, setHoverImportantText] = useState(false);

  const values = {
    language,
    setLanguage,
    langEN,
    langPT,
    showTransition,
    setShowTransition,
    isLoaded,
    setIsLoaded,
    firstLoad,
    setFirstLoad,
    currentLanguage,
    setCurrentLanguage,
    hoverImportantText,
    setHoverImportantText,
  };

  React.useEffect(() => {
    if(firstLoad){
      setCurrentLanguage("en");
      setLanguage(langEN);
    }
  }, [])

  return (
    <PageContext.Provider
      value={values}
    >
      {children}
    </PageContext.Provider>
  );
};
