import React from "react";

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <span>&copy; Ollie Crook {new Date().getFullYear()}</span>
  </footer>
);

export default Footer;
