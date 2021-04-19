import { Link } from "gatsby";
import React from "react";

import NameTag from "./components/NameTag";
import { navigation } from "./Navigation.module.css";

const Navigation = () => (
  <header className={navigation}>
    <NameTag />
    {/* <div className={styles.navItems}>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div> */}
  </header>
);

export default Navigation;
