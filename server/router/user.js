const express = require('express');
const router = express.Router();

//import controller methods
const {
  create,
  list,
  read,
  update,
  remove,
} = require('../controller/userConroller');
router.post('/user', create);
router.get('/users', list);
router.get('/user/:_id', read);
router.put('/user/:_id', update);
router.delete('/user/:_id', remove);

module.exports = router;
