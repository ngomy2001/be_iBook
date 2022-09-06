var express = require('express');
var router = express.Router();
const {
  getAllBooks,
  createBook,
  updateBookInfo,
} = require('../../Controllers/BookController');

router.get('/', getAllBooks);
router.post('/createBook', createBook);
router.put('/:id', updateBookInfo);

module.exports = router;
