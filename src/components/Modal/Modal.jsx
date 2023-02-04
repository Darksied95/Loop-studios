import React from "react";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/icon-close.svg";
import styles from "./Modal.module.css";

const Modal = ({ modalState, setModalState }) => {
  return (
    <div
      className={`${styles.container} 
      ${modalState ? styles.show : styles.hide}`}
    >
      <header className={styles.header}>
        <img src={logo} alt="loopstudios" />
        {modalState && (
          <img src={closeIcon} alt="close modal" onClick={handleModal} />
        )}
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
  function handleModal() {
    setModalState(() => false);
  }
};

export default Modal;
