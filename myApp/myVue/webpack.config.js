var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'jquery': 'jquery' 
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  externals : {
    vue : 'Vue'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
       // 编译css并自动添加css前缀
      //{ test: /\.css$/, loader: 'style!css!autoprefixer'},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css') //单独使用link加载并设置路径
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
   /*   {
        test: /\.html$/,
        loader: 'vue-html'
      },*/
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',
  plugins: [
	new webpack.optimize.CommonsChunkPlugin('common.js'),
  new webpack.ProvidePlugin({
    $:"jquery",
    jQuery:"jquery",
    "window.jQuery":"jquery"
  })
	]
}

var conf = {
  filename : "../../views/index.html",
  template : "./index.html",
  inject : 'body',
  hash : true
}

module.exports.plugins = [new HtmlWebpackPlugin(conf),new ExtractTextPlugin('styles/[name].css')];

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      except: ['$super', '$', 'exports', 'require']
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
