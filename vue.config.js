// const path = require('path');
// function resolve (dir) {
//     return path.join(__dirname, dir)
// }

module.exports = {
    publicPath: './',
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.symlinks(true)    // 热更新
        // config.resolve.alias.set('@', resolve('src'))  // 设置@代表src路径
    },
    devServer: {
        open: true,
        proxy: {
            '/gcgj-web': {
                target: 'http://91gcgj.com/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/gcgj-web': '/gcgj-web'
                }
            },
            '/gcgj-fdfs': {
              target: 'http://91gcgj.com/',
              ws: true,
              changeOrigin: true,
              pathRewrite: {
                  '^/gcgj-fdfs': '/gcgj-fdfs'
              }
          },
        }
    },
    css: {
        loaderOptions: {
          less:{
            globalVars: {
              primary: '#fff'
            }
          }
        }
      }

    
}