const router = require('express').Router();
const multer = require('multer');

const storageController = require('../controllers/storage');

router.get('/:id', storageController.get)
  .post('/:id', multer().single('image'), storageController.upload);

module.exports = router;
