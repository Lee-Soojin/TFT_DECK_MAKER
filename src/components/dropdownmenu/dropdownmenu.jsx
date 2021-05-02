import React, { useRef, useState } from "react";
import styles from "./dropdownmenu.module.css";
import DefaultChamImg from "../../image/chamImage/Garen.png";
// import Kalista from "../../image/chamImage/Kalista.png";

const DropdownMenu = (props) => {
  const dropdownRef = useRef(null);
  const [active, setActive] = useState(false);
  const onClick = () => setActive(!active);

  return (
    <>
      <div className={styles.dropdown_container}>
        <button className={styles.BtnDropdown} onClick={onClick}>
          <img
            src={DefaultChamImg}
            className={styles.championImage}
            alt="default_champion_image"
          />
        </button>
        <div className={styles.droplist}>
          <div className={styles.abomination}>
            <div className={styles.kalista}>
              <img
                className={styles.champion}
                src={require("../../image/chamImage/Kalista.png")}
                alt="kalista"
              />
            </div>
            <div className={styles}></div>
            <div className={styles}></div>
            <div className={styles}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
