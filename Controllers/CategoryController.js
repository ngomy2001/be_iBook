const CategoryRepository = require('../repositories/CategoryRepository');
//Show a list of already categories in system
const getAllCategories = async (req, res, next) => {
  const categories = await CategoryRepository.getCategories();
  return res.status(200).send(categories);
};

//Create a new category
const createCategory = async (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) return res.status(400).send(MISSING_PARAMS);

  const data = {
    name,
    description,
  };

  const newCategory = await CategoryRepository.addCategory(data);
  if (newCategory) return res.status(200).send(CREATE_SUCCESS);
};

//Update category information
const updateCategoryInfo = async (req, res, next) => {
  const { id } = req.params;

  const category = await CategoryRepository.getCategoryById(id);

  if (!category) return res.status(404).send(NOT_FOUND);
  const { name, description } = req.body;
  const data = {
    name,
    description,
  };

  const updatedCategory = await CategoryRepository.updateCategory(id, data);
  return res.status(200).send(UPDATE_SUCCESS);
};

//Delete an author
const deleteCategoryInfor = async (req, res, next) => {
  const { id } = req.params;
  const deletedCategory = await CategoryRepository.deleteCategory(id);
  return res.status(200).send(DELETE_SUCCESS);
};
module.exports = {
  getAllCategories,
  createCategory,
  updateCategoryInfo,
  deleteCategoryInfor,
};
