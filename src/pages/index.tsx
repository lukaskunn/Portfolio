import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { PageContext } from "../contexts/PageContext";
import ImageBackground from "../components/ImageBackground";
import Curve from "../Layouts/Curve";
import InitialTransition from "../components/InitialTransition";
import NextPageButton from "../components/NextPageButton";
import useIsMobile from "../hooks/isMobile";
const Home: NextPage = () => {
  const { language, firstLoad } = React.useContext(PageContext) as any;

  const { landing } = language;
  const { sectionTitle, nextPageText, menuItems } = landing;
  const isMobile = useIsMobile();

  React.useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      <Curve>
        {(!firstLoad && !isMobile) && <InitialTransition />}
        <section className={styles.home}>
          <div className={styles.home__title}>
            <h1 className={styles.title}>{sectionTitle}</h1>
            <div className={styles.initialMenu}>
              {menuItems.map((item: any, index: any) => {
                const { text, href } = item;
                return (
                  <Link
                    href={href}
                    key={`${text}_${index}`}
                    className={styles.initialMenu__item}
                  >
                    {text}
                  </Link>
                );
              })}
            </div>
          </div>
          <ImageBackground />
          <NextPageButton
            link="/Works"
            text={nextPageText}
            type="forward"
            showBackground={false}
          />
          <div className={styles["noise-filter"]}></div>
        </section>
      </Curve>
    </>
  );
};

export default Home;
