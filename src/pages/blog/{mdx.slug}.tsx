import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

type PostProps = {
    data: any
}

const Post: React.FunctionComponent<PostProps> = ({ data }) => {
    return (
        <>
            <h1 className="px-9 md:px-4">{data.mdx.frontmatter.title}</h1>
            <div className='px-9'>
                <SEO
                    title={data.mdx.frontmatter.title}
                    description={data.mdx.excerpt || 'nothin’'}
                    image={data.mdx.frontmatter.image?.childImageSharp.sizes.src}
                    article
                />
                <p>{data.mdx.frontmatter.date}</p>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </div>
        </>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
            body
            excerpt
        }
    }
`

export default Post;