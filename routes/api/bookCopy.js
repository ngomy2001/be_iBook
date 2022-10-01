var express = require('express');
var router = express.Router();

const {
  getBookCopies,
  createBookCopy,
  updateBookCopyInfo,
  deleteBookCopyInfor,
  findAvailableItems,
} = require('../../Controllers/BookCopyController');

/**
 * @swagger
 * /api/bookCopy:
 *   get:
 *     summary: Retrieve a list of book copies in the system
 *     description: Retrieve a list of book copies from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/', getBookCopies);

router.get('/:bookId', findAvailableItems);
/**
 * @swagger
 * /api/bookCopy/createBookCopy:
 *   post:
 *     summary: Add a new book copy to the system.
 *     description: Add a new book copy to the system.
 *     responses:
 *       201:
 *         description: Create successfully.
 */
router.post('/createBookCopy', createBookCopy);

/**
 * @swagger
 * /api/bookCopy/{id}:
 *   put:
 *     summary: Update an book copy info.
 *     description: Change an book copy of an author.
 *     responses:
 *       200:
 *         description: OK.
 */
router.put('/:id', updateBookCopyInfo);

/**
 * @swagger
 * /api/bookCopy/{id}:
 *   delete:
 *     summary: Delete a book copy info.
 *     description: Remove an information of a book copy from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.delete('/:id', deleteBookCopyInfor);

module.exports = router;
