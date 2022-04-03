import styles from "../styles/Home.module.scss";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <section className={styles.home}>
        <div className={styles.home__title}>
          <h1 className={styles.title}>LUCAS OLIVEIRA</h1>
          <h3 className={styles.subtitle}>Web Developer from São Paulo</h3>
          <div className={styles.white_border}></div>
          <div className={styles.white_border2}></div>
          <div className={styles.white_border3}></div>
        </div>
        <img src="https://i.imgur.com/UswyfSK.png" alt="" />
      </section>
      <section className></section>
    </div>
  );
}
