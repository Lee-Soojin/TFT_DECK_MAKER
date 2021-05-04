import styles from "./deck.module.css";

import React from "react";

const Deck = (props) => {
  return (
    <section className={styles.deck_container}>
      <div className={styles.deck1}>
        <p className={styles.deck1_title}>주요 덱1</p>
        <select className={styles.deck1_select}>
          <option value="default">선택하세요</option>
          <option value="Abonimation">괴생명체</option>
          <option value="Redeemed">구원받은 자</option>
          <option value="Forgotten">망각</option>
          <option value="Revenant">망령</option>
          <option value="Dawnbringer">빛의 인도자</option>
          <option value="Vernant">신록</option>
          <option value="Hellion">악동</option>
          <option value="Coven">악의 여단</option>
          <option value="Nightbringer">어둠의 인도자</option>
          <option value="Eternal">영겁</option>
          <option value="Dragonslayer">용 사냥꾼</option>
          <option value="Draconic">용족</option>
          <option value="Ironclad">철갑</option>
          <option value="line">-------</option>
          <option value="Legionnaire">군단</option>
          <option value="Cruel">극악무도</option>
          <option value="Cavalier">기병대</option>
          <option value="Knight">기사</option>
          <option value="Invoker">기원자</option>
          <option value="Mystic">신비술사</option>
          <option value="GodKing">신왕</option>
          <option value="Brawler">싸움꾼</option>
          <option value="Assasin">암살자</option>
          <option value="Caretaker">용 사육사</option>
          <option value="Renewer">재생술사</option>
          <option value="Ranger">정찰대</option>
          <option value="Spellweaver">주문술사</option>
          <option value="Skirmisher">척후병</option>
        </select>
      </div>
      <div className={styles.deck2}>
        <p className={styles.deck2_title}>덱2</p>
        <select className={styles.deck2_select}>
          <option value="default">선택하세요</option>
          <option value="Abonimation">괴생명체</option>
          <option value="Redeemed">구원받은 자</option>
          <option value="Forgotten">망각</option>
          <option value="Revenant">망령</option>
          <option value="Dawnbringer">빛의 인도자</option>
          <option value="Vernant">신록</option>
          <option value="Hellion">악동</option>
          <option value="Coven">악의 여단</option>
          <option value="Nightbringer">어둠의 인도자</option>
          <option value="Eternal">영겁</option>
          <option value="Dragonslayer">용 사냥꾼</option>
          <option value="Draconic">용족</option>
          <option value="Ironclad">철갑</option>
          <option value="line">-------</option>
          <option value="Legionnaire">군단</option>
          <option value="Cruel">극악무도</option>
          <option value="Cavalier">기병대</option>
          <option value="Knight">기사</option>
          <option value="Invoker">기원자</option>
          <option value="Mystic">신비술사</option>
          <option value="GodKing">신왕</option>
          <option value="Brawler">싸움꾼</option>
          <option value="Assasin">암살자</option>
          <option value="Caretaker">용 사육사</option>
          <option value="Renewer">재생술사</option>
          <option value="Ranger">정찰대</option>
          <option value="Spellweaver">주문술사</option>
          <option value="Skirmisher">척후병</option>
        </select>
      </div>
    </section>
  );
};

export default Deck;
