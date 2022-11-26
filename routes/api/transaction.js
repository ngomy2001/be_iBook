var express = require('express');
var router = express.Router();
const {
  getAllTransactions,
  createTransaction,
  updateTransactionInfo,
  deleteTransactionInfor,
} = require('../../Controllers/TransactionController');
router.get('/', getAllTransactions);
router.post('/', createTransaction);
router.put('/:id', updateTransactionInfo);
router.delete('/:id', deleteTransactionInfor);
module.exports = router;
