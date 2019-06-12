module.exports = {
  context: __dirname,
  clientLibRoot: '../server/ui.apps/src/main/content/jcr_root/apps/marcnuri/dashboard/clientlibs',
  libs: [
    {
      name: 'aem-dashboard',
      allowProxy: true,
      serializationFormat: 'xml',
      categories: ['aem-dashboard'],
      assets: {
        js: [
          'dist/bundle.js'
        ],
        css: [
          'dist/bundle.css'
        ]
      }
    }
  ]
};