const express = require('express');
const { private, limited } = require('../middleware/auth');
const { findAll, createOne, updateOne, deleteOne } = require('../controler/portfolio');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/portfolio'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

router.route('/').get(findAll).post(private, limited('admin'), upload.single('image'), createOne);
router.route('/:id').put(private, limited('admin'), upload.single('image'), updateOne).delete(private, limited('admin'), deleteOne);

module.exports = router;