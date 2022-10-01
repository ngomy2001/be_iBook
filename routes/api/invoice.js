var express = require('express');
var router = express.Router();
const {
  getAllInvoices,
  createInvoice,
  updateInvoiceInfo,
  deleteInvoiceInfor,
} = require('../../Controllers/InvoiceController');
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
