import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link, PageProps } from "gatsby";
import { SEO } from "../components/seo";

// markup
const IndexPage = () => {
    const data: any = useStaticQuery(graphql`
query {
    site {
        siteMetadata {
            description
        }
    }
    allMdx(
        sort: { frontmatter: { portfolioScore: DESC } }
        filter: {
        fields: { source: { eq: "portfolio" } }
        frontmatter: { featured: { eq: true } }
    }
        ) {
        nodes {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                portfolioScore
            }
            fields {
                slug
            }
            id
        }
    }
}
`);
    return (
        <>
            <h1 className="container mx-auto p-9 font-bold text-4xl">
                Christopher Leggett's Portfolio and Blog
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-center bg-hero-pattern px-8 rounded-lg">
                <div className="font-semibold px-4 md:px-9 mt-4 md:mt-0 rounded-lg lg:w-2/3 flex-col space-y-4">
                    <p>{data.site.siteMetadata.description}</p>
                    <p>
                        I am a Software Developer. Including my education, personal
                        projects, and time spent on internal apps at work, I have 7 years of
                        experience developing software. My developer experience has
                        consisted of Web apps, Desktop apps, command-line utilities, and
                        collaborating with other developers on a video game project.
                    </p>
                    <p>Follow me on social media!</p>
                    <div className="mt-9 flex justify-between">
                        <a rel="me" href="https://mastodon.social/@leggettc13">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="w-12 h-auto"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" />
                            </svg>
                        </a>
                        <a rel="me" href="https://twitter.com/leggettc18">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="w-12 h-auto"
                                viewBox="0 0 16 16"
                            >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </a>
                        <a rel="me" href="https://github.com/leggettc18">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="w-12 h-auto"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a
                            rel="me"
                            href="https://www.linkedin.com/in/christopher-leggett-b079b7101/"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="w-12 h-auto"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                        <a rel="me" href="https://ko-fi.com/leggettc18">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="w-12 h-auto"
                                viewBox="0 0 24 24"
                            >
                                <path d="m23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593h-18.299c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028v-5.681h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <StaticImage
                        alt="A picture of me, Christopher Leggett"
                        src="../images/me.webp"
                        className="rounded-full w-52 md:w-72 self-center m-4 shadow-xl shadow-zinc-600/50 dark:shadow-zinc-900/50"
                        imgStyle={{ borderRadius: "9999px" }}
                    />
                </div>
            </div>
            <h2 className="px-9 md:px-0 pt-5 flex justify-center text-3xl font-bold">
                Featured
            </h2>
            <div className="flex flex-wrap justify-center px-9 md:px-0">
                <div className="prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[65ch] lg:max-w-[75ch] xl:max-w-[90ch] prose-h2:mt-2 lg:prose-h2:mt-2 w-full">
                    <div className="flex flex-wrap">
                        {data.allMdx.nodes.map((node: any) => (
                            <div
                                key={node.id}
                                className="dark:bg-zinc-800 rounded p-4 m-2 flex-1"
                            >
                                <div className="m-0 text-2xl text-center">
                                    <Link
                                        className="text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 no-underline transition duration-200"
                                        to={`/portfolio/${node.fields.slug}`}
                                    >
                                        {node.frontmatter.title}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export const Head = ({ location }: PageProps) => {
    return <SEO location={location} />;
};

export default IndexPage;
