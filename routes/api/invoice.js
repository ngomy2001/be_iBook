var express = require('express');
var router = express.Router();
const {
  getAllInvoices,
  createInvoice,
  updateInvoiceInfo,
  deleteInvoiceInfor,
} = require('../../Controllers/InvoiceController');
router.get('/', getAllInvoices);
router.post('/createInvoice', createInvoice);
router.put('/:id', updateInvoiceInfo);
router.delete('/:id', deleteInvoiceInfor);
module.exports = router;
