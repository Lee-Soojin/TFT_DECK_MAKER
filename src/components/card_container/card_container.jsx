import React from "react";
import styles from "./card_container.module.css";
import CHAMPION_IMAGES from "../../image/index_image.js";
import ITEM_IMAGES from "../../image/item";
import image from "../../image/tft_sign_up2.jpg";

const CardContainer = (props) => {
  return (
    <>
      <h1 className={styles.title}>CardContainer</h1>
      <section className={styles.card_container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.name}>나의 첫번째 덱</div>
            <div className={styles.deck1}>deck1</div>
            <div className={styles.deck2}>deck2</div>
            <div className={styles.champion}>
              <h3 className={styles.cham_title}>Champion</h3>
              <div className={styles.champion_container}>
                <img
                  src={CHAMPION_IMAGES.cham_Ashe}
                  alt="champion"
                  className={styles.selected_cham}
                />
                <img
                  src={CHAMPION_IMAGES.cham_Ashe}
                  alt="champion"
                  className={styles.selected_cham}
                />
                <img
                  src={CHAMPION_IMAGES.cham_Ashe}
                  alt="champion"
                  className={styles.selected_cham}
                />
                <img
                  src={CHAMPION_IMAGES.cham_Ashe}
                  alt="champion"
                  className={styles.selected_cham}
                />
                <img
                  src={CHAMPION_IMAGES.cham_Ashe}
                  alt="champion"
                  className={styles.selected_cham}
                />
                <img
                  src={CHAMPION_IMAGES.cham_Ashe}
                  alt="champion"
                  className={styles.selected_cham}
                />
                <img
                  src={CHAMPION_IMAGES.cham_Ashe}
                  alt="champion"
                  className={styles.selected_cham}
                />
                <img
                  src={CHAMPION_IMAGES.cham_Ashe}
                  alt="champion"
                  className={styles.selected_cham}
                />
              </div>
            </div>
            <div className={styles.item}>
              <h3 className={styles.item_title}>Item</h3>
              <div className={styles.item_container}>
                <img
                  src={ITEM_IMAGES.item_Arch}
                  alt="Arch"
                  className={styles.selected_item}
                />
                <img
                  src={ITEM_IMAGES.item_BlueBuff}
                  alt="BlueBuff"
                  className={styles.selected_item}
                />
                <img
                  src={ITEM_IMAGES.item_Gauntlet}
                  alt="Gauntlet"
                  className={styles.selected_item}
                />
              </div>
            </div>
          </div>
          <div className={styles.card_image}>
            <img src={image} alt="image" className={styles.image} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardContainer;
