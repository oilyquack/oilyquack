import React from "react";

import NameTag from "./components/NameTag";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <header className={styles.Navigation}>
    <NameTag />
    <div>
      <a href="#">Blog</a>
    </div>
  </header>
);

export default Navigation;
