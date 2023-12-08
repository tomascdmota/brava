// webpack.config.js

module.exports = {
    // Other webpack configuration...
  
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
      },
    },
  };