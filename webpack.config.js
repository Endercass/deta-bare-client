const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  resolve: { extensions: ["*", ".js"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
    library: {
      name: "detaBareClient",
      type: "var",
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
