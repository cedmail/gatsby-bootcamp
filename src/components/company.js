import React from "react"
import Layout from './layout';
import { graphql } from 'gatsby'
export default ({ data }) => {
  const company = data.jahia.companyById
  return (
    <Layout>
      <h1>{company.name}</h1>
      <div dangerouslySetInnerHTML={{__html:company.headline}}/>          
    </Layout>
  )
}

export const query = graphql`
  query($companyId: String!) {
    jahia {
        companyById(id: $companyId) {
          headline
          name
        }
      }
  }
`