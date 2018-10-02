import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import SectionCentered from "../components/sections/SectionCentered";

const NotFound: React.SFC<{}> = (() => {
  return (
    <Layout domain="group">
      <SectionCentered
        heading={"Under Construction"}
        subheading={"This page will be available soon."}
      />
    </Layout>
  );
});

export default NotFound;
