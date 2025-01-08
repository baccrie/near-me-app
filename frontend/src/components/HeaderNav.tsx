import styles from "./HeaderNav.module.css";
import World from "../assets/world.svg";
import { Link, useNavigate } from "react-router-dom";
import User from "../assets/user.svg";
import Logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

export default function HeaderNav({ isOpenLogin, setIsOpenLogin, type }) {
  const [isOpenCta, setIsOpenCta] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(
    function () {
      function toggleCta(e) {
        if (isOpenCta && e.key === "Escape") setIsOpenCta(false);
      }

      if (isOpenCta) {
        document.documentElement.addEventListener("keydown", toggleCta);
      }

      return () => {
        document.documentElement.removeEventListener("keydown", toggleCta);
      };
    },
    [isOpenCta]
  );

  return (
    <div
      className={`${styles.headerNav} ${
        type === "smaller" ? styles.smallerHeader : ""
      }`}
    >
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Website Logo" />
        <h1>near ME</h1>
      </Link>

      <nav className={styles.options}>
        <button aria-label="Find stays">
          <span>Discover</span>
        </button>

        <button aria-label="Explore experiences">
          <span>Saved Places</span>
        </button>
      </nav>

      <div className={styles.cta}>
        <Link
          to="/host-your-locale/overview"
          aria-label="Find locations near your home"
        >
          Near me your org
        </Link>
        <button aria-label="Select language">
          <img
            src={World}
            alt="Language selection"
            onClick={() => navigate("/locale/78")}
          />
        </button>

        <button
          aria-label="User menu"
          onClick={() => setIsOpenCta((value) => !value)}
        >
          <p className={styles.userName}></p>
          <img src={User} alt="User profile" />
        </button>
      </div>

      {isOpenCta && (
        <div
          className={`${styles.ctaMenu} ${
            type === "smaller" ? styles.smallerHeaderDropdown : ""
          }`}
        >
          <ul>
            {isAuthenticated ? (
              <>
                <li onClick={() => navigate("/account-settings/personal-info")}>
                  Profile
                </li>
                <li onClick={() => navigate("/account-settings")}>
                  Account Settings
                </li>
              </>
            ) : (
              <>
                <li
                  onClick={() => {
                    setIsOpenLogin(true);
                    setIsOpenCta(false);
                  }}
                >
                  Sign up
                </li>
                <li
                  onClick={() => {
                    setIsOpenLogin(true);
                    setIsOpenCta(false);
                  }}
                >
                  Login
                </li>
                <li>Forgot password</li>
              </>
            )}
            <li>Near me ur org</li>
            <li>Help center</li>
            <li>lock acc</li>
          </ul>
        </div>
      )}
    </div>
  );
}
