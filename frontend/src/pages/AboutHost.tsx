import { useState } from "react";
import styles from "./AboutHost.module.css";
import HostLocaleFooter from "../components/HostLocaleFooter";
import Spinner from "../components/Spinner";
import useFooterNav from "../hooks/hostLocaleFooterNav";

export default function AboutHost() {
  const [isLoading, setIsLoading, navigate] = useFooterNav("");

  return (
    <>
      <section className={styles.section}>
        <div className={styles.formContainer}>
          <h3>About Host</h3>
          <form className={styles.form}>
            <input
              type="text"
              className={styles.hostName}
              placeholder="host name"
            />
            <textarea className={styles.aboutHost}></textarea>
            <input type="file" />
          </form>
        </div>
      </section>
      <HostLocaleFooter>
        <div className={styles.btnContainer}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            Back
          </button>
          <button
            className={`${styles.next} ${isLoading ? styles.loading : ""}`}
            disabled={isLoading}
            onClick={() => setIsLoading(true)}
          >
            {isLoading ? <Spinner /> : "Next"}
          </button>{" "}
        </div>
      </HostLocaleFooter>
    </>
  );
}
