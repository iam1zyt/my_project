const production = "http://192.168.1.27:9999";
// const production = "http://192.168.111.33:9999"
process.env.VUE_APP_TARGET = production;

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  assetsDir: "static",
  devServer: {
    // 配置代理
    proxy: {
      //代理接口前缀为/api的请求
      "/api": {
        // target: 'http://192.168.2.27:9999', //需要代理到的目标地址
        target: process.env.VUE_APP_TARGET,
        // target: 'http://192.168.2.191:8080',
        // target: 'http://222.212.87.87:24599',
        ws: true,
        changOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "", //重写路径
        },
      },
    },
    
  },
};
