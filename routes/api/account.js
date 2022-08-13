var express = require('express');
var router = express.Router();

const {
  createAccount,
  getAccountById,
  getAllAccounts,
} = require('../../Controllers/AccountController');

router.get('/', getAllAccounts);
router.get('/:id', getAccountById);
router.post('/createAccount', createAccount);
module.exports = router;
