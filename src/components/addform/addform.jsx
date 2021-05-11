import React, { useRef, useState } from "react";
import styles from "./addform.module.css";
import Select from "react-select";
import Item from "../item/item.jsx";
import { AiOutlinePlusSquare } from "react-icons/ai";
import CHAMPION_IMAGES from "../../image/index_image.js";
import "../champion/dropdown_menu.css";

const AddForm = ({ onAdd }) => {
  const [cham, setCham] = useState(null);
  const chamOptions = [
    { champion: "Kalista", label: "Kalista" },
    { champion: "Brand", label: "Brand" },
    { champion: "Nunu", label: "Nunu" },
    { champion: "Ryze", label: "Ryze" },
  ];
  // ↑champion↑

  const formRef = useRef();
  const nameRef = useRef();
  const themeRef = useRef();
  const deck1Ref = useRef();
  const deck2Ref = useRef();
  const championRef = useRef();
  const itemRef = useRef([]);

  const onSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      deck1: deck1Ref.current.value || "",
      deck1: deck1Ref.current.value || "",
      deck2: deck2Ref.current.value || "",
      theme: themeRef.current.value || "white",
    };
    formRef.current.reset();
    onAdd(card);
  };

  const handleChange = (cham) => {
    setCham(cham);
    console.log(`selected champion:`, cham);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <div className={styles.card_name}>
        <input
          className={styles.cardname_input}
          type="text"
          ref={nameRef}
          placeholder="카드 이름을 입력해주세요"
        />
      </div>
      <div className={styles.theme}>
        <p className={styles.title}>테마 선택</p>
        <select
          name="theme"
          placeholder="Theme"
          className={styles.theme_select}
          ref={themeRef}
        >
          <option placeholder="black">black</option>
          <option placeholder="white">white</option>
          <option placeholder="yellow">yellow</option>
        </select>
      </div>
      <div className={styles.deck}>
        <div className={styles.deck1}>
          <p className={styles.deck1_title}>주요 덱1</p>
          <select className={styles.deck1_select} ref={deck1Ref}>
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
          <select className={styles.deck2_select} ref={deck2Ref}>
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
        <Select options={chamOptions} value={cham} onChange={handleChange} />
      </div>
      <div className={styles.item}>
        <Item />
      </div>
      <button className={styles.BtnAdd} onClick={onSubmit}>
        추가
      </button>
    </form>
  );
};

export default AddForm;
