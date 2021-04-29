import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../service/auth_service";
import styles from "./signup.module.css";

function SignUp({ authService }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      try {
        await signUp(email, password);
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
    <div className={styles.sign_container}>
      <div className={styles.sign_up_wrap}>
        <h1 className={styles.title}>회원가입</h1>
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
            회원가입
          </button>
        </form>
        <p>
          이미 회원이신가요? <Link to="/login">로그인</Link>
        </p>
      </div>
    </div>
  );
}
export default SignUp;
