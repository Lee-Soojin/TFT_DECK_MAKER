import React from "react";
import DropdownMenu from "../dropdownmenu/dropdownmenu.jsx";
import Header from "../header/header.jsx";
import styles from "./card.module.css";

const Start = (props) => {
  return (
    <>
      <Header />
      <section className={styles.card}>
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
