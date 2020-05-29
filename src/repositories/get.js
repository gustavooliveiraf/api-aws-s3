const get = ({ s3, Bucket }) => async (Key) => {
  try {
    const params = {
      Key,
      Bucket,
    };

    return await s3.getObject(params).promise();
  } catch (err) {
    return err;
  }
};

module.exports = get;
