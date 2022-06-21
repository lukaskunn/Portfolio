import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Loading from "../components/Loading";

import { LanguageProvider } from "../components/contexts/Language";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);

  return (
    <div>
      <Head>
        <title>Lucas Oliveira - portfolio</title>
      </Head>
      <LanguageProvider>
        {isLoaded ? (
          <>
            <Header />
            <Landing />
            <About />
            <Resume />
            <Services />
            <Works />
            <Contact />
          </>
        ) : (
          <Loading />
        )}
      </LanguageProvider>
    </div>
  );
}
