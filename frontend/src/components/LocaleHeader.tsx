import styles from "./LocaleHeader.module.css";

import Share from "../assets/share.svg";
import Save from "../assets/save.svg";

export default function LocaleHeader() {
  return (
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
  );
}
