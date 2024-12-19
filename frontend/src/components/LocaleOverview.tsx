import styles from "./LocaleOverview.module.css";
import Save from "../assets/save.svg";
import FavouriteLeft from "../assets/favourite-left.svg";
import FavouriteRight from "../assets/favourite-right.svg";
import Star from "../assets/star.svg";
import Park from "../assets/park.svg";
import Outdoor from "../assets/outdoor.svg";
import Ocean from "../assets/ocean.svg";
import Kitchen from "../assets/kitchen.svg";
import Sea from "../assets/sea.svg";
import Beach from "../assets/beach.svg";
import Wifi from "../assets/wifi.svg";
import Tv from "../assets/tv.svg";
import Camera from "../assets/cameras.svg";
import Alarm from "../assets/alarm.svg";

export default function LocaleOverview() {
  return (
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

          <div className={styles.offers}>
            <h2>What this place offers</h2>

            <ul>
              <li>
                <img src={Beach} />
                <span>Beach access - Beachfront</span>
              </li>

              <li>
                <img src={Sea} />
                <span>Sea view</span>
              </li>

              <li>
                <img src={Ocean} />
                <span>Ocean view</span>
              </li>

              <li>
                <img src={Kitchen} />
                <span>Kitchen</span>
              </li>

              <li>
                <img src={Park} />
                <span>Free parking on premises</span>
              </li>

              <li>
                <img src={Wifi} />
                <span>wifi</span>
              </li>

              <li>
                <img src={Tv} />
                <span>TV</span>
              </li>

              <li>
                <img src={Park} />
                <span>Washer</span>
              </li>

              <li>
                <img src={Camera} />
                <span>Exterior security cameras on property</span>
              </li>

              <li>
                <img src={Alarm} />
                <span>Carbon monoxide alarm</span>
              </li>
            </ul>

            <button>Show all 34 amenities</button>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <h3>$650</h3>

          <form className={styles.datePicker}>
            <div className={styles.asideMain}>
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

              {/* <div className={styles.dropDown}>
            <div className={styles.picker}>
              <span>Guests</span>
              <span>3 guests</span>
            </div>

            <img />
          </div> */}
            </div>

            <button className={styles.submitReservation}>Reserve</button>
          </form>

          <p className={styles.warning}>You won't be charged yet</p>

          <ul className={styles.paymentDetails}>
            <li>
              <span>$650 X 5 nights</span>
              <span>$3,250</span>
            </li>

            <li>
              <span>$650 X 5 nights</span>
              <span>$3,250</span>
            </li>

            <li>
              <span>Total before taxes</span>
              <span>$3,079</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
