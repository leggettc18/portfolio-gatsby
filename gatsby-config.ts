import { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Christopher Leggett's Portfolio and Blog`,
        description: `The Software Development Portfolio and Blog for Christopher Leggett`,
        url: `https://chrisleggett.me`,
        image: "/me.png",
        twitterUsername: `@leggettc18`,
    },
    plugins: [
        "gatsby-plugin-pnpm",
        "gatsby-plugin-image",
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.webp",
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            backgroundColor: "transparent",
                        },
                    },
                    "gatsby-remark-gifs",
                    "gatsby-remark-prismjs",
                ],
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "portfolio",
                path: path.resolve("content/portfolio"),
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: path.resolve("content/blog"),
            },
        },
        "gatsby-plugin-mdx-source-name",
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: path.resolve(`./src/components/layout.tsx`),
            },
        },
    ],
};

export default config;
