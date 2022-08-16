var express = require('express');
var router = express.Router();

const {
  getAllAccounts,
  createAccount,
  updateAccountInfo,
} = require('../../Controllers/AccountController');

router.get('/', getAllAccounts);
router.post('/createAccount', createAccount);
router.put('/:id', updateAccountInfo);
module.exports = router;
