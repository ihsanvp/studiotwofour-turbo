const WebpackShellPlugin = require("webpack-shell-plugin-next");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./app/server.ts",
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
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ["yarn run:dev"],
    }),
  ],
  stats: {
    errorDetails: true,
  },
};
