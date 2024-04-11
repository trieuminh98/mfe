module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, //process by babel if the file with the end is mjs, js,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], //Transform with jsx and transform to variety ways: ES 2015, 16, 17
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
