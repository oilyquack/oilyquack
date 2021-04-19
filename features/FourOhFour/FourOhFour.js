import { Link } from "gatsby";
import React from "react";

import david from "./assets/davidbyrne.gif";
import { author, content, image, quote } from "./FourOhFour.module.css";

const FourOhFour = () => (
  <>
    <h1>FOUR, OH FOUR!</h1>
    <p>
      <Link to="/">Home</Link> is where you want to be.
    </p>
    <div className={content}>
      <img alt="David Byrne" className={image} src={david} />

      <span className={quote}>
        <p>And you may ask yourself</p>
        <p>How do I work this?</p>
        <p>And you may ask yourself</p>
        <p>Where is that large automobile?</p>
        <p>And you may tell yourself</p>
        <p>This is not my beautiful house!</p>
        <p>And you may tell yourself</p>
        <p>This is not my beautiful wife!</p>

        <p className={author}>— David Byrne, 1980</p>
      </span>
    </div>
  </>
);

export default FourOhFour;
