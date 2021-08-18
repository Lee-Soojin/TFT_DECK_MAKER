import React, { memo } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = memo(({ onLogout }) => {
  return (
    <section className={styles.header}>
      <div className={styles.about}>
        <Link to="/" className={styles.link_about}>
          About
        </Link>
      </div>
      <div className={styles.title_part}>
        <div className={styles.header_title}>DECK MAKER</div>
      </div>
      {true && (
        <button className={styles.BtnLogout} onClick={onLogout}>
          Logout
        </button>
      )}
    </section>
  );
});

export default Header;
