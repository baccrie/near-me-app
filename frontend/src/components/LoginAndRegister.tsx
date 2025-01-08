/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./LoginAndRegister.module.css";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import Email from "../assets/email.svg";
import Apple from "../assets/apple.svg";
import Spinner from "./Spinner";
import Valid from "../assets/valid.svg";
import Invalid from "../assets/invalid.svg";
import { useAuth } from "../context/authContext";
import { GoogleLogin } from "@react-oauth/google";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  username: "",
  email: "",
};

const baseUrl = "http://localhost:3000/api/v1/auth";
const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginAndRegister({ isOpenLogin, setIsOpenLogin }) {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  const [{ username, email }, setFormData] = useState(initialFormData);

  const [{ usernameError, emailError }, setFormError] = useState({
    usernameError: "",
    emailError: "",
  });

  // check username existence and validate
  useEffect(
    function () {
      async function checkExistence() {
        // validate input
        if (username.length < 5 && username)
          setFormError((curr) => {
            return {
              ...curr,
              usernameError: "username too short",
            };
          });

        // fetch with username
        const res = await fetch(
          `${baseUrl}/check-username-existence?username=${username}`
        );
        const data = await res.json();

        if (data.exists === true) {
          setFormError((curr) => {
            return { ...curr, usernameError: "username already exist" };
          });
        }
      }

      if (isOpenLogin) checkExistence();

      return () => {
        setFormError((curr) => {
          return {
            ...curr,
            usernameError: "",
          };
        });
      };
    },
    [username]
  );

  // check email existence and validate
  useEffect(
    function () {
      async function checkExistence() {
        // validate input
        if (email.length < 5 && email)
          setFormError((curr) => {
            return {
              ...curr,
              emailError: "email too short",
            };
          });

        // vallidate email
        if (!regEx.test(email) && email)
          setFormError((curr) => {
            return { ...curr, emailError: "Please enter a valid email" };
          });

        // fetch with email
        const res = await fetch(
          `${baseUrl}/check-email-existence?email=${email}`
        );
        const data = await res.json();

        if (data.exists === true) {
          setFormError((curr) => {
            return { ...curr, emailError: "email already exist" };
          });
        }
      }

      if (isOpenLogin) checkExistence();

      return () => {
        setFormError((curr) => {
          return {
            ...curr,
            emailError: "",
          };
        });
      };
    },
    [email]
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
    setIsLoadingAuth(true);

    e.preventDefault();

    if (usernameError || emailError) return;

    const res = await fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
      }),
    });

    const data = await res.json();

    if (data.status === "successful") {
      login(data.user);
      setIsOpenLogin(false);
      navigate("/");
    }

    if (data.status === "fail") {
      console.log(data.status);
      setFormError((curr) => {
        return {
          ...curr,
          usernameError: data.msg,
        };
      });
    }

    if (data.status === "error") {
      console.log(data.status);
      setFormError((curr) => {
        return {
          ...curr,
          usernameError: data.msg,
        };
      });
    }

    setIsLoadingAuth(false);
  }

  // handle google oauth login
  async function sendCredentials(token) {
    const res = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    });

    const data = await res.json();
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
                {usernameError || emailError || "\u00A0"}
              </span>

              <button className={`${styles.disable}`}>
                {isLoading ? <Spinner /> : "continue"}
              </button>
            </form>

            <ul>
              <li>
                <img src={Google} />
                <span>Continue with Google</span>
                <GoogleLogin
                  onSuccess={sendCredentials}
                  onError={(error) =>
                    setFormError((curr) => {
                      return { ...curr, usernameError: error };
                    })
                  }
                />
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
