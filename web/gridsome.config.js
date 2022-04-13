/* eslint-disable no-undef */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/scss/vars.scss")]
    });
}

module.exports = {
  siteName: "Emil Smith",
  siteDescription:
    "Creative Technologist working with all aspects of digital design and development to solve real-world problems.",
  siteUrl: "emilsmith.pro",
  templates: {
    SanityPost: "/:slug__current"
  },

  plugins: [
    {
      use: "gridsome-source-sanity",
      options: {
        ...clientConfig.sanity,
        typeName: "Sanity",
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd
      }
    }
  ],
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  }
};
