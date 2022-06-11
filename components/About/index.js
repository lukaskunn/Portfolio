import React from "react";
import about from "./About.module.scss";
import { Controller, Scene } from "react-scrollmagic";
import Image from "next/image";

function About() {
  return (
    <section className={about.container}>
      <div className={about.about} id={"about"}>
        <Controller>
          <Scene duration={1310} pin triggerElement="#about" triggerHook="0">
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
          <h2>
            Hello im Lucas Oliveira, Web Developer and technology enthusiast
          </h2>
          <section className={about.about__right__aboutMe}>
            <h2>About Me</h2>
            <h4>
              I`m a 21-year old guy, a computer science student, and working as
              a front-end developer for e-commerce with Vtex.
              <br /> <br /> Actually working on my Final Paper about Computer
              Vision and leaf disease for college and developing for Motorola
              India on my job.
              <br />
              <br /> I`ve been worked for a lot of e-commerce creating theirs
              home pages and product pages, creating new components and fixing
              existing components
              <br />
              Actually studying React frameworks to improve my knowledge about
              front-end. I`m
            </h4>
          </section>
          <section className={about.about__right__background}>
            <h2>Background</h2>
            <h4>
              Competitive programming. <br />
              Go out with friends. <br />
              Animes. <br />
              Rock song. <br />
              watch movies. <br />
              Play Elden Ring and League of Legends.
            </h4>
            <br />
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
