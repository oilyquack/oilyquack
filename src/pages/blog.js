import React from "react";

import Layout from "../layout/Layout";
import Blog from "../../features/Blog";
import SEO from "../components/SEO";

const BlogPage = () => (
  <Layout>
    <SEO />
    <Blog />
  </Layout>
);

export default BlogPage;