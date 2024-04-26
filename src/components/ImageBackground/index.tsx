import React from "react";
import styles from "../../styles/ImageBackground.module.scss";
import axios from "axios";
import { PageContext } from "../../contexts/PageContext";
import useMousePosition from "../../hooks/UseMousePosition";
import { transform } from "next/dist/build/swc";
function ImageBackground() {
  //TODO: Fix any type
  const {setIsLoaded} = React.useContext(PageContext) as any;
  const [imagesLoaded, setImagesLoaded] = React.useState(0);
  const [images, setImages] = React.useState([]);
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

React.useEffect(() => {
    axios.get("/api/getImages")
    .then((response) => {
      const {blobs} = response.data
      const images = blobs.filter((image: any) => image.size > 0)
      setImages(images)
    })
    .catch((error) => {
      console.log(error)
    })
}, [setIsLoaded])

const backgroundImageStyles = {
  left: `${-((mousePosition.x / dimensions.width) - 0.5) * 30}px`,
  top: `${(-((mousePosition.y / dimensions.height) - 0.5) * 30) + 70}px`,
  transform: `rotateX(${((mousePosition.y / dimensions.height) - 0.5) * -15}deg) rotateY(${((mousePosition.x / dimensions.width) - 0.5) * 15}deg)`
}

  return (
    <div className={styles["img-bg-container"]} style={backgroundImageStyles}>
      {images.map((image, index) => {
        return (
          <img
            alt={`image_${index + 1}`}
            src={image.url}
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
