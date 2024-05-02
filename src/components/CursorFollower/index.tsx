import React from "react";
import useMousePosition from "../../hooks/UseMousePosition";
import { PageContext } from "../../contexts/PageContext";
import cursorFollowerStyles from "../../styles/CursorFollower.module.scss";

function CursorFollower() {
  const mousePosition = useMousePosition();
  const { hoverImportantText } = React.useContext(PageContext) as any;

  return (
    <div
      className={cursorFollowerStyles["white-circle"]}
      style={{
        top: mousePosition?.y,
        left: mousePosition?.x,
        width: hoverImportantText ? "100px" : "40px",
        height: hoverImportantText ? "100px" : "40px",
      }}
    />
  );
}

export default CursorFollower;
