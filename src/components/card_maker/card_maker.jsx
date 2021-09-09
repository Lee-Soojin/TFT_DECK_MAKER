import React from "react";
import AddForm from "../addform/addform.jsx";
import CardEditor from "../card_editor/card_editor.jsx";
import styles from "./card_maker.module.css";

const CardMaker = ({ cards, addCard, updateCard, deleteCard }) => {
  const handleGoUp = (event) => {
    // event.preventDefault();
    console.log("goup Button Clicked");
    window.scrollTo(0, 0);
  };

  const handleGoDown = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.card_maker}>
      <h1 className={styles.title}>Card Maker</h1>
      <section className={styles.card}>
        {Object.keys(cards).map((key) => (
          <CardEditor
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        ))}
        <AddForm onAdd={addCard} />
      </section>
    </section>
  );
};

export default CardMaker;
