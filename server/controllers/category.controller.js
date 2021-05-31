
const CategoryModel = require('../model/Category');

exports.params = async function (req, res, next, id) {
  await CategoryModel.findById(id)
    .populate('categories')
    .exec()
    .then((category) => {
      if (!category) {
        return res.status(400).send('There is no category with that id');
      }
      req.category = category;
      next();
    }, (err) => {
      res.status(400).send('There is an error with that request');
      res.send(err);
    });
};

exports.get = async function (req, res) {
  await CategoryModel.find({}).populate('categories')
    .exec()
    .then((category) => {
      res.json(category);
    }, (err) => {
      res.send(err);
    });
};


exports.post = async function (req, res) {

  await CategoryModel.create({
    name: req.body.name,
    image: req.body.image
  })
    .then((category) => {
      res.json(category);
    }, (err) => {
      res.send(err);
    });
};

exports.getOne = async function (req, res) {
  const category = await req.category;

  res.json(category);
};

exports.update = async function (req, res) {
  const category = await req.category;
  const updateCategory = await req.body;

  _.merge(category, updateCategory);

  await category.save((err, saved) => {
    if (err) {
      return res.status(400).send('category not Updated');
    }

    return res.json(saved);
  });
};

exports.delete = async function (req, res) {
  const category = await req.category;

  await category.remove((err, removed) => {
    if (err) {
      return res.status(400).send('No category with that ID');
    }

    return res.json(removed);
  });
};
