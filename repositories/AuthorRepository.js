const Author = require('../database/models/AuthorModel');

//Retrieve all already authors
const getAuthors = async () => {
  try {
    const authors = await Author.find({});
    return authors;
  } catch (error) {
    console.log(
      '🚀 ~ file: AuthorRepository.js ~ line 9 ~ getAuthors ~ error',
      JSON.stringify(error)
    );
  }
};

//Find author by condition
const findAuthor = async (condition) => {
  try {
    const author = await Author.findOne({ condition });
    return author;
  } catch (error) {
    console.log(
      '🚀 ~ file: AuthorRepository.js ~ line 22 ~ findAuthor ~ error',
      JSON.stringify(error)
    );
  }
};

//Add a new author

const addAuthor = async (data) => {
  try {
    const newAuthor = await Author.create(data);
    return newAuthor;
  } catch (error) {
    console.log(
      '🚀 ~ file: AuthorRepository.js ~ line 36 ~ addAuthor ~ error',
      JSON.stringify(error)
    );
  }
};

//Update an author information
const updateAuthor = async (id, data) => {
  try {
    const updatedAuthor = await Author.findOneAndUpdate(id, data);
    return updatedAuthor;
  } catch (error) {
    console.log(
      '🚀 ~ file: AuthorRepository.js ~ line 49 ~ updateAuthor ~ error',
      JSON.stringify(error)
    );
  }
};

//Delete an author
const deleteAuthor = async (id) => {
  try {
    const deletedAuthor = await Author.findByIdAndRemove(id);
    return deletedAuthor;
  } catch (error) {
    console.log(
      '🚀 ~ file: AuthorRepository.js ~ line 62 ~ deleteAuthor ~ error',
      JSON.stringify(error)
    );
  }
};
module.exports = {
  getAuthors,
  findAuthor,
  addAuthor,
  updateAuthor,
  deleteAuthor,
};
