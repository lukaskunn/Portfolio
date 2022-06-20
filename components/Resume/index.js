import React from "react";

import { Controller, Scene } from "react-scrollmagic";
import resume from "./Resume.module.scss";
import ResumeCard from "./components/ResumeCard";
import { LanguageContext } from "../contexts/Language";

function Resume() {
  const language = React.useContext(LanguageContext);
  const resumeLang = language.language.resume;

  return (
    <section className={resume.container}>
      <div className={resume.resume} id="resume">
        <div className={resume.resume__left}>
          <h2>{resumeLang.sectionTitle}</h2>
          <div className={resume.colletions}>
            {resumeLang.cards.map((card) => {
              return (
                <>
                  <ResumeCard
                    title={card.jobTitle}
                    description={card.description}
                    startDate={card.startDate}
                    endDate={card.endDate}
                    company={card.company}
                  />
                </>
              );
            })}
          </div>
        </div>
        <Controller>
          <Scene
            duration={1550}
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
    </section>
  );
}

export default Resume;
