import React, { useEffect, useState, useRef } from "react";
import about from "../../styles/About.module.scss";
import resumeStyles from "../../styles/Resume.module.scss";
import styles from "../../styles/Skills.module.scss";
import { Controller, Scene } from "react-scrollmagic";
import Image from "next/image";
import { PageContext } from "../../contexts/PageContext";
import ResumeCard from "../../components/ResumeCard";
import Curve from "../../Layouts/Curve";
import NextPageButton from "../../components/NextPageButton";

function About() {
  const scrollContainerRef = useRef(null);
  const { language } = React.useContext(PageContext) as any;
  const {aboutMe, resume, services} = language;
  const {sectionTitle: sectionTitleAboutMe, nextPageText, sectionSubTitle, content} = aboutMe;
  const {sectionTitle: sectionTitleResume, cards} = resume;
  const {sectionTitle: sectionTitleServices, skills} = services;
  const {soft, hard} = skills

  const hardSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Django",
  ];

  const SoftSkills = [
    "Web Development",
    "Web Design",
    "Web Services",
    "Problem Solving",
    "Algorithm & Data Structures",
    "APIs",
  ];

  const [height, setHeight] = useState(0);
  useEffect(() => {
    const { offsetHeight } = scrollContainerRef.current;
    setHeight(offsetHeight - window.innerHeight);
  }, []);

   useEffect(() => {
    console.log(document.body.style.overflowX)
    document.body.style.overflowX = "auto";
   }, [])

  return (
    <Curve>
      <section className={about.container}>
        <div className={about.about} id={"about"} ref={scrollContainerRef}>
              <div className={about.about__left}>
                <img
                  src="https://64.media.tumblr.com/723de3a38fae9be2c3840107091e6f3d/tumblr_pg37vjbDgu1v1hotuo2_500.gifv"
                  alt=""
                  className="anime_computer_gif"
                />
              </div>
          <div className={about.about__right}>
            <h2>{sectionSubTitle}</h2>
            <section className={about.about__right__aboutMe}>
              <h2>{content[0].title}</h2>
              {content[0].text.map((element: any, index: any) => {
                return <h4 key={index}>{element}</h4>;
              })}
            </section>
            <section className={about.about__right__background}>
              <h2>{content[1].title}</h2>
              {content[1].text.map((element: any, index: any) => {
                return <h4 key={index}>{element}</h4>;
              })}
              <br />
            </section>
          </div>
        </div>
      </section>
      <section className={resumeStyles.container}>
        <div className={resumeStyles.resume} id="resume">
          <div className={resumeStyles.resume__left}>
            <h2>{sectionTitleResume}</h2>
            <div className={resumeStyles.colletions}>
              {cards.map((card: any) => {
                const { jobTitle, description, startDate, endDate, company } = card;
                return (
                  <>
                    <ResumeCard
                      title={jobTitle}
                      description={description}
                      startDate={startDate}
                      endDate={endDate}
                      company={company}
                    />
                  </>
                );
              })}
            </div>
          </div>
              <div className={resumeStyles.resume__right}>
                <img
                  src="https://i.pinimg.com/originals/ab/e5/57/abe557b5780fc93e83447ac60987d000.gif"
                  alt=""
                  className="anime_computer_gif"
                />
              </div>
        </div>
      </section>
      <section className={styles["skills-container"]} id="">
        <h2>{sectionTitleServices}</h2>
        <div className={styles["skills-sub-container"]}>
          <div className={styles["soft-skills"]}>
            <h3 className={styles["group-title"]}>{`[Soft Skills]`}</h3>
            {soft.map((skill: any, index: any) => {
              return <p className={skill["skill-list"]} key={`${skill}_${index}`}>/ {skill}</p>;
            })}
          </div>
          <div className={styles["hard-skills"]}>
            <h3 className={styles["group-title"]}>{`[Hard Skills]`}</h3>
            {hard.map((skill: any, index: any) => {
              return <p className={skill["skill-list"]} key={`${skill}_${index}`}>/ {skill}</p>;
            })}
          </div>
        </div>
      </section>
      <NextPageButton link="/Contact" text={nextPageText} />
    </Curve>
  );
}

export default About;
