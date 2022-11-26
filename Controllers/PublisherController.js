const PublisherRepository = require('../repositories/PublisherRepository');
const {
  NOT_FOUND,
  CREATE_SUCCESS,
  MISSING_PARAMS,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
} = require('../Constants/message');
//Show a list of already publishers in system
const getAllPublishers = async (req, res, next) => {
  const publishers = await PublisherRepository.getPublishers();
  return res.status(200).send(publishers);
};

//Create a new publisher
const createPublisher = async (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) return res.status(400).send(MISSING_PARAMS);

  const data = {
    name,
    description,
  };

  const newPublisher = await PublisherRepository.addPublisher(data);
  if (newPublisher) return res.status(200).send(CREATE_SUCCESS);
};

//Update publisher information
const updatePublisherInfo = async (req, res, next) => {
  const { id } = req.params;

  const publisher = await PublisherRepository.getPublisherById(id);

  if (!publisher) return res.status(404).send(NOT_FOUND);
  const { name, description } = req.body;
  const data = {
    name,
    description,
  };

  const updatedPublisher = await PublisherRepository.updatePublisher(id, data);
  return res.status(200).send(UPDATE_SUCCESS);
};

//Delete an author
const deletePublisherInfor = async (req, res, next) => {
  const { id } = req.params;
  const deletedPublisher = await PublisherRepository.deletePublisher(id);
  return res.status(200).send(DELETE_SUCCESS);
};
module.exports = {
  getAllPublishers,
  createPublisher,
  updatePublisherInfo,
  deletePublisherInfor,
};
