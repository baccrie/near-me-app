import styles from "./LocaleLocation.module.css";
import HostLocaleFooter from "../components/HostLocaleFooter";
import { useNavigate } from "react-router-dom";

export default function LocaleLocation() {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.location}>
        <header className={styles.header}>
          <h1>Where's your place located</h1>
          <span>
            Your address is only shared with guest after they ve open a ticket
          </span>
        </header>

        <div className={styles.map}>
          <img src="https://www.androidauthority.com/wp-content/uploads/2022/02/rotate-google-maps-with-finger-placement-demonstration-screenshot-1000w-823h.jpg.webp" />

          <input
            className={styles.input}
            type="text"
            placeholder="Enter your address"
          />
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
