var express = require('express');
var router = express.Router();
const {
  getCommentById,
  addComment,
} = require('../../Controllers/commentController');
/**
 * @swagger
 * /api/comment/:bookId:
 *   get:
 *     summary: Retrieve a list of a specific book.
 *     description: Retrieve a list of a specific book.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/:bookId', getCommentById);
/**
 * @swagger
 * /api/comment/addComment:
 *   post:
 *     summary: Add a new comment of a specific book.
 *     description: Add a new comment of a specific book.
 *     responses:
 *       200:
 *         description: OK.
 */
router.post('/addComment', addComment);
module.exports = router;
