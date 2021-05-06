import React from "react";
import styles from "./card.module.css";
import Header from "../header/header";
import CardMaker from "../card_maker/card_maker";
import Footer from "../footer/footer";
import CardContainer from "../card_container/card_container";

const card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.card_board}>
        <div className={styles.card_maker}>
          <CardMaker />
        </div>
        <div className={styles.card_container}>
          <CardContainer />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default card;
