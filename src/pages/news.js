import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import dateformat from "dateformat"

function newsImage(image) {
  if (image !== null) {
      const jahiaURL = `${process.env.JAHIA_URL}`
    return (
      <img
        src={jahiaURL + image.url}
        height="120px"
        width="300px"
      />
    )
  }
  return null
}

export default ({ data }) => (
  <Layout>
    <h1>News</h1>
    {data.jahia.allNews.map((news, i) => (
      <a key={i} href={news.title.toLowerCase().replace(/\s/g, "")}>
        <h2>
          {news.title} -{" "}
          {dateformat(new Date(news.metadata.created), "fullDate")}
        </h2>
        {newsImage(news.image)}
      </a>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    jahia {
      allNews(sortBy: { fieldName: "metadata.lastPublished", sortType: DESC }) {
        title
        metadata {
          created
        }
        image {
          url
        }
      }
    }
  }
`
