import React, { useRef, useState } from "react";
import styles from "./cardname.module.css";

const CardName = (props) => {
  const NameRef = useRef("");
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {
    console.log("changed");
  };

  return (
    <>
      <form
        className={styles.cardname_form}
        ref={NameRef}
        onChange={handleChange}
      >
        <input
          className={styles.cardname_input}
          type="text"
          value={name}
          placeholder="카드 이름을 입력해주세요"
        />
        <button className={styles.BtnInsert} onClick={handleClick}>
          확인
        </button>
      </form>
    </>
  );
};
export default CardName;
