import React, { useEffect, useRef } from "react";
import styles from "../../styles/ProjectModal.module.scss";
import Image from "./components/Image";
import { motion } from "framer-motion";
import gsap from "gsap";

interface IProjectModal {
  modal: { isActive: boolean; index: number };
  projects: Array<{
    title: string;
    description: string;
    galleryBackgroundColor: string;
    galleryBackground: string;
  }>;
}

const scaleAnimation = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const ProjectModal = (props: IProjectModal) => {
  const { modal, projects } = props;
  const { isActive, index } = modal;
  const containerRef = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(containerRef.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(containerRef.current, "top", {
      duration: 0.4,
      ease: "power3",
    });

    addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      moveContainerX(clientX)
      moveContainerY(clientY)
    });

    return () => {
      removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <motion.div
      variants={scaleAnimation}
      initial="initial"
      animate={isActive ? "open" : "close"}
      className={styles["project-modal-container"]}
      ref={containerRef}
    >
      <div
        className={styles["modal-slider"]}
        style={{ top: index * -100 + "%" }}
      >
        {projects.map((project, index) => {
          const { galleryBackground, galleryBackgroundColor } = project;
          return (
            <div
              className={styles["project-modal"]}
              key={index}
              style={{ backgroundColor: galleryBackgroundColor }}
            >
              <Image
                src={galleryBackground}
                color={galleryBackgroundColor}
                height={0}
                width={300}
                alt={project.title}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectModal;
