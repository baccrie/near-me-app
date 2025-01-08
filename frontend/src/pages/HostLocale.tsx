import { Outlet } from "react-router-dom";
import styles from "./HostLocale.module.css";
import Logo from "../assets/logo.svg";
import { HostLocaleProvider } from "../context/hostLocaleContext";

export default function HostLocale() {
  return (
    <HostLocaleProvider>
      <main className={styles.hostLocale}>
      <section className={styles.hostLocaleHeader}>
        <img src={Logo} />

        <div className={styles.buttons}>
          <button className={styles.btn}>Questions</button>
          <button className={styles.btn}>Save & exit</button>
        </div>
      </section>
      <Outlet />
    </main>
    </HostLocaleProvider>
    
  );
}