const Book = require('../database/models/BookModel');

//Retrieve all books in the system
const getBooks = async () => {
  try {
    const books = await Book.find({})
      .populate('categoryId')
      .populate('authorId')
      .populate('publisherId');
    return books;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookRepository.js ~ line 9 ~ getBooks ~ error',
      JSON.stringify(error)
    );
  }
};

//Find a book by Id
const getBookById = async (id) => {
  try {
    const book = await Book.findById(id);
    return book;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookRepository.js ~ line 22 ~ getBookById ~ error',
      JSON.stringify(error)
    );
  }
};

//Find by option
const findBook = async (option) => {
  try {
    const book = await Book.find({ option });
    return book;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookRepository.js ~ line 35 ~ findBook ~ error',
      JSON.stringify(error)
    );
  }
};

//Create a new book
const addNewBook = async (data) => {
  try {
    const newBook = await Book.create(data);
    return newBook;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookRepository.js ~ line 9 ~ addNewBook ~ error',
      error
    );
  }
};

//Update a book
const updateBook = async (id, data) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, data);
    return updatedBook;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookRepository.js ~ line 34 ~ updateBook ~ error',
      JSON.stringify(error)
    );
  }
};

//Delete a book
const deleteBook = async (id) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(id);
    return deletedBook;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookRepository.js ~ line 77 ~ deleteBook ~ error',
      error
    );
  }
};
module.exports = {
  getBooks,
  getBookById,
  findBook,
  addNewBook,
  updateBook,
  deleteBook,
};
