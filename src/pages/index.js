import React from "react";

import Layout from "../layout/Layout";
import Home from "../../features/Home";
import SEO from "../components/SEO";

const HomePage = () => (
  <Layout>
    <SEO />
    <Home />
  </Layout>
);

export default HomePage;