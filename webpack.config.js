const path = require("path");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  mode: 'production', 
  entry: "./src/index.js",
  output: { path: path.resolve(__dirname, "dist") },
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
