var express = require('express');
var router = express.Router();
const {
  getAllBooks,
  createBook,
  updateBookInfo,
  deleteBookInfor,
  updateBookSample,
  findBookById,
  countBookEachMonth,
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
router.get('/countBookEachMonth', countBookEachMonth);

router.get('/:id', findBookById);

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

/**
 * @swagger
 * /api/book/sample/{id}:
 *   delete:
 *     summary: Upload a book sample.
 *     description: Upload a book sample to database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.put('/sample/:id', updateBookSample);

/**
 * @swagger
 * /api/book/{id}:
 *   delete:
 *     summary: Delete a book info.
 *     description: Remove an information of a book from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.delete('/:id', deleteBookInfor);

module.exports = router;
