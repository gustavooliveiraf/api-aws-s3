const app = require('express')();
const routes = require('./app/routes');

routes(app);

module.exports = app;
