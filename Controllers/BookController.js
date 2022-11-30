const BookRepository = require('../repositories/BookRepository');
const BookCopyRepository = require('../repositories/BookCopyRepository');
const { AVAILABLE_STATUS } = require('../Constants/bookStatus');
const {
  CREATE_SUCCESS,
  MISSING_PARAMS,
  NOT_FOUND,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
} = require('../Constants/message');

//Show a list of already books in system
const getAllBooks = async (req, res, next) => {
  const books = await BookRepository.getBooks();
  return res.status(200).send(books);
};

//Create a new book
const createBook = async (req, res, next) => {
  try {
    const {
      title,
      categoryId,
      authorId,
      publisherId,
      language,
      numberOfPages,
      numberOfCopies,
      sample,
    } = req.body;
    if (
      !title ||
      !categoryId ||
      !authorId ||
      !publisherId ||
      !language ||
      !numberOfPages ||
      !numberOfCopies
    )
      return res.status(400).send(MISSING_PARAMS);

    const data = {
      title,
      categoryId,
      authorId,
      publisherId,
      language,
      numberOfPages,
      numberOfCopies,
      sample,
    };

    const newBook = await BookRepository.addNewBook(data);
    console.log(
      '🚀 ~ file: BookController.js ~ line 36 ~ createBook ~ newBook',
      newBook
    );

    const bookCopyData = {
      bookId: newBook.id,
      status: AVAILABLE_STATUS,
    };
    for (let count = 0; count < numberOfCopies; count++) {
      const newCopy = await BookCopyRepository.addNewBookCopy(bookCopyData);
      console.log(
        '🚀 ~ file: BookController.js ~ line 48 ~ createBook ~ newCopy',
        newCopy
      );
    }
    return res.status(200).send(CREATE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: BookController.js ~ line 69 ~ createBook ~ error',
      error
    );
  }
};
//Find a book by Id
const findBookById = async (req, res, next) => {
  const { id } = req.params;
  const foundBook = await BookRepository.getBookById(id);
  return res.send(foundBook);
};
//Update book information
const updateBookInfo = async (req, res, next) => {
  const { id } = req.params;

  const book = await BookRepository.getBookById(id);

  if (!book) return res.status(404).send(NOT_FOUND);
  const {
    title,
    categoryId,
    authorId,
    publisherId,
    language,
    numberOfPages,
    numberOfCopies,
  } = req.body;
  const data = {
    title,
    categoryId,
    authorId,
    publisherId,
    language,
    numberOfPages,
    numberOfCopies,
  };

  const updatedBook = await BookRepository.updateBook(id, data);
  return res.status(200).send(UPDATE_SUCCESS);
};

//Update sample
const updateBookSample = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookRepository.getBookById(id);

    if (!book) return res.status(404).send(NOT_FOUND);
    const { sample } = req.body;
    const data = {
      sample,
    };
    console.log('sample', sample);

    const updatedBookSample = await BookRepository.updateBook(id, data);
    if (updatedBookSample) return res.status(200).send(UPDATE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: BookController.js ~ line 125 ~ updateBookSample ~ error',
      error
    );
  }
};

//Delete a book infor
const deleteBookInfor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await BookCopyRepository.deleteBookCopy(id);
    return res.status(200).send(DELETE_SUCCESS);
  } catch (error) {
    console.log(
      '🚀 ~ file: BookController.js ~ line 114 ~ deleteBookInfor ~ error',
      error
    );
  }
};

//Find book by Month
const countBookEachMonth = async (req, res, next) => {
  try {
    const date = new Date();
    let month;
    let response = [];
    const year = date.getFullYear();
    for (month = 0; month < 12; month++) {
      let startDate = new Date(year, month, 1);
      let endDate = new Date(year, month + 1);
      const foundBooks = await BookRepository.findBookByMonth(
        startDate,
        endDate
      );
      const numberOfBook = foundBooks.length;
      await response.push({
        monthValue: month + 1,
        numberOfBookVal: numberOfBook,
      });
    }
    return res.status(200).send(response);
  } catch (error) {
    console.log(
      '🚀 ~ file: BookController.js ~ line 159 ~ findBookByMonth ~ error',
      error
    );
  }
};
module.exports = {
  getAllBooks,
  createBook,
  updateBookInfo,
  deleteBookInfor,
  updateBookSample,
  findBookById,
  countBookEachMonth,
};
