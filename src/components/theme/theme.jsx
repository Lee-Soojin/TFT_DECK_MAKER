import React, { useState } from "react";
import styles from "./theme.module.css";

const Theme = (props) => {
  const [theme, setTheme] = useState("White");
  const handleChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className={styles.theme}>
      <p className={styles.title}>테마 선택</p>
      <select
        name="theme"
        value={theme.value}
        onChange={handleChange}
        className={styles.theme_select}
      >
        <option value="dark">Dark</option>
        <option value="White">White</option>
        <option value="Yellow">Yellow</option>
      </select>
    </div>
  );
};
export default Theme;
