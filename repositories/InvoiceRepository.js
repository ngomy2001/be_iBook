const Invoice = require('../database/models/InvoiceModel');

//Retrieve all invoices in the system
const getInvoices = async () => {
  try {
    const invoices = await Invoice.find({})
      .populate('userId')
      .populate({
        path: 'bookCopyId',
        populate: {
          path: 'bookId',
          model: 'Book',
        },
      });
    return invoices;
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceRepository.js ~ line 9 ~ getInvoices ~ error',
      error
    );
  }
};

//Search invoice
const searchInvoice = async (keyword) => {
  try {
    const queryRegx = new RegExp(keyword, 'i');
    const invoice = await Invoice.find({
      $or: [{ status: { $regex: queryRegx } }],
    });
    return invoice;
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceRepository.js ~ line 33 ~ searchInvoice ~ error',
      error
    );
  }
};

//Find an invoice by Id
const getInvoiceById = async (id) => {
  try {
    const invoice = await Invoice.findById(id);
    return invoice;
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceRepository.js ~ line 22 ~ getInvoiceById ~ error',
      error
    );
  }
};

//Add a new author

const addInvoice = async (data) => {
  try {
    const newInvoice = await Invoice.create(data);
    return newInvoice;
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceRepository.js ~ line 36 ~ addInvoice ~ error',
      error
    );
  }
};

//Update an invoice information
const updateInvoice = async (id, data) => {
  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(id, data);
    return updatedInvoice;
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceRepository.js ~ line 49 ~ updateInvoice ~ error',
      error
    );
  }
};

//Delete an invoice
const deleteInvoice = async (id) => {
  try {
    const deletedInvoice = await Invoice.findByIdAndRemove(id);
    return deletedInvoice;
  } catch (error) {
    console.log(
      '🚀 ~ file: InvoiceRepository.js ~ line 62 ~ deleteInvoice ~ error',
      error
    );
  }
};
module.exports = {
  getInvoices,
  getInvoiceById,
  addInvoice,
  updateInvoice,
  deleteInvoice,
  searchInvoice,
};
