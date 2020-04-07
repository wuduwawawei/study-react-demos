// // 安装less less-loader
// yarn add less less-loader -D
// // 安装compression-webpack-plugin 压缩js为gzip
// yarn add compression-webpack-plugin -D
const { override, addLessLoader } = require('customize-cra');


module.exports = override(
  
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: "[name]__[local]___[hash:base64:5]",
      },
      sourceMap: true
    }
  }),
)
