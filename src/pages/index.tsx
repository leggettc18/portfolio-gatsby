import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage alt="A picture of me, Christopher Leggett" src="../images/me.webp" className="rounded-full w-1/2" />
        </Layout>
    )
}

export default IndexPage
