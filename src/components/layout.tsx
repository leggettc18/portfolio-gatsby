import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FunctionComponent } from "react";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import { easings } from "react-spring";
import { HomeIcon, AtSymbolIcon, CodeIcon, PencilAltIcon } from "@heroicons/react/solid";

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
                <div className="flex flex-col md:flex-row">
                    <nav className="min-w-full md:min-w-min order-last md:order-first md:h-screen fixed z-50 md:sticky bottom-0 md:top-0 flex md:flex-col justify-center items-center bg-purple-700 group transition-all w-24 max-w-[24px] hover:w-64 duration-200">
                        {/* <header className="text-zinc-700 dark:text-zinc-300 text-2xl font-bold p-9">{data.site.siteMetadata.title}</header> */}
                        <ul className="flex md:flex-col content-center w-full text-zinc-100">
                            <Link className="text-zinc-100 hover:bg-purple-500 font-semibold text-lg transition duration-200 flex items-center space-x-2 py-4 w-full px-6" to="/">
                                <li className="w-full flex justify-center md:justify-start">
                                    <HomeIcon className="w-7" /><p className="absolute invisible opacity-0 transition delay-150 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:relative">Home</p>
                                </li>
                            </Link>
                            <Link className="text-zinc-100 font-semibold text-lg hover:bg-purple-500 transition duration-200 flex space-x-2 py-4 w-full px-6" to="/about">
                                <li className="w-full flex justify-center md:justify-start">
                                    <AtSymbolIcon className="w-7" /><p className="absolute invisible opacity-0 transition delay-150 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:relative">About</p>
                                </li>
                            </Link>
                            <Link className="text-zinc-100 font-semibold text-lg hover:bg-purple-500 transition duration-200 flex space-x-2 py-4 w-full px-6" to="/portfolio">
                                <li className="w-full flex justify-center md:justify-start">
                                    <CodeIcon className="w-7" /> <p className="absolute invisible opacity-0 transition delay-150 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:relative">Portfolio</p>
                                </li>
                            </Link>
                            <Link className="text-zinc-100 font-semibold text-lg hover:bg-purple-500 transition duration-200 flex space-x-2 py-4 w-full px-6" to="/blog">
                                <li className="w-full flex justify-center md:justify-start">
                                    <PencilAltIcon className="w-7" /><p className="absolute invisible opacity-0 transition delay-150 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:relative">Blog</p>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                    <main className="flex justify-center w-full mt-5 md:m-9 rounded-xl">
                        <div className="prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[90ch] lg:max-w-[120ch]  prose-h2:mt-2 lg:prose-h2:mt-2">
                            <TransitionViews>
                                {children}
                            </TransitionViews>
                        </div>
                    </main>
                </div>
            </div>
        </TransitionProvider>
    )
}

export default Layout;