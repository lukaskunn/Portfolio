import React from "react";
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setTimeout(() => {
        const y = ev.pageY;
        const x = ev.pageX;
        const scrollLeft =
          window.pageXOffset !== undefined
            ? window.pageXOffset
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollLeft;
        const scrollTop =
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop;
        setMousePosition({
          x: x - scrollLeft,
          y: y - scrollTop,
        });
      }, 20);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
