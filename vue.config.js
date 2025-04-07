module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-02/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/utility/_function.scss";
          @import "@/styles/utility/_variable.scss";
          @import "@/styles/utility/_mixin.scss";
        `,
      },
    },
  },
};
