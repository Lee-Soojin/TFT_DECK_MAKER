import React, { useState } from "react";
import styles from "./home.module.css";
import "./home.css";
import headerTitle from "../../image/home_header_title.png";
import slide1Img from "../../image/Garen.png";
import slide2Img from "../../image/slide_img2.png";
import slide3Img from "../../image/slide_img3.png";
import description1_img from "../../image/slide_descript_img1.png";
import description2_img from "../../image/slide_descript_img2.png";
import description3_img1 from "../../image/signup_page_img.png";
import description3_img2 from "../../image/login_page_img.png";
import { useHistory } from "react-router";

const Home = () => {
  const [slide, setSlide] = useState("slide1");
  const [fadein, setFadein] = useState("off");
  const history = useHistory();

  const handleBtnSlide1 = (e) => {
    e.preventDefault();
    setSlide("slide1");
    setFadein("on");
    console.log(fadein);
  };

  const handleBtnSlide2 = (e) => {
    e.preventDefault();
    setSlide("slide2");
    setFadein("on");
  };

  const handleBtnSlide3 = (e) => {
    e.preventDefault();
    setSlide("slide3");
    setFadein("on");
  };

  const handleBtnGotoCard = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/login",
    });
  };

  const AnimationEnd = () => {
    setFadein("off");
  };

  return (
    <div className={styles.Home}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>TFT DECK MAKER</h1>
        <button className={styles.BtnLogin} onClick={handleBtnGotoCard}>
          Login
        </button>
      </header>
      <section
        className={`Home_About ${
          slide === "slide1"
            ? "slide1"
            : slide === "slide2"
            ? "slide2"
            : slide === "slide3"
            ? "slide3"
            : "slide1"
        } `}
      >
        <div className={styles.slides}>
          <div className={styles.Slide1}>
            <img
              src={slide1Img}
              alt="Garen"
              className={`slide1Img${fadein === "on" ? "on" : "off"}`}
              onAnimationEnd={AnimationEnd}
              fadein={fadein}
            />
            <section
              className={`slide1_description${fadein === "on" ? "on" : "off"}`}
            >
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
              <button
                className={styles.BtnGotoCardPage}
                onClick={handleBtnGotoCard}
              >
                지금 바로 덱 카드 만들기!
              </button>
            </section>
          </div>
          <div className={styles.Slide2}>
            <img
              src={slide2Img}
              alt="second_Slide"
              className={`slide2Img${fadein === "on" ? "on" : "off"}`}
              onAnimationEnd={AnimationEnd}
              fadein={fadein}
            />

            <section
              className={`slide2_description${fadein === "on" ? "on" : "off"}`}
            >
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
              <button
                className={styles.BtnGotoCardPage}
                onClick={handleBtnGotoCard}
              >
                지금 바로 덱 카드 만들기!
              </button>
            </section>
          </div>

          <div className={styles.Slide3}>
            <img
              src={slide3Img}
              alt="second_Slide"
              className={`slide3Img${fadein === "on" ? "on" : "off"}`}
              onAnimationEnd={AnimationEnd}
              fadein={fadein}
            />
            <section
              className={`slide3_description${fadein === "on" ? "on" : "off"}`}
            >
              <h1 className={styles.slide3_title}>
                간편한 회원가입과 로그인으로 시작하세요
              </h1>
              <div className={styles.slide3_description1}>
                <img
                  src={description3_img1}
                  alt="description"
                  className={styles.description3_img1}
                />
                <div className={styles.description3_text}>
                  <p className={styles.text_content}>
                    이메일과 비밀번호만으로 간단하게 회원가입을 할 수 있습니다
                  </p>
                </div>
              </div>
              <div className={styles.slide3_description2}>
                <img
                  src={description3_img2}
                  alt="description2"
                  className={styles.description3_img2}
                />
                <div className={styles.description3_text}>
                  <p className={styles.text_content}>
                    Google, Github 계정으로도 간단하게 로그인 가능! 회원은
                    로그인 이후 자동 로그인 됩니다
                  </p>
                </div>
              </div>
              <button
                className={styles.BtnGotoCardPage}
                onClick={handleBtnGotoCard}
              >
                지금 바로 덱 카드 만들기!
              </button>
            </section>
          </div>
        </div>
      </section>
      <div className={styles.BtnSlide_container}>
        <button className={styles.BtnSlide1} onClick={handleBtnSlide1}>
          1
        </button>
        <button className={styles.BtnSlide2} onClick={handleBtnSlide2}>
          2
        </button>
        <button className={styles.BtnSlide3} onClick={handleBtnSlide3}>
          3
        </button>
      </div>
    </div>
  );
};
export default Home;
