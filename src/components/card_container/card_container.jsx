import React from "react";
import styles from "./card_container.module.css";
import Card from "../card/card";

const CardContainer = ({ cards }) => {
  return (
    <>
      <h1 className={styles.title}>CardContainer</h1>
      <section className={styles.card_container}>
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]} />
        ))}
      </section>
    </>
  );
};

export default CardContainer;
