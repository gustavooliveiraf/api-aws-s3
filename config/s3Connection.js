const aws = require('aws-sdk');
const { bucketName } = require('./index');

aws.config.setPromisesDependency();
aws.config.update({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
});

const s3 = new aws.S3();

const paramsDefault = {
  Bucket: bucketName,
};

module.exports = {
  s3,
  paramsDefault,
};
