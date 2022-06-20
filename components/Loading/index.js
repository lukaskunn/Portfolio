import React, { useState, useEffect } from "react";

import loading from "./Loading.module.scss";

function Loading() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    handleText();
  }, [textIndex]);

  const handleText = () => {
    const texts = ["LOADING", "LOADING.", "LOADING..", "LOADING..."];
    setLoadingText(texts[textIndex % texts.length]);

    setTimeout(() => {
      setTextIndex(textIndex + 1);
    }, 800);
  };

  return (
    <div className={loading.loadingContainer}>
      <h2>{loadingText}</h2>
      <div className={loading.progressBar} />
    </div>
  );
}

export default Loading;
