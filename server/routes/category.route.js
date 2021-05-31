const categoryRouter = require('express').Router();
const categoryController = require('../controllers/category.controller');

categoryRouter.param('id', categoryController.params);

categoryRouter.route('/category')
  .get(categoryController.get)
  .post(categoryController.post);
categoryRouter.route('/categories/:id')
  .get(categoryController.getOne)
  .put(categoryController.update)
  .delete(categoryController.delete);

module.exports = categoryRouter;
