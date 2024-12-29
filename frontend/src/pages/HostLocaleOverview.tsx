import styles from "../pages/HostLocaleOverview.module.css";
import HostLocaleFooter from "../components/HostLocaleFooter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const steps = [
  {
    title: "Tell us about your locale",
    description:
      "Share some basic info, like where it is and what services are being rendered.",
    img: "https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg",
  },
  {
    title: "Make it stand out",
    description:
      "Add 5 or more photos plus a title and description—we’ll help you out.",
    img: "https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg",
  },
  {
    title: "Finish up and publish",
    description:
      "Choose a precise location, verify a few details, then publish your locale.",
    img: "https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg",
  },
];

export default function HostLocaleOverview() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    if (isLoading) {
      timeoutId = setTimeout(() => {
        navigate("/host-your-locale/about-your-locale");
      }, 5000);
    }

    // Cleanup function to clear timeout
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isLoading, navigate]);

  return (
    <>
      <section className={styles.overviewContainer}>
        <div className={styles.hostLocaleOverview}>
          <h1>It’s easy to get started on NearMe</h1>
          <div className={styles.overview}>
            <ul>
              {steps.map((step, idx) => (
                <li key={idx}>
                  <span>{idx + 1}</span>
                  <div className={styles.details}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <div className={styles.img}>
                    <img src={step.img} alt={`Step ${idx + 1}`} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <HostLocaleFooter>
        <button
          onClick={() => setIsLoading(true)}
          className={`${styles.btn} ${isLoading ? styles.loading : ""}`}
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Get started"}
        </button>
      </HostLocaleFooter>
    </>
  );
}
