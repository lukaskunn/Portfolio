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
  const [showTransition, setShowTransition] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

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
    setFirstLoad
  };

  return (
    <PageContext.Provider
      value={values}
    >
      {children}
    </PageContext.Provider>
  );
};
