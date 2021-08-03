const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MediaQueryPlugin = require('media-query-plugin');

module.exports = {
    // entry: path.join(__dirname, 'src', 'index.js'),
    // output: {
    //     path : path.join(__dirname, '/dist'),
    //     filename : '[name].bundle.js',
    // },
    module: {
        rules: [
          {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
          },{
            test:  /\.(css|scss|sass)$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                MediaQueryPlugin.loader,
                'sass-loader'
            ]
          },{
            test: /\.(png|jpe?g|gif|png|svg)$/i,
              use: [{
                  loader: 'file-loader',
                  options: {
                    esModule: false,
                    name: './assets/img/[name].[ext]'
                  },
              }]
          },{
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
              }
            ]
          }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      open: true,
      clientLogLevel: 'silent',
      port: 3000,
      hot: true
    },
    
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
    ],
}