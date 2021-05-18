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
  const [cards, setCards] = useState({
    1: {
      id: "1",
      theme: "space",
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
        require("../../image/ItemImage/sword.png").default,
        require("../../image/ItemImage/sword.png").default,
        require("../../image/ItemImage/sword.png").default,
      ],
      name: "new card",
      deck1: "coven",
      deck2: "draconic",
    },
    2: {
      id: "2",
      theme: "judge",
      cham: [
        "Katarina",
        "Brand",
        "Ashe",
        "Taric",
        "Nidalee",
        "Diana",
        "Darius",
        "Garen",
      ],
      item: [
        require("../../image/ItemImage/armor.png").default,
        require("../../image/ItemImage/armor.png").default,
        require("../../image/ItemImage/armor.png").default,
      ],
      name: "new card",
      deck1: "coven",
      deck2: "draconic",
    },
  });

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

  // const addCard = (card) => {
  //   const updated = [...cards, card];
  //   setCards(updated);
  // };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Header onLogout={onLogout} />
      </div>
      <div className={styles.card_board}>
        <div className={styles.card_maker}>
          <CardMaker
            cards={cards}
            addCard={createOrUpdateCard}
            updateCard={createOrUpdateCard}
            deleteCard={deleteCard}
          />
        </div>
        <div className={styles.card_container}>
          <CardContainer cards={cards} />
        </div>
      </div>
      <div className={styles.footer}>{/* <Footer /> */}</div>
    </div>
  );
};

export default Cards;
