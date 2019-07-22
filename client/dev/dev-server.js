const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');

const mockEndpoints = (app) => {
  app.get('/libs/cq/security/userinfo.json', (req, res) => {
    res.status(200)
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache, no-store, max-age=0')
      .send(`
{
   "userID":"admin",
   "userName":"Administrator",
   "userName_xss":"Administrator",
   "home":"/home/users/p/pzJIElGjQbsjdPirTPil",
   "impersonated":false,
   "allowedApps":[
      {
         "appName":"Websites",
         "appDescription":"Create and manage multiple websites.",
         "iconClass":"siteadmin",
         "path":"/libs/wcm/core/content/siteadmin",
         "vanityPath":"/siteadmin"
      }
   ],
   "preferences":{
      "cq.authoring.editor.page.showOnboarding62":"false"
   }
}
    `);
  });
};

const devServer = (distDir) => ({
  contentBase: distDir,
  historyApiFallback: true,
  hot: true,
  host: '0.0.0.0',
  port: 9000,
  before: (app, server) => {
    app.use(evalSourceMapMiddleware(server));
    app.use(errorOverlayMiddleware());
    mockEndpoints(app);
  }
});

module.exports = devServer;
