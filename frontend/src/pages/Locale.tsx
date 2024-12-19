import HeaderNav from "../components/HeaderNav";
import styles from "./Locale.module.css";
import LocaleHeader from "../components/LocaleHeader";
import LocaleGallery from "../components/LocaleGallery";
import LocaleOverview from "../components/LocaleOverview";
import LocaleReview from "../components/LocaleReview";
import LocaleMap from "../components/LocaleMap";
import LocaleLeaderSpotlight from "../components/LocaleLeaderSpotlight";

export default function Locale() {
  return (
    <>
      <HeaderNav type="smaller" />
      <main className={styles.main}>
        <LocaleHeader />
        <LocaleGallery />
        <LocaleOverview />
        <LocaleReview />
        <LocaleMap />
        <LocaleLeaderSpotlight />
      </main>
    </>
  );
}
