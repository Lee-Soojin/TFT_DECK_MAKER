import React from "react";
import CardName from "../cardName/cardname.jsx";
import Champion from "../champion/champion.jsx";
import Deck from "../deck/deck";
import Header from "../header/header.jsx";
import Item from "../item/item.jsx";
import styles from "./card.module.css";

const Start = (props) => {
  return (
    <>
      <Header />
      <section className={styles.card}>
        <div className={styles.name}>
          <CardName className={styles.name} />
        </div>
        <Deck />
        <h3 className={styles.cham_title}>챔피언</h3>
        <div className={styles.selected_cham}>
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
        </div>
        <div className={styles.selected_item}>
          <h3 className={styles.item_title}>아이템</h3>
          <Item />
        </div>
      </section>
    </>
  );
};

export default Start;
