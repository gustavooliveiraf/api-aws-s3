const aws = require('aws-sdk');
const { Bucket } = require('../../config');

aws.config.setPromisesDependency();
aws.config.update({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
});

const s3 = new aws.S3();

module.exports = {
  s3,
  Bucket,
};
