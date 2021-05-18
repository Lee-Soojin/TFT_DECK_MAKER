import React from "react";
import styles from "./home.module.css";
import homeimg1 from "../../image/homeimg1.png";

const Home = () => {
  return (
    <div className={styles.Home}>
      <header className={styles.header}>
        <h1 className={styles.Logo}>My Deck Card</h1>
        <button className={styles.BtnLogout}>Logout</button>
      </header>
      <section className={styles.Home_About}>
        <img src={homeimg1} alt="homeImg" className={styles.homeimg1} />
      </section>
      {/* <section className={styles.about}></section> */}
      <footer className={styles.footer}>My deck card Maker</footer>
    </div>
  );
};
export default Home;
