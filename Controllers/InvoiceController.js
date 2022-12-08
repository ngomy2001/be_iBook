const InvoiceRepository = require('../repositories/InvoiceRepository');
const {
  CREATE_SUCCESS,
  MISSING_PARAMS,
  NOT_FOUND,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
} = require('../Constants/message');
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

    if (!invoice) return res.status(404).send(NOT_FOUND);
    const { status } = req.body;
    const data = {
      status,
    };

    const updatedInvoice = await InvoiceRepository.updateInvoice(id, data);
    if (updatedInvoice) return res.status(200).send(UPDATE_SUCCESS);
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
module.exports = {
  getAllInvoices,
  createInvoice,
  updateInvoiceInfo,
  deleteInvoiceInfor,
  updateInvoiceStatus,
  searchInvoice,
};
