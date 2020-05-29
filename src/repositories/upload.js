const upload = ({ s3, Bucket }) => async (Body, Key, ContentType) => {
  try {
    const params = {
      Key,
      Bucket,
      Body,
      ContentType,
      ACL: 'public-read',
    };

    return await s3.upload(params).promise();
  } catch (err) {
    return err;
  }
};

module.exports = upload;
