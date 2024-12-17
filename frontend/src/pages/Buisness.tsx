/* eslint-disable react-refresh/only-export-components */
import HeaderNav from "../components/HeaderNav";
import styles from "./Buisness.module.css";
import Share from "../assets/share.svg";
import Save from "../assets/save.svg";
import FavouriteLeft from "../assets/favourite-left.svg";
import FavouriteRight from "../assets/favourite-right.svg";
import Star from "../assets/star.svg";
import Park from "../assets/park.svg";
import Outdoor from "../assets/outdoor.svg";
import Ocean from "../assets/ocean.svg";

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
            <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1115281353322610945/original/c6a8f01a-c033-40aa-9b04-4d1118b9d65e.jpeg?im_w=1200&im_format=avif" />
          </div>

          <div className={styles.otherImages}>
            <div className={styles.photo}>
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1115281353322610945/original/cb1e38e3-f594-466d-8e26-62d81e38f631.jpeg?im_w=720&im_format=avif" />
            </div>
            <div className={styles.photo}>
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1115281353322610945/original/ff63749c-aecd-4bf2-9fdb-03ba5003d90d.jpeg?im_w=720&im_format=avif" />
            </div>
            <div className={styles.photo}>
              <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1115281353322610945/original/c01d8041-f1d4-4e11-81dd-9f8d2dffcadb.jpeg?im_w=720&im_format=avif" />
            </div>
            <div className={styles.photo}>
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-977994569481876996/original/67b41d11-8bc9-45dd-b633-5af5e51ab0ce.jpeg?im_w=720&im_format=avif" />
            </div>
          </div>
        </section>

        <section className={styles.org}>
          <div className={styles.orgDetails}>
            <div className={styles.mainContent}>
              <header className={styles.contentHeader}>
                <h2 className={styles.mainContentHeader}>
                  Entire Villa in Ponta Do Sol, Portugal
                </h2>
                <span>8 guests .4 bedrooms .7 beds .4 bath</span>
              </header>

              <div className={styles.reviewSummary}>
                <div className={styles.title}>
                  <img src={FavouriteLeft} />
                  <div className={styles.favourite}>
                    <span>Guest</span>
                    <span>Favourite</span>
                  </div>
                  <img src={FavouriteRight} />
                </div>
                <div className={styles.summary}>
                  One of the most love places on near according to guest
                </div>
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

              <div className={styles.host}>
                <div className={styles.hostImg}>
                  <img src="/test.webp" />
                </div>

                <div className={styles.hostDetails}>
                  <span>Hosted by Bakare</span>
                  <span>SuperHost 1 year hosting</span>
                </div>
              </div>

              <div className={styles.amenities}>
                <ul>
                  <li>
                    <img src={Save} />
                    <div className={styles.amenitiesName}>
                      <span>Room in a home</span>
                      <span>
                        Your own room in a home plus access to shared spaces
                      </span>
                    </div>
                  </li>

                  <li>
                    <img src={Ocean} />
                    <div className={styles.amenitiesName}>
                      <span>Shared common spaces</span>
                      <span>You will share part of the home</span>
                    </div>
                  </li>

                  <li>
                    <img src={Park} />
                    <div className={styles.amenitiesName}>
                      <span>Private attached bathroom</span>
                      <span>
                        This place has a bathroom thats connected to your room
                      </span>
                    </div>
                  </li>

                  <li>
                    <img src={Outdoor} />
                    <div className={styles.amenitiesName}>
                      <span>Fast wifi</span>
                      <span>
                        At 95mbps you can take video calls and stream videos
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <h3>$650</h3>

              <form className={styles.datePicker}>
                <div className={styles.check}>
                  <button className={styles.checkIn}>
                    <span>check-in</span>
                    <span>12/18/2024</span>
                  </button>
                  <button className={styles.checkOut}>
                    <span>check-out</span>
                    <span>12/18/2024</span>
                  </button>
                </div>

                <div className={styles.dropDown}>
                  <div className={styles.picker}>
                    <span>Guests</span>
                    <span>3 guests</span>
                  </div>

                  <img />
                </div>

                <button className={styles.submitReservation}>Reserve</button>
              </form>
            </aside>
          </div>
        </section>

        <section className={styles.ratings}></section>
        <section className={styles.map}></section>
        <section className={styles.customerSupport}></section>
      </main>
    </>
  );
}
