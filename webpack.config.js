const path = require('path');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


const JS_DIR = path.resolve( __dirname, 'src/js' );
const IMG_DIR = path.resolve( __dirname, 'src/img' );
const BUILD_DIR = path.resolve( __dirname, 'dist' );
/**
 * Note: argv.mode will return 'development' or 'production'.
 */
const plugins = () => [
	new MiniCssExtractPlugin( {
		filename: 'css/[name].css'
	} ),
];

module.exports = {
  entry: {
	main: JS_DIR + '/main.js'
},
  output: {
    path: BUILD_DIR,
	filename: 'js/[name].js',
  assetModuleFilename: 'img/[name].[ext]', 
  },
  devtool: 'source-map',
  module: {
    rules: [
  
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource"
      },



    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      new TerserPlugin()
    ],
  },
  plugins: plugins(),
  mode: 'development'
};

