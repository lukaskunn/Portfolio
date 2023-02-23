import React, { useEffect } from "react";
import useMousePosition from "../Hooks/UseMousePosition";

import cursorFollowerStyles from "./CursorFollower.module.scss";

function CursorFollower({ isLoaded }) {
  const mousePosition = useMousePosition();

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
