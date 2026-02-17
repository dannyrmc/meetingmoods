module.exports = {
  async rewrites() {
    return [
      {
        source: "/images/:match*",
        destination: "https://meetingmoods.app/_vercel/insights/:match*",
      },
      {
        source: "/images/:match*",
        destination: "https://beta.meetingmoods.app/_vercel/insights/:match*",
      },
    ];
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};
