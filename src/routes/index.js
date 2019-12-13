const statusRouter = require('./status');
const storageRouter = require('./storage');

module.exports = (app) => {
  app.use(statusRouter);
  app.use(storageRouter);
};
