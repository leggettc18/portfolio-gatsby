import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import Layout from '../../components/layout'

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

const BlogPage = ({ data }: PageProps<DataProps>) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id} className="dark:bg-zinc-800 bg-zinc-200 p-4 rounded">
                        <h2 className='m-0'>
                            <Link className="text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-300 transition duration-200 no-underline" to={`/blog/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                        <Link className='dark:hover:text-purple-300 hover:text-purple-600 transition duration-200' to={`/blog/${node.slug}`}>Read more...</Link>
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
        excerpt
      }
    }
  }
`

export default BlogPage