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
      <section className={styles.card}>
        <div className={styles.card_top}>
          <div className={styles.name}>
            <CardName className={styles.name} />
          </div>
          <Theme />
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
    </section>
  );
};

export default CardMaker;
