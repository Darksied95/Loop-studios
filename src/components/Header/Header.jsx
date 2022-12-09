import React from "react";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="loopstudios" />
        <img src={hamburger} alt="hamburger menu" className="mobile" />
        <ul className={`${styles.list_container} desktop alata`}>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>

      <p className={`${styles.mainText} josefin`}>
        immersive experiences that deliver
      </p>
    </header>
  );
};

export default Header;
