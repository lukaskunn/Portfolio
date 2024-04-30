import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Curve from "../../../Layouts/Curve";
import styles from "../../../styles/ProjectPage.module.scss";
import ProjectPageGallery from "../../../components/ProjectPageGallery";
import NextPageButton from "../../../components/NextPageButton";
import { PageContext } from "../../../contexts/PageContext";
import axios from "axios";
import { useHover } from "usehooks-ts";

const Project = () => {
  const router = useRouter();
  const { currentLanguage, setHoverImportantText } = React.useContext(PageContext) as any;
  const [project, setProject] = React.useState<any>();
  const [projectTranslations, setProjectTranslations] = React.useState<any>();
  const projectTitleRef = React.useRef(null);
  const projectDescriptionRef = React.useRef(null);
  const projectBriefDescriptionRef = React.useRef(null);
  const projectTitleIsHover = useHover(projectTitleRef);
  const projectDescriptionIsHover = useHover(projectDescriptionRef);
  const projectBriefDescriptionIsHover = useHover(projectBriefDescriptionRef);

  useEffect(() => {
    if (projectTitleIsHover || projectDescriptionIsHover || projectBriefDescriptionIsHover) {
      setHoverImportantText(true);
    } else {
      setHoverImportantText(false);
    }
  }, [projectTitleIsHover, projectDescriptionIsHover, projectBriefDescriptionIsHover]);

  useEffect(() => {
    if (router.query.id !== undefined) {
      axios
        .get(`http://localhost:3000/api/loadProjectContent/${router.query.id}`)
        .then((response) => {
          setProjectTranslations(response.data);
          setProject(response.data[currentLanguage]);
        });
    }
  }, [router.query.id]);

  useEffect(() => {
    if (projectTranslations !== undefined) {
      setProject(projectTranslations[currentLanguage]);
    }
  }, [currentLanguage]);

  const [dimensions, setDimensions] = React.useState({
    height: 0,
    width: 0,
  });

  React.useEffect(() => {
    const resize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Curve isProjectPage={true}>
      {project !== undefined ? (
        <>
          <div className={styles["project-page-container"]}>
            <h1 className={styles["project-title"]} ref={projectTitleRef}>{project.title}</h1>
            <p className={styles["project-description"]} ref={projectDescriptionRef}>
              {project.description}
            </p>
            <p className={styles["project-brief-description"]} ref={projectBriefDescriptionRef}>
              {project.briefDescription
                .split("</>")
                .map((text: any, index: any) => (
                  <span key={index}>
                    {text}
                    <br />
                    <br />
                  </span>
                ))}
            </p>
            <div className={styles["technologies-container"]}>
              <p className={styles["technologies-title"]}>{`[technologies]`}</p>
              <div className={styles["project-technologies"]}>
                {project.technologies.map((technology: any, index: any) => (
                  <span key={index} className={styles["technology"]}>
                    / {technology}
                  </span>
                ))}
              </div>
            </div>
            <ProjectPageGallery
              galleryImages={project.galleryImages}
              dimensions={dimensions}
            />
          </div>
          <NextPageButton
            text="Return to works"
            type="backward"
            link="/Works"
            showBackground={true}
          />
        </>
      ) : null}
    </Curve>
  );
};

export default Project;
