import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>Media Companies</h1>
    {data.jahia.media.map((company, i) => (
      <a key={i} href={company.name.toLowerCase().replace(/\s/g, "")}>
        <h2>{company.name}</h2>
      </a>
    ))}
    <h1>Retail Companies</h1>
    {data.jahia.retail.map((company, i) => (
      <a key={i} href={company.name.toLowerCase().replace(/\s/g, "")}>
        <h2>{company.name}</h2>
      </a>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    jahia {
      media: companiesByIndustry(
        property: title
        equals: "Media"
        sortBy: { fieldName: "name", ignoreCase: true, sortType: ASC }
      ) {
        uuid
        name
      }
      retail: companiesByIndustry(
        property: title
        equals: "Retail"
        sortBy: { fieldName: "name", ignoreCase: true, sortType: ASC }
      ) {
        uuid
        name
      }
    }
  }
`
