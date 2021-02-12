import React from "react";

import ollie from "./assets/ollie.jpg";
import styles from "./Home.module.css";

const Home = () => (
  <>
    <div className={styles.content}>
      <h1>Hi. My name is Ollie.</h1>
      <h2>I’m a software developer, noisy musician and cat enthusiast.</h2>
      <p>
        As a developer, I’m passionate about building accessible and performant
        applications.
      </p>
      <p>
        <strong>oilyquack</strong> is a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Malapropism"
          target="_blank"
          rel="noopener noreferrer"
        >
          malapropism
        </a>{" "}
        of my real name. I started using it when I was a teacher to stop
        students from finding me online. Now I’m too fond of how silly it sounds
        to change it back. It’s also too much fun hearing people say it out loud
        in important meetings.
      </p>
      <p>
        You can see some of my work on{" "}
        <a
          href="https://github.com/oilyquack"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        or read my ramblings on{" "}
        <a
          href="https://twitter.com/oilyquack"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        .
      </p>
    </div>
    <img alt="Ollie Crook" className={styles.image} src={ollie} />
  </>
);

export default Home;
