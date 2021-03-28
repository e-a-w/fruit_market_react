const CracoLessPlugin = require('craco-less');

const palette = {
  background: '#6C9A8B',
  primary: '#E8998D',
  light: '#EED2CC',
  lightest: '#FBF7F4',
  dark: '#586F6B',
};

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': palette.primary,
              '@layout-header-background': palette.background,
              '@layout-body-background': palette.lightest,
              '@menu-highlight-color': palette.lightest,
              '@page-header-ghost-bg': '#fff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
