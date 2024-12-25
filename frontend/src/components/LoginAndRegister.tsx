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
const baseUrl = "http://localhost:3000/api/v1/auth";

export default function LoginAndRegister({ isOpenLogin, setIsOpenLogin }) {
  const [isLoading, setIsLoading] = useState(true);
  // const [username, setUsername] = useState("");
  const [{ username, email }, setFormData] = useState(initialFormData);

  const [{ usernameError, emailError }, setFormError] = useState({
    usernameError: "",
    emailError: "",
  });

  // check details existence and validate
  useEffect(
    function () {
      async function checkExistence({ username, email }) {
        const res = await fetch(
          `${baseUrl}/check-existence?username=${username}&email=${email}`
        );

        const data = await res.json();
        console.log(data);

        if (data.exists === true) {
          if (data.exists.field === "username") {
            setFormError((curr) => {
              return {
                ...curr,
                usernameError: "username already exist, try a different one",
              };
            });
          } else {
            setFormError((curr) => {
              return {
                ...curr,
                emailError: "email already exist , pick a different one",
              };
            });
          }
        }
      }

      if (username.length < 5)
        setFormError((curr) => {
          return {
            ...curr,
            usernameError: "username too short",
          };
        });

      checkExistence({ username, email });
      return () => {
        setFormError({
          usernameError: "",
          emailError: "",
        });
      };
    },
    [username, email]
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

  // handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    if (usernameError || emailError) return;

    const res = await fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "test",
        email: "test",
      }),
    });

    const data = await res.json();
    console.log(data);
  }

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

            <form className={styles.form} onSubmit={handleSubmit}>
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
                {usernameError || emailError || "."}
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
