const express = require('express');
const todoController = require('./../controllers/todoController');
const router = express.Router();
router.post('/createTodo/user',todoController.createUser);
router.post('/createTodo/:id/todo',todoController.createTodo);
router.delete('/deleteTodo/:id/:todoId',todoController.deleteTodo);
module.exports = router;