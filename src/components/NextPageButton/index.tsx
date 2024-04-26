import React, {useState} from "react";
import styles from "../../styles/NextPageButton.module.scss";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6"
import { GoArrowRight } from "react-icons/go";

interface INextPageButton {
    link: string;
    text: string
}

const NextPageButton = ({link, text}: INextPageButton) => {
    const [hover, setHover] = useState(false);
  return (
    <div className={styles.scrollPageIconContainer}>
      <Link
        href={link}
        className={styles.scrollPage}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ color: hover ? "#c5c5c5" : "white" }}
      >
        {text} <GoArrowRight size={40} color={hover ? "#c5c5c5" : "white"} style={{transition: ".2s all cubic-bezier(0, 0, 0, 1)", marginLeft: !hover ? "20px" : "40px"}}/>
      </Link>
    </div>
  );
};

export default NextPageButton;
