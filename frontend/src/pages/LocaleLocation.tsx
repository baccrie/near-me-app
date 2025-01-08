import styles from "./LocaleLocation.module.css";
import HostLocaleFooter from "../components/HostLocaleFooter";
import useFooterNav from "../hooks/hostLocaleFooterNav";
import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
  MapConsumer,
} from "react-leaflet";
import { useAuth } from "../context/authContext";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useHostLocale } from "../context/hostLocaleContext";

export default function LocaleLocation() {
  const [isLoading, setIsLoading, navigate] = useFooterNav("amenities");
  const { updateState } = useHostLocale();
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState("");
  const [coordinates, setCoordinates] = useState([51.505, -0.09]);
  const [addressDetails, setAddressDetails] = useState({
    state: "",
    country: "",
    region: "",
    fullAddress: "",
    lat: null,
    lng: null,
  });
  const [selectedAddress, setSelectedAddress] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Extract lat and lng from query params when the URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lat = params.get("lat");
    const lng = params.get("lng");

    if (lat && lng) {
      setCoordinates([parseFloat(lat), parseFloat(lng)]);
      fetchLocationDetails(parseFloat(lat), parseFloat(lng));
      setIsFormVisible(true);
    }
  }, [location]);

  // Function to fetch location details from LocationIQ
  const fetchLocationDetails = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.d995e38f980b750df8e0bbf6835bc47f&lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
      if (data && data.address) {
        const { state, country, region, road, city } = data.address;
        setAddressDetails((curr) => {
          return { ...curr, state, country, region, lat, lng: lon };
        });
        console.log("Location Details:", {
          state,
          country,
          region,
          road,
          city,
        });
      } else {
        console.error("No location details found.");
      }
    } catch (error) {
      console.error("Error fetching location details:", error);
    }
  };

  // Function to get the user's geolocation
  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates([latitude, longitude]);
          fetchLocationDetails(latitude, longitude); // Fetch location details once coordinates are set
        },
        (error) => {
          console.error("Error getting geolocation", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Function to handle map click and show address/landmark form
  // const handleMapClick = (e) => {
  //   setCoordinates([lat, lng]);
  //   fetchLocationDetails(lat, lng); // Fetch the details when the map is clicked
  //   setIsFormVisible(true); // Show the form when the map is clicked
  // };

  // Handle form submission
  const handleSubmit = () => {
    if (selectedAddress && landmark) {
      const newDetails = {
        address: selectedAddress,
        landmark: landmark,
        lat: addressDetails.lat,
        lng: addressDetails.lng,
      };
      // Handle the form submission logic here, for example:
      updateState(newDetails);
      setIsLoading(true);
    } else {
      alert("Please fill in both the address and landmark.");
    }
  };

  // Fetch the user's geolocation when the component mounts
  useEffect(() => {
    getGeolocation();
  }, []);

  // updates the global hostLocale state when address changes
  useEffect(
    function () {
      updateState({ location: addressDetails });
    },
    [addressDetails]
  );

  return (
    <>
      <section className={styles.location}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Where's your place located?</h1>
            <span>
              Your address is only shared with guests after they’ve opened a
              ticket
            </span>
            <span>
              current address is
              {` ${addressDetails.state}`}, {addressDetails.country},{" "}
              {addressDetails.region}
            </span>
          </header>

          <div className={styles.map}>
            <MapContainer
              center={coordinates || [51.505, -0.09]} // Default position, fallback
              zoom={20}
              style={{
                height: "100%",
                width: "100%",
                border: "none",
              }}
              scrollWheelZoom={true} // Make map interactive
              whenCreated={(map) => map.on("click", handleMapClick)} // Listen for map clicks
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {coordinates && (
                <Marker position={coordinates}>
                  <Popup>
                    Your location: {addressDetails.state},{" "}
                    {addressDetails.country}
                  </Popup>
                </Marker>
              )}

              <ChangeCenter position={coordinates} />
              <DetectClick />
            </MapContainer>

            {
              <div className={styles.formContainer}>
                <select
                  value={selectedAddress}
                  onChange={(e) => setSelectedAddress(e.target.value)}
                  className={styles.addressDropdown}
                >
                  <option value="">Select an address</option>
                  <option value="Address 1">Address 1</option>
                  <option value="Address 2">Address 2</option>
                  {/* Add more addresses here */}
                </select>

                <input
                  className={styles.input}
                  type="text"
                  placeholder="Enter FullAdress"
                  value={addressDetails.fullAddress}
                  onChange={(e) =>
                    setAddressDetails((curr) => {
                      return { ...curr, fullAddress: e.target.value };
                    })
                  }
                />

                <button
                  className={styles.submitButton}
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner /> : "Submit"}
                </button>
              </div>
            }
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
            onClick={() => {
              setIsLoading(true);
              updateState(addressDetails);
            }}
          >
            {isLoading ? <Spinner /> : "Next"}
          </button>
        </div>
      </HostLocaleFooter>
    </>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);

  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      console.log("yoo");
      navigate(`?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
