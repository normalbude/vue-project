const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  pages:{
    index:{
      entry:'src/main.js',
    }
  },
  devServer:{
    proxy:'http://localhost:5000'
  }
})
