const body =  require('express-validator').body;
const todoController = require('../controller/todo.controller');
var router = require('express').Router();
router.post('/create',[
    body('number').notEmpty(),
    body('message').notEmpty(),
  ], todoController.create);
module.exports = router;