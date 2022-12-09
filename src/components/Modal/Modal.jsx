import React from "react";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/icon-close.svg";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="loopstudios" />
        <img src={closeIcon} alt="close modal" />
      </header>

      <main>
        <ul className={`${styles.list_container} josefin`}>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </main>
    </div>
  );
};

export default Modal;
