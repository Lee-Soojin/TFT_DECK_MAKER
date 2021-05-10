import React from "react";
import AddForm from "../addform/addform.jsx";
import CardEditor from "../card_editor/card_editor.jsx";
import styles from "./card_maker.module.css";

const CardMaker = ({ cards, addCard }) => {
  return (
    <section className={styles.card_maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <section className={styles.card}>
        {cards.map((card) => (
          <CardEditor key={card.name} card={card} />
        ))}
        <AddForm onAdd={addCard} />
      </section>
    </section>
  );
};

export default CardMaker;
