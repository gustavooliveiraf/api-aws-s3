const storage = require('../repositories');

const getDependencyInjection = require('./get');
const uploadDependencyInjection = require('./upload');

module.exports = {
  get: getDependencyInjection(storage),
  upload: uploadDependencyInjection(storage),
};
