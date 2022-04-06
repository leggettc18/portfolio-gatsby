import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

type DataProps = {
    allMdx: {
        nodes: Array<{
            id: string
            slug: string
            excerpt: string
            frontmatter: {
                date: string,
                title: string
            }
        }>
    }
}

const PortfolioPage = ({ data }: PageProps<DataProps>) => {
    return (
        <>
            <h1 className="px-9 md:px-4">My Portfolio</h1>
            <div className="px-9">
            <SEO />
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id} className="dark:bg-zinc-800 bg-zinc-200 p-4 rounded mb-4">
                        <h2 className='m-0'>
                            <Link className="text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 no-underline transition duration-200" to={`/portfolio/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                        <Link to={`/portfolio/${node.slug}`} className="text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 no-underline transition duration-200">Read More...</Link>
                    </article>
                ))
            }
            </div>
        </>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___portfolioScore, order: DESC }, filter: { fields: { source: { eq: "portfolio" }}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          portfolioScore
        }
        slug
        id
        excerpt
      }
    }
  }
`

export default PortfolioPage