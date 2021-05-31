
const _ = require('lodash');
const CategoryModel = require('../model/Category');
const RestaurantModel = require('../model/restaurant');

exports.params = async function (req, res, next, id) {
  await RestaurantModel.findById(id)
    .populate('category')
    .exec()
    .then((restaurant) => {
      if (!restaurant) {
        return res.status(400).send(' restaurant with that Particular id');
      }
      req.restaurant = restaurant;
      next();
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.get = async function (req, res) {
  await RestaurantModel.find({})
    .populate('category')
    .exec()
    .then((restaurants) => {
      res.json(restaurants);
    }, (err) => {
      res.send(err);
    });
};

exports.findAllByCategory = async function (req, res) {
  const categoryId = await req.params.categoryId;
  await RestaurantModel.find({ category: categoryId })
    .populate('Category')
    .exec()
    .then(restaurants => {
      res.send(restaurants);
    }, (err) => {
      res.send(err);
    });
};

exports.getOne = async function (req, res) {
  const restaurant = await req.restaurant;

  res.json(restaurant);
};

exports.delete = async function (req, res) {
  await RestaurantModel.remove((req.restaurant), (err, removed) => {
    if (err) {
      res.status(400).send('restaurant not deleted');
    } else {
      res.json(removed);
    }
  });
};


exports.post = async function (req, res) {
  // Create a Restaurant
  const restaurant = new RestaurantModel({
        name: req.body.name,
        image: req.body.image,
        adress: req.body.adress,
        category: req.params.categoryID
    });

    // Save a Restaurant in the MongoDB
    restaurant.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
  // await CategoryModel.findOne({ _id: categoryId }, async (err, foundCategory) => {
  //   if (!foundCategory) {
  //     return err;
  //   }else{
  //     foundCategory.restaurants = foundCategory.restaurants || [];
  //     foundCategory.restaurants.push(newRestaurant);
  //     newRestaurant.category = foundCategory;
  //     await newRestaurant.save((error, savedRestaurant) => {
  //       if (error) {
  //         return error;
  //       }
  //       return res.json(savedRestaurant);
  //     });
  //     await foundCategory.save((error, savedCategory) => {
  //       if (error) {
  //         return error;
  //       }
  //       savedCategory;
  //     });
  //     return foundCategory;
  //   }
  // });
};

exports.update = function (req, res) {
  const newCategoryId = req.params.categoryId;
  const { restaurantId } = req.params;
  const newRestaurant = req.body;

  RestaurantModel.findOne({ _id: restaurantId }, (err, restaurant) => {
    if (!restaurant) {
      return err;
    }

    const oldCategoryID = restaurant.category._id;

    CategoryModel.findById(oldCategoryID)
      .then((oldCategory) => {
        if (!oldCategory) {
          return res.status(400).send('No category with that Particular id');
        }

        const index = oldCategory.restaurants.indexOf(restaurantId);

        if (index > -1) {
          oldCategory.restaurants.splice(index, 1);
        }

        oldCategory.save((error, savedCategory) => {
          if (error) {
            return error;
          }
          return savedCategory;
        });
        return oldCategory;
      });


    CategoryModel.findById(newCategoryId)
      .then((newCategory) => {
        if (!newCategory) {
          return err;
        }

        newCategory.restaurants.push(restaurant);

        newCategory.save((error, savedCategory) => {
          if (error) {
            return error;
          }
          return savedCategory;
        });

        restaurant.category = newCategory;

        _.merge(restaurant, newRestaurant);
        restaurant.save((error, saved) => {
          if (error) {
            return error;
          }
          return res.json(saved);
        });
        return newCategory;
      });
    return restaurant;
  });
};
