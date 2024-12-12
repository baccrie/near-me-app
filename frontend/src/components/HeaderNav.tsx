import styles from "./HeaderNav.module.css";
import World from "../assets/world.svg";
import { Link } from "react-router";
import User from "../assets/user.svg";
import Logo from "../assets/logo.svg";

export default function HeaderNav() {
  return (
    <div className={styles.headerNav}>
      <div className={styles.logo}>
        <img src={Logo} alt="Website Logo" />
        <span>near ME</span>
      </div>

      <nav className={styles.options}>
        <button aria-label="Find stays">
          <span>Stays</span>
        </button>
        <button aria-label="Explore experiences">
          <span>Experiences</span>
        </button>
      </nav>

      <div className={styles.cta}>
        <Link to="#" aria-label="Find locations near your home">
          Near me your home
        </Link>
        <button aria-label="Select language">
          <img src={World} alt="Language selection" />
        </button>
        <button aria-label="User menu">
          <p className={styles.userName}></p>
          <img src={User} alt="User profile" />
        </button>
      </div>
    </div>
  );
}
