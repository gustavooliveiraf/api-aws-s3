const { s3, paramsDefault } = require('../../config/s3Connection');

const upload = async (req, res) => {
  try {
    const params = { ...paramsDefault };
    params.ACL = 'public-read';
    params.Body = req.file.buffer;
    params.Key = req.params.id;
    params.ContentType = req.file.mimetype;

    await s3.upload(params).promise();

    return res.status(200).send({ message: 'Success' });
  } catch (err) {
    // log(err)
    return res.status(200).send({ error: err.message });
  }
};

const get = async (req, res) => {
  try {
    const params = { ...paramsDefault };
    params.Key = req.params.id;

    const image = await s3.getObject(params).promise();

    const imageBase64 = `data:${image.ContentType};base64,${image.Body.toString('base64')}`;

    return res.status(200).send(imageBase64);
  } catch (err) {
    // log(err)
    return res.status(200).send({ error: err.message });
  }
};

module.exports = {
  get,
  upload,
};
