const healthRouter = require('./health');
const storageRouter = require('./storage');

module.exports = (app) => {
  app.use(healthRouter);
  app.use(storageRouter);
};
