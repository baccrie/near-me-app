import World from "../assets/world.svg";
import styles from "./MainNav.module.css";
import Next from "../assets/next.svg";
import Prev from "../assets/back.svg";

import { useRef } from "react";

export default function MainNav() {
  const navEl = useRef(null);

  const scrollExtent = 200;

  const handleScroll = (direction) => {
    console.log("works");
    if (navEl.current) {
      const scrollValue = direction === "left" ? -scrollExtent : scrollExtent;
      navEl.current.scrollBy({ left: scrollValue, behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.mainNav}>
      <ul ref={navEl}>
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
        <button
          className={styles.nextBtn}
          onClick={() => handleScroll("right")}
        >
          <img src={Next} />
        </button>
        <button className={styles.prevBtn} onClick={() => handleScroll("left")}>
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
