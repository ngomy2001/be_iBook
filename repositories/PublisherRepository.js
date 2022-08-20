const Publisher = require('../database/models/PublisherModel');

//Retrieve all publishers in the system
const getPublishers = async () => {
  try {
    const publishers = await Publisher.find({});
    return publishers;
  } catch (error) {
    console.log(
      '🚀 ~ file: PublisherRepository.js ~ line 9 ~ getPublishers ~ error',
      JSON.stringify(error)
    );
  }
};

//Find a publisher by Id
const getPublisherById = async (id) => {
  try {
    const publisher = await Publisher.findById(id);
    return publisher;
  } catch (error) {
    console.log(
      '🚀 ~ file: PublisherRepository.js ~ line 22 ~ getPublisherById ~ error',
      JSON.stringify(error)
    );
  }
};

//Find a publisher by option
const findPublisher = async (option) => {
  try {
    const publisher = await Publisher.findOne({ option });
    return publisher;
  } catch (error) {
    console.log(
      '🚀 ~ file: PublisherRepository.js ~ line 35 ~ findPublisher ~ error',
      JSON.stringify(error)
    );
  }
};

//Add a new publisher
const addPublisher = async (data) => {
  try {
    const newPublisher = await Publisher.create(data);
    return newPublisher;
  } catch (error) {
    console.log(
      '🚀 ~ file: PublisherRepository.js ~ line 48 ~ addPublisher ~ error',
      JSON.stringify(error)
    );
  }
};

//Update a publisher
const updatePublisher = async (id, data) => {
  try {
    const updatedUser = await Publisher.findByIdAndUpdate(id, data);
    return updatedUser;
  } catch (error) {
    console.log(
      '🚀 ~ file: AccountRepository.js ~ line 69 ~ updateAccount ~ error',
      JSON.stringify(error)
    );
  }
};

//Delete a publisher
const deletePublisher = async (id) => {
  try {
    const deletedPublisher = await Publisher.findByIdAndRemove(id);
    return deletedPublisher;
  } catch (error) {
    console.log(
      '🚀 ~ file: PublisherRepository.js ~ line 74 ~ deletePublisher ~ error',
      JSON.stringify(error)
    );
  }
};
module.exports = {
  getPublishers,
  getPublisherById,
  findPublisher,
  addPublisher,
  updatePublisher,
  deletePublisher,
};
