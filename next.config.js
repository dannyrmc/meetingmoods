module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

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
  
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
