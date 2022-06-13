import Reac, { useState } from "react";

import projectCard from "./ProjectCard.module.scss";

function ProjectCard({ title, description, background }) {
  const [isClicked, setIsClicked] = useState(false);

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
          <div className={projectCard.descModal}>
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
