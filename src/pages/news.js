import React from "react"
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import dateformat from 'dateformat'
import {Image,Transformation} from 'cloudinary-react';



export default ({ data }) => (
  <Layout>
    <h1>News</h1>
    {data.jahia.allNews.filter(function(news) {return news.image !== null} ).map((news, i) => (
      <a key={i} href={news.title.toLowerCase().replace(/\s/g,"")}>
        <h2>
          {news.title} - {dateformat(new Date(news.metadata.created), "fullDate")}
        </h2>
        <Image cloudName={news.image.cloudinary.cloudspace} publicId={news.image.cloudinary.path} dpr="auto" responsive>
            <Transformation height="120" width="300" crop="fill" fetchFormat="auto"/>
        </Image>
      </a>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    jahia {
        allNews {          
          title
          metadata {
              created
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