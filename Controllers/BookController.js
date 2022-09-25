const BookRepository = require('../repositories/BookRepository');
const BookCopyRepository = require('../repositories/BookCopyRepository');
const { AVAILABLE_STATUS } = require('../Constants/bookStatus');
const {
  CREATE_SUCCESS,
  MISSING_PARAMS,
  NOT_FOUND,
  UPDATE_SUCCESS,
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
module.exports = {
  getAllBooks,
  createBook,
  updateBookInfo,
};
