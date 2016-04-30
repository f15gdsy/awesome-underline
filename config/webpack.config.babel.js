import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
import DoneCopyPlugin from 'done-copy-webpack-plugin';

const target = 'awesome-underline';

export default {
  entry: `./src/${target}.js`,
  output: {
    filename: `${target}.js`,
    path: 'dist',
    library: 'ASUnderline',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{
      // Options are set in .babelrc
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
      },
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '..'),
    }),
    new UglifyJsPlugin({
      sourceMap: `${target}.map`,
    }),
    new DoneCopyPlugin([{
      from: `dist/${target}.js`,
      to: `examples/src/js/${target}.js`,
    }]),
  ],
}