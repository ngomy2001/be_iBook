const InvoiceRepository = require('../repositories/InvoiceRepository');
const BookCopyRepository = require('../repositories/BookCopyRepository');
const {
  CREATE_SUCCESS,
  MISSING_PARAMS,
  NOT_FOUND,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
} = require('../Constants/message');
const {
  AVAILABLE_STATUS,
  RESERVED_STATUS,
  LOANED_STATUS,
  INVOICE_LOST_STATUS,
} = require('../Constants/bookStatus');
const {
  COMPLETED_STATUS,
  CANCELED_STATUS,
  WAITING_STATUS,
  DELIVERED_STATUS,
  LOST_STATUS,
} = require('../Constants/invoiceStatus');
//Show a list of already invoices in system
const getAllInvoices = async (req, res, next) => {
  try {
    const invoices = await InvoiceRepository.getInvoices();
    return res.status(200).send(invoices);
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceController.js ~ line 9 ~ getAllInvoices ~ error',
      error
    );
  }
};

//Search invoice
const searchInvoice = async (req, res, next) => {
  try {
    const { keyword } = req.params;
    const foundInvoices = await InvoiceRepository.searchInvoice(keyword);
    if (!foundInvoices) return res.status(404).send(NOT_FOUND);
    return res.send(foundInvoices);
  } catch (error) {
    console.log('error: ', error);
  }
};
//Create a new invoice
const createInvoice = async (req, res, next) => {
  try {
    const { userId, bookCopyId, status } = req.body;
    if (!userId || !bookCopyId || !status)
      return res.status(400).send(MISSING_PARAMS);

    const data = {
      userId,
      bookCopyId,
      status,
    };

    const newInvoice = await InvoiceRepository.addInvoice(data);
    console.log(
      '🚀 ~ file: InvoiceController.js ~ line 30 ~ createInvoice ~ newInvoice',
      newInvoice
    );
    return res.status(200).send(CREATE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceController.js ~ line 36 ~ createInvoice ~ error',
      error
    );
  }
};

//Update invoice information
const updateInvoiceInfo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const invoice = await InvoiceRepository.getInvoiceById(id);

    if (!invoice) return res.status(404).send(NOT_FOUND);
    const { userId, bookCopyId, status } = req.body;
    const data = {
      userId,
      bookCopyId,
      status,
    };

    const updatedInvoice = await InvoiceRepository.updateInvoice(id, data);
    return res.status(200).send(UPDATE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceController.js ~ line 67 ~ updateInvoiceInfo ~ error',
      error
    );
  }
};

//Update status
const updateInvoiceStatus = async (req, res, next) => {
  try {
    const { id } = req.params;

    const invoice = await InvoiceRepository.getInvoiceById(id);
    console.log(
      '🚀 ~ file: InvoiceController.js ~ line 91 ~ updateInvoiceStatus ~ invoice',
      invoice
    );
    if (!invoice) return res.status(404).send(NOT_FOUND);

    const { status } = req.body;
    console.log(
      '🚀 ~ file: InvoiceController.js ~ line 117 ~ updateInvoiceStatus ~ status',
      status
    );
    const data = {
      status,
    };
    const updatedInvoice = await InvoiceRepository.updateInvoice(id, data);

    const bookCopyId = invoice.bookCopyId;
    let bookCopyStatus;
    console.log(
      '🚀 ~ file: InvoiceController.js ~ line 110 ~ updateInvoiceStatus ~ bookCopyId',
      bookCopyId
    );
    if (updatedInvoice) {
      if (invoice.status == WAITING_STATUS) {
        bookCopyStatus = RESERVED_STATUS;
      } else if (invoice.status == DELIVERED_STATUS) {
        bookCopyStatus = LOANED_STATUS;
      } else if (
        invoice.status == COMPLETED_STATUS ||
        status == CANCELED_STATUS
      ) {
        bookCopyStatus = AVAILABLE_STATUS;
      } else if (invoice.status == INVOICE_LOST_STATUS) {
        bookCopyStatus = LOST_STATUS;
      }
      const bookCopyData = { status: bookCopyStatus };
      console.log(
        '🚀 ~ file: InvoiceController.js ~ line 125 ~ updateInvoiceStatus ~ bookCopyData',
        bookCopyData
      );
      const updatedBookCopy = await BookCopyRepository.updateBookCopy(
        bookCopyId,
        bookCopyData
      );
      console.log(
        '🚀 ~ file: InvoiceController.js ~ line 144 ~ updateInvoiceStatus ~ updatedBookCopy',
        updatedBookCopy
      );
    }

    return res.status(200).send(UPDATE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceController.js ~ line 90 ~ updateInvoiceStatus ~ error',
      error
    );
  }
};

//Delete an invoice
const deleteInvoiceInfor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedInvoice = await InvoiceRepository.deleteInvoice(id);
    return res.status(200).send(DELETE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceController.js ~ line 81 ~ deleteInvoiceInfor ~ error',
      error
    );
  }
};

//Find invoice by Month
const countInvoiceEachMonth = async (req, res, next) => {
  try {
    const date = new Date();
    let month;
    let response = [];
    const year = date.getFullYear();
    for (month = 0; month < 12; month++) {
      let startDate = new Date(year, month, 1);
      let endDate = new Date(year, month + 1);
      const foundInvoices = await InvoiceRepository.findInvoiceByMonth(
        startDate,
        endDate
      );
      const numberOfInvoice = foundInvoices.length;
      await response.push({
        monthValue: month + 1,
        numberOfInvoiceVal: numberOfInvoice,
      });
    }
    return res.status(200).send(response);
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceController.js ~ line 200 ~ countInvoiceEachMonth ~ error',
      error
    );
  }
};
module.exports = {
  getAllInvoices,
  createInvoice,
  updateInvoiceInfo,
  deleteInvoiceInfor,
  updateInvoiceStatus,
  searchInvoice,
  countInvoiceEachMonth,
};
