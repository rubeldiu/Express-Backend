const User = require('../models/user');
const user = require('../models/user');

exports.create = (req, res) => {
  const { name, address } = req.body;
  User.create({ name, address }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(400).json({ error: 'Error Occured!!!' });
    }
    res.json(user);
  });
};

exports.list = (req, res) => {
  User.find({})
    .limit(10)
    .sort({ createdAt: -1 })
    .exec((err, users) => {
      if (err) console.log(err);
      res.json(users);
    });
};

exports.read = (req, res) => {
  const { _id } = req.params;
  User.findOne({ _id }).exec((err, user) => {
    if (err) console.log(err);
    res.json(user);
  });
};

exports.update = (req, res) => {
  const { _id } = req.params;
  const { name, address } = req.body;
  User.findOneAndUpdate({ _id }, { name, address }, { new: true }).exec(
    (err, user) => {
      if (err) console.log(err);
      res.json(user);
    }
  );
};
exports.remove = (req, res) => {
  const { _id } = req.params;
  User.findOneAndRemove({ _id }).exec((err, user) => {
    if (err) console.log(err);
    res.json({
      message: 'User deleted',
    });
  });
};
