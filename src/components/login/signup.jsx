import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./signup.module.css";
import SignUpImage from "../../image/signup_img.png";

function SignUp({ authService }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const type = e.target.name;
    if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      authService
        .signUp(email, password) //
        .then(console.log);
    }
    history.push({
      pathname: "/login",
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.sign_container}>
        <div className={styles.sign_up_wrap}>
          <h1 className={styles.title}>Sign Up</h1>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            onKeyPress={handleKeyPress}
          >
            <div className={styles.email}>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                name="email"
                value={email}
                onChange={handleChange}
                className={styles.input_email}
                autocomplete="off"
              />
            </div>
            <div className={styles.password}>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                name="password"
                value={password}
                onChange={handleChange}
                className={styles.input_password}
                autocomplete="off"
              />
            </div>
            <button
              className={styles.BtnSignUp}
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up Right now!
            </button>
          </form>
          <p className={styles.login_link}>
            이미 회원이신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
        <div className={styles.signup_image_container}>
          <img
            src={SignUpImage}
            alt="image_sign_up"
            className={styles.signup_img}
          />
        </div>
      </div>
    </div>
  );
}
export default SignUp;
