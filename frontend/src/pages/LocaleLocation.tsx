import styles from "./LocaleLocation.module.css";
import HostLocaleFooter from "../components/HostLocaleFooter";
import useFooterNav from "../hooks/hostLocaleFooterNav";
import Spinner from "../components/Spinner";

export default function LocaleLocation() {
  const [isLoading, setIsLoading, navigate] = useFooterNav("amenities");

  return (
    <>
      <section className={styles.location}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Where's your place located?</h1>
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
        </div>
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
          </button>{" "}
        </div>
      </HostLocaleFooter>
    </>
  );
}
