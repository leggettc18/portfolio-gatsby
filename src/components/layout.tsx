import * as React from "react";
import { Link, PageProps } from "gatsby";
import {
    HomeIcon,
    AtSymbolIcon,
    CodeIcon,
    PencilAltIcon,
} from "@heroicons/react/solid";

const Layout = ({ children }: PageProps) => {
    return (
        <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
            <div className="flex flex-col sm:flex-row">
                <nav className="min-w-full md:min-w-min order-last md:order-first md:h-screen bottom-0 md:top-0 flex md:flex-col justify-center items-center bg-purple-900 w-max md:w-48 fixed md:sticky z-50">
                    {/* <header className="text-zinc-700 dark:text-zinc-300 text-2xl font-bold p-9">{data.site.siteMetadata.title}</header> */}
                    <ul className="flex md:flex-col content-center w-full text-zinc-100">
                        <Link
                            className="text-zinc-100 font-semibold text-lg flex items-center space-x-2 py-4 w-full px-6"
                            to="/"
                        >
                            <li className="w-full flex justify-center md:justify-start">
                                <HomeIcon className="w-7" />
                                <p className="absolute invisible opacity-0 md:relative md:visible md:opacity-100">
                                    Home
                                </p>
                            </li>
                        </Link>
                        <Link
                            className="text-zinc-100 font-semibold text-lg flex space-x-2 py-4 w-full px-6"
                            to="/about"
                        >
                            <li className="w-full flex justify-center md:justify-start">
                                <AtSymbolIcon className="w-7" />
                                <p className="absolute invisible opacity-0 md:relative md:visible md:opacity-100">
                                    About
                                </p>
                            </li>
                        </Link>
                        <Link
                            className="text-zinc-100 font-semibold text-lg flex space-x-2 py-4 w-full px-6"
                            to="/portfolio"
                        >
                            <li className="w-full flex justify-center md:justify-start">
                                <CodeIcon className="w-7" />{" "}
                                <p className="absolute invisible opacity-0 md:relative md:visible md:opacity-100">
                                    Portfolio
                                </p>
                            </li>
                        </Link>
                        <Link
                            className="text-zinc-100 font-semibold text-lg flex space-x-2 py-4 w-full px-6"
                            to="/blog"
                        >
                            <li className="w-full flex justify-center md:justify-start">
                                <PencilAltIcon className="w-7" />
                                <p className="absolute invisible opacity-0 md:relative md:visible md:opacity-100">
                                    Blog
                                </p>
                            </li>
                        </Link>
                    </ul>
                </nav>
                <main className="flex justify-center align-center text-zinc-900 dark:text-zinc-100 w-full pt-5 rounded-xl mb-20">
                    <div className="w-full">{children}</div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
