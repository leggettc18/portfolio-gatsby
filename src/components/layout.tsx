import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FunctionComponent } from "react";

type LayoutProps = {
    pageTitle: string,
}

const Layout: FunctionComponent<LayoutProps> = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className="text-zinc-700 dark:text-zinc-300 text-2xl font-bold p-9">{data.site.siteMetadata.title}</header>
            <nav>
                <ul className="flex space-x-5 pl-9">
                    <li>
                        <Link className="text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-lg hover:underline" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="text-gray-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-lg hover:underline" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-lg hover:underline" to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </nav>
            <main className="flex justify-center p-9 mt-5 md:m-9 rounded-xl">
                <div className="prose lg:prose-xl prose-zinc dark:prose-invert">
                    <h1>{pageTitle}</h1>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout;