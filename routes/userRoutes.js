const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
const {
  createTodo,
  getUserTodos,
  updateTodo,
  deleteTodo,
  getuserTodoById
} = require('../controller/userController');

router.route('/todo').post(authenticateUser, createTodo).get(authenticateUser,getUserTodos);
router.route('/todo/:id').get(authenticateUser, getuserTodoById).put(authenticateUser,updateTodo).delete(authenticateUser,deleteTodo);



module.exports = router;