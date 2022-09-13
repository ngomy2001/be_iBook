var express = require('express');
var router = express.Router();
const {
  getAllAccounts,
  createAccount,
  updateAccountInfo,
} = require('../../Controllers/AccountController');
/**
 * @swagger
 * /api/accounts:
 *   get:
 *     summary: Retrieve a list of accounts in the system
 *     description: Retrieve a list of accounts from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/', getAllAccounts);
/**
 * @swagger
 * /api/accounts/createAccount:
 *   post:
 *     summary: Add a new account to the system.
 *     description: Add a new account to the system.
 *     responses:
 *       201:
 *         description: Create successfully.
 */
router.post('/createAccount', createAccount);
/**
 * @swagger
 * /api/accounts/{id}:
 *   put:
 *     summary: Update an account info.
 *     description: Change an information of an account.
 *     responses:
 *       200:
 *         description: OK.
 */
router.put('/:id', updateAccountInfo);
module.exports = router;
