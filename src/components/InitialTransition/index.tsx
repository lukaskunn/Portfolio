import { color, delay, motion } from "framer-motion";
import React from "react";
// import SVG from "../SVGBackground";
import useIsMobile from "../../hooks/isMobile";
import { PageContext } from "../../contexts/PageContext";

const InitialTransition = () => {
  const { language } = React.useContext(PageContext) as any;
  const {transitionsText} = language;
  const {quotes} = transitionsText;
  const isMobile = useIsMobile();
  const [dimensions, setDimensions] = React.useState({
    height: 0,
    width: 0,
  });

  React.useEffect(() => {
    const resize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);


  const blackBox = {
    initial: {
      top: "-300px",
      backgroundColor: "rgb(0, 0, 0)"
    },
    animate: {
      top: "-1500px",
      backgroundColor: "rgb(212, 212, 216)",
      transition: {
        when: "afterChildren",
        duration: 1.2,
        ease: [0.85, 0, 0.15, 1],
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  
  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.6,
        when: "afterChildren",
      },
    },
  };
  
  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const initialPath = `path('M0 300 Q${dimensions.width / 2} 300 ${dimensions.width} 300 L${dimensions.width} ${dimensions.height + 300} Q${dimensions.width / 2} ${isMobile ? dimensions.height + 400 : dimensions.height + 400} 0 ${dimensions.height + 300} L0 300')`;

  const transitionBackgroundStyles = {
    backgroundColor: "red",
    height: "calc(100vh + 600px)",
    width: "100vw",
    top: "-300px",
    clipPath: initialPath,
  };

  
  return (
    <div
      className="absolute inset-0 flex justify-center"
      style={{ zIndex: 997, pointerEvents: "none" }}
    >
      <motion.div
        className="absolute z-50 flex items-center justify-center w-full"
        style={transitionBackgroundStyles}
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <motion.svg
          variants={textContainer}
          className="absolute z-50 flex w-full"
        >
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={1000}
            height={800}
            className="text-zinc-300"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />{" "}
          </pattern>
          <text
            className="text-2xl"
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)", fontWeight: 300 }}
          >
            {quotes[Math.floor(Math.random() * quotes.length)]}
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default InitialTransition;
