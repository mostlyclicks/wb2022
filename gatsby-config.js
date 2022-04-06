require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.wieserbrothers.com",
    title: "Wieser Brothers",
    description: `Wieser Brothers General Contracting | Design/Build, Project management, General Construction.`,
    author: `mostlyClicks`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Firm",
        link: "/firm",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Commitment",
        link: "/commitment",
      },
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "News & Events",
        link: "/news-events",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        schemas: {
          articles: require("./custom_types/articles.json"),
          category: require("./custom_types/category.json"),
          commitmen: require("./custom_types/commitmen.json"),
          construction_management: require("./custom_types/construction_management.json"),
          "design-build": require("./custom_types/design_build.json"),
          employment_opportunity: require("./custom_types/employment_opportunity.json"),
          general_contracting: require("./custom_types/general_contracting.json"),
          history: require("./custom_types/history.json"),
          news_and_events: require("./custom_types/news_and_events.json"),
          our_firm: require("./custom_types/our_firm.json"),
          privacy_policy: require("./custom_types/privacy_policy.json"),
          professional_affiliations: require("./custom_types/professional_affiliations.json"),
          projects: require("./custom_types/projects.json"),
          safety: require("./custom_types/safety.json"),
          services: require("./custom_types/services.json"),
          sustainability: require("./custom_types/sustainability.json"),
          testimonial: require("./custom_types/testimonial.json"),
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
