module.exports = {
  devServer: {
    proxy: 'https://data.coa.gov.tw/',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-Mask-Map/'
    : '/',

  configureWebpack: {
    performance: {
      hints:false
    }
  } 
};
