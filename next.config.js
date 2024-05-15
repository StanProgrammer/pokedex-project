const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mts$/,
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    });

    config.resolve.extensions.push('.mts');

    return config;
  },
};
