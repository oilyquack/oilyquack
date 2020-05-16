import React from "react";

import Navigation from "../../shared/Navigation";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <>
    <Navigation />
    <div className={styles.Layout}>{children}</div>
  </>
);

export default Layout;
