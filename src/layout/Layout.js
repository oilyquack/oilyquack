import React from "react";

import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import { LayoutWrapper } from "./Layout.module.css";

const Layout = ({ children }) => (
  <>
    <Navigation />
    <div className={LayoutWrapper}>{children}</div>
    <Footer />
  </>
);

export default Layout;
