import { NavLink } from "react-router";

import Kitchen from "../assets/kitchen.svg";
import styles from "./MainNav.module.css";
import Next from "../assets/next.svg";
import Prev from "../assets/back.svg";
import Star from "../assets/star.svg";
import Park from "../assets/park.svg";
import Outdoor from "../assets/outdoor.svg";
import Ocean from "../assets/ocean.svg";
import Sea from "../assets/sea.svg";
import Beach from "../assets/beach.svg";
import Wifi from "../assets/wifi.svg";
import Tv from "../assets/tv.svg";
import Camera from "../assets/cameras.svg";
import Alarm from "../assets/alarm.svg";

import { useRef } from "react";

export default function MainNav() {
  const navEl = useRef(null);

  const scrollExtent = 200;

  const handleScroll = (direction: string) => {
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
          <NavLink to="#">
            <img src={Kitchen} alt="Kitchen" />
            <span>Kitchen</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Star} alt="Beachfront" />
            <span>Beachfront</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Park} alt="Park" />
            <span>Park</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Outdoor} alt="Tourist" />
            <span>Tourist</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Ocean} alt="Club" />
            <span>Club</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Sea} alt="Tech" />
            <span>Tech</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Beach} alt="Electronics" />
            <span>Electronics</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Wifi} alt="Cafe" />
            <span>Cafe</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Tv} alt="Cinema" />
            <span>Cinema</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Ocean} alt="Hotel" />
            <span>Hotel</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Park} alt="Restaurant" />
            <span>Restaurant</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Camera} alt="Spa" />
            <span>Spa</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Alarm} alt="Sport" />
            <span>Sport</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Kitchen} alt="Pet" />
            <span>Pet</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Star} alt="Finances" />
            <span>Finances</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Park} alt="Transport" />
            <span>Transport</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Outdoor} alt="Education" />
            <span>Education</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Ocean} alt="Fitness" />
            <span>Fitness</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Sea} alt="Beachfront" />
            <span>Beachfront</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={Beach} alt="Beachfront" />
            <span>Beachfront</span>
          </NavLink>
        </li>

        <button
          className={styles.nextBtn}
          onClick={() => handleScroll("right")}
        >
          <img src={Next} alt="next" />
        </button>
        <button className={styles.prevBtn} onClick={() => handleScroll("left")}>
          <img src={Prev} alt="prev" />
        </button>
      </ul>

      <div className={styles.filterBox}>
        <div className={styles.filters}>
          <img src={Kitchen} />
          <span>Filters</span>
        </div>

        <div className={styles.toggle}>
          <span>Display locale with location</span>
          <div className={styles.toggleContainer}>
            <div className="circle">&nbsp;</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
