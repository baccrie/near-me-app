import styles from "./Structure.module.css";
import { button } from "react-router";
import { useEffect, useRef } from "react";

import Kitchen from "../assets/kitchen.svg";
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

document.documentElement.style.overflow = `hidden`;

export default function Structure() {
  return (
    <section className={styles.structure}>
      <ul>
        <h2>Which of these best describes your place</h2>
        <li>
          <button className={styles.btn}>
            <img src={Kitchen} alt="Kitchen" />
            <span>Kitchen</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Star} alt="Beachfront" />
            <span>Beachfront</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Park} alt="Park" />
            <span>Park</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Outdoor} alt="Tourist" />
            <span>Tourist</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Ocean} alt="Club" />
            <span>Club</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Sea} alt="Tech" />
            <span>Tech</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Beach} alt="Electronics" />
            <span>Electronics</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Wifi} alt="Cafe" />
            <span>Cafe</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Tv} alt="Cinema" />
            <span>Cinema</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Ocean} alt="Hotel" />
            <span>Hotel</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Park} alt="Restaurant" />
            <span>Restaurant</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Camera} alt="Spa" />
            <span>Spa</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Alarm} alt="Sport" />
            <span>Sport</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Kitchen} alt="Pet" />
            <span>Pet</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Star} alt="Finances" />
            <span>Finances</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Park} alt="Transport" />
            <span>Transport</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Outdoor} alt="Education" />
            <span>Education</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Ocean} alt="Fitness" />
            <span>Fitness</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Sea} alt="Beachfront" />
            <span>Beachfront</span>
          </button>
        </li>
        <li>
          <button className={styles.btn}>
            <img src={Beach} alt="Beachfront" />
            <span>Beachfront</span>
          </button>
        </li>
      </ul>

      <footer className={styles.footer}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          Back
        </button>
        <button className={styles.next}>Next</button>
      </footer>
    </section>
  );
}
