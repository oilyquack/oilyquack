import React from "react";

import ollie from "./assets/ollie.png";
import styles from "./Home.module.css";

const Home = () => (
  <>
    <div className={styles.content}>
      <h1>Hi. My name is Ollie.</h1>
      <h2>I’m a software developer, noisy musician and cat enthusiast.</h2>
      <p>
        I like building great front end applications with a passion for making
        accessible web experiences.
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
        students finding me online. I’m too fond of how silly it sounds to
        change it back. I also get a kick out of people saying it out loud in
        job interviews.
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
