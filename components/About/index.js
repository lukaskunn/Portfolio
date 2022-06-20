import React from "react";
import about from "./About.module.scss";
import { Controller, Scene } from "react-scrollmagic";
import Image from "next/image";
import { LanguageContext } from "../contexts/Language";

function About() {
  const language = React.useContext(LanguageContext);
  const aboutMe = language.language.aboutMe;

  return (
    <section className={about.container}>
      <div className={about.about} id={"about"}>
        <Controller>
          <Scene duration={1360} pin triggerElement="#about" triggerHook="0">
            <div className={about.about__left}>
              <img
                src="https://64.media.tumblr.com/723de3a38fae9be2c3840107091e6f3d/tumblr_pg37vjbDgu1v1hotuo2_500.gifv"
                alt=""
                className="anime_computer_gif"
              />
            </div>
          </Scene>
        </Controller>
        <div className={about.about__right}>
          <h2>{aboutMe.sectionTitle}</h2>
          <section className={about.about__right__aboutMe}>
            <h2>{aboutMe.content[0].title}</h2>
            {aboutMe.content[0].text.map((element, index) => {
              return <h4 key={index}>{element}</h4>;
            })}
          </section>
          <section className={about.about__right__background}>
            <h2>{aboutMe.content[1].title}</h2>
            {aboutMe.content[1].text.map((element, index) => {
              return <h4 key={index}>{element}</h4>;
            })}
            <br />
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
