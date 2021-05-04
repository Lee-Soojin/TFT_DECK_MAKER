import React from "react";
import DropdownMenu from "../champion/champion.jsx";
import Deck from "../deck/deck";
import Header from "../header/header.jsx";
import styles from "./card.module.css";

const Start = (props) => {
  return (
    <>
      <Header />
      <section className={styles.card}>
        <Deck />
        <div className={styles.selected_cham}>
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
          <DropdownMenu />
        </div>
      </section>
    </>
  );
};

export default Start;
