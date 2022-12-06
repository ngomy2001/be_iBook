var express = require('express');
var router = express.Router();
const {
  getAllPublishers,
  createPublisher,
  updatePublisherInfo,
  deletePublisherInfor,
  searchPublisher,
} = require('../../Controllers/PublisherController');
/**
 * @swagger
 * /api/publisher:
 *   get:
 *     summary: Retrieve a list of publishers in the system
 *     description: Retrieve a list of publishers from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/', getAllPublishers);

/**
 * @swagger
 * /api/searchPublisher/:keyword:
 *   get:
 *     summary: Search a publisher by keyword.
 *     description: Search a publisher by keyword.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/searchPublisher/:keyword', searchPublisher);
/**
 * @swagger
 * /api/publisher/createPublisher:
 *   post:
 *     summary: Add a new publisher to the system.
 *     description: Add a new publisher to the system.
 *     responses:
 *       201:
 *         description: Create successfully.
 */
router.post('/createPublisher', createPublisher);
/**
 * @swagger
 * /api/publisher/{id}:
 *   put:
 *     summary: Update an publisher info.
 *     description: Change an information of a publisher.
 *     responses:
 *       200:
 *         description: OK.
 */
router.put('/:id', updatePublisherInfo);
/**
 * @swagger
 * /api/publisher/{id}:
 *   delete:
 *     summary: Delete a publisher info.
 *     description: Remove an information of a publisher from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.delete('/:id', deletePublisherInfor);
module.exports = router;
