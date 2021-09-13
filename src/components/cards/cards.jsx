import React, { useCallback, useEffect, useState } from "react";
import styles from "./cards.module.css";
import Header from "../header/header";
import CardMaker from "../card_maker/card_maker";
import CardContainer from "../card_container/card_container";
import { useHistory } from "react-router";
import { BsMoon } from "react-icons/bs";

const Cards = ({ authService, cardRepository }) => {
  const History = useHistory();
  const historyState = History?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [darkmode, setDarkmode] = useState(false);

  const history = useHistory();
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

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

  const handleDarkMode = (event) => {
    event.preventDefault();
    setDarkmode(!darkmode);
  };

  return (
    <div className={`${styles.card} ${darkmode ? styles.dark : styles.light}`}>
      <div className={styles.header}>
        <Header onLogout={onLogout} darkmode={darkmode} />
      </div>
      <div className={styles.card_board}>
        <div className={styles.card_maker}>
          <CardMaker
            cards={cards}
            addCard={createOrUpdateCard}
            updateCard={createOrUpdateCard}
            deleteCard={deleteCard}
            darkmode={darkmode}
          />
        </div>
        <div className={styles.card_container}>
          <CardContainer cards={cards} darkmode={darkmode} />
        </div>
      </div>
      <button className={styles.BtnDarkMode} onClick={handleDarkMode}>
        <BsMoon />
      </button>
    </div>
  );
};

export default Cards;
