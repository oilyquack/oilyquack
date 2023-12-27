import type { Component } from "solid-js";

import ollie from "./assets/ollie.jpg";
import styles from "./Home.module.css";

const Home: Component = () => {
  return (
    <>
      <div class={styles.content}>
        <h1>Hey there, I’m Ollie.</h1>
        <h2>
          I’m a software developer who loves creating apps that are both
          high-performing and easy to use.
        </h2>
        <p>Besides coding, I’m into making music and hanging out with cats.</p>
        <p>
          My online name, <strong>oilyquack</strong>, is a
          <a
            href="https://en.wikipedia.org/wiki/Malapropism"
            target="_blank"
            rel="noopener noreferrer"
          >
            malapropism
          </a>{" "}
          I started using as a way to stay incognito as a teacher, but now I
          just love how goofy it sounds.
        </p>
        <p>
          I work on all parts of a project, making sure things run smoothly and
          helping teams grow. Check out my code on{" "}
          <a
            href="https://github.com/oilyquack"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . I'm passionate about what I do, and I'm excited to bring that
          enthusiasm to your next project.
        </p>
      </div>
      <img alt="Ollie Crook" class={styles.image} src={ollie} />
    </>
  );
};

export default Home;
