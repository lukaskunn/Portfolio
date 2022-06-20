import React from "react";
import Marquee from "react-fast-marquee";
import ServiceCard from "./components/ServiceCard";
import { LanguageContext } from "../contexts/Language";
import services from "./Services.module.scss";

function Services() {
  const language = React.useContext(LanguageContext);
  const servicesLang = language.language.services;
  const n = 3;

  return (
    <section className={services.container} id="services">
      <div className={services.services}>
        <h2 className={services.sectionTitle}>{servicesLang.sectionTitle}</h2>
        <div className={services.skillsCarousel}>
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {[...Array(n)].map((e, i) => (
              <div className={services.cardContainer} key={i}>
                {servicesLang.skills.soft.desktop.map((skill) => {
                  return (
                    <>
                      <ServiceCard
                        title={skill.title}
                        description={skill.subtitle}
                      />
                    </>
                  );
                })}
              </div>
            ))}
          </Marquee>
          <Marquee
            pauseOnHover={true}
            speed={50}
            gradient={false}
            direction="right"
          >
            {[...Array(n)].map((e, i) => (
              <div className={services.cardContainer} key={i}>
                {servicesLang.skills.hard.desktop.map((skill) => {
                  return (
                    <>
                      <ServiceCard
                        title={skill.title}
                        description={skill.subtitle}
                      />
                    </>
                  );
                })}
              </div>
            ))}
          </Marquee>
        </div>
        <div className={services.skillsMobile}>
          <div className={services.softSkills}>
            <h2>Soft</h2>
            {servicesLang.skills.soft.mobile.map((skill) => {
              return (
                <>
                  <p>{skill}</p>
                </>
              );
            })}
          </div>
          <div className={services.hardSkills}>
            <h2>Hard</h2>
            {servicesLang.skills.hard.mobile.map((skill) => {
              return (
                <>
                  <p>{skill}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
