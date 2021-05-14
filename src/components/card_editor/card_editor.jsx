import React, { useRef } from "react";
import styles from "./card_editor.module.css";
import Champion from "../champion/champion.jsx";
import CardName from "../cardName/cardname.jsx";
import Deck from "../deck/deck";
import Item from "../item/item.jsx";

const CardEditor = ({ card }) => {
  const { name, cham, item, deck1, deck2, theme } = card;

  return (
    <>
      <form className={styles.form}>
        <div className={styles.card_name}>
          <input
            className={styles.cardname_input}
            type="text"
            placeholder="카드 이름을 입력해주세요"
            value={name}
          />
          <button className={styles.BtnInsert} type="submit">
            확인
          </button>
        </div>
        <div className={styles.theme}>
          <p className={styles.theme_title}>테마 선택</p>
          <select
            name="theme"
            placeholder="Theme"
            className={styles.theme_select}
            value={theme}
          >
            <option value="judge">judge</option>
            <option value="cartel">cartel</option>
            <option value="space">space</option>
          </select>
        </div>
        <div className={styles.deck}>
          <div className={styles.deck1}>
            <p className={styles.deck1_title}>주요 덱1</p>
            <select className={styles.deck1_select} value={deck1}>
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
            <select className={styles.deck2_select} value={deck2}>
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
        </div>
        <div className={styles.champion}>
          {cham &&
            cham.map((champion) => (
              <div className={styles.champion_container}>
                <p className={styles.cham_name}>{champion}</p>
              </div>
            ))}
        </div>
        <div className={styles.item}>
          <Item value={item} />
        </div>
        <button className={styles.BtnDelete}>Delete</button>
      </form>
    </>

    /* <div className={styles.select_part}>
        <div className={styles.card_top}>
          <div className={styles.name}>
            <CardName />
          </div>
          <Theme />
        </div>
        <div className={styles.deck}>
          <Deck />
        </div>
      </div>
      <div className={styles.champion}>
        <h3 className={styles.cham_title}>챔피언</h3>
        <div className={styles.selected_cham}>
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
        </div>
      </div>

      <div className={styles.selected_item}>
        <h3 className={styles.item_title}>아이템</h3>
        <Item />
      </div> */
  );
};
export default CardEditor;
