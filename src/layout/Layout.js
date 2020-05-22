import React from "react";

import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <>
    <Navigation />
    <div className={styles.Layout}>{children}</div>
    <Footer />
  </>
);

export default Layout;
