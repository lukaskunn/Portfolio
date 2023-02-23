/* eslint-disable @next/next/link-passhref */
import React, { useRef, useState, useEffect } from "react";
import styles from "./Landing.module.scss";

import { LanguageContext } from "../contexts/Language";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, MeshReflectorMaterial, Reflector } from "@react-three/drei";
import { FiChevronDown } from "react-icons/fi";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import LateralScrolling from "./components/LateralScrolling"

function Landing() {
  const [hover, setHover] = useState(false);
  const [subtitle, setSubtitle] = useState('')
  const language = React.useContext(LanguageContext);
  const [subtitleIndex, setSubtitleIndex] = useState(0)

  useEffect(() => {
    changeSubtitle();
  }, [subtitleIndex]);

  const changeSubtitle = () => {
    setSubtitle(language.language.landing.subtitle[subtitleIndex % language.language.landing.subtitle.length]);

    setTimeout(() => {
      setSubtitleIndex(subtitleIndex + 1);
    }, 1000);
  };

  return (
    <section className={styles.home}>
      <div className={styles.home__title}>

        <h1 className={styles.title}>
          {language.language.landing.sectionTitle}
        </h1>

        <h3 className={styles.subtitle} translate="no">
          {subtitle}
        </h3>
      </div>
      <div className={styles['noise-filter']}></div>
      <div className={styles['white-border']}><div className={styles['internal-white-border1']}><div className={styles['internal-white-border2']}></div></div></div>
      <LateralScrolling />
      <Link href="#about">
        <a
          className={styles.scrollPage}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ backgroundColor: hover ? "white" : "rgba(0, 0, 0, 0.0)" }}
        >
          <FiChevronDown size={40} color={hover ? "black" : "white"} />
        </a>
      </Link>
    </section>
  );
}

export default Landing;

