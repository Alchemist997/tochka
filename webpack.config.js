const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      bundle: './src/index.js',
      arrow_rotator: './src/js/select_plugin/arrow_rotator.js',
      checkbox: './src/js/select_plugin/checkbox.js',
      selects: './src/js/select_plugin/selects.js'
    },
    output: {
        path: path.resolve(__dirname, 'complete_buid'),
        filename: '[name].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/html/index.html'
        }),
        new MiniCssExtractPlugin ({
            filename: 'styles_build.css',
            linkType: 'text/css'
        })
    ],
    externals: {
      jquery: 'jQuery'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource'
          }
        ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin()
      ]
    }
};