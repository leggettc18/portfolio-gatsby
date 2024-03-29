import { graphql, PageProps } from "gatsby";
import * as React from "react";
import { SEO } from "../../components/seo";

type ProjectProps = {
    mdx: {
        frontmatter: {
            title: string;
            description: string;
            image: {
                childImageSharp: {
                    sizes: {
                        src: string;
                    };
                };
            };
            github: string;
            date: string;
        };
        excerpt: string;
        body: string;
    };
};

const Project = ({ data, children }: PageProps<ProjectProps>) => {
    return (
        <div className="flex justify-center">
            <div className="prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[65ch] lg:max-w-[75ch] xl:max-w-[90ch] prose-h2:mt-2 lg:prose-h2:mt-2">
                <h1 className="px-9 pt-9 md:px-4">{data.mdx.frontmatter.title}</h1>
                <div className="px-9">
                    <p>{data.mdx.frontmatter.date}</p>
                    <a
                        href={data.mdx.frontmatter.github}
                        className="dark:text-zinc-100 bg-purple-300 dark:bg-purple-600 hover:bg-purple-400 dark:hover:bg-purple-800 p-4 rounded no-underline flex max-w-fit items-center space-x-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>{" "}
                        <p className="p-0 m-0">Check it out on Github!</p>
                    </a>
                    {children}
                </div>
            </div>
        </div>
    );
};

export const Head = ({ location, data }: PageProps<ProjectProps>) => {
    return (
        <SEO
            title={data.mdx.frontmatter.title}
            description={
                data.mdx.frontmatter.description || data.mdx.excerpt || "nothin’"
            }
            image={data.mdx.frontmatter.image?.childImageSharp.sizes.src}
            location={location}
            article
        />
    );
};

export const query = graphql`
query ($id: String) {
    mdx(id: { eq: $id }) {
        frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            github
        }
        body
        excerpt
    }
}
`;

export default Project;
