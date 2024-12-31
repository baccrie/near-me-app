import styles from "./PersonalInfo.module.css";
import Next from "../assets/next.svg";
import Privacy1 from "../assets/Privacy1.svg";
import Privacy2 from "../assets/Privacy2.svg";
import Privacy3 from "../assets/Privacy3.svg";

export default function PersonalInfo() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.navHistory}>
          <h4>Account</h4>
          <img src={Next} />
          <h4>Personal Info</h4>
        </div>
        <h2>Personal Info</h2>
      </header>

      <div className={styles.info}>
        <div className={styles.main}>
          <ul>
            <li>
              <div className={styles.label}>
                <h5>Legal name</h5>
                <button className={styles.action}>Edit</button>
              </div>
              <span>Make sure this matches the name on your government ID</span>

              <form className={styles.form}>
                <div className={styles.input}>
                  <input
                    type="text"
                    placeholder="First name on ID"
                    value="Rilwan"
                  />

                  <input
                    type="text"
                    placeholder="Last name on ID"
                    value="Bakare"
                  />
                </div>

                <button className={styles.submit}>Save</button>
              </form>
            </li>

            <li>
              <div className={styles.details}>
                <h5>Preferred name</h5>
                <span>Not Provided</span>
              </div>

              <button className={styles.action}>Edit</button>
            </li>

            <li>
              <div className={styles.details}>
                <h5>Email address</h5>
                <span>b***@gmail.com</span>
              </div>

              <button className={styles.action}>Edit</button>
            </li>

            <li>
              <div className={styles.details}>
                <h5>Phone numbers</h5>
                <span>
                  Add a number so confirmed guests and Nearme can get in touch.
                  You can add other numbers and choose how they’re used.
                </span>
              </div>

              <button className={styles.action}>Edit</button>
            </li>

            <li>
              <div className={styles.details}>
                <h5>Government ID</h5>
                <span>Not Provided</span>
              </div>

              <button className={styles.action}>Edit</button>
            </li>

            <li>
              <div className={styles.details}>
                <h5>Address</h5>
                <span>Not provided</span>
              </div>

              <button className={styles.action}>Edit</button>
            </li>

            <li>
              <div className={styles.details}>
                <h5>Emergancy contact</h5>
                <span>Not provided</span>
              </div>

              <button className={styles.action}>Edit</button>
            </li>
          </ul>
        </div>

        <div className={styles.aside}>
          <ul className={styles.asideContainer}>
            <li>
              <img src={Privacy1} />
              <h4>Why isnt't my info shown here</h4>

              <p>We’re hiding some account details to protect your identity.</p>
            </li>

            <li>
              <img src={Privacy2} />
              <h4>Which details can be edited?</h4>

              <p>
                Contact info and personal details can be edited. If this info
                was used to verify your identity.
              </p>
            </li>

            <li>
              <img src={Privacy3} />
              <h4>What info is shared with others?</h4>

              <p>
                Nearme only releases contact information for Hosts and guests
                after a reservation is confirmed.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
