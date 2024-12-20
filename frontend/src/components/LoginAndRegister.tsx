import styles from "./LoginAndRegister.module.css";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import Email from "../assets/email.svg";
import Apple from "../assets/apple.svg";

export default function LoginAndRegister() {
  return (
    <div className={`${styles.wrapper} ${styles.visible}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <button> &times;</button>
          <h4>Log in or sign up</h4>
        </header>

        <h3>Welcome to Nearme</h3>

        <form className={styles.form}>
          <input />
          <input placeholder="Phone number" />
          <span>Make sure the number is active for confirmation text</span>

          <button className={styles.submit}>Continue</button>
        </form>

        <ul>
          <li>
            <img src={Google} />
            <span>Continue with Google</span>
          </li>

          <li>
            <img src={Apple} />
            <span>Continue with Apple</span>
          </li>

          <li>
            <img src={Email} />
            <span>Continue with Email</span>
          </li>

          <li>
            <img src={Facebook} />
            <span>Continue with Facebook</span>
          </li>
        </ul>
      </div>
      ;
    </div>
  );
}
