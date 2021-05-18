import React, { useRef, useState } from "react";
import styles from "./addform.module.css";
import Item from "../item/item.jsx";
import { AiOutlinePlusSquare } from "react-icons/ai";
import CHAMPION_IMAGES from "../../image/index_image.js";
import "../champion/dropdown_menu.css";
import SelectChampion from "../select_champion/select_champion";

const AddForm = ({ onAdd }) => {
  const [cham, setCham] = useState([]);
  const [item, setItem] = useState([]);
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

  const items = [
    {
      name: "B.F대검",
      url: require("../../image/ItemImage/sword.png").default,
    },
    { name: "곡궁", url: require("../../image/ItemImage/bow.png").default },
    {
      name: "쇠사슬 조끼",
      url: require("../../image/ItemImage/armor.png").default,
    },
    {
      name: "음전자 망토",
      url: require("../../image/ItemImage/cape.png").default,
    },
    {
      name: "쓸데없이 큰 지팡이",
      url: require("../../image/ItemImage/stick.png").default,
    },
    {
      name: "여신의 눈물",
      url: require("../../image/ItemImage/tear.png").default,
    },
    {
      name: "거인의 허리띠",
      url: require("../../image/ItemImage/belt.png").default,
    },
    {
      name: "연습용 장갑",
      url: require("../../image/ItemImage/BrawlersGloves.png").default,
    },
    {
      name: "뒤집개",
      url: require("../../image/ItemImage/Spatula.png").default,
    },
    {
      name: "그림자 뒤집개",
      url: require("../../image/ItemImage/spatula_shadow.png").default,
    },
    {
      name: "죽음의 검",
      url: require("../../image/ItemImage/LordsEdge.png").default,
    },
    {
      name: "거인 학살자",
      url: require("../../image/ItemImage/GiantSlayer.png").default,
    },
    {
      name: "수호 천사",
      url: require("../../image/ItemImage/guardian.png").default,
    },
    {
      name: "피바라기",
      url: require("../../image/ItemImage/blood.png").default,
    },
    {
      name: "마법공학 총검",
      url: require("../../image/ItemImage/Hextech.png").default,
    },
    {
      name: "쇼진의 창",
      url: require("../../image/ItemImage/shojin.png").default,
    },
    {
      name: "지크의 전령",
      url: require("../../image/ItemImage/ZekesHerald.png").default,
    },
    {
      name: "무한의 대검",
      url: require("../../image/ItemImage/infinity.png").default,
    },
    {
      name: "척후병 상징",
      url: require("../../image/ItemImage/SwordoftheDivine.png").default,
    },
    {
      name: "망각 상징",
      url: require("../../image/ItemImage/SwordoftheDivine_shadow.png").default,
    },
    {
      name: "고속 연사포",
      url: require("../../image/ItemImage/rapid.png").default,
    },
    {
      name: "거인의 결의",
      url: require("../../image/ItemImage/TitansResolve.png").default,
    },
    {
      name: "루난의 허리케인",
      url: require("../../image/ItemImage/runnan.png").default,
    },
    {
      name: "구인수의 격노검",
      url: require("../../image/ItemImage/guinsoo.png").default,
    },
    {
      name: "스태틱의 단검",
      url: require("../../image/ItemImage/statikk.png").default,
    },
    {
      name: "즈롯 차원문",
      url: require("../../image/ItemImage/ZzRotPortal.png").default,
    },
    {
      name: "최후의 속삭임",
      url: require("../../image/ItemImage/last_whisper.png").default,
    },
    {
      name: "군단 상징",
      url: require("../../image/ItemImage/DuelistsZeal.png").default,
    },
    {
      name: "악동 상징",
      url: require("../../image/ItemImage/DuelistsZeal_shadow.png").default,
    },
    {
      name: "덤불 조끼",
      url: require("../../image/ItemImage/vest.png").default,
    },
    {
      name: "가고일 돌갑옷",
      url: require("../../image/ItemImage/IronWill.png").default,
    },
    {
      name: "강철의 솔라리 팬던트",
      url: require("../../image/ItemImage/IronSolari.png").default,
    },
    {
      name: "얼어붙은 심장",
      url: require("../../image/ItemImage/frozen.png").default,
    },
    {
      name: "태양불꽃 망토",
      url: require("../../image/ItemImage/SunfireCape.png").default,
    },
    {
      name: "침묵의 장막",
      url: require("../../image/ItemImage/Shroud.png").default,
    },
    {
      name: "철갑 상징",
      url: require("../../image/ItemImage/VanguardsCuirass.png").default,
    },
    {
      name: "기병대 상징",
      url: require("../../image/ItemImage/VanguardsCuirass_shadow.png").default,
    },
    {
      name: "용의 발톱",
      url: require("../../image/ItemImage/DragonsClaw.png").default,
    },
    {
      name: "이온충격기",
      url: require("../../image/ItemImage/IonicSpark.png").default,
    },
    {
      name: "힘의 성배",
      url: require("../../image/ItemImage/Chalice.png").default,
    },
    {
      name: "서풍",
      url: require("../../image/ItemImage/Zephyr.png").default,
    },
    {
      name: "수은",
      url: require("../../image/ItemImage/Quicksilver.png").default,
    },
    {
      name: "구원받은 자 상징",
      url: require("../../image/ItemImage/ElderwoodHeirloom.png").default,
    },
    {
      name: "망령 상징",
      url: require("../../image/ItemImage/ElderwoodHeirloom_shadow.png")
        .default,
    },
    {
      name: "라바돈의 죽음모자",
      url: require("../../image/ItemImage/rabadon.png").default,
    },
    {
      name: "대천사의 지팡이",
      url: require("../../image/ItemImage/arch.png").default,
    },
    {
      name: "모렐로노미콘",
      url: require("../../image/ItemImage/Morello.png").default,
    },
    {
      name: "보석 건틀릿",
      url: require("../../image/ItemImage/ArcaneGauntlet.png").default,
    },
    {
      name: "주문술사 상징",
      url: require("../../image/ItemImage/MantleofDusk.png").default,
    },
    {
      name: "용 사냥꾼 상징",
      url: require("../../image/ItemImage/MantleofDusk_shadow.png").default,
    },
    {
      name: "푸른 파수꾼",
      url: require("../../image/ItemImage/BlueBuff.png").default,
    },
    {
      name: "구원",
      url: require("../../image/ItemImage/sacrificial.png").default,
    },
    {
      name: "정의의 손길",
      url: require("../../image/ItemImage/HandofJustice.png").default,
    },
    {
      name: "재생술사 상징",
      url: require("../../image/ItemImage/MagesCap.png").default,
    },
    {
      name: "악의 여단 상징",
      url: require("../../image/ItemImage/MagesCap_shadow.png").default,
    },
    {
      name: "워모그의 갑옷",
      url: require("../../image/ItemImage/warmog.png").default,
    },
    {
      name: "덫 발톱",
      url: require("../../image/ItemImage/Backhand.png").default,
    },
    {
      name: "빛의 인도자 상징",
      url: require("../../image/ItemImage/WarlordsBanner.png").default,
    },
    {
      name: "어둠의 인도자 상징",
      url: require("../../image/ItemImage/WarlordsBanner_shadow.png").default,
    },
    {
      name: "도적의 장갑",
      url: require("../../image/ItemImage/ThiefsGloves.png").default,
    },
    {
      name: "암살자 상징",
      url: require("../../image/ItemImage/GhostBlade.png").default,
    },
    {
      name: "괴생명체 상징",
      url: require("../../image/ItemImage/GhostBlade_shadow.png").default,
    },
    {
      name: "대자연의 힘",
      url: require("../../image/ItemImage/ForceOfNature.png").default,
    },
    {
      name: "암흑의 힘",
      url: require("../../image/ItemImage/ForceOfNature_shadow.png").default,
    },
    // shadow
    {
      name: "그림자 검",
      url: require("../../image/ItemImage/sword_shadow.png").default,
    },
    {
      name: "그림자 활",
      url: require("../../image/ItemImage/bow_shadow.png").default,
    },
    {
      name: "그림자 조끼",
      url: require("../../image/ItemImage/armor_shadow.png").default,
    },
    {
      name: "그림자 망토",
      url: require("../../image/ItemImage/cape_shadow.png").default,
    },
    {
      name: "그림자 지팡이",
      url: require("../../image/ItemImage/stick_shadow.png").default,
    },
    {
      name: "그림자 눈물",
      url: require("../../image/ItemImage/tear_shadow.png").default,
    },
    {
      name: "그림자 허리띠",
      url: require("../../image/ItemImage/belt_shadow.png").default,
    },
    {
      name: "그림자 장갑",
      url: require("../../image/ItemImage/BrawlersGloves_shadow.png").default,
    },
    {
      name: "뒤집개",
      url: require("../../image/ItemImage/Spatula.png").default,
    },
    {
      name: "그림자 뒤집개",
      url: require("../../image/ItemImage/spatula_shadow.png").default,
    },
    {
      name: "부식성 죽음의 검",
      url: require("../../image/ItemImage/LordsEdge_shadow.png").default,
    },
    {
      name: "유령 거인 학살자",
      url: require("../../image/ItemImage/GiantSlayer_shadow.png").default,
    },
    {
      name: "타락한 수호 천사",
      url: require("../../image/ItemImage/guardian_shadow.png").default,
    },
    {
      name: "지옥바라기",
      url: require("../../image/ItemImage/blood_shadow.png").default,
    },
    {
      name: "불멸의 마법공학 총검",
      url: require("../../image/ItemImage/Hextech_shadow.png").default,
    },
    {
      name: "망령 쇼진의 창",
      url: require("../../image/ItemImage/shojin_shadow.png").default,
    },
    {
      name: "지크의 음산한 정령",
      url: require("../../image/ItemImage/ZekesHerald_shadow.png").default,
    },
    {
      name: "무한의 제물 대검",
      url: require("../../image/ItemImage/infinity_shadow.png").default,
    },
    {
      name: "척후병 상징",
      url: require("../../image/ItemImage/SwordoftheDivine.png").default,
    },
    {
      name: "망각 상징",
      url: require("../../image/ItemImage/SwordoftheDivine_shadow.png").default,
    },
    {
      name: "고속 사망포",
      url: require("../../image/ItemImage/rapid_shadow.png").default,
    },
    {
      name: "거인의 복수",
      url: require("../../image/ItemImage/TitansResolve_shadow.png").default,
    },
    {
      name: "루난의 길들지 않은 허리케인",
      url: require("../../image/ItemImage/runnan_shadow.png").default,
    },
    {
      name: "구인수의 제물 격노검",
      url: require("../../image/ItemImage/guinsoo_shadow.png").default,
    },
    {
      name: "스태틱의 단도",
      url: require("../../image/ItemImage/statikk_shadow.png").default,
    },
    {
      name: "불안정한 즈롯 차원문",
      url: require("../../image/ItemImage/ZzRotPortal_shadow.png").default,
    },
    {
      name: "마지막 속삭임",
      url: require("../../image/ItemImage/last_whisper_shadow.png").default,
    },
    {
      name: "군단 상징",
      url: require("../../image/ItemImage/DuelistsZeal.png").default,
    },
    {
      name: "악동 상징",
      url: require("../../image/ItemImage/DuelistsZeal_shadow.png").default,
    },
    {
      name: "구부러진 덤불 조끼",
      url: require("../../image/ItemImage/vest_shadow.png").default,
    },
    {
      name: "불멸의 가고일 돌갑옷",
      url: require("../../image/ItemImage/IronWill_shadow.png").default,
    },
    {
      name: "은빛 루나리 펜던트",
      url: require("../../image/ItemImage/Solari_shadow.png").default,
    },
    {
      name: "얼어붙은 검은 심장",
      url: require("../../image/ItemImage/frozen_shadow.png").default,
    },
    {
      name: "일식의 망토",
      url: require("../../image/ItemImage/SunfireCape_shadow.png").default,
    },
    {
      name: "침묵의 흑막",
      url: require("../../image/ItemImage/Shroud_shadow.png").default,
    },
    {
      name: "철갑 상징",
      url: require("../../image/ItemImage/VanguardsCuirass.png").default,
    },
    {
      name: "기병대 상징",
      url: require("../../image/ItemImage/VanguardsCuirass_shadow.png").default,
    },
    {
      name: "구부러진 용의 발톱",
      url: require("../../image/ItemImage/DragonsClaw_shadow.png").default,
    },
    {
      name: "암흑 이온 충격기",
      url: require("../../image/ItemImage/IonicSpark_shadow.png").default,
    },
    {
      name: "악의의 성배",
      url: require("../../image/ItemImage/ChaliceOfPower_shadow.png").default,
    },
    {
      name: "사나운 서풍",
      url: require("../../image/ItemImage/Zephyr_shadow.png").default,
    },
    {
      name: "부식성 수은",
      url: require("../../image/ItemImage/Quicksilver_shadow.png").default,
    },
    {
      name: "구원받은 자 상징",
      url: require("../../image/ItemImage/ElderwoodHeirloom.png").default,
    },
    {
      name: "망령 상징",
      url: require("../../image/ItemImage/ElderwoodHeirloom_shadow.png")
        .default,
    },
    {
      name: "라바돈의 부식성 죽음모자",
      url: require("../../image/ItemImage/rabadon_shadow.png").default,
    },
    {
      name: "대악마의 불멸 지팡이",
      url: require("../../image/ItemImage/arch_shadow.png").default,
    },
    {
      name: "데블로노미콘",
      url: require("../../image/ItemImage/Morello_shadow.png").default,
    },
    {
      name: "제물 건틀릿",
      url: require("../../image/ItemImage/ArcaneGauntlet_shadow.png").default,
    },
    {
      name: "주문술사 상징",
      url: require("../../image/ItemImage/MantleofDusk.png").default,
    },
    {
      name: "용 사냥꾼 상징",
      url: require("../../image/ItemImage/MantleofDusk_shadow.png").default,
    },
    {
      name: "암흑의 푸른 파수꾼",
      url: require("../../image/ItemImage/BlueBuff_shadow.png").default,
    },
    {
      name: "제물로 바친 구원",
      url: require("../../image/ItemImage/sacrificial_shadow.png").default,
    },
    {
      name: "복수의 손길",
      url: require("../../image/ItemImage/HandofJustice_shadow.png").default,
    },
    {
      name: "재생술사 상징",
      url: require("../../image/ItemImage/MagesCap.png").default,
    },
    {
      name: "악의 여단 상징",
      url: require("../../image/ItemImage/MagesCap_shadow.png").default,
    },
    {
      name: "워모그의 제물 갑옷",
      url: require("../../image/ItemImage/warmog_shadow.png").default,
    },
    {
      name: "복수의 덫 발톱",
      url: require("../../image/ItemImage/Backhand_shadow.png").default,
    },
    {
      name: "빛의 인도자 상징",
      url: require("../../image/ItemImage/WarlordsBanner.png").default,
    },
    {
      name: "어둠의 인도자 상징",
      url: require("../../image/ItemImage/WarlordsBanner_shadow.png").default,
    },
    {
      name: "사기꾼의 장갑",
      url: require("../../image/ItemImage/ThiefsGloves_shadow.png").default,
    },
    {
      name: "암살자 상징",
      url: require("../../image/ItemImage/GhostBlade.png").default,
    },
    {
      name: "괴생명체 상징",
      url: require("../../image/ItemImage/GhostBlade_shadow.png").default,
    },
    {
      name: "대자연의 힘",
      url: require("../../image/ItemImage/ForceOfNature.png").default,
    },
    {
      name: "암흑의 힘",
      url: require("../../image/ItemImage/ForceOfNature_shadow.png").default,
    },
  ];

  const formRef = useRef();
  const nameRef = useRef();
  const themeRef = useRef();
  const deck1Ref = useRef();
  const deck2Ref = useRef();

  const onSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      deck1: deck1Ref.current.value || "",
      deck2: deck2Ref.current.value || "",
      cham: cham || [],
      theme: themeRef.current.value || "white",
      item: item || [],
    };
    formRef.current.reset();
    setCham([]);
    setItem([]);
    // setItem([]);
    onAdd(card);
    console.log(cham);
    console.log(card);
  };

  const handleChange = (value) => {
    console.log(value);
    value.map((v) => console.log(v.value));
    const champion = value.map((v) => v.value);
    console.log(champion);
    const selectedcham = cham.concat(...cham, champion);
    const Champion = selectedcham.filter(
      (item, pos) => selectedcham.indexOf(item) === pos
    );
    setCham(Champion);
    console.log(`selectedcham:`, Champion);
    console.log(cham);
  };

  const handleItem = (url) => {
    // e.preventDefault();
    console.log("url:", url);
    const selecteditem = item.concat(...item, url);
    const Item = selecteditem.filter(
      (item, pos) => selecteditem.indexOf(item) === pos
    );
    setItem(Item);
    console.log(`selectedItem:`, Item);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <div className={styles.card_name}>
        <p className={styles.name_title}>카드 이름</p>
        <input
          className={styles.cardname_input}
          type="text"
          ref={nameRef}
          placeholder="카드 이름을 입력해주세요"
        />
      </div>
      <div className={styles.theme}>
        <p className={styles.theme_title}>테마 선택</p>
        <select
          name="theme"
          placeholder="Theme"
          className={styles.theme_select}
          ref={themeRef}
        >
          <option placeholder="judge">judge</option>
          <option placeholder="cartel">cartel</option>
          <option placeholder="space">space</option>
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
        <p className={styles.champion_title}>챔피언 선택</p>
        <SelectChampion
          options={chamOptions}
          className={styles.select_Champion}
          placeholder="Select champions"
          onChange={handleChange}
          defaultValue={chamOptions[1]}
          isMulti={true}
        />
      </div>
      <div className={styles.item}>
        <Item items={items} onChange={handleItem} />
      </div>
      <button className={styles.BtnAdd} onClick={onSubmit}>
        추가
      </button>
    </form>
  );
};

export default AddForm;
