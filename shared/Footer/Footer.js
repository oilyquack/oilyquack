import React from "react";

import { footer } from "./Footer.module.css";

const Footer = () => (
  <footer className={footer}>
    <span>&copy; Ollie Crook {new Date().getFullYear()}</span>
  </footer>
);

export default Footer;
