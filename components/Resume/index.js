import React from "react";

import { Controller, Scene } from "react-scrollmagic";
import resume from "./Resume.module.scss";
import ResumeCard from "./components/ResumeCard";

function Resume() {
  return (
    <div className={resume.resume} id="resume">
      <div className={resume.resume__left}>
        <h2>Resume</h2>
        <div className={resume.colletions}>
          <ResumeCard
            title="Front End developer React + vtex"
            description="I work with Front-End development in Vtex Environment for E-Commerces, developing new pages for the website following a layout defined by a Designer, also developing new features, correcting problems and updating the pre-implemented functionalities. Work in agile methodology performing sprint and kanban model to align day-to-day internal tasks. I worked on the development of the Motorola USA e-commerce launch and I acted as the main developer for the Motorola India e-commerce launch"
            startDate="Aug 2021"
            endDate="Today"
            company="Corebiz"
          />
          <ResumeCard
            title="IT intern"
            description="description dara"
            startDate="Aug 2019"
            endDate="Aug 2021"
            company="Faurecia automotive do Brasil"
          />
        </div>
      </div>
      <Controller>
        <Scene
          duration={1650}
          pin
          triggerElement={"#resume"}
          triggerHook={"onLeave"}
        >
          <div className={resume.resume__right}>
            <img
              src="https://i.pinimg.com/originals/ab/e5/57/abe557b5780fc93e83447ac60987d000.gif"
              alt=""
              className="anime_computer_gif"
            />
          </div>
        </Scene>
      </Controller>
    </div>
  );
}

export default Resume;
