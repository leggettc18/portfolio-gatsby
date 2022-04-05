import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import SEO from "../components/seo";

// markup
const IndexPage = () => {
    const data: any = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                }
            }
            allMdx(sort: {fields: frontmatter___portfolioScore, order: DESC }, filter: { fields: { source: { eq: "portfolio" }}, frontmatter: { featured: { eq: true }}}) {
                nodes {
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        title
                        portfolioScore
                    }
                    slug
                    id
                }
            }
        }
    `)
    return (
        <Layout pageTitle="Christopher Leggett">
            <SEO />
            <div className="flex flex-col md:flex-row items-center bg-hero-pattern px-8 rounded-lg">
                <div className="font-semibold bg-zinc-100 dark:bg-zinc-900 px-4 mt-4 md:mt-0 rounded-lg shadow-xl shadow-zinc-600/50 dark:shadow-zinc-900/50">
                    <p>{data.site.siteMetadata.description}</p>
                    <p>Welcome to the redesigned portfolio! The styling is still a bit basic compared to the old Hugo site but that will be fixed in time.</p>
                </div>
                <div className="flex justify-center">
                    <StaticImage alt="A picture of me, Christopher Leggett" src="../images/me.webp" className="rounded-full w-52 md:w-72 self-center m-4 shadow-xl shadow-zinc-600/50 dark:shadow-zinc-900/50" />
                </div>
            </div>
            <h2 className="px-9 md:px-0">Featured</h2>
            <div className="flex flex-wrap justify-center px-9 md:px-0">
                {
                    data.allMdx.nodes.map((node: any) => (
                        <article key={node.id} className="dark:bg-zinc-800 rounded p-4 m-2 flex-1">
                            <div className="m-0 text-2xl text-center">
                                <Link className="text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 no-underline transition duration-200" to={`/portfolio/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </div>
                        </article>
                    ))
                }
            </div>
        </Layout>
    )
}

export default IndexPage
