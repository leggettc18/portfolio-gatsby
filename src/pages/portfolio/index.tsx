import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import Layout from '../../components/layout'

type DataProps = {
    allMdx: {
        nodes: Array<{
            id: string
            slug: string
            frontmatter: {
                date: string,
                title: string

            }
        }>
    }
}

const PortfolioPage = ({ data }: PageProps<DataProps>) => {
    return (
        <Layout pageTitle="My Portfolio">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link className="text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-300 no-underline hover:underline" to={`/portfolio/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))
            }
        </Layout>
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
      }
    }
  }
`

export default PortfolioPage