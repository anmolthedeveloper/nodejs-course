const mongoose = require('mongoose')
const todoSchema =  require('../schema/todo.schema')
const Model = mongoose.model
module.exports = Todo = Model('Todos',todoSchema);
