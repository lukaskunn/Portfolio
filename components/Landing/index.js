import React, { useRef, useState } from "react";
import styles from "./Landing.module.scss";

import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";

function Box(props) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.z += 0.005;
  });

  return (
    <mesh {...props} ref={ref} scale={2}>
      <boxGeometry args={[1, 1, 1]} threshold={20} />
      <meshPhongMaterial color="#000000" opacity={0} transparent />
      <Edges color={"white"} scale={1} lineHeight={5} />
    </mesh>
  );
}

function Landing() {
  return (
    <section className={styles.home}>
      <div className={styles.home__title}>
        <h1 className={styles.title}>LUCAS OLIVEIRA</h1>
        <h3 className={styles.subtitle}>Web Developer from São Paulo</h3>
      </div>
      <div id={styles.canvas_container}>
        <Canvas className={styles.canvas_home}>
          <ambientLight />
          <pointLight position={[0, 0, 0]} />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </div>
    </section>
  );
}

export default Landing;
