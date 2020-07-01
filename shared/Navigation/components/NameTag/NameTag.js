import React from "react";

import styles from "./NameTag.module.css";

const NameTag = () => (
  <div className={styles.NameTag} unselectable="on">
    <span className={styles.firstName}>
      <span>Ollie</span>
      <span>@Oily</span>
    </span>
    <span> </span>
    <span className={styles.lastName}>
      <span>Crook</span>
      <span>Quack</span>
    </span>
  </div>
);
export default NameTag;
