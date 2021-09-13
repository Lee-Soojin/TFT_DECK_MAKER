import React, { useRef } from "react";
import styles from "./card_editor.module.css";
import { TiDelete } from "react-icons/ti";

const CardEditor = ({ card, updateCard, deleteCard, darkmode }) => {
  const { name, cham, item, deck1, deck2, theme } = card;
  const nameRef = useRef();
  const themeRef = useRef();
  const deck1Ref = useRef();
  const deck2Ref = useRef();

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onClick = (event) => {
    deleteCard(card);
  };

  return (
    <>
      <form
        className={`${styles.form} ${darkmode ? styles.dark : styles.light}`}
      >
        <div className={styles.card_name}>
          <p className={styles.name_title}>카드 이름</p>
          <input
            className={styles.cardname_input}
            type="text"
            placeholder="카드 이름을 입력해주세요"
            value={name}
            ref={nameRef}
            onChange={onChange}
            name="name"
          />
        </div>
        <div className={styles.theme}>
          <p className={styles.theme_title}>테마 선택</p>
          <select
            name="theme"
            placeholder="Theme"
            className={styles.theme_select}
            value={theme}
            ref={themeRef}
            onChange={onChange}
          >
            <option value="judge">judge</option>
            <option value="cartel">cartel</option>
            <option value="space">space</option>
            <option value="galaxy">galaxy</option>
            <option value="saved">saved</option>
            <option value="light">light</option>
            <option value="regenerative">regenerative</option>
          </select>
        </div>
        <div className={styles.deck}>
          <div className={styles.deck1}>
            <p className={styles.deck1_title}>주요 덱1</p>
            <select
              name="deck1"
              className={styles.deck1_select}
              value={deck1}
              ref={deck1Ref}
              onChange={onChange}
            >
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
            <select
              name="deck2"
              className={styles.deck2_select}
              value={deck2}
              ref={deck2Ref}
              onChange={onChange}
            >
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
          <p className={styles.champion_title}>선택된 챔피언</p>
          {cham &&
            cham.map((champion) => (
              <div className={styles.champion_container}>
                <p className={styles.cham_name} onClick={onChange} name="cham">
                  {champion}
                </p>
              </div>
            ))}
        </div>
        <div className={styles.item}>
          <p className={styles.item_title}>선택된 아이템</p>
          {item &&
            item.map((Item) => (
              <div className={styles.item_container}>
                <img src={Item} className={styles.item_img} alt="item"></img>
              </div>
            ))}
        </div>
        <div className={styles.deleteBtn_container}>
          <button className={styles.BtnDelete} onClick={onClick}>
            <TiDelete />
          </button>
        </div>
      </form>
    </>
  );
};
export default CardEditor;
