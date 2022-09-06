const BookCopy = require('../database/models/BookCopyModel');

//Retrieve all book copies in the system
const getBookCopies = async () => {
  try {
    const bookCopies = await BookCopy.find({});
    return bookCopies;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookCopyRepository.js ~ line 9 ~ getBookCopies ~ error',
      JSON.stringify(error)
    );
  }
};

//Find a book copy by Id
const getBookCopyById = async (id) => {
  try {
    const bookCopy = await BookCopy.findById(id);
    return bookCopy;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookCopyRepository.js ~ line 9 ~ getBookCopyById ~ error',
      JSON.stringify(error)
    );
  }
};

//Find by option
const findBookCopy = async (option) => {
  try {
    const bookCopy = await BookCopy.find({ option });
    return bookCopy;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookCopyRepository.js ~ line 22 ~ findBookCopy ~ error',
      JSON.stringify(error)
    );
  }
};
//Create a new book copy
const addNewBookCopy = async (data) => {
  try {
    const newBookCopy = await BookCopy.create(data);
    return newBookCopy;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookCopyRepository.js ~ line 9 ~ addNewBookCopy ~ error',
      JSON.stringify(error)
    );
  }
};

//Update a book copy
const updateBookCopy = async (id, data) => {
  try {
    const updatedBookCopy = await BookCopy.findByIdAndUpdate(id, data);
    return updatedBookCopy;
  } catch (error) {
    console.log(
      '🚀 ~ file: BookCopyRepository.js ~ line 47 ~ updateBookCopy ~ error',
      JSON.stringify(error)
    );
  }
};
module.exports = {
  getBookCopies,
  getBookCopyById,
  addNewBookCopy,
  findBookCopy,
  updateBookCopy,
};
