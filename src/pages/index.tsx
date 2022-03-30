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
            <div className="flex flex-col md:flex-row items-center">
                <div>
                    <p>{data.site.siteMetadata.description}</p>
                    <p>Welcome to the redesigned portfolio! The styling is still a bit basic compared to the old Hugo site but that will be fixed in time.</p>
                </div>
                <div className="flex justify-center">
                    <StaticImage alt="A picture of me, Christopher Leggett" src="../images/me.webp" className="rounded-full w-52 md:w-72 self-center m-4" />
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
