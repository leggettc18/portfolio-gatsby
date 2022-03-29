import * as React from "react";
import { Link } from "gatsby";
import { FunctionComponent } from "react";

type LayoutProps = {
    pageTitle: string,
}

const Layout: FunctionComponent<LayoutProps> = ({ pageTitle, children }) => {
    return (
        <div className="">
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main className="flex justify-center">
                <div className="prose lg:prose-xl prose-slate">
                    <h1>{pageTitle}</h1>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout;