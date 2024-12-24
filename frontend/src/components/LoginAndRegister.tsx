/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./LoginAndRegister.module.css";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import Email from "../assets/email.svg";
import Apple from "../assets/apple.svg";
import Spinner from "./Spinner";
import Valid from "../assets/valid.svg";
import Invalid from "../assets/invalid.svg";

import { useEffect, useState } from "react";

const initialFormData = {
  username: "",
  email: "",
};

export default function LoginAndRegister({ isOpenLogin, setIsOpenLogin }) {
  const [isLoading, setIsLoading] = useState(true);
  // const [username, setUsername] = useState("");
  const [{ username, email }, setFormData] = useState(initialFormData);

  const [{ usernameError, emailError }, setFormError] = useState({
    usernameError: "",
    emailError: "",
  });

  useEffect(
    function () {
      if (
        username.length > 5 &&
        username !== "Fred Swaniker" &&
        username !== ""
      )
        setFormError((curr) => {
          return { ...curr, usernameError: "The username already exists..." };
        });

      if (email.length > 5 && email !== "test@gmail.com" && email !== "")
        setFormError((curr) => {
          return {
            ...curr,
            emailError: "The email already exists please pick another email...",
          };
        });

      return () => {
        setFormError({
          usernameError: "",
          emailError: "",
        });
      };
    },
    [username]
  );

  // Delay timer
  useEffect(function () {
    const delay = setTimeout(() => setIsLoading(false), 5000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  // Hide scroll bar
  useEffect(
    function () {
      document.documentElement.style.overflow = `${
        isOpenLogin ? "hidden" : "scroll"
      }`;
    },
    [isOpenLogin]
  );

  // toggle dropdown
  useEffect(
    function () {
      function toggleLogin(e) {
        if (isOpenLogin && e.key === "Escape") setIsOpenLogin(false);
      }

      if (isOpenLogin) {
        document.documentElement.addEventListener("keydown", toggleLogin);
      }

      return () => {
        document.documentElement.removeEventListener("keydown", toggleLogin);
        setFormData(initialFormData);
      };
    },
    [isOpenLogin, setIsOpenLogin]
  );

  return (
    <div className={`${styles.wrapper} ${isOpenLogin ? "" : styles.visible}`}>
      <div className={styles.container}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <header className={styles.header}>
              <button
                onClick={() => {
                  setIsOpenLogin(false);
                  setFormData(initialFormData);
                }}
              >
                {" "}
                &times;
              </button>
              <h4>Log in or sign up</h4>
            </header>

            <h3>Welcome to Nearme</h3>

            <form className={styles.form}>
              <div className={styles.inputContainer}>
                <input
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setFormData((curr) => {
                      return { ...curr, username: e.target.value };
                    });
                  }}
                />

                {username && <img src={`${usernameError ? Invalid : Valid}`} />}
              </div>

              <div className={styles.inputContainer}>
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setFormData((curr) => {
                      return { ...curr, email: e.target.value };
                    });
                  }}
                />

                {email && <img src={`${emailError ? Invalid : Valid}`} />}
              </div>

              <span>Make sure the email is active for confirmation text</span>
              <span style={{ color: "red", fontWeight: "500" }}>
                {usernameError || emailError}
              </span>

              <button className={styles.submit}>Continue</button>
            </form>

            <ul>
              <li>
                <img src={Google} />
                <span>Continue with Google</span>
              </li>

              <li>
                <img src={Apple} />
                <span>Continue with Apple</span>
              </li>

              <li>
                <img src={Email} />
                <span>Continue with Email</span>
              </li>

              <li>
                <img src={Facebook} />
                <span>Continue with Facebook</span>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
