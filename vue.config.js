module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/https://ivy-love.github.io/portfolio-02/'  // 예: '/my-vue-project/'
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
