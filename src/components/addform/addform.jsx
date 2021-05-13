import React, { useRef, useState } from "react";
import styles from "./addform.module.css";
import Item from "../item/item.jsx";
import { AiOutlinePlusSquare } from "react-icons/ai";
import CHAMPION_IMAGES from "../../image/index_image.js";
import "../champion/dropdown_menu.css";
import SelectChampion from "../select_champion/select_champion";

const AddForm = ({ onAdd }) => {
  const [cham, setCham] = useState([]);
  const chamOptions = [
    { value: "Kalista", label: "Kalista" },
    { value: "Brand", label: "Brand" },
    { value: "Nunu", label: "Nunu" },
    { value: "Ryze", label: "Ryze" },
    { value: "Lissandra", label: "Lissandra" },
    { value: "Leblanc", label: "Leblanc" },
    { value: "Morgana", label: "Morgana" },
    { value: "Gragas", label: "Gragas" },
    { value: "Khazix", label: "Khazix" },
    { value: "Soraka", label: "Soraka" },
    { value: "Nidalee", label: "Nidalee" },
    { value: "Riven", label: "Riven" },
    { value: "Karma", label: "Karma" },
    { value: "Garen", label: "Garen" },
    { value: "Udyr", label: "Udyr" },
    { value: "Sett", label: "Sett" },
    { value: "Ashe", label: "Ashe" },
    { value: "Zyra", label: "Zyra" },
    { value: "Heimerdinger", label: "Heimerdinger" },
    { value: "Trundle", label: "Trundle" },
    { value: "Pantheon", label: "Pantheon" },
    { value: "Diana", label: "Diana" },
    { value: "Mordekaiser", label: "Mordekaiser" },
    { value: "Kindred", label: "Kindred" },
    { value: "Warwick", label: "Warwick" },
    { value: "Vayne", label: "Vayne" },
    { value: "Hecarim", label: "Hecarim" },
    { value: "Thresh", label: "Thresh" },
    { value: "Viktor", label: "Viktor" },
    { value: "Katarina", label: "Katarina" },
    { value: "Draven", label: "Draven" },
    { value: "Viego", label: "Viego" },
    { value: "Kled", label: "Kled" },
    { value: "Poppy", label: "Poppy" },
    { value: "Ziggs", label: "Ziggs" },
    { value: "Kennen", label: "Kennen" },
    { value: "Lulu", label: "Lulu" },
    { value: "Teemo", label: "Teemo" },
    { value: "Nautilus", label: "Nautilus" },
    { value: "Jax", label: "Jax" },
    { value: "Rell", label: "Rell" },
    { value: "Vladimir", label: "Vladimir" },
    { value: "Sejuani", label: "Sejuani" },
    { value: "Leesin", label: "Leesin" },
    { value: "Yasuo", label: "Yasuo" },
    { value: "Aphelios", label: "Aphelios" },
    { value: "Darius", label: "Darius" },
    { value: "Aatrox", label: "Aatrox" },
    { value: "Leona", label: "Leona" },
    { value: "Syndra", label: "Syndra" },
    { value: "Varus", label: "Varus" },
    { value: "Lux", label: "Lux" },
    { value: "Rell", label: "Rell" },
    { value: "Velkoz", label: "Velkoz" },
    { value: "Kayle", label: "Kayle" },
    { value: "Nocturn", label: "Nocturn" },
    { value: "Ivern", label: "Ivern" },
    { value: "Volibear", label: "Volibear" },
    { value: "Ashe", label: "Ashe" },
    { value: "Taric", label: "Taric" },
    { value: "Diana", label: "Diana" },
    { value: "Garen", label: "Garen" },
    { value: "Morgana", label: "Morgana" },
    { value: "Ryze", label: "Ryze" },
    { value: "Heimerdinger", label: "Heimerdinger" },
  ];
  // ↑champion↑

  const formRef = useRef();
  const nameRef = useRef();
  const themeRef = useRef();
  const deck1Ref = useRef();
  const deck2Ref = useRef();
  const itemRef = useRef([]);

  const onSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      deck1: deck1Ref.current.value || "",
      deck2: deck2Ref.current.value || "",
      champion: cham || "",
      theme: themeRef.current.value || "white",
    };
    formRef.current.reset();
    onAdd(card);
  };

  const handleChange = (value) => {
    console.log(value);
    const selectedcham = cham.concat({ ...cham, value });
    setCham(selectedcham);
    console.log(`selectedcham:`, selectedcham);
    console.log(cham);
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
        <SelectChampion
          options={chamOptions}
          value={cham}
          className={styles.select_Champion}
          placeholder="Select champions"
          onChange={handleChange}
          defaultValue={chamOptions[1]}
          isMulti={true}
        />
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
