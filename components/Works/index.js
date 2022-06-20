import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectCard from "./components/ProjectCard";
import { LanguageContext } from "../contexts/Language";

import workList from "./projects.json";
import works from "./Works.module.scss";
import "react-tabs/style/react-tabs.css";

function Works() {
  const language = React.useContext(LanguageContext);
  const worksLang = language.language.works;

  return (
    <section className={works.container}>
      <div className={works.works} id="works">
        <h2 className={works.sectionTitle}>{worksLang.sectionTitle}</h2>
        <Tabs
          selectedTabClassName={works.selecionada}
          id={works.controlledTabs}
          defaultIndex={1}
          focusTabOnClick={false}
        >
          <TabList>
            <Tab>{worksLang.personalProjects.title}</Tab>
            <Tab>{worksLang.backgroundProjects.title}</Tab>
          </TabList>
          <TabPanel>
            {worksLang.personalProjects.projects &&
            worksLang.personalProjects.projects.length == 0 ? (
              <h2>nothing to show yet!</h2>
            ) : (
              worksLang.personalProjects.projects.map((project, index) => {
                return (
                  <>
                    <ProjectCard
                      key={index}
                      title={project.projectTitle}
                      background={project.background}
                      description={project.description}
                      urlToProject={project.urlToProject}
                      texToToProject={worksLang.seeMoreText}
                    />
                  </>
                );
              })
            )}
          </TabPanel>
          <TabPanel>
            <div className={works.projectGrid}>
              {worksLang.backgroundProjects.projects &&
              worksLang.backgroundProjects.projects.length < 1 ? (
                <h2>nothing to show yet!</h2>
              ) : (
                worksLang.backgroundProjects.projects.map((project, index) => {
                  return (
                    <>
                      <ProjectCard
                        key={index}
                        title={project.projectTitle}
                        background={project.background}
                        description={project.description}
                        urlToProject={project.urlToProject}
                        texToToProject={worksLang.seeMoreText}
                      />
                    </>
                  );
                })
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}

export default Works;
