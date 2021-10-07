import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PlanetFacts from "../components/planetFacts"

const Planet = ({data: {mdx: { frontmatter: {name,orbit,img,maxTemp}}}}) => {
  return (
    <Layout>
      <PlanetFacts
        name={name}
        orbit={orbit}
        image={img}
        maxTemp={maxTemp} />
    </Layout>
  )
}

export const query = graphql`
query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
     frontmatter {
         name,
         orbit,
         img,
         maxTemp
     }
    }
  }
`

export default Planet