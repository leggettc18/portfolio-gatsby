import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/seo';

type PostProps = {
    data: any
}

const Post: React.FunctionComponent<PostProps> = ({ data, children }) => {
    return (
        <div className="flex justify-center">
            <div className="prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[65ch] lg:max-w-[75ch] xl:max-w-[90ch] prose-h2:mt-2 lg:prose-h2:mt-2">
                <h1 className="px-9 pt-9 md:px-4">{data.mdx.frontmatter.title}</h1>
                <div className='px-9'>
                    <SEO
                        title={data.mdx.frontmatter.title}
                        description={data.mdx.excerpt || 'nothin’'}
                        image={data.mdx.frontmatter.image?.childImageSharp.sizes.src}
                        article
                    />
                    <p>{data.mdx.frontmatter.date}</p>
                    {children}
                </div>
            </div>
        </div>
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
