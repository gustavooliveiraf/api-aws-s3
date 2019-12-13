const router = require('express').Router();
const multer = require('multer');

const storageController = require('../controllers');

router.get('/:key', storageController.get)
  .post('/:key', multer().single('file'), storageController.upload);

module.exports = router;
