var express = require('express');
var router = express.Router();
const {
  getAllCategories,
  createCategory,
  updateCategoryInfo,
  deleteCategoryInfor,
} = require('../../Controllers/CategoryController');

router.get('/', getAllCategories);
router.post('/createCategory', createCategory);
router.put('/:id', updateCategoryInfo);
router.delete('/:id', deleteCategoryInfor);
module.exports = router;
