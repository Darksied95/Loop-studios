import React from "react";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div>
          <img src={logo} alt="loopstudios" className={styles.footer_logo} />
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <div className={styles["icon-container"]}>
            <a href="https://www.facebook.com">
              <img src={facebook} alt="facebook homepage" />
            </a>
            <a href="https://twitter.com/home">
              <img src={twitter} alt="twitter homepage" />
            </a>
            <a href="https://www.pinterest.com/">
              <img src={pinterest} alt="pinterest homepage" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="Instagram homepage" />
            </a>
          </div>
          <p>&copy; 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
