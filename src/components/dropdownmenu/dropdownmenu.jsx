import React, { useRef, useState } from "react";
import styles from "./dropdownmenu.module.css";
import "./drop.css";
import DefaultChamImg from "../../image/chamImage/Garen.png";
import CHAMPION_IMAGES from "../../image/index_image.js";
import { AiOutlinePlusSquare } from "react-icons/ai";

const DropdownMenu = (props) => {
  const dropdownRef = useRef(null);
  const [active, setActive] = useState(false);
  const onClick = () => setActive(!active);
  const handleChamClick = (event) => {
    event.preventDefault();
    if (event.target) {
      console.log(event.target);
    }
  };
  return (
    <>
      <div className={styles.dropdown_container}>
        <button className={styles.BtnDropdown} onClick={onClick}>
          <AiOutlinePlusSquare />
        </button>
        <div
          className={`menu ${active ? "active" : "inactive"}`}
          ref={dropdownRef}
          onClick={handleChamClick}
        >
          <div id={styles.chamlist} className={styles.abomination}>
            <p className={styles.deck}>괴생명체</p>
            <img
              className={styles.cham}
              src={CHAMPION_IMAGES.cham_Kalista}
              alt="kalista"
            />
            <img
              src={CHAMPION_IMAGES.cham_Brand}
              alt="Brand"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Nunu}
              alt="Nunu"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Ryze}
              alt="Ryze"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Redeemed}>
            <p className={styles.deck}>구원받은 자</p>
            <img
              src={CHAMPION_IMAGES.cham_Aatrox}
              alt="Aatrox"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Leona}
              alt="Leona"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Varus}
              alt="Varus"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Syndra}
              alt="Syndra"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Lux}
              alt="Lux"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Rell}
              alt="Rell"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Velkoz}
              alt="Velkoz"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Kayle}
              alt="Kayle"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Forgotten}>
            <p className={styles.deck}>망각</p>
            <img
              src={CHAMPION_IMAGES.cham_Warwick}
              alt="Warwick"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Vayne}
              alt="Vayne"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Viktor}
              alt="Viktor"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Thresh}
              alt="Thresh"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Hecarim}
              alt="Hecarim"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Katarina}
              alt="Katarina"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Draven}
              alt="Draven"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Ryze}
              alt="Ryze"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Viego}
              alt="Viego"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Revenant}>
            <p className={styles.deck}>망령</p>
            <img
              src={CHAMPION_IMAGES.cham_Nocturne}
              alt="Nocture"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Ivern}
              alt="Ivern"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Volibear}
              alt="Volibear"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Dawnbringer}>
            <p className={styles.deck}>빛의 인도자</p>
            <img
              src={CHAMPION_IMAGES.cham_Khazix}
              alt="cham_Khazix"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Gragas}
              alt="cham_Gragas"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Soraka}
              alt="cham_Soraka"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Nidalee}
              alt="cham_Nidalee"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Riven}
              alt="cham_Riven"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Karma}
              alt="cham_Karma"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Garen}
              alt="cham_Garen"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Verdant}>
            <p className={styles.deck}>신록</p>
            <img
              src={CHAMPION_IMAGES.cham_Ashe}
              alt="Ashe"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Taric}
              alt="Taric"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Kayle}
              alt="Kayle"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Hellion}>
            <p className={styles.deck}>악동</p>
            <img
              src={CHAMPION_IMAGES.cham_Poppy}
              alt="cham_Poppy"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Ziggs}
              alt="cham_Ziggs"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Kled}
              alt="cham_Kled"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Kennen}
              alt="cham_Kennen"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Lulu}
              alt="cham_Lulu"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Teemo}
              alt="cham_Teemo"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Coven}>
            <p className={styles.deck}>악의 여단</p>
            <img
              src={CHAMPION_IMAGES.cham_Lissandra}
              alt="cham_Lissandra"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Leblanc}
              alt="cham_Leblanc"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Morgana}
              alt="cham_Morgana"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Nightbringer}>
            <p className={styles.deck}>어둠의 인도자</p>
            <img
              src={CHAMPION_IMAGES.cham_Vladimir}
              alt="cham_Vladimir"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Sejuani}
              alt="cham_Sejuani"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_LeeSin}
              alt="cham_LeeSin"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Morgana}
              alt="cham_Morgana"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Yasuo}
              alt="cham_Yasuo"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Diana}
              alt="cham_Diana"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Aphelios}
              alt="cham_Aphelios"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Darius}
              alt="cham_Darius"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Eternal}>
            <p className={styles.deck}>영겁</p>
            <img
              src={CHAMPION_IMAGES.cham_Kindred}
              alt="Kindred"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Dragonslayer}>
            <p className={styles.deck}>용 사냥꾼</p>
            <img
              src={CHAMPION_IMAGES.cham_Trundle}
              alt="cham_Trundle"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Pantheon}
              alt="cham_Pantheon"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Diana}
              alt="cham_Diana"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Mordekaiser}
              alt="cham_Mordekaiser"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Draconic}>
            <p className={styles.deck}>용족</p>
            <img
              src={CHAMPION_IMAGES.cham_Udyr}
              alt="cham_Udyr"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Sett}
              alt="cham_Sett"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Ashe}
              alt="cham_Ashe"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Zyra}
              alt="cham_Zyra"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Heimerdinger}
              alt="cham_Heimerdinger"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Ironclad}>
            <p className={styles.deck}>철갑</p>
            <img
              src={CHAMPION_IMAGES.cham_Nautilus}
              alt="cham_Nautilus"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Rell}
              alt="cham_Rell"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Jax}
              alt="cham_Jax"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Legionnaire}>
            <p className={styles.deck}>군단</p>
            <img
              src={CHAMPION_IMAGES.cham_Aatrox}
              alt="cham_Aatrox"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Kalista}
              alt="cham_Kalista"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Riven}
              alt="cham_Riven"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Yasuo}
              alt="cham_Yasuo"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Draven}
              alt="cham_Draven"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Mordekaiser}
              alt="cham_Mordekaiser"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Kayle}
              alt="cham_Kayle"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Cruel}>
            <p className={styles.deck}>극악무도</p>
            <img
              src={CHAMPION_IMAGES.cham_Teemo}
              alt="cham_Teemo"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Cavalier}>
            <p className={styles.deck}>기병대</p>
            <img
              src={CHAMPION_IMAGES.cham_Kled}
              alt="cham_Kled"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Sejuani}
              alt="cham_Sejuani"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Hecarim}
              alt="cham_Hecarim"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Rell}
              alt="cham_Rell"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Knight}>
            <p className={styles.deck}>기사</p>
            <img
              src={CHAMPION_IMAGES.cham_Leona}
              alt="cham_Leona"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Poppy}
              alt="cham_Poppy"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Nautilus}
              alt="cham_Nautilus"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Thresh}
              alt="cham_Thresh"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Taric}
              alt="cham_Taric"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Garen}
              alt="cham_Garen"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Darius}
              alt="cham_Darius"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Invoker}>
            <p className={styles.deck}>기원자</p>
            <img
              src={CHAMPION_IMAGES.cham_Syndra}
              alt="cham_Syndra"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Ivern}
              alt="cham_Ivern"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Karma}
              alt="cham_Karma"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Teemo}
              alt="cham_Teemo"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Mystic}>
            <p className={styles.deck}>신비술사</p>
            <img
              src={CHAMPION_IMAGES.cham_Lulu}
              alt="cham_Lulu"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Lux}
              alt="cham_Lux"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Morgana}
              alt="cham_Morgana"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Ryze}
              alt="cham_Ryze"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Kindred}
              alt="cham_Kindred"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.GodKing}>
            <p className={styles.deck}>신왕</p>
            <img
              src={CHAMPION_IMAGES.cham_Garen}
              alt="cham_Garen"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Darius}
              alt="cham_Darius"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Brawler}>
            <p className={styles.deck}>싸움꾼</p>
            <img
              src={CHAMPION_IMAGES.cham_Gragas}
              alt="cham_Gragas"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Warwick}
              alt="cham_Warwick"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Sett}
              alt="cham_Sett"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Nunu}
              alt="cham_Nunu"
              className={styles.cham}
            />{" "}
            <img
              src={CHAMPION_IMAGES.cham_Volibear}
              alt="cham_Volibear"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Assassin}>
            <p className={styles.deck}>암살자</p>
            <img
              src={CHAMPION_IMAGES.cham_Khazix}
              alt="cham_Khazix"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Leblanc}
              alt="cham_Leblanc"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Nocturne}
              alt="cham_Nocturne"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Katarina}
              alt="cham_Katarina"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Diana}
              alt="cham_Diana"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Viego}
              alt="cham_Viego"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Caretaker}>
            <p className={styles.deck}>용 사육사</p>
            <img
              src={CHAMPION_IMAGES.cham_Heimerdinger}
              alt="cham_Heimerdinger"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Renewer}>
            <p className={styles.deck}>재생술사</p>

            <img
              src={CHAMPION_IMAGES.cham_Lissandra}
              alt="cham_Lissandra"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Vladimir}
              alt="cham_Vladimir"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Soraka}
              alt="cham_Soraka"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Ivern}
              alt="cham_Ivern"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Heimerdinger}
              alt="cham_Heimerdinger"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Ranger}>
            <p className={styles.deck}>정찰대</p>
            <img
              src={CHAMPION_IMAGES.cham_Vayne}
              alt="cham_Vayne"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Varus}
              alt="cham_Varus"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Ashe}
              alt="cham_Ashe"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Aphelios}
              alt="cham_Aphelios"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Kindred}
              alt="cham_Kindred"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Spellweaver}>
            <p className={styles.deck}>주문술사</p>
            <img
              src={CHAMPION_IMAGES.cham_Ziggs}
              alt="cham_Ziggs"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Viktor}
              alt="cham_Viktor"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Brand}
              alt="cham_Brand"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Zyra}
              alt="cham_Zyra"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Velkoz}
              alt="cham_Velkoz"
              className={styles.cham}
            />
          </div>
          <div id={styles.chamlist} className={styles.Skirmisher}>
            <p className={styles.deck}>척후병</p>
            <img
              src={CHAMPION_IMAGES.cham_Udyr}
              alt="cham_Udyr"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Kennen}
              alt="cham_Kennen"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Trundle}
              alt="cham_Trundle"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Nidalee}
              alt="cham_Nidalee"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_LeeSin}
              alt="cham_LeeSin"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Pantheon}
              alt="cham_Pantheon"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Jax}
              alt="cham_Jax"
              className={styles.cham}
            />
            <img
              src={CHAMPION_IMAGES.cham_Viego}
              alt="cham_Viego"
              className={styles.cham}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
