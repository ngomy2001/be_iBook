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

//Find author by Id
module.exports = {
  getAuthors,
};
