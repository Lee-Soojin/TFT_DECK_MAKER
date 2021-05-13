import React from "react";
import Select from "react-select";
import styles from "./select_champion.module.css";

const SelectChampion = ({ options, onChange, defaultValue, isMulti }) => {
  return (
    <>
      <Select
        isMulti={isMulti}
        options={options}
        className={styles.select}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default SelectChampion;
