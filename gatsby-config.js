module.exports = {
    siteMetadata: {
        title: `IOTA Evangelist Network`,
        name: `IEN`,
        siteUrl: `https://blog.ien.io`,
        description: `We want to establish IOTA Tangle as the ubiquitous distributed ledger technology (DLT) in the world and the foundational protocol for the upcoming Machine Economy or 4th Industrial Revolution.`,
        hero: {
            heading: `Developing the IOTA Ecosystem, one iota at a time.`,
            maxWidth: 652,
        },
        social: [{
                name: `twitter`,
                url: `https://twitter.com/IENofficial`,
            },
            {
                name: `github`,
                url: `https://github.com/iotanetwork`,
            },
            {
                name: `linkedin`,
                url: `https://www.linkedin.com/company/iotanetwork/`,
            },
        ],
    },
    plugins: [{
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/",
                authorsPage: true,
                sources: {
                    local: true,
                    // contentful: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Novela by Narative`,
                short_name: `Novela`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {},
        },
    ],
};