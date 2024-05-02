import React from "react";
import styles from "../../styles/ProjectItem.module.scss";
import Link from "next/link";
interface IProjectItem {
  title: string;
  index: number;
  description: string;
  setModal: (modal: { isActive: boolean; index: number }) => void;
  projectId: string;
}

const ProjectItem = (props: IProjectItem) => {
  const { title, index, setModal, description, projectId } = props;

  return (
    <Link href={`/project/${projectId}`}>
    <div
      className={styles["project-item-container"]}
      onMouseEnter={() => setModal({ isActive: true, index })}
      onMouseLeave={() => setModal({ isActive: false, index })}
    >
      <h2 className={styles["project-title"]}>{title}</h2>
      <p className={styles["project-description"]}>{description}</p>
    </div>
    </Link>
  );
};

export default ProjectItem;
