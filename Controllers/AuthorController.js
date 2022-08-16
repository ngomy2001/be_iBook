const AuthorRepository = require('../repositories/AuthorRepository');
const {
  CREATE_SUCCESS,
  MISSING_PARAMS,
  UPDATE_SUCCESS,
  AUTHOR_NOT_FOUND,
  DELETE_SUCCESS,
} = require('../Constants/message');
//Show a list of already authors in system
const getAllAuthors = async (req, res, next) => {
  const authors = await AuthorRepository.getAuthors();
  return res.status(200).send(authors);
};

//Create a new author
const createAuthor = async (req, res, next) => {
  const { firstName, lastName, description } = req.body;
  if (!firstName || !lastName || !description)
    return res.status(400).send(MISSING_PARAMS);

  //const author = await AuthorRepository.findAuthor(email);

  //if (user) return res.status(400).send(EXISTED_USER);

  const data = {
    firstName,
    lastName,
    description,
  };

  const newAuthor = await AuthorRepository.addAuthor(data);
  return res.status(200).send(CREATE_SUCCESS);
};

//Update author information
const updateAuthorInfo = async (req, res, next) => {
  const { id } = req.params;

  const author = await AuthorRepository.findAuthor({ _id: id });

  if (!author) return res.status(404).send(AUTHOR_NOT_FOUND);
  const { firstName, lastName, description } = req.body;
  const data = {
    firstName,
    lastName,
    description,
  };

  const updatedAuthor = await AuthorRepository.updateAuthor(id, data);
  return res.status(200).send(UPDATE_SUCCESS);
};

//Delete an author
const deleteAuthorInfor = async (req, res, next) => {
  const { id } = req.params;
  const deletedAuthor = await AuthorRepository.deleteAuthor(id);
  return res.status(200).send(DELETE_SUCCESS);
};
module.exports = {
  getAllAuthors,
  createAuthor,
  updateAuthorInfo,
  deleteAuthorInfor,
};
