import { useNavigate } from "react-router-dom"; // Use the correct package for navigation
import styles from "../pages/AboutLocale.module.css";

document.documentElement.style.overflow = `hidden`;

export default function AboutLocale() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <div className={styles.instruction}>
          <span>Step 1</span>
          <h2>Tell us about your Locale</h2>
          <p>
            In this step, we'll ask you which type of services you render and if
            guests will book the entire place or just a room. Then let us know
            the location and how many clients can be accommodated at once.
          </p>
        </div>

        <div className={styles.video}>
          <video
            autoplay=""
            crossorigin="anonymous"
            muted=""
            playsinline=""
            preload="auto"
          >
            <source src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"></source>
          </video>
        </div>
      </div>

      <footer className={styles.footer}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          Back
        </button>
        <button className={styles.next}>Next</button>
      </footer>
    </section>
  );
}
