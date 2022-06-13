import React, { useState, useRef, useEffect } from "react";

import projectCard from "./ProjectCard.module.scss";

function ProjectCard({ title, description, background }) {
  const [isClicked, setIsClicked] = useState(false);
  const modalRef = useRef(null);
  useOutsideAlerter(modalRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
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
      {isClicked && (
        <div className={projectCard.descModalContainer}>
          <div className={projectCard.descModal} ref={modalRef}>
            <img
              src={background}
              alt="project background"
              className={projectCard.modalBackground}
            />
            <div className={projectCard.modalInformation}>
              <h2 className={projectCard.modalTitle}>{title}</h2>
              <p className={projectCard.modalDescription}>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
