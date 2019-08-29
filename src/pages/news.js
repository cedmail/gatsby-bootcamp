import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import dateformat from 'dateformat';
import {Image, Transformation} from 'cloudinary-react';

function cloudinaryNewsImage(image) {
    if (image !== null) {
        return <Image cloudName={image.cloudinary.cloudspace} publicId={image.cloudinary.path} dpr="auto" responsive>
            <Transformation height="120" width="300" crop="fill" fetchFormat="auto"/>
        </Image>;
    }
    return null;
}

export default ({data}) => (
    <Layout>
        <h1>News</h1>
        {data.jahia.allNews.map((news, i) => (
            <a key={i} href={news.title.toLowerCase().replace(/\s/g, '')}>
                <h2>
                    {news.title} - {dateformat(new Date(news.metadata.created), 'fullDate')}
                </h2>
                {cloudinaryNewsImage(news.image)}
            </a>
        ))}
    </Layout>
)

export const query = graphql`
    query {
        jahia {
            allNews(sortBy: {fieldName: "metadata.lastPublished", sortType: DESC}) {
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
`;
