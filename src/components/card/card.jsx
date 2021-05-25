import React, { memo } from "react";
import styles from "./card.module.css";
// import "../../image/index_image.js";

const Card = memo(({ card }) => {
  const { name, cham, item, deck1, deck2, theme } = card;

  return (
    <section className={`${styles.card} ${getTheme(theme)}`}>
      <li className={styles.list}>
        <div>
          <h3 className={styles.card_name}>{name}</h3>
          <p className={styles.deck1}>{deck1}</p>
          <p className={styles.deck2}>{deck2}</p>
        </div>
        <div className={styles.champion_list}>
          {cham &&
            cham.map((champion) => (
              <div className={styles.champion_container}>
                <p className={styles.cham_name}>{champion}</p>
                <img
                  className={styles.champion_img}
                  src={require(`../../image/chamImage/${champion}.png`).default}
                  alt="champion"
                />
              </div>
            ))}
        </div>
        <div className={styles.item_list}>
          {item &&
            item.map((Item) => (
              <div className={styles.item_container}>
                <img className={styles.item_img} src={Item} alt="champion" />
              </div>
            ))}
        </div>
      </li>
    </section>
  );
});

function getTheme(theme) {
  switch (theme) {
    case "cartel":
      return styles.cartel;
    case "judge":
      return styles.judge;
    case "space":
      return styles.space;
    default:
      throw new Error(`unknow theme : ${theme}`);
  }
}

export default Card;
