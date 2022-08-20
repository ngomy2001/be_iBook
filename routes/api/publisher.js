var express = require('express');
var router = express.Router();
const {
  getAllPublishers,
  createPublisher,
  updatePublisherInfo,
  deletePublisherInfor,
} = require('../../Controllers/PublisherController');

router.get('/', getAllPublishers);
router.post('/createPublisher', createPublisher);
router.put('/:id', updatePublisherInfo);
router.delete('/:id', deletePublisherInfor);
module.exports = router;
