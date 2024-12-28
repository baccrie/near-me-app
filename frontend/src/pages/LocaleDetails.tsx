/* eslint-disable react-refresh/only-export-components */
import styles from "./LocaleDetails.module.css";
import HostLocaleFooter from "../components/HostLocaleFooter";

export default function () {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h3>Now, let's give your locale a title</h3>
            <span className={styles.titleInfo}>
              Short titles work best. Have fun with it—you can always change it
              later.
            </span>

            <textarea></textarea>
            <span className={styles.limit}>1/30</span>
          </div>

          <div className={styles.description}>
            <h3> Create your description</h3>
            <span className={styles.descInfo}>
              Share what makes your place special.
            </span>

            <textarea placeholder="You'll always remember your time at this unique place to stay."></textarea>
            <span className={styles.limit}>1/30</span>
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
