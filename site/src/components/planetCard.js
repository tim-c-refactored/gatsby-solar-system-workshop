import * as React from "react"
import * as cardStyles from "./planetCard.module.css"
import Button from "./button"
import { graphql, useStaticQuery } from "gatsby"

const PlanetCard = () => {
  const data = useStaticQuery(graphql`
  query PlanetsQuery {
    allMdx {
      nodes {
        frontmatter {
          name
          img
        }
        slug
      }
    }
  }
  `)
  return (
    <div className={cardStyles.container}>
      {data.allMdx.nodes.map(planet => {
        const { img, name } = planet.frontmatter
        return (
          <div className={cardStyles.card} key={name}>
            <img src={img} alt={name} className={cardStyles.image} />

            <Button
              className={cardStyles.title}
              text={`Visit ${name}`}
              to={`/${planet.slug}`}
            />
          </div>
        )
      })}
    </div>
  )
}
export default PlanetCard
