import styles from "./item.module.css";
import "./item.css";
import React, { useState } from "react";

const Item = ({ items, onChange }) => {
  const [visibility, setVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
    console.log(visibility);
  };

  const handleItemClick = (e) => {
    e.preventDefault();
    console.log(e.target.src);
    let clickedItem = selectedItem.concat(...selectedItem, e.target.src);
    const Items = clickedItem.filter(
      (item, pos) => clickedItem.indexOf(item) === pos
    );
    setSelectedItem(Items);
    console.log(`Items:`, Items);
    console.log(selectedItem);
    onChange(e.target.src);
  };

  return (
    <div className={styles.Itemlist}>
      <p className={styles.item_title}>아이템 선택</p>
      <button className={styles.BtnShow_item_list} onClick={handleClick}>
        🔽
      </button>
      <div className={`Item_Container ${visibility ? "visible" : "invisible"}`}>
        {items &&
          items.map((item) => (
            <div className={styles.Item}>
              <p className={styles.item_name}>{item.name}</p>
              <img
                src={item.url}
                alt={items.name}
                className={styles.item_img}
                onClick={handleItemClick}
              />
            </div>
          ))}
      </div>
      <div className={styles.selected_item_container}>
        <p className={styles.item_select_title}>선택된 아이템</p>
        <div className={styles.selected_item_list}>
          {selectedItem &&
            selectedItem.map((Item) => (
              <img
                src={Item}
                alt="items"
                className={styles.selected_item_img}
              ></img>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
