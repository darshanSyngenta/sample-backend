const CracoAntDesignPlugin = require("craco-antd");
module.exports = {
    plugins: [
      {
        plugin: CracoAntDesignPlugin,
        options: {
          miniCssExtractPluginOptions: {

          },
          lessLoaderOptions: {
            //modifyVars: { "@primary-color": "#1DA57A" },
            //strictMath: true,
            //noIeCompat: true
            // javascriptEnabled: true
          },
          cssLoaderOptions: {
            modules: false,
          }
        }
      }
    ]
  };
  