import React from "react"
import {graphql, useStaticQuery} from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);
    return (
        <footer>
            <span>{data.site.siteMetadata.author}, 2019</span>
        </footer>
    )
};

export default Footer;