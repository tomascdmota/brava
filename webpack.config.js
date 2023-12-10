// webpack.config.js
const path = require('path'); // Import the 'path' module

module.exports = {
    // Other webpack configuration...
  
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
      },
    },
     devServer: {
    
   
     webSocketServer: 'wss',
   
    // other devServer options
  },
  };