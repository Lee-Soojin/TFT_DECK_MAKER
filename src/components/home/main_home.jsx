import React from "react";
import styles from "./main_home.module.css";
import mainImg from "../../image/Garen.png";

const MainHome = (props) => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>TFT DECK MAKER</h1>
        <button className={styles.login_button}>LOGIN</button>
      </header>
      <div className={styles.home_container}>
        <svg xmlns="http://www.w3.org/2000/svg" width="700px" height="700px">
          <defs>
            <filter id="inset-shadow">
              <feOffset dx="10" dy="10" />
              <feGaussianBlur stdDeviation="10" result="offset-blur" />
              <feComposite
                operator="out"
                in="SourceGraphic"
                in2="offset-blur"
                result="inverse"
              />
              <feFlood flood-color="black" flood-opacity="1" result="color" />
              <feComposite
                operator="in"
                in="color"
                in2="inverse"
                result="shadow"
              />
              <feComponentTransfer in="shadow" result="shadow">
                <feFuncA type="linear" slope=".75" />
              </feComponentTransfer>
              <feComposite operator="over" in="shadow" in2="SourceGraphic" />
            </filter>
          </defs>
          <circle
            cx="350"
            cy="350"
            r="300"
            fill="#fff"
            filter="url(#inset-shadow)"
          />
        </svg>
        <img src={mainImg} alt="main " className={styles.home_img1} />

        <svg className={styles.rect} width="800px" height="1000px">
          <path
            d="M0,0 H1000 V800 H0Z 
            M 350 350
m -300, 0
a 300,300 0 1,0 600,0
a 300,300 0 1,0 -600,0

            "
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
export default MainHome;
