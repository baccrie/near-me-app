import styles from "./HostLocaleAmenity.module.css";
import HostLocaleFooter from "../components/HostLocaleFooter";
import Spinner from "../components/Spinner";
import useFooterNav from "../hooks/hostLocaleFooterNav";
import { useHostLocale } from "../context/hostLocaleContext";

// Amenity icons
import Kitchen from "../assets/kitchen.svg";
import Star from "../assets/star.svg";
import Park from "../assets/park.svg";
import Outdoor from "../assets/outdoor.svg";
import Ocean from "../assets/ocean.svg";
import Sea from "../assets/sea.svg";
import Beach from "../assets/beach.svg";
import Wifi from "../assets/wifi.svg";
import Tv from "../assets/tv.svg";
import Camera from "../assets/cameras.svg";
import Alarm from "../assets/alarm.svg";

export default function HostLocaleAmenity() {
  const [isLoading, setIsLoading, navigate] = useFooterNav("about-host");
  const { amenities: allAmenity, toggleAmenity } = useHostLocale(); // Access state and toggle function from context

  // List of amenities
  const amenities = [
    { icon: Ocean, label: "Club" },
    { icon: Sea, label: "Tech" },
    { icon: Beach, label: "Electronics" },
    { icon: Wifi, label: "Cafe" },
    { icon: Tv, label: "Cinema" },
    { icon: Ocean, label: "Hotel" },
    { icon: Park, label: "Restaurant" },
    { icon: Camera, label: "Spa" },
    { icon: Alarm, label: "Sport" },
    { icon: Kitchen, label: "Pet" },
    { icon: Star, label: "Finances" },
    { icon: Park, label: "Transport" },
    { icon: Outdoor, label: "Education" },
    { icon: Ocean, label: "Fitness" },
    { icon: Sea, label: "Beachfront" },
    { icon: Beach, label: "Beachfront" },
  ];

  // Get currently selected amenities
  const selectedAmenities = allAmenity.split(",").filter(Boolean);

  return (
    <>
      <section className={styles.amenity}>
        <div className={styles.hostLocaleAmenity}>
          <h2>Tell guests what your locale has to offer</h2>
          <span className={styles.info}>
            More amenities can be added after publishing your locale
          </span>

          <div className={styles.favourite}>
            <h3>Check out these favourite amenities</h3>
            <ul>
              {amenities.map((amenity, index) => (
                <li key={index}>
                  <button
                    className={`${styles.btn} ${
                      selectedAmenities.includes(amenity.label) ? styles.selected : ""
                    }`}
                    onClick={() => toggleAmenity(amenity.label)} // Toggle amenity on click
                  >
                    <img src={amenity.icon} alt={amenity.label} />
                    <span>{amenity.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <HostLocaleFooter>
        <div className={styles.btnContainer}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            Back
          </button>
          <button
            className={`${styles.next} ${isLoading ? styles.loading : ""}`}
            disabled={isLoading}
            onClick={() => setIsLoading(true)}
          >
            {isLoading ? <Spinner /> : "Next"}
          </button>
        </div>
      </HostLocaleFooter>
    </>
  );
}
