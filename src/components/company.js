import React from 'react';
import Layout from './layout';
import {graphql} from 'gatsby';
import {Image, Transformation} from 'cloudinary-react';

export default ({data}) => {
    const company = data.jahia.companyById;
    return (
        <Layout>
            <h1>{company.name}</h1>
            <div dangerouslySetInnerHTML={{__html: company.headline}}/>
            <Image cloudName={company.thumbnail.cloudinary.cloudspace} publicId={company.thumbnail.cloudinary.path}
                   dpr="auto" responsive>
                <Transformation height="300" width="300" crop="fill" fetchFormat="auto"/>
            </Image>
        </Layout>
    );
}

export const query = graphql`
    query($companyId: String!) {
        jahia {
            companyById(id: $companyId) {
                headline
                name
                thumbnail{
                    cloudinary {
                        cloudspace
                        path
                    }
                }
            }
        }
    }
`;
