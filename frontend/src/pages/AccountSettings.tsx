import styles from "./AccountSettings.module.css";
import HeaderNav from "../components/HeaderNav";

import { Outlet } from "react-router-dom";

export default function AccountSettings() {
  return (
    <>
      <HeaderNav />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
