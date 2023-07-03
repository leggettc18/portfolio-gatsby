import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    twitterUsername
                    image
                    url
                }
            }
        }
    `)

    return data.site.siteMetadata;
}
