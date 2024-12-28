import { useNavigate } from "react-router-dom"; // Use the correct package for navigation
import styles from "../pages/AboutLocale.module.css";
import HostLocaleFooter from "../components/HostLocaleFooter";

document.documentElement.style.overflow = `hidden`;

export default function AboutLocale() {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.container}>
        <div className={styles.about}>
          <div className={styles.instruction}>
            <span>Step 1</span>
            <h2>Tell us about your Locale</h2>
            <p>
              In this step, we'll ask you which type of services you render and
              if guests will book the entire place or just a room. Then let us
              know the location and how many clients can be accommodated at
              once.
            </p>
          </div>

          <div className={styles.img}>
            <img src="https://pilbox.themuse.com/image.png?filter=antialias&h=350&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2Fhow-to-answer-tell-me-about-yourself-job-interview.png&w=700" />
          </div>
        </div>
      </section>

      <HostLocaleFooter>
        <div className={styles.btnContainer}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            Back
          </button>
          <button className={styles.next}>Next</button>
        </div>
      </HostLocaleFooter>
    </>
  );
}