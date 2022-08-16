var express = require('express');
var router = express.Router();
const {
  getAllAuthors,
  createAuthor,
  updateAuthorInfo,
  deleteAuthorInfor,
} = require('../../Controllers/AuthorController');

router.get('/', getAllAuthors);
router.post('/createAuthor', createAuthor);
router.put('/:id', updateAuthorInfo);
router.delete('/:id', deleteAuthorInfor);
module.exports = router;
