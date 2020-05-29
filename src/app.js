const app = require('express')();
const routes = require('./routes');

routes(app);

module.exports = app;
