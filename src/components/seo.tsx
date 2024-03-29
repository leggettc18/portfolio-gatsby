import { PageProps } from "gatsby";
import * as React from "react";
import { FunctionComponent } from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

type SEOProps = {
    title?: string;
    description?: string;
    article?: boolean;
    image?: string;
    location: PageProps["location"];
};

export const SEO: FunctionComponent<SEOProps> = ({
    title,
    description,
    article,
    image,
    location,
    children,
}) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        url,
        image: defaultImage,
        twitterUsername,
    } = useSiteMetadata();

    const seo = {
        title: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
        image: `${url}${image || defaultImage}`,
        url: `${url}${location.pathname}`,
    };

    console.log(location.pathname);

    return (
        <>
            <meta name="view-transition" content="same-origin" />
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            {children}
        </>
    );
};
