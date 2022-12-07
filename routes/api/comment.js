var express = require('express');
var router = express.Router();
const {
  getCommentById,
  addComment,
} = require('../../Controllers/commentController');

router.get('/:bookId', getCommentById);
router.post('/addComment', addComment);
module.exports = router;
