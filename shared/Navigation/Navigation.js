import React from "react";

import NameTag from "./components/NameTag";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <header className={styles.navigation}>
    <NameTag />
    <div className={styles.navItems}>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
    </div>
  </header>
);

export default Navigation;
