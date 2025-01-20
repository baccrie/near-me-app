import Personal from "../assets/personal.svg";
import Login from "./../assets/login.svg";
import Payment from "../assets/payment.svg";
import Taxes from "../assets/taxes.svg";
import Notification from "../assets/notification.svg";
import Privacy from "../assets/privacy.svg";
import Preference from "../assets/global.svg";
import Travel from "../assets/travel.svg";
import Referral from "../assets/referral.svg";
import styles from "./AccountSettingsIndex.module.css";
import { useAuth } from "../context/authContext";

export default function AccountSettingsIndex() {
  const { user } = useAuth();
  return (
    <>
      <div className={styles.container}>
        <header>
          <h1>Account</h1>
          <h3>R{`${user.username || ""}, ${user.email}`}</h3>
        </header>

        <div className={styles.accSetting}>
          <ul>
            <li>
              <img src={Personal} />
              <h4>Personal Info</h4>
              <p>Provide personal details and how we can reach you</p>
            </li>

            <li>
              <img src={Login} />
              <h4>Login & security</h4>
              <p>Update your password and secure your account</p>
            </li>

            <li>
              <img src={Payment} />
              <h4>Payments & payouts</h4>
              <p>Review payments, payouts , coupons and gift cards</p>
            </li>

            <li>
              <img src={Taxes} />
              <h4>Taxes</h4>
              <p>Manage taxpayer information and tax documents</p>
            </li>

            <li>
              <img src={Notification} />
              <h4>Notifications</h4>
              <p>
                choose notifications preference and how you want to be contacted
              </p>
            </li>

            <li>
              <img src={Privacy} />
              <h4>Privacy and sharing</h4>
              <p>
                Manage your personal data, connected services and data sharing
                settings
              </p>
            </li>

            <li>
              <img src={Preference} />
              <h4>Global prefernces</h4>
              <p>Set your default language , currency and timezone</p>
            </li>

            <li>
              <img src={Travel} />
              <h4>Travel for work</h4>
              <p>Add a work email for buisness benefit trips</p>
            </li>

            <li>
              <img src={Referral} />
              <h4>Referral credits and coupons</h4>
              <p>You have $0 referral credits and coupons. Learn more</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
