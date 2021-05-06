import React, { useRef, useState } from "react";
import styles from "./cardname.module.css";

const CardName = (props) => {
  const NameRef = useRef(null);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = NameRef.value;
    if (name) {
      setName(name);
      console.log(name);
    }
    name = "";
  };

  return (
    <>
      <form
        className={styles.cardname_form}
        ref={NameRef}
        onChange={handleSubmit}
      >
        <input
          className={styles.cardname_input}
          type="text"
          ref={NameRef}
          placeholder="카드 이름을 입력해주세요"
        />
        <button className={styles.BtnInsert} type="submit">
          확인
        </button>
      </form>
    </>
  );
};
export default CardName;
