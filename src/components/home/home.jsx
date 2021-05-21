import React from "react";
import styles from "./home.module.css";
import slide1Img from "../../image/Garen.png";
import slide2Img from "../../image/slide_img2.png";
import description1_img from "../../image/slide_descript_img1.png";
import description2_img from "../../image/slide_descript_img2.png";

const Home = () => {
  return (
    <div className={styles.Home}>
      <header className={styles.header}>
        <h1 className={styles.Logo}>My Deck Card</h1>
        <button className={styles.BtnLogout}>Logout</button>
      </header>
      <section className={styles.Home_About}>
        <div className={styles.slides}>
          <div className={styles.Slide1}>
            <img src={slide1Img} alt="Garen" className={styles.slide1Img} />
            <section className={styles.slide1_description}>
              <h1 className={styles.slide1_title}>나만의 덱을 저장하세요</h1>
              <img
                src={description1_img}
                alt="description"
                className={styles.description1_img}
              />
              <div className={styles.description1_text}>
                <p className={styles.text_content}>
                  전략적 팀 전투를 즐기기 위한 덱 카드를 만들어보세요
                </p>
                <p className={styles.text_content}>
                  이제 TFT CARD MAKER에서 나만 아는 새로운 덱을 만들고 저장할 수
                  있습니다
                </p>
              </div>
            </section>
            <button className={styles.BtnNext}>Next ▶</button>
          </div>
          <div className={styles.Slide2}>
            <button className={styles.BtnPrevious}>◀ Prev</button>
            <div className={styles.slide2_Img_container}>
              <img
                src={slide2Img}
                alt="second_Slide"
                className={styles.slide2Img}
              />
            </div>

            <section className={styles.slide2_description}>
              <h1 className={styles.slide2_title}>
                완전한 덱 카드를 생성해보세요
              </h1>
              <img
                src={description2_img}
                alt="description"
                className={styles.description2_img}
              />
              <div className={styles.description2_text}>
                <p className={styles.text_content}>
                  덱 카드로 간편하게 저장하고 싶은 덱을 만들어보세요
                </p>
                <p className={styles.text_content}>
                  아이템, 챔피언, 주요 덱, 덱 이름 등을 결정하고 카드를
                  추가하세요 카드의 테마도 변경할 수 있어요
                </p>
              </div>
            </section>
            <button className={styles.BtnNext}>Next ▶</button>
          </div>
          <div className={styles.Slide3}>
            <button className={styles.BtnPrevious}>◀ Prev</button>
            <img src={slide1Img} alt="Garen" className={styles.slide1Img} />
            <section className={styles.slide1_description}>
              <h1 className={styles.slide1_title}>나만의 덱을 저장하세요</h1>
              <img
                src={description1_img}
                alt="description"
                className={styles.description1_img}
              />
              <div className={styles.description1_text}>
                <p className={styles.text_content}>
                  전략적 팀 전투를 즐기기 위한 덱 카드를 만들어보세요
                </p>
                <p className={styles.text_content}>
                  이제 TFT CARD MAKER에서 나만 아는 새로운 덱을 만들고 저장할 수
                  있습니다
                </p>
              </div>
            </section>
          </div>
          <div></div>
          <div></div>
        </div>
      </section>
      <footer className={styles.footer}>My deck card Maker</footer>
    </div>
  );
};
export default Home;
