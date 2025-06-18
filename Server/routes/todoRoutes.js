const express = require('express');
const router = express.Router();



const {
    createTodo,
    getTodosByUser,
    updateTodo,
    deleteTodo,
    addNoteToTodo,
} = require('../Controller/todoController.js');
router.post('/', createTodo);
router.get('/:user', getTodosByUser);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.post('/:id/notes', addNoteToTodo);
module.exports = router;