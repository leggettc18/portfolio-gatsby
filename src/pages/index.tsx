import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="Christopher Leggett">
            <p>Portfolio and Blog of East Carolina University Graduate and Aspiring Software Developer</p>
            <div className="flex justify-center">
                <StaticImage alt="A picture of me, Christopher Leggett" src="../images/me.webp" className="rounded-full w-52 self-center" />
            </div>
        </Layout>
    )
}

export default IndexPage
