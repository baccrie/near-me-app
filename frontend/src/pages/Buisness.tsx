/* eslint-disable react-refresh/only-export-components */
import HeaderNav from "../components/HeaderNav";
import styles from "./Buisness.module.css";
import Share from "../assets/share.svg";
import Save from "../assets/save.svg";
import FavouriteLeft from "../assets/favourite-left.svg";
import FavouriteRight from "../assets/favourite-right.svg";
import Star from "../assets/star.svg";

export default function () {
  return (
    <>
      <HeaderNav type="smaller" />
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Anjos Paradise Eden</h1>
          <div className={styles.shareAndSave}>
            <div className={styles.share}>
              <img src={Share} />
              <span>Share</span>
            </div>

            <div className={styles.save}>
              <img src={Save} />
              <span>Save</span>
            </div>
          </div>
        </header>

        <section className={styles.gallery}>
          <div className={styles.mainImage}>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/361ed694-e8cb-4a27-804e-31b2537abe15.jpeg?im_w=1200&im_format=avif" />
          </div>

          <div className={styles.otherImages}>
            <div className={styles.photo}>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/a25b469e-5145-435f-a3c5-9da1fe50cf9d.jpeg?im_w=1200&im_format=avif" />
            </div>
            <div className={styles.photo}>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/9c30f2a0-e953-4550-a1d8-67ad0e9496aa.jpeg?im_w=1200&im_format=avif" />
            </div>
            <div className={styles.photo}>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/0adc077e-73ab-4576-8389-54ccb1bbe8fd.jpeg?im_w=1200&im_format=avif" />
            </div>
            <div className={styles.photo}>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/67b41d11-8bc9-45dd-b633-5af5e51ab0ce.jpeg?im_w=720&im_format=avif" />
            </div>
          </div>
        </section>

        <section className={styles.org}>
          <div className={styles.details}>
            <div className={styles.mainContent}>
              <header className={styles.contentHeader}>
                <h2 className={styles.mainContentHeader}>
                  Entire Villa in Ponta Do Sol, Portugal
                </h2>
                <span>8 guests .4 bedrooms .7 beds .4 bath</span>
              </header>

              <div className={styles.reviewSummary}>
                <span className={styles.title}>
                  <img src={FavouriteLeft} />
                  Guest
                  <img src={FavouriteRight} />
                </span>
                <span className={styles.summary}>
                  One of the most love places on near according to guest
                </span>
                <div className={styles.ratings}>
                  <span>4.96</span>
                  <div className={styles.stars}>
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                  </div>
                </div>
                <div className={styles.reviews}>
                  <span>109</span>
                  <span>Reviews</span>
                </div>
              </div>
            </div>
            <aside className={styles.sidebar}></aside>
          </div>
        </section>

        <section className={styles.ratings}></section>
        <section className={styles.map}></section>
        <section className={styles.customerSupport}></section>
      </main>
    </>
  );
}
