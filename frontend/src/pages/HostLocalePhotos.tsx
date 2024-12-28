import HostLocaleFooter from "../components/HostLocaleFooter";
import styles from "./HostLocalePhotos.module.css";
import Photo from "../assets/photo.svg";

export default function hostLocalePhotos() {
  return (
    <>
      <section className={styles.uploadPhotos}>
        <div className={styles.photos}>
          <h3>Choose at least 5 photos</h3>
          <div className={styles.photosDrag}>
            <span>Drag to reorder</span>
            <span className={styles.drag}>+</span>
          </div>

          <div className={styles.photoContainer}>
            <div className={styles.photoMain}>
              <img src={Photo} />
            </div>

            <div className={styles.otherPhotos}>
              <div className={styles.photo1}>
                <img src={Photo} />
              </div>

              <div className={styles.photo2}>
                <img src={Photo} />
              </div>

              <div className={styles.photo3}>
                <img src={Photo} />
              </div>

              <div className={styles.photo4}>
                <img src={Photo} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HostLocaleFooter>
        <div className={styles.btnContainer}>
          <button onClick={() => navigate(-1)} className={styles.back}>
            Back
          </button>
          <button className={styles.next}>Next</button>
        </div>
      </HostLocaleFooter>
    </>
  );
}
