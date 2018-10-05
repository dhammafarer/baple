import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import SectionCentered from "../components/sections/SectionCentered";

const NotFound: React.SFC<{}> = (() => {
  return (
    <Layout domain="group">
      <SectionCentered
        heading={"404"}
        subheading={"This page is not available."}
      />
    </Layout>
  );
});

export default NotFound;
