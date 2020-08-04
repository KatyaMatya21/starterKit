const gulp = require('gulp');
const webpack = require('webpack-stream');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function script() {
  return gulp.src('src/js/script.js')
    .pipe(webpack({
      devtool: 'source-map',
      mode: 'development',
      output: {
        filename: 'script.min.js',
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
          test: /\.m?js$/,
          sourceMap: true
        })],
      },
    }))
    .pipe(gulp.dest('build/js'))
};
