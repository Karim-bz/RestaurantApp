const express = require('express');
const restaurantController = require('../controllers/restaurant.controller');
const restaurantRouter = express.Router();
restaurantRouter.param('id', restaurantController.params);

restaurantRouter.route('/restaurants')
  .get(restaurantController.get);
restaurantRouter.route('/restaurants/:id')
  .delete(restaurantController.delete)
  .get(restaurantController.getOne);
restaurantRouter.route('/restaurantsByCategory/:categoryId')
  .get(restaurantController.findAllByCategory);
restaurantRouter.route('/category/:categoryID/restaurants')
  .post(restaurantController.post);
restaurantRouter.route('/categories/:categoryId/restaurants/:restaurantId')
  .put(restaurantController.update);

module.exports = restaurantRouter;
