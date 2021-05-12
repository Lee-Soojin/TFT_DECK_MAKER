import React, { useEffect, useState } from "react";
import styles from "./cards.module.css";
import Header from "../header/header";
import CardMaker from "../card_maker/card_maker";
import Footer from "../footer/footer";
import CardContainer from "../card_container/card_container";
import { useHistory } from "react-router";
import CHAMPION_IMAGES from "../../image/index_image.js";
import ITEM_IMAGES from "../../image/item";

const Cards = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      theme: "yellow",
      cham: [
        "Aatrox",
        "Aphelios",
        "Ashe",
        "Brand",
        "Darius",
        "Diana",
        "Draven",
        "Garen",
      ],
      item: [
        ITEM_IMAGES.item_Arch,
        ITEM_IMAGES.item_Armor,
        ITEM_IMAGES.item_Bow,
      ],
      name: "new card",
      deck1: "coven",
      deck2: "draconic",
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Header onLogout={onLogout} />
      </div>
      <div className={styles.card_board}>
        <div className={styles.card_maker}>
          <CardMaker cards={cards} addCard={addCard} />
        </div>
        <div className={styles.card_container}>
          <CardContainer cards={cards} />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Cards;
