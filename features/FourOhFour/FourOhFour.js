import { Link } from "gatsby";
import React from "react";

import david from "./assets/davidbyrne.gif";
import styles from "./FourOhFour.module.css";

const FourOhFour = () => (
  <>
    <h1>FOUR, OH FOUR!</h1>
    <p>
      <Link to="/">Home</Link> is where you want to be.
    </p>
    <div className={styles.content}>
      <img alt="David Byrne" className={styles.image} src={david} />

      <span className={styles.quote}>
        <p>And you may ask yourself</p>
        <p>How do I work this?</p>
        <p>And you may ask yourself</p>
        <p>Where is that large automobile?</p>
        <p>And you may tell yourself</p>
        <p>This is not my beautiful house!</p>
        <p>And you may tell yourself</p>
        <p>This is not my beautiful wife!</p>

        <p className={styles.author}>— David Byrne, 1980</p>
      </span>
    </div>
  </>
);

export default FourOhFour;
