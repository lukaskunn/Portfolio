import React, { useState, useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";

import projectCard from "../../styles/ProjectCard.module.scss";

function ProjectCard({
  title,
  description,
  background,
  urlToProject,
  texToToProject,
}: any) {
  const [isClicked, setIsClicked] = useState(false);
  const modalRef = useRef(null);
  useOutsideAlerter(modalRef);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClicked(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };

  const modalStyles: React.CSSProperties = {
    visibility: isClicked ? "visible" : "hidden",
    bottom: isClicked ? "0" : "-100%",
  }

  return (
    <>
      <div className={projectCard.projectCard} onClick={handleIsClicked}>
        <img
          src={background}
          alt="project background"
          className={projectCard.backgroundCard}
        />
        <h2>{title}</h2>
      </div>
        <div className={projectCard.descModalContainer} style={modalStyles}>
          <div className={projectCard.descModalContainerBackground} />
          <button className={projectCard.closeModal} onClick={handleIsClicked}>
            <MdClose style={{ color: "white" }} size="2em" />
          </button>
          <div className={projectCard.descModal} ref={modalRef}>
            <img
              src={background}
              alt="project background"
              className={projectCard.modalBackground}
            />
            <div className={projectCard.modalInformation}>
              <h2 className={projectCard.modalTitle}>{title}</h2>
              <p className={projectCard.modalDescription}>{description}</p>
              <a href={urlToProject} target="_blank" rel="noreferrer">
                {texToToProject}
              </a>
            </div>
          </div>
        </div>
    </>
  );
}

export default ProjectCard;
