import styles from "./Main.module.css";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.buisness}>
        <div
          className={styles.buisnessCard}
          onClick={() => navigate("/locale/45")}
        >
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/47b633c3-d776-40e6-b284-04d3fb1e3bf2.jpeg?im_w=1200&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="/test.webp" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/b48403df-2c64-40c4-a35f-13a275a0dcf1.jpeg?im_w=1200&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/44392d48-82f3-423c-983b-50111fd8d342.jpeg?im_w=720&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/5ce9960e-f0c6-442f-9cd4-d86192f0350f.jpeg?im_w=720&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/bac1d522-ccb8-4aef-bbc6-d89223305ec4.jpeg?im_w=1200&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/11558b29-3c6d-42cb-9ede-26c3142e0378.jpeg?im_w=1200&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>
        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/67b41d11-8bc9-45dd-b633-5af5e51ab0ce.jpeg?im_w=720&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/0adc077e-73ab-4576-8389-54ccb1bbe8fd.jpeg?im_w=1200&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/9c30f2a0-e953-4550-a1d8-67ad0e9496aa.jpeg?im_w=1200&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/a25b469e-5145-435f-a3c5-9da1fe50cf9d.jpeg?im_w=1200&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/361ed694-e8cb-4a27-804e-31b2537abe15.jpeg?im_w=1200&im_format=avif" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="/test.webp" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>
        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="/test.webp" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="/test.webp" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="/test.webp" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="/test.webp" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="/test.webp" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>

        <div className={styles.buisnessCard}>
          <div className={styles.imgContainer}>
            <img src="/test.webp" />
          </div>
          <div className={styles.buisnessDetails}>
            <div className={styles.buisnessSummary}>
              <h3>Get it right Fitness</h3>
              <span>250km away from you</span>
              <p>Lagos, Nigeria</p>
            </div>

            <div className={styles.buisnessRating}>
              <span>⭐</span>
              <span className={styles.ratingValue}>4.8</span>
            </div>
          </div>
        </div>
      </section>
      <section className="Categories">Categories Link</section>
    </>
  );
}
