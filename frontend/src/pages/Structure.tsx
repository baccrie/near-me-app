/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./Structure.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Amusement from "../assets/amusement.svg";
import Arcade from "../assets/arcade.svg";
import Bar from "../assets/bar.svg";
import Beach from "../assets/beach.svg";
import Boutique from "../assets/boutique.svg";
import Cafe from "../assets/cafe.svg";
import Cinema from "../assets/cinema.svg";
import Clinic from "../assets/clinic.svg";
import Club from "../assets/club.svg";
import Concert from "../assets/concert.svg";
import College from "../assets/college.svg";
import Dental from "../assets/dental.svg";
import Electronics from "../assets/electronics.svg";
import Fastfood from "../assets/fastfood.svg";
import Fitness from "../assets/fitness.svg";
import Hospital from "../assets/hospital.svg";
import Library from "../assets/library.svg";
import Mall from "../assets/malls.svg";
import Medical from "../assets/medical.svg";
import Mental from "../assets/mental.svg";
import Museum from "../assets/museum.svg";
import Optician from "../assets/optician.svg";
import Park from "../assets/park.svg";
import Pharmacy from "../assets/pharmacy.svg";
import Restaurant from "../assets/restaurant.svg";
import School from "../assets/school.svg";
import Supermarket from "../assets/supermarket.svg";
import Travel from "../assets/travel.svg";
import Tour from "../assets/tutor.svg";
import University from "../assets/university.svg";
import Wellness from "../assets/wellness.svg";
import Yoga from "../assets/yoga.svg";
import Tutor from "../assets/tutor.svg";

// import Kitchen from "../assets/kitchen.svg";
// import Next from "../assets/next.svg";
// import Prev from "../assets/back.svg";
// import Star from "../assets/star.svg";
// import Park from "../assets/park.svg";
// import Outdoor from "../assets/outdoor.svg";
// import Ocean from "../assets/ocean.svg";
// import Sea from "../assets/sea.svg";
// import Beach from "../assets/beach.svg";
// import Wifi from "../assets/wifi.svg";
// import Tv from "../assets/tv.svg";
// import Camera from "../assets/cameras.svg";
// import Alarm from "../assets/alarm.svg";
import HostLocaleFooter from "../components/HostLocaleFooter";
import Spinner from "../components/Spinner";
import useFooterNav from "../hooks/hostLocaleFooterNav";
import { useHostLocale } from "../context/hostLocaleContext";

const categories = {
  Amusement: Amusement,
  Arcade: Arcade,
  Bar: Bar,
  Beach: Beach,
  Boutique: Boutique,
  Cafe: Cafe,
  Cinema: Cinema,
  Clinic: Clinic,
  Club: Club,
  College: College,
  Concert: Concert,
  Dental: Dental,
  Electronics: Electronics,
  Fastfood: Fastfood,
  Fitness: Fitness,
  Hospital: Hospital,
  Library: Library,
  Mall: Mall,
  Medical: Medical,
  Mental: Mental,
  Museum: Museum,
  Optician: Optician,
  Park: Park,
  Pharmacy: Pharmacy,
  Restaurant: Restaurant,
  School: School,
  Supermarket,
  Travel: Travel,
  Tutor: Tutor,
  University: University,
  Wellness: Wellness,
  Yoga: Yoga,
};

export default function Structure() {
  const [isLoading, setIsLoading, navigate] = useFooterNav("location");
  const { cat, description, updateState, name } = useHostLocale();

  // console.log(category);

  useEffect(function () {});

  return (
    <>
      <section className={styles.structure}>
        <h2>Which of these best describes your locale?</h2>
        <ul>
          {Object.entries(categories).map(([key, value]) => (
            <li onClick={() => updateState({ category: key })} key={key}>
              <button
                className={`${styles.btn} ${key === cat ? styles.current : ""}`}
              >
                <img src={value} alt="key" />
                <span>{key}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <HostLocaleFooter>
        <div className={styles.btnContainer}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            Back
          </button>
          <button
            className={`${styles.next} ${isLoading ? styles.isLoading : ""}`}
            disabled={isLoading}
            onClick={() => setIsLoading(true)}
          >
            {isLoading ? <Spinner /> : "Next"}
          </button>
        </div>
      </HostLocaleFooter>
    </>
  );
}

{
  /* <ul>
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
</ul> */
}
