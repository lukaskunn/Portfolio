import React from "react";
import styles from "../../styles/ImageBackground.module.scss";
import axios from "axios";
import { PageContext } from "../../contexts/PageContext";
import useMousePosition from "../../hooks/UseMousePosition";
function ImageBackground() {
  //TODO: Fix any type
  const {setIsLoaded} = React.useContext(PageContext) as any;
  const [imagesLoaded, setImagesLoaded] = React.useState(0);
  const images = [
    "https://pgbsmbfirsngiasjvnvy.supabase.co/storage/v1/object/public/landing_page/20210803_031452-scaled.jpg",
      "https://pgbsmbfirsngiasjvnvy.supabase.co/storage/v1/object/public/landing_page/27159639._SX540_.jpg",
      "https://pgbsmbfirsngiasjvnvy.supabase.co/storage/v1/object/public/landing_page/4c7ff6256079957c2770ea922741815e.jpg",
      "https://pgbsmbfirsngiasjvnvy.supabase.co/storage/v1/object/public/landing_page/7108634.png",
      "https://pgbsmbfirsngiasjvnvy.supabase.co/storage/v1/object/public/landing_page/Ghost-in-the-shell_ButWhyTho.png",
      "https://pgbsmbfirsngiasjvnvy.supabase.co/storage/v1/object/public/landing_page/alita-.png",
      "https://pgbsmbfirsngiasjvnvy.supabase.co/storage/v1/object/public/landing_page/images.jpg"
  ]
  const mousePosition = useMousePosition();
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  React.useEffect(() => {
    if(imagesLoaded === images.length) {
      setIsLoaded(true);
    }
  }, [imagesLoaded, images, setIsLoaded])

const backgroundImageStyles = {
  left: `${-((mousePosition.x / dimensions.width) - 0.5) * 30}px`,
  top: `${(-((mousePosition.y / dimensions.height) - 0.5) * 30) + 100}px`,
  transform: `rotateX(${((mousePosition.y / dimensions.height) - 0.5) * -15}deg) rotateY(${((mousePosition.x / dimensions.width) - 0.5) * 15}deg)`
}

  return (
    <div className={styles["img-bg-container"]} style={backgroundImageStyles}>
      {images.map((image: any, index: any) => {
        return (
          <img
            alt={`image_${index + 1}`}
            src={image}
            className={`${styles[`image_${index + 1}`]} ${styles["single-image"]}`}
            key={index}
            onLoad={() => setImagesLoaded(imagesLoaded + 1)}
          />
        );
      })}
    </div>
  );
}

export default ImageBackground;
