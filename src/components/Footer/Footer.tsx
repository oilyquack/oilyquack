import type { Component } from "solid-js";

import styles from "./Footer.module.css";

const Footer: Component = () => (
  <footer class={styles.footer}>
    <span>&copy; Ollie Crook {new Date().getFullYear()}</span>
  </footer>
);

export default Footer;
