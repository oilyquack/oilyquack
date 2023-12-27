import { Component } from "solid-js";

import styles from "./NotFound.module.css";
import david from "./assets/davidbyrne.gif";

const NotFound: Component = () => {
  return (
    <>
      <h1>FOUR, OH FOUR!</h1>
      <p>
        <a href="/">Home</a> is where you want to be.
      </p>
      <div class={styles.content}>
        <img alt="David Byrne" class={styles.image} src={david} />

        <span class={styles.quote}>
          <p>And you may ask yourself</p>
          <p>How do I work this?</p>
          <p>And you may ask yourself</p>
          <p>Where is that large automobile?</p>
          <p>And you may tell yourself</p>
          <p>This is not my beautiful house!</p>
          <p>And you may tell yourself</p>
          <p>This is not my beautiful wife!</p>

          <p class={styles.author}>— David Byrne, 1980</p>
        </span>
      </div>
    </>
  );
};

export default NotFound;
