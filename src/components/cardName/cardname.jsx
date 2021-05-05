import React, { useState } from "react";
import styles from "./cardname.module.css";

const CardName = (props) => {
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <input type="text" value={name} placeholder="카드 이름을 입력해주세요" />
      <button className={styles.BtnOk} onClick={handleClick}>
        확인
      </button>
    </>
  );
};
export default CardName;
