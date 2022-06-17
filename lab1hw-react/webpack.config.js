const path = require("path")
const TerserPlugin = require("terser-webpack-plugin");
const glob = require("glob")

module.exports = {
  entry: {
    "bundle.js": glob.sync("build/static/?(js|css)/main.*.?(js|css)").map(f => path.resolve(__dirname, f)),
  },
  output: {
    filename: "build/static/js/bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: ["file-loader"]
        // loader: 'file-loader?name=/fonts/[name].[ext]'
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}