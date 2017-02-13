var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{
      loader: "babel-loader"
    }]
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: [{
        loader:'css-loader',
        options: {
          modules: true,
          localIdentName: '[local]--[hash:base64:5]',
        }
      }]
    })
  },
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      use: [{
        loader:'css-loader',
        options: {
          modules: true,
          localIdentName: '[local]--[hash:base64:5]',
        }
      }, {
        loader:'less-loader'
      }]
    })
  },
  {
    test: /\.(ttf|woff|jpeg|jpg|png|gif|svg)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          outputPath: path.join("assets", "/"),
          publicPath: "assets/",
          name: '[name]--[hash:base64:5].[ext]'
        }
      }
    ]
  }
];
