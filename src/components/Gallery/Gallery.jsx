// import React from "react";
// import deepEarth from "../../assets/mobile/image-deep-earth.jpg";
// import nightArcade from "../../assets/mobile/image-night-arcade.jpg";
// import soccerTeam from "../../assets/mobile/image-soccer-team.jpg";
// import grid from "../../assets/mobile/image-grid.jpg";
// import fromAbove from "../../assets/mobile/image-from-above.jpg";
// import borealis from "../../assets/mobile/image-pocket-borealis.jpg";
// import curiosity from "../../assets/mobile/image-curiosity.jpg";
// import fisheye from "../../assets/mobile/image-fisheye.jpg";
import styles from "./Gallery.module.css";
const Gallery = () => {
  return (
    <div className={styles.gallery_container}>
      <h1 className={styles.gallery_heading}>Our creations</h1>

      <div className={styles.gallery_image_container}>
        <p className={styles.gallery_text}>
          Deep
          <br /> Earth
        </p>
        <img
          src={require("../../assets/mobile/image-deep-earth.jpg")}
          alt=""
          className={styles.gallery_image}
        />
      </div>

      <div className={styles.gallery_image_container}>
        <p className={styles.gallery_text}>
          Night <br /> Arcade
        </p>
        <img
          src={require("../../assets/mobile/image-night-arcade.jpg")}
          alt=""
          className={styles.gallery_image}
        />
      </div>

      <div className={styles.gallery_image_container}>
        <p className={styles.gallery_text}>
          Soccer <br /> Team Vr
        </p>
        <img
          src={require("../../assets/mobile/image-soccer-team.jpg")}
          alt=""
          className={styles.gallery_image}
        />
      </div>

      <div className={styles.gallery_image_container}>
        <p className={styles.gallery_text}>
          The <br /> grid
        </p>
        <img
          src={require("../../assets/mobile/image-grid.jpg")}
          alt=""
          className={styles.gallery_image}
        />
      </div>
      <div className={styles.gallery_image_container}>
        <p className={styles.gallery_text}>
          From up <br /> Above Vr
        </p>
        <img
          src={require("../../assets/mobile/image-from-above.jpg")}
          alt=""
          className={styles.gallery_image}
        />
      </div>
      <div className={styles.gallery_image_container}>
        <p className={styles.gallery_text}>
          Pocket <br /> Borealis
        </p>
        <img
          src={require("../../assets/mobile/image-pocket-borealis.jpg")}
          alt=""
          className={styles.gallery_image}
        />
      </div>
      <div className={styles.gallery_image_container}>
        <p className={styles.gallery_text}>
          The <br /> Curiosity
        </p>
        <img
          src={require("../../assets/mobile/image-curiosity.jpg")}
          alt=""
          className={styles.gallery_image}
        />
      </div>
      <div className={styles.gallery_image_container}>
        <p className={styles.gallery_text}>
          Make It <br /> Fisheye
        </p>
        <img
          src={require("../../assets/mobile/image-fisheye.jpg")}
          alt=""
          className={styles.gallery_image}
        />
      </div>
      <button className={styles["gallery-button"]}>See all</button>
    </div>
  );
};

export default Gallery;
