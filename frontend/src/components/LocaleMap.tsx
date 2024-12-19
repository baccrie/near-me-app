import styles from "./LocaleMap.module.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function LocaleMap() {
  return (
    <section className={styles.mapContainer}>
      <h3>Where you will be</h3>
      <span>Lekki , EPE ExpressWay , Lagos Nigeria</span>

      <div className={styles.map}>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            center={{
              lat: 40.7128, // Latitude (e.g., New York City)
              lng: -74.006, // Longitude
            }}
            zoom={10}
          >
            {/* Add other components like markers here */}
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
}
