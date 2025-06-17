const express = require('express');
const router = express.Router();

const { createTodo, getTodos, updateTodo, deleteTodo, addNote } = require('../controllers/todoController');
router.post('/', createTodo);
router.get('/:user', getTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.post('/:id/notes', addNote);
module.exports = router;