import { Outlet } from "react-router-dom";
import styles from "./HostLocale.module.css";
import Logo from "../assets/logo.svg";

export default function HostLocale() {
  return (
    <>
      <section className={styles.hostLocaleHeader}>
        <img src={Logo} />
        <button className={styles.btn}>Save & exit</button>
      </section>
      <Outlet />
    </>
  );
}
