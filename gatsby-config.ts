import { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Christopher Leggett's Portfolio and Blog`,
        description: `The Portfolio and Blog for the aspiring software developer Christopher Leggett`,
        url: `https://chrisleggett.me`,
        image: '/me.png',
        twitterUsername: `@leggettc18`
    },
    plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-postcss", {
        resolve: 'gatsby-plugin-manifest',
        options: {
            icon: "src/images/icon.webp"
        }
    }, {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            backgroundColor: "transparent"
                        },
                    }, "gatsby-remark-gifs", "gatsby-remark-prismjs"
                ],
            },
        }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: "images",
                path: "./src/images/"
            },
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: "portfolio",
                path: path.resolve("content/portfolio")
            },
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: "blog",
                path: path.resolve("content/blog")
            },
        }, "gatsby-plugin-mdx-source-name"]
};

export default config;