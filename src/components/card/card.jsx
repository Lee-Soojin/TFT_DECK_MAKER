import React from "react";
import styles from "./card.module.css";
import CHAMPION_IMAGES from "../../image/index_image.js";
import ITEM_IMAGES from "../../image/item";

const Card = ({ card }) => {
  const { name, cham, item, deck1, deck2, theme } = card;
  console.log(cham);
  return (
    <section className={`${styles.card} ${getTheme(theme)}`}>
      <li className={styles.list}>
        <div>
          <h3 className={styles.card_name}>{name}</h3>
          <p className={styles.deck1}>{deck1}</p>
          <p className={styles.deck2}>{deck2}</p>
        </div>
        {/* <div className={styles.champion_list}>
          {cham.map((champion) => (
            <img src={champion} alt="champion" className={styles.champion} />
          ))}
        </div>
        <div className={styles.item_list}>
          {item.map((item) => (
            <img src={item} alt="item" className={styles.item} />
          ))}
        </div> */}
      </li>
    </section>
  );
};

function getTheme(theme) {
  switch (theme) {
    case "white":
      return styles.white;
    case "black":
      return styles.black;
    case "yellow":
      return styles.yellow;
    default:
      throw new Error(`unknow theme : ${theme}`);
  }
}

export default Card;
