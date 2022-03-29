import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

// markup
const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    description
                }
            }
        }
    `)
    return (
        <Layout pageTitle="Christopher Leggett">
            <p>{data.site.siteMetadata.description}</p>
            <div className="flex justify-center">
                <StaticImage alt="A picture of me, Christopher Leggett" src="../images/me.webp" className="rounded-full w-52 self-center" />
            </div>
        </Layout>
    )
}

export default IndexPage
