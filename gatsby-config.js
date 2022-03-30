
module.exports = {
    siteMetadata: {
        title: `Christopher Leggett's Portfolio and Blog`,
        description: `The Portfolio and Blog for the aspiring software developer Christopher Leggett`,
        siteUrl: `https://chrisleggett.me`,
        twitterUsername: `@leggettc18`
    },
    plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-postcss", {
        resolve: 'gatsby-plugin-manifest',
        options: {
            icon: "src/images/icon.png"
        }
    }, {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    }, "gatsby-remark-gifs"
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
                path: `${__dirname}/content/portfolio/`
            },
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: "blog",
                path: `${__dirname}/content/blog/`
            },
        }, "gatsby-plugin-mdx-source-name"]
};