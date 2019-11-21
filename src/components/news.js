import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Image, Transformation } from "cloudinary-react"
import dateformat from "dateformat"

function cloudinaryNewsImage(image) {
  if (image !== null) {
    return (
      <Image
        cloudName={image.cloudinary.cloudspace}
        publicId={image.cloudinary.path}
        dpr="auto"
        responsive
      >
        <Transformation
          height="300"
          width="300"
          crop="fill"
          fetchFormat="auto"
        />
      </Image>
    )
  }
  return null
}

export default ({ data }) => {
  const news = data.jahia.newsEntryById
  return (
    <Layout>
      <h1>{news.title}</h1>
      <div>
        Posted at: {dateformat(new Date(news.metadata.created), "fullDate")}
      </div>
      <img src={news.image.url} />
      <div dangerouslySetInnerHTML={{ __html: news.body }} />
    </Layout>
  )
}

export const query = graphql`
  query($newsId: String!) {
    jahia {
      newsEntryById(id: $newsId) {
        body
        title
        metadata {
          created
          lastModified
        }
        image {
          url
        }
      }
    }
  }
`
