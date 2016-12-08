var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
})

// 读取所有页面入口
var pages = utils.getEntries('./src/views/**/*.html');

// 逐一进行生成
for (var pathname in pages) {
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname.split('/')[1] + '.html',
    template: pages[pathname],  // 模板路径
    inject: true,               // js插入位置
    chunks: [pathname]          // 仅嵌入当前目录下JS
  };
  // https://github.com/ampedandwired/html-webpack-plugin
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
