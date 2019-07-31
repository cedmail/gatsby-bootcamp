import React from "react"
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import {Image,Transformation} from 'cloudinary-react';
import dateformat from 'dateformat'

export default ({ data }) => {
  const news = data.jahia.newsEntryById
  return (
    <Layout>
      <h1>{news.title}</h1>
      <div>Posted at: {dateformat(new Date(news.metadata.created), "fullDate")}</div>
      <Image cloudName={news.image.cloudinary.cloudspace} publicId={news.image.cloudinary.path} dpr="auto" responsive>
            <Transformation height="300" width="300" crop="fill" fetchFormat="auto"/>
        </Image>
      <div dangerouslySetInnerHTML={{__html:news.body}}/>          
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
            cloudinary {
              cloudspace
              path
            }
          }
        }
      }
  }
`