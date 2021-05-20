import React, { useEffect, useState } from "react";
import styles from "./cards.module.css";
import Header from "../header/header";
import CardMaker from "../card_maker/card_maker";
import Footer from "../footer/footer";
import CardContainer from "../card_container/card_container";
import { useHistory } from "react-router";
import CHAMPION_IMAGES from "../../image/index_image.js";
import ITEM_IMAGES from "../../image/item";

const Cards = ({ authService, cardRepository }) => {
  const History = useHistory();
  const historyState = History?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
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
