import World from "../assets/world.svg";
import styles from "./MainNav.module.css";
import Next from "../assets/next.svg";
import Prev from "../assets/back.svg";

export default function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <li>
          <img src={World} />
          <span>Beachfront</span>
        </li>
        <button className={styles.nextBtn}>
          <img src={Next} />
        </button>
        <button className={styles.prevBtn}>
          <img src={Prev} alt="prev" />
        </button>
      </ul>

      <div className={styles.filterBox}>
        <div className={styles.filters}>
          <img src={World} />
          <span>Filters</span>
        </div>

        <div className={styles.toggle}>
          <span>Display total before taxes</span>
          <div className={styles.toggleContainer}>
            <div className="circle">&nbsp;</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
