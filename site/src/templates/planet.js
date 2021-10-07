import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/layout"
import PlanetFacts from "../components/planetFacts"
import Callout from '../components/callout'

const components = {
  Callout
};

const Planet = ({
  data: {
    mdx: {
      frontmatter: { name, orbit, img, maxTemp },
      body
    },
  },
}) => {
  return (
    <MDXProvider components={components}>
      <Layout>

        <PlanetFacts name={name} orbit={orbit} img={img} maxTemp={maxTemp}  />
        <MDXRenderer title={`${name} information`}>{body}</MDXRenderer>
      </Layout>
    </MDXProvider>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        name
        orbit
        img
        maxTemp
      },
      body
    }
  }
`

export default Planet
