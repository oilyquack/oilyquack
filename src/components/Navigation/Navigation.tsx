import type { Component } from "solid-js";

import styles from "./Navigation.module.css";
import NameTag from "./components/NameTag";

const Navigation: Component = () => {
  return (
    <header class={styles.navigation}>
      <NameTag />
    </header>
  );
};

export default Navigation;
