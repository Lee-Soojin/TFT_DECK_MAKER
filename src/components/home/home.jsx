import React from "react";
import styles from "./home.module.css";
import slide1Img from "../../image/Garen.png";

const Home = () => {
  return (
    <div className={styles.Home}>
      <header className={styles.header}>
        <h1 className={styles.Logo}>My Deck Card</h1>
        <button className={styles.BtnLogout}>Logout</button>
      </header>
      <section className={styles.Home_About}>
        <div className={styles.slides}>
          <button className={styles.BtnPrevious}>◀ Prev</button>
          <div className={styles.Slide1}>
            <img src={slide1Img} alt="Garen" className={styles.slide1Img} />
            <section className={styles.slide1_description}>
              <h1 className={styles.slide1_title}>나만의 덱을 저장하세요</h1>
            </section>
          </div>
          <div></div>
          <div></div>
          <button className={styles.BtnNext}>Next ▶</button>
        </div>
      </section>
      <footer className={styles.footer}>My deck card Maker</footer>
    </div>
  );
};
export default Home;
