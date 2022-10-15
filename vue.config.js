const { defineConfig } = require('@vue/cli-service')
// const { VantResolver } = require('unplugin-vue-components/resolvers');
// const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    // proxy:"http://218.7.112.123:10001"
  },
  // 按需引入样式
  // configureWebpack: {
  //   plugins: [
  //     ComponentsPlugin({
  //       resolvers: [VantResolver()],
  //     }),
  //   ],
  // },
})
