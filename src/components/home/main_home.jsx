import React from "react";
import styles from "./main_home.module.css";
import mainImg1 from "../../image/Garen.png";
import mainImg2 from "../../image/home_img_2.png";
import mainImg3 from "../../image/home_img_3.png";
import { useHistory } from "react-router";
import { SiRiotgames } from "react-icons/si";

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
          <SiRiotgames />
        </button>
      </header>
      <div className={styles.home_container}>
        <div className={styles.home_image_container}>
          <img src={mainImg3} alt="main " className={styles.home_img3} />
          <img src={mainImg2} alt="main " className={styles.home_img2} />
          <img src={mainImg1} alt="main " className={styles.home_img1} />
        </div>

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
