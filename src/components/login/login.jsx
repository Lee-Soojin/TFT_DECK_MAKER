import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signIn } from "../../service/auth_service";
import styles from "./login.module.css";
import LoginImg from "../../image/tft.png";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent) //
      .then(console.log);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      try {
        await signIn(email, password);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const type = e.target.name;
    if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_wrap}>
        <h1 className={styles.title}>로그인</h1>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          onKeyPress={handleKeyPress}
        >
          <div className={styles.input_email}>
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_password}>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button className={styles.BtnSignUp} type="submit">
            로그인
          </button>
        </form>
        <p>
          회원이 아니신가요? <Link to="/signup">회원가입</Link>
        </p>
        <div className={styles.social_login}>
          <button
            type="button"
            className={styles.BtnGoogleLogin}
            onClick={onLogin}
          >
            Google
          </button>
          <button
            type="button"
            className={styles.BtnGithubLogin}
            onClick={onLogin}
          >
            Github
          </button>
        </div>
      </div>
      <div className={styles.LoginImage}>
        <img src={LoginImg} alt="Login_image" />
      </div>
    </div>
  );
};

export default Login;
