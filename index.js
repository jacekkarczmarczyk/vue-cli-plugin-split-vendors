module.exports = api => {
  api.configureWebpack(() => ({
    optimization: {
      runtimeChunk: 'single', // enable "runtime" chunk
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name (module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              try {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                return `vendor.${packageName.replace('@', '')}`;
              } catch (e) {
                return 'vendor';
              }
            },
            chunks: 'all',
          },
          env: {
            test: /envVariables/,
            chunks: 'all',
          },
        },
      },
    },
    performance: {
      hints: false,
    },
  }));
};
