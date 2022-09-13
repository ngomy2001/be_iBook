var express = require('express');
var router = express.Router();
const {
  getAllAuthors,
  createAuthor,
  updateAuthorInfo,
  deleteAuthorInfor,
} = require('../../Controllers/AuthorController');

/**
 * @swagger
 * /api/author:
 *   get:
 *     summary: Retrieve a list of authors in the system
 *     description: Retrieve a list of authors from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/', getAllAuthors);
/**
 * @swagger
 * /api/author/createAuthor:
 *   post:
 *     summary: Add a new author to the system.
 *     description: Add a new author to the system.
 *     responses:
 *       201:
 *         description: Create successfully.
 */
router.post('/createAuthor', createAuthor);
/**
 * @swagger
 * /api/author/{id}:
 *   put:
 *     summary: Update an author info.
 *     description: Change an information of an author.
 *     responses:
 *       200:
 *         description: OK.
 */
router.put('/:id', updateAuthorInfo);
/**
 * @swagger
 * /api/author/{id}:
 *   delete:
 *     summary: Delete an author info.
 *     description: Remove an information of an author from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.delete('/:id', deleteAuthorInfor);
module.exports = router;
