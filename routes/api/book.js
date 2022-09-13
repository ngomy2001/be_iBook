var express = require('express');
var router = express.Router();
const {
  getAllBooks,
  createBook,
  updateBookInfo,
} = require('../../Controllers/BookController');

/**
 * @swagger
 * /api/book:
 *   get:
 *     summary: Retrieve a list of books in the system
 *     description: Retrieve a list of books from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/', getAllBooks);
/**
 * @swagger
 * /api/book/createBook:
 *   post:
 *     summary: Add a new book to the system.
 *     description: Add a new book to the system.
 *     responses:
 *       201:
 *         description: Create successfully.
 */
router.post('/createBook', createBook);
/**
 * @swagger
 * /api/book/{id}:
 *   put:
 *     summary: Update an book info.
 *     description: Change an book of an author.
 *     responses:
 *       200:
 *         description: OK.
 */
router.put('/:id', updateBookInfo);

module.exports = router;
