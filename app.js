const app = require('express')();
const routes = require('./src/routes');

routes(app);

module.exports = app;
