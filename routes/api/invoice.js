var express = require('express');
var router = express.Router();
const {
  getAllInvoices,
  createInvoice,
  updateInvoiceInfo,
  updateInvoiceStatus,
  deleteInvoiceInfor,
  searchInvoice,
  countInvoiceEachMonth,
  calculateBudget,
  getInvoicesByUserId,
} = require('../../Controllers/InvoiceController');

/**
 * @swagger
 * /api/invoice/countInvoiceEachMonth:
 *   get:
 *     summary: Calculate the number of new invoice of each month.
 *     description: Calculate the number of new invoice of each month.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/countInvoiceEachMonth', countInvoiceEachMonth);
/**
 * @swagger
 * /api/invoice/calculateBudget:
 *   get:
 *     summary: Calculate the current budget.
 *     description: Calculate the current budget.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/calculateBudget', calculateBudget);
router.get('/:userId', getInvoicesByUserId);

/**
 * @swagger
 * /api/invoice/searchInvoice/:keyword:
 *   get:
 *     summary: Search an invoice by keyword.
 *     description: Search an invoice by keyword.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/searchInvoice/:keyword', searchInvoice);

/**
 * @swagger
 * /api/invoice:
 *   get:
 *     summary: Retrieve a list of invoices in the system
 *     description: Retrieve a list of invoices from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/', getAllInvoices);
/**
 * @swagger
 * /api/invoice/createInvoice:
 *   post:
 *     summary: Add a new invoice to the system.
 *     description: Add a new invoice to the system.
 *     responses:
 *       201:
 *         description: Create successfully.
 */
router.post('/createInvoice', createInvoice);
/**
 * @swagger
 * /api/invoice/updateStatus/{id}:
 *   put:
 *     summary: Update an invoice status.
 *     description: Change a status of an invoice.
 *     responses:
 *       200:
 *         description: OK.
 */
router.put('/updateStatus/:id', updateInvoiceStatus);
/**
 * @swagger
 * /api/invoice/{id}:
 *   put:
 *     summary: Update an invoice info.
 *     description: Change an information of an invoice.
 *     responses:
 *       200:
 *         description: OK.
 */
router.put('/:id', updateInvoiceInfo);

/**
 * @swagger
 * /api/invoice/{id}:
 *   delete:
 *     summary: Delete an invoice info.
 *     description: Remove an information of an invoice from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.delete('/:id', deleteInvoiceInfor);
module.exports = router;
