import styles from "./Main.module.css";

export default function Main() {
  return (
    <>
      <section className={styles.org}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-47026348/original/a30e0edb-e10b-4aaa-86e1-319de8cd8988.jpeg" />
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.orgDetails}>
              <h2>Bingin BEach</h2>
              <span>Viewd 789 times last week</span>
              <p>$363 night</p>
            </div>

            <span className={styles.orgRating}>4.8</span>
          </div>
        </div>
      </section>
      <section className="Categories">Categories Link</section>
    </>
  );
}
