import React, {useState} from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectCard from "../../components/ProjectCard";
import { PageContext } from "../../contexts/PageContext";
import styles from "../../styles/Works.module.scss";
import Curve from "../../Layouts/Curve";
import NextPageButton from "../../components/NextPageButton";
import ProjectItem from "../../components/ProjectItem";
import ProjectModal from "../../components/ProjectModal";

function Works() {
  const { language } = React.useContext(PageContext) as any;
  const {works} = language;
  const {sectionTitle, nextPageText, seeMoreText, personalProjects, backgroundProjects} = works;
  const [modal, setModal] = useState({isActive: false, index: 0});

  return (
    <Curve>
      <section className={styles.container} id="works">
        <div className={styles.works} id="works">
          <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
          <Tabs
            selectedTabClassName={styles.selecionada}
            id={styles.controlledTabs}
            defaultIndex={1}
            focusTabOnClick={false}
          >
            <TabList>
              <Tab>{personalProjects.title}</Tab>
              <Tab>{backgroundProjects.title}</Tab>
            </TabList>
            <TabPanel>
              {personalProjects.projects &&
              personalProjects.projects.length == 0 ? (
                <h2>nothing to show yet!</h2>
              ) : (
                personalProjects.projects.map(
                  (project: any, index: any) => {
                    const { projectTitle, background, description, urlToProject } = project;
                    return (
                      <>
                        <ProjectCard
                          key={index}
                          title={projectTitle}
                          background={background}
                          description={description}
                          urlToProject={urlToProject}
                          texToToProject={seeMoreText}
                        />
                      </>
                    );
                  }
                )
              )}
            </TabPanel>
            <TabPanel>
              <div className={styles.projectGrid}>
                {backgroundProjects.projects &&
                backgroundProjects.projects.length < 1 ? (
                  <h2>nothing to show yet!</h2>
                ) : (
                  backgroundProjects.projects.map((project: any, index: any) => {
                    return (
                      <ProjectItem
                        projectId={project.projectId}
                        key={index}
                        index={index}
                        title={project.title}
                        setModal={setModal}
                        description={project.description}
                        />
                    )})
                )}
              </div>
              <ProjectModal modal={modal} projects={backgroundProjects.projects}/>
            </TabPanel>
          </Tabs>
        </div>
      </section>
      <NextPageButton link="/About" text={nextPageText} type="forward" showBackground={true}/>
    </Curve>
  );
}

export default Works;
