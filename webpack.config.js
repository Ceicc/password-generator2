const path = require("node:path")

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "bundle.js"
  },

  mode: "development",
  
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  }
}