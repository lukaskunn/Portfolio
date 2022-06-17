import React from "react";
import Marquee from "react-fast-marquee";
import ServiceCard from "./components/ServiceCard";

import services from "./Services.module.scss";

function Services() {
  const n = 3;

  return (
    <section className={services.container} id="services">
      <div className={services.services}>
        <h2 className={services.sectionTitle}>Skills</h2>
        <div className={services.skillsCarousel}>
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {[...Array(n)].map((e, i) => (
              <div className={services.cardContainer} key={i}>
                <ServiceCard
                  title="[Vtex IO]"
                  description="Development in vtex environment for e-commerces"
                />
                <ServiceCard
                  title="[Web Development]"
                  description="Full stack development for web. Front-end and Back-end"
                />
                <ServiceCard
                  title="[Agile Method]"
                  description="Work in Agile Method with sprints, retros, continuous improvement"
                />
                <ServiceCard
                  title="[Git / GitFlow]"
                  description="advanced knowledge to work with git and gitflow"
                />
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
                <ServiceCard
                  title="[ReactJS]"
                  description="Advanced Knowledge about ReactJS for Front end development"
                />
                <ServiceCard
                  title="[Sass, Stylus, Less]"
                  description="knowledge about pre-processors css"
                />
                <ServiceCard
                  title="[Jquery]"
                  description="middle knowledge about jquery"
                />
                <ServiceCard
                  title="[HTML / CSS]"
                  description="Advanced knowledge about HTML and CSS for front-end development"
                />
                <ServiceCard
                  title="[JavaScript / Typescript]"
                  description="Main language JavaScript and TypeScript"
                />
                <ServiceCard
                  title="[NodeJS]"
                  description="Middle knowledge about work in back-end with NodeJS"
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className={services.skillsMobile}>
          <div className={services.softSkills}>
            <h2>Soft</h2>
            <p>Vtex IO</p>
            <p>Web Development</p>
            <p>Agile Method</p>
            <p>Git / GitFlow</p>
          </div>
          <div className={services.hardSkills}>
            <h2>Hard</h2>
            <p>ReactJS</p>
            <p>Sass, Stylus, Less</p>
            <p>Jquery</p>
            <p>HTML / CSS</p>
            <p>JavaScript / Typescript</p>
            <p>NodeJS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
