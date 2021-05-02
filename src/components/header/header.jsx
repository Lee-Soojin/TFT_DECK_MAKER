import React from "react";
import styles from "./header.module.css";
import TitleImg from "../../image/header_Title_2.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <section className={styles.header}>
      <div className={styles.about}>
        <Link to="/" className={styles.link_about}>
          About
        </Link>
      </div>
      <div className={styles.title_part}>
        <div className={styles.header_title}>
          <img src={TitleImg} alt="title" />
        </div>
      </div>
    </section>
  );
};

export default Header;