module.exports = {
  devServer: {
    proxy: 'https://data.coa.gov.tw/',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/animal-shelter-map/'
    : '/',

  configureWebpack: {
    performance: {
      hints:false
    }
  } 
};
