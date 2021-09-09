import React from "react";
import styles from "./main_home.module.css";
import mainImg1 from "../../image/Garen.png";
import mainImg2 from "../../image/home_img_2.png";
import mainImg3 from "../../image/home_img_3.png";
import textImg1 from "../../image/home_text_1.png";
import textImg2 from "../../image/home_text_2.png";
import textImg3 from "../../image/home_text_3.png";
import textImg4 from "../../image/home_text_4.png";
import { useHistory } from "react-router";

const MainHome = (props) => {
  const history = useHistory();

  const handleGotoLogin = (event) => {
    event.preventDefault();
    history.push({
      pathname: "/login",
    });
  };

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>TFT DECK MAKER</h1>
        <button className={styles.login_button} onClick={handleGotoLogin}>
          LOGIN
        </button>
      </header>
      <div className={styles.home_container}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="700px"
          height="700px"
          className={styles.home_circle_container}
        >
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
        </svg> */}
        <div className={styles.home_image_container}>
          <img src={mainImg3} alt="main " className={styles.home_img3} />
          <img src={mainImg2} alt="main " className={styles.home_img2} />
          <img src={mainImg1} alt="main " className={styles.home_img1} />
        </div>

        {/* <svg className={styles.rect} width="1700px" height="800px">
          <path
            d="M 0 0 H1700 V800 H0Z 
            M 862 419
m -300, 0
a 300,300 0 1,0 600,0
a 300,300 0 1,0 -600,0

            "
            fill="black"
          />
        </svg> */}
        <div className={styles.home_text_container}>
          <p className={styles.home_text1}>
            나만의 <br />
            덱을 만들고 <br />
            나만의 공간에
            <br />
            저장해보세요
          </p>
          <p className={styles.home_text2}>
            나만의 <br />
            덱 메이커로 <br />
            게임에서 <br />
            승리하세요 !
          </p>
        </div>
        <button className={styles.home_button_login} onClick={handleGotoLogin}>
          시작하기
        </button>
      </div>
    </div>
  );
};
export default MainHome;
