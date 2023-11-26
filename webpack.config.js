// webpack.config.js

module.exports = {
    // Other webpack configuration...
  
    resolve: {
      fallback: {
        "crypto": require.resolve("crypto-browserify")
      }
    }
  };