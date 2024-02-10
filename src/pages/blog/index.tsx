import * as React from "react";
import { useStaticQuery, graphql, Link, PageProps } from "gatsby";
import { SEO } from "../../components/seo";

type Data = {
    allMdx: {
        nodes: Array<{
            id: string;
            excerpt: string;
            fields: {
                slug: string;
            };
            frontmatter: {
                date: string;
                title: string;
            };
        }>;
    };
};

const BlogPage = () => {
    const data: Data = useStaticQuery(graphql`
query {
    allMdx(
        sort: { frontmatter: { date: DESC } }
        filter: { fields: { source: { eq: "blog" } } }
        ) {
        nodes {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
            }
            fields {
                slug
            }
            id
            excerpt
        }
    }
}
`);

    return (
        <div className="flex justify-center">
            <div className="prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[65ch] lg:max-w-[75ch] xl:max-w-[90ch] prose-h2:mt-2 lg:prose-h2:mt-2">
                <h1 className="px-9 md:px-4">My Blog Posts</h1>
                <div className="px-9">
                    {data.allMdx.nodes.map((node) => (
                        <article
                            key={node.id}
                            className="dark:bg-zinc-800 bg-zinc-200 p-4 rounded mb-4"
                        >
                            <h2 className="m-0">
                                <Link
                                    className="text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-200 no-underline"
                                    to={`/blog/${node.fields.slug}`}
                                >
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                            <Link
                                className="dark:hover:text-purple-400 hover:text-purple-600 transition duration-200"
                                to={`/blog/${node.fields.slug}`}
                            >
                                Read more...
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Head = ({ location }: PageProps) => {
    return <SEO title="Blog Posts" location={location} />;
};

export default BlogPage;
