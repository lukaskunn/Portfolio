import React from "react";
import useMousePosition from "../../hooks/UseMousePosition";
import { PageContext } from "../../contexts/PageContext";
import cursorFollowerStyles from "../../styles/CursorFollower.module.scss";

function CursorFollower() {
  const mousePosition = useMousePosition();
  const { isLoaded } = React.useContext(PageContext) as any;

  return (
    isLoaded && (
      <div
        className={cursorFollowerStyles["white-circle"]}
        style={{
          top: mousePosition.y - 25,
          left: mousePosition.x - 25,
        }}
      />
    )
  );
}

export default CursorFollower;
