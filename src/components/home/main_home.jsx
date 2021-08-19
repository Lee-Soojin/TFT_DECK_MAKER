import React from "react";
import styles from "./main_home.module.css";
import mainImg1 from "../../image/Garen.png";
import mainImg2 from "../../image/home_img_2.png";
import mainImg3 from "../../image/home_img_3.png";
import textImg1 from "../../image/home_text_1.png";
import textImg2 from "../../image/home_text_2.png";

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
            fill="#12005e"
            filter="url(#inset-shadow)"
          />
        </svg>
        <div className={styles.home_image_container}>
          <img src={mainImg3} alt="main " className={styles.home_img3} />
          <img src={mainImg2} alt="main " className={styles.home_img2} />
          <img src={mainImg1} alt="main " className={styles.home_img1} />
        </div>

        <svg className={styles.rect} width="1000px" height="1000px">
          <path
            d="M 0 0 H1000 V800 H0Z 
            M 350 350
m -300, 0
a 300,300 0 1,0 600,0
a 300,300 0 1,0 -600,0

            "
            fill="white"
          />
        </svg>
        <img src={textImg1} alt="나만의" className={styles.home_text1} />
        <img src={textImg2} alt="덱을" className={styles.home_text2} />
      </div>
    </div>
  );
};
export default MainHome;
