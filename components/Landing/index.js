/* eslint-disable @next/next/link-passhref */
import React, { useRef, useState } from "react";
import styles from "./Landing.module.scss";

import { LanguageContext } from "../contexts/Language";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, MeshReflectorMaterial, Reflector } from "@react-three/drei";
import { FiChevronDown } from "react-icons/fi";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Box(props) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.002;
    ref.current.rotation.y += 0.002;
    ref.current.rotation.z += 0.002;
  });

  return (
    <mesh {...props} ref={ref} scale={2.3} position={[0, 0, -5]}>
      <boxGeometry args={[1, 1, 1]} threshold={20} />
      <meshPhongMaterial color="white" opacity={0.01} transparent />
      <Edges color={"white"} scale={1} lineHeight={5} />
    </mesh>
  );
}

function Ground(props) {
  return (
    <Reflector
      resolution={2024}
      args={[8, 8]}
      {...props}
      scale={3}
      depthScale={2}
      depthToBlurRatioBias={20}
    >
      {(Material, props) => (
        <Material
          color="white"
          metalness={1}
          normalScale={[0, 0]}
          {...props}
          minDepthThreshold={0.5}
          maxDepthThreshold={5}
          depthScale={5}
          depthToBlurRatioBias={0.2}
          reflectorOffset={50}
        />
      )}
    </Reflector>
  );
}

function Landing() {
  const [hover, setHover] = useState(false);
  const language = React.useContext(LanguageContext);

  return (
    <section className={styles.home}>
      <div className={styles.home__title}>
        <h1 className={styles.title}>
          {language.language.landing.sectionTitle}
        </h1>
        <h3 className={styles.subtitle}>
          {language.language.landing.subtitle}
        </h3>
      </div>
      <Link href="#about">
        <a
          className={styles.scrollPage}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ backgroundColor: hover ? "white" : "rgba(0, 0, 0, 0.0)" }}
        >
          <FiChevronDown size={40} color={hover ? "black" : "white"} />
        </a>
      </Link>
      <div id={styles.canvas_container}>
        <Canvas className={styles.canvas_home}>
          <ambientLight />
          <pointLight position={[0, 5, -10]} />
          <Box position={[0, 0, 0]} />
          <Ground
            mirror={1}
            blur={[100, 100]}
            mixBlur={0.7}
            mixStrength={0.15}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            position-y={-2}
            position-z={-0}
          />
          <EffectComposer multisampling={8}>
            <Bloom
              kernelSize={3}
              luminanceThreshold={0}
              luminanceSmoothing={5}
              intensity={0.4}
            />
          </EffectComposer>
        </Canvas>
      </div>
    </section>
  );
}

export default Landing;
