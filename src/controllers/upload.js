const upload = (storage) => async (req, res) => {
  try {
    await storage.upload(req.file.buffer, req.params.key, req.file.mimetype);

    return res.status(200).send({ message: 'Success' });
  } catch (err) {
    // log(err)
    return res.status(500).send({ error: err.message });
  }
};

module.exports = upload;
