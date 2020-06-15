module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'SL Covid19',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './sw.js',
      
      // ...other Workbox options...
      
    }
  }
  
}