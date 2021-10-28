module.exports = {
  // 部署应用包时的基本 URL
  publicPath: "./",
  // 静态资源目录
  assetsDir: "assets",
  chainWebpack: (config) => {
    // svg
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("svg-sprite-loader").loader("svg-sprite-loader").options({
      symbolId: "icon-[name]",
    });
  },
};
