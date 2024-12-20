import styles from "./LocaleLeaderSpotlight.module.css";
import Star from "../assets/star.svg";
import Button from "./Button";

export default function LocaleLeaderSpotlight() {
  return (
    <section className={styles.aboutCeo}>
      <h3>Meet the Ceo</h3>

      <div className={styles.ceoDetails}>
        <div className={styles.photoCarousel}>
          <div className={styles.carouselCaontainer}>
            <div className={styles.imgContainer}>
              <img src="https://a0.muscache.com/im/pictures/user/User-380751849/original/d3ee3aa4-713b-45d6-b4b8-1b2134cee36e.jpeg?im_w=240&im_format=avif" />
            </div>
            <h3>Bakare</h3>
            <h5>CEO</h5>
          </div>

          <div className={styles.ceoReview}>
            <ul>
              <li>
                <span>209</span>
                <span>Reviews</span>
              </li>

              <li>
                <span>
                  4.8 <img src={Star} />
                </span>
                <span>Rating</span>
              </li>

              <li>
                <span>1</span>
                <span>Year hosting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.otherDetails}>
          <h4>Karan is a Nice CEO</h4>
          <span className={styles.about}>
            CEOs are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </span>

          <h4>Ceo DEtails</h4>

          <span className={styles.response}>Response rates 100%</span>
          <span className={styles.response}>Responds within an hour</span>

          <Button>Message Host</Button>
        </div>
      </div>
    </section>
  );
}
