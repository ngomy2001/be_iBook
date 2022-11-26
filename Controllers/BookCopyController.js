const BookCopyRepository = require('../repositories/BookCopyRepository');

const { AVAILABLE_STATUS } = require('../Constants/bookStatus');

const {
  CREATE_SUCCESS,
  NOT_FOUND,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
} = require('../Constants/message');
//Show a list of already book copies in system
const getBookCopies = async (req, res, next) => {
  try {
    const copies = await BookCopyRepository.getBookCopies();
    return res.status(200).send(copies);
  } catch (error) {
    console.log(
      '🚀 ~ file: BookCopyController.js ~ line 9 ~ getBookCopies ~ error',
      error
    );
  }
};

//Show a list of already book copies in system
const getBookCopiesByBookId = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const copies = await BookCopyRepository.getBookCopiesByBookId({ bookId });
    return res.status(200).send(copies);
  } catch (error) {
    console.log(
      '🚀 ~ file: BookCopyController.js ~ line 9 ~ getBookCopies ~ error',
      error
    );
  }
};

//Create a new book copy
const createBookCopy = async (req, res, next) => {
  try {
    const { bookId } = req.body;
    const data = {
      bookId,
      status: AVAILABLE_STATUS,
    };

    const newBookCopy = await BookCopyRepository.addNewBookCopy(data);
    return res.send(200).send(CREATE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: BookCopyController.js ~ line 21 ~ createBookCopy ~ error',
      error
    );
  }
};

//Update book copy information
const updateBookCopyInfo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const bookCopy = await BookCopyRepository.getBookCopyById(id);

    if (!bookCopy) return res.status(404).send(NOT_FOUND);

    const { status } = req.body;

    const data = {
      status,
    };

    const updatedBookCopy = await BookCopyRepository.updateBookCopy(id, data);

    return res.status(200).send(UPDATE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: BookCopyController.js ~ line 60 ~ updateBookCopyInfo ~ error',
      error
    );
  }
};

//Delete a book copy
const deleteBookCopyInfor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBookCopy = await BookCopyRepository.deleteBookCopy(id);
    return res.status(200).send(DELETE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: BookCopyController.js ~ line 74 ~ deleteBookCopyInfor ~ error',
      error
    );
  }
};

//Find available book copies
const findAvailableItems = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    console.log(
      '🚀 ~ file: BookCopyController.js ~ line 87 ~ findAvailableItems ~ bookId',
      bookId
    );

    const availableItems = await BookCopyRepository.findAvailableItem(bookId);
    return res.status(200).send(availableItems);
  } catch (error) {}
};

module.exports = {
  getBookCopies,
  createBookCopy,
  updateBookCopyInfo,
  deleteBookCopyInfor,
  findAvailableItems,
  getBookCopiesByBookId,
};
