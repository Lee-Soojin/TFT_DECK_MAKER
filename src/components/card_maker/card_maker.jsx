import React from "react";
import CardName from "../cardName/cardname.jsx";
import Champion from "../champion/champion.jsx";
import Deck from "../deck/deck";
import Item from "../item/item.jsx";
import Theme from "../theme/theme.jsx";
import styles from "./card_maker.module.css";

const CardMaker = (props) => {
  return (
    <section className={styles.card_maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <section className={styles.card}>
        <div className={styles.select_part}>
          <div className={styles.card_top}>
            <div className={styles.name}>
              <CardName />
            </div>
            <Theme />
          </div>
          <div className={styles.deck}>
            <Deck />
          </div>
        </div>
        <div className={styles.champion}>
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
        </div>

        <div className={styles.selected_item}>
          <h3 className={styles.item_title}>아이템</h3>
          <Item />
        </div>
      </section>
    </section>
  );
};

export default CardMaker;
