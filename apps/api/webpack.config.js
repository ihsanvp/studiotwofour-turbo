const nodeExternals = require("webpack-node-externals");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./app/index.ts",
  mode: process.env.NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  externals: [nodeExternals()],
  stats: {
    errorDetails: true,
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname),
      path.resolve(__dirname, "../../node_modules"),
    ],
    extensions: [".ts", ".js", ".d.ts"],
  },
};
