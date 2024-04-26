import { motion } from "framer-motion";
import React from "react";
// import SVG from "../SVGBackground";
import { PageContext } from "../../contexts/PageContext";

const InitialTransition = () => {
  const { language } = React.useContext(PageContext) as any;
  const {transitionsText} = language;
  const {quotes} = transitionsText;

  const blackBox = {
    initial: {
      height: "100vh",
      top: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
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
  
  return (
    <div
      className="absolute inset-0 flex justify-center"
      style={{ zIndex: 997, pointerEvents: "none" }}
    >
      <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-zinc-300"
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
            className="text-black"
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
