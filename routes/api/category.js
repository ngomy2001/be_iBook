var express = require('express');
var router = express.Router();
const {
  getAllCategories,
  createCategory,
  updateCategoryInfo,
  deleteCategoryInfor,
  searchCategoryItem,
} = require('../../Controllers/CategoryController');
/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Retrieve a list of categories in the system
 *     description: Retrieve a list of categories from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.get('/', getAllCategories);

router.get('/searchCategory/:keyword', searchCategoryItem);
/**
 * @swagger
 * /api/category/createCategory:
 *   post:
 *     summary: Add a new category to the system.
 *     description: Add a new category to the system.
 *     responses:
 *       201:
 *         description: Create successfully.
 */
router.post('/createCategory', createCategory);
/**
 * @swagger
 * /api/category/{id}:
 *   put:
 *     summary: Update a category info.
 *     description: Change an information of a category.
 *     responses:
 *       200:
 *         description: OK.
 */
router.put('/:id', updateCategoryInfo);
/**
 * @swagger
 * /api/category/{id}:
 *   delete:
 *     summary: Delete a category info.
 *     description: Remove an information of a category from database.
 *     responses:
 *       200:
 *         description: OK.
 */
router.delete('/:id', deleteCategoryInfor);
module.exports = router;
