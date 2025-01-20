import styles from "./SpinnerRed.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
