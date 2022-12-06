const Category = require('../database/models/CategoryModel');

//Retrieve all categories in the system
const getCategories = async () => {
  try {
    const categories = await Category.find({});
    return categories;
  } catch (error) {
    console.log(
      '🚀 ~ file: CategoryRepository.js ~ line 9 ~ getCategories ~ error',
      JSON.stringify(error)
    );
  }
};

//Find a category by Id
const getCategoryById = async (id) => {
  try {
    const category = await Category.findById(id);
    return category;
  } catch (error) {
    console.log(
      '🚀 ~ file: CategoryRepository.js ~ line 22 ~ getCategoryById ~ error',
      JSON.stringify(error)
    );
  }
};
//Search category
const searchCategory = async (keyword) => {
  try {
    const queryRegx = new RegExp(keyword, 'i');
    const category = await Category.find({
      $or: [
        { name: { $regex: queryRegx } },
        { description: { $regex: queryRegx } },
      ],
    });
    return category;
  } catch (error) {
    console.log(
      '🚀 ~ file: CategoryRepository.js ~ line 40 ~ searchCategory ~ error',
      error
    );
  }
};
//Find a category by option
const findCategory = async (option) => {
  try {
    const category = await Category.findOne({ option });
    return category;
  } catch (error) {
    console.log(
      '🚀 ~ file: CategoryRepository.js ~ line 35 ~ findCategory ~ error',
      JSON.stringify(error)
    );
  }
};

//Add a new category
const addCategory = async (data) => {
  try {
    const newCategory = await Category.create(data);
    return newCategory;
  } catch (error) {
    console.log(
      '🚀 ~ file: CategoryRepository.js ~ line 48 ~ addCategory ~ error',
      JSON.stringify(error)
    );
  }
};

//Update a category
const updateCategory = async (id, data) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, data);
    return updatedCategory;
  } catch (error) {
    console.log(
      '🚀 ~ file: CategoryRepository.js ~ line 61 ~ updateCategory ~ error',
      JSON.stringify(error)
    );
  }
};

//Delete a category
const deleteCategory = async (id) => {
  try {
    const deletedCategory = await Category.findByIdAndRemove(id);
    return deletedCategory;
  } catch (error) {
    console.log(
      '🚀 ~ file: CategoryRepository.js ~ line 74 ~ deleteCategory ~ error',
      JSON.stringify(error)
    );
  }
};
module.exports = {
  getCategories,
  getCategoryById,
  findCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  searchCategory,
};
