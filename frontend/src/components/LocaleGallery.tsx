import styles from "./LocaleGallery.module.css";

export default function LocaleGallery() {
  return (
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
  );
}
