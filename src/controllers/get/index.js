const get = (storage) => async (req, res) => {
  try {
    const image = await storage.get(req.params.key);

    const imageBase64 = `data:${image.ContentType};base64,${image.Body.toString('base64')}`;

    return res.status(200).send(imageBase64);
  } catch (err) {
    // log(err)
    return res.status(500).send({ error: err.message });
  }
};

module.exports = get;
