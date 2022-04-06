import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FunctionComponent } from "react";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import { easings } from "react-spring";

type LayoutProps = {
    pageTitle: string,
    location: string,
}

const Layout: FunctionComponent<LayoutProps> = ({ pageTitle, location, children }) => {
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
        <TransitionProvider location={location}
            mode="successive"
            enter={{
                opacity: 0,
                transform: "translateX(-50vh)",
                config: {
                    duration: 300,
                    easing: easings.easeInQuart,
                    clamp: true
                }
            }}
            usual={{
                opacity: 1,
                transform: "translateX(0vh)"
            }}
            leave={{
                transform: "translateX(50vh)",
                opacity: 0,
                config: {
                    easing: easings.easeOutQuart,
                    duration: 300,
                    clamp: true
                }
            }}>
            <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <header className="text-zinc-700 dark:text-zinc-300 text-2xl font-bold p-9">{data.site.siteMetadata.title}</header>
                <nav>
                    <ul className="flex space-x-5 pl-9">
                        <li>
                            <Link className="text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="text-gray-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200" to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link className="text-zinc-700 dark:text-zinc-300 hover:text-purple-700 dark:hover:text-purple-400 font-semibold text-lg hover:underline transition duration-200" to="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
                <main className="flex justify-center mt-5 md:m-9 rounded-xl">
                    <div className="prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[90ch] lg:max-w-[120ch]">
                        <TransitionViews>
                            {children}
                        </TransitionViews>
                    </div>
                </main>
            </div>
        </TransitionProvider>
    )
}

export default Layout;