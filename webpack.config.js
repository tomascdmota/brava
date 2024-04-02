const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');

module.exports = {
  // ... other webpack configuration...

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({}),
    ],
  },

  plugins: [
    // ... other plugins

    new PurgeCSSPlugin({
      paths: glob.sync('./src/**/*', { nodir: true }),
    }),

    new BundleAnalyzerPlugin(),
  ],

  devServer: {
    // webSocketServer: 'wss',  // You can keep or remove this line based on your needs

    // other devServer options
  },
};