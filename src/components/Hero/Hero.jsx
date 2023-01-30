import React from "react";
import image from "../../assets/mobile/image-interactive.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <img src={image} alt="man with VR" className={styles.image} />

      <div className={styles.article}>
        <h1 className={`${styles.heading} josefin`}>
          The leader in interactive VR
        </h1>
        <p className={`${styles.mainText} alata`}>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default Hero;
