// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CDN } = require("./src/utils/cdn");

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: "./",
  // 静态资源目录
  assetsDir: "assets",
  // 配置 scss 预置数据
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/common/index.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    // 配置 svg
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("svg-sprite-loader").loader("svg-sprite-loader").options({
      symbolId: "icon-[name]",
    });
  },
  configureWebpack: {
    // 忽略打包第三方库
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      axios: "axios",
    },
  },
  pages: {
    // 首页配置CDN
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"],
      cdn: CDN[process.env.VUE_APP_ENV],
    },
  },
};
