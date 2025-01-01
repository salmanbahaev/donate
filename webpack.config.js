const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = ({ development }) => ({
  mode: development ? "development" : "production",
  entry: `${__dirname}/index.js`,
  devServer: {
    contentBase: `${__dirname}/build`,
    open: true,
    compress: true,
    port: 8000,
    hot: true,
  },
  output: {
    path: `${__dirname}/build`,
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.html`,
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
