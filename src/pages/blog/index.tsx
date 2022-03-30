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

const BlogPage = ({ data }: PageProps<DataProps>) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link className="text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-300 no-underline hover:underline" to={`/blog/${node.slug}`}>
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
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: { fields: { source: { eq: "blog" }}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        slug
        id
      }
    }
  }
`

export default BlogPage