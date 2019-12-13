const instance = require('./instance');

const getDependencyInjection = require('./get');
const uploadDependencyInjection = require('./upload');

module.exports = {
  get: getDependencyInjection(instance),
  upload: uploadDependencyInjection(instance),
};
