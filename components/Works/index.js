import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectCard from "./components/ProjectCard";

import workList from "./projects.json";
import works from "./Works.module.scss";
import "react-tabs/style/react-tabs.css";

function Works() {
  return (
    <section className={works.container}>
      <div className={works.works} id="works">
        <h2 className={works.sectionTitle}>Works</h2>
        <Tabs selectedTabClassName={works.selcionada} id={works.controlledTabs}>
          <TabList>
            <Tab>Personal Projects</Tab>
            <Tab>projects I worked on</Tab>
          </TabList>
          <TabPanel>
            <h2>nothing to show yet!</h2>
          </TabPanel>
          <TabPanel>
            {workList.items[1].map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                background={project.background}
                description={project.description}
              />
            ))}

            {/* <ProjectCard
              title="Motorola India"
              background="https://i.pinimg.com/originals/12/35/fe/1235fe31b9ff55ffcc60494a9f4ebf5b.jpg"
            /> */}
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}

export default Works;
