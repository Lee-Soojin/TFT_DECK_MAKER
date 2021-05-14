import React from "react";
import styles from "./header.module.css";
import TitleImg from "../../image/header_title.png";
import { Link } from "react-router-dom";

const Header = ({ onLogout }) => {
  return (
    <section className={styles.header}>
      <div className={styles.about}>
        <Link to="/" className={styles.link_about}>
          About
        </Link>
      </div>
      <div className={styles.title_part}>
        <div className={styles.header_title}>
          <img src={TitleImg} alt="title" className={styles.header_img} />
        </div>
      </div>
      {true && (
        <button className={styles.BtnLogout} onClick={onLogout}>
          Logout
        </button>
      )}
    </section>
  );
};

export default Header;
