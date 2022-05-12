import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => {
    return (
        <div className="flex justify-center">
            <div className="prose lg:prose-xl prose-zinc dark:prose-invert md:max-w-[65ch] lg:max-w-[75ch] xl:max-w-[90ch] prose-h2:mt-2 lg:prose-h2:mt-2">
                <h1 className="px-9 md:px-4">About Me</h1>
                <SEO title="About Me" />
                <div className="px-8">
                    <p>My name is Christopher Leggett, I’m an East Carolina University Graduate with a Bachelor of Science Degree in Computer Science. I am currently an MSP IT Technician by trade but my end goal is to be a Full Stack or Backend Developer.</p>
                    <p>This Portfolio/Blog is written in Gatsby. It leverages Tailwind CSS for styling, dark-mode, and more, and PrismJS for Code Highlighting with the Tomorrow Night theme.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;