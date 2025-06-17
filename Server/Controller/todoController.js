const Todo = require('../models/Todo');

// Create a new Todo
const createTodo = async (req, res) => {
    try {
        const { title, description, tags, priority, mentions, createdBy } = req.body;

        const newTodo = new Todo({
            title,
            description,
            tags,
            priority,
            mentions,
            createdBy,
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create todo', message: err.message });
    }
};

// Get all todos for a specific user
const getTodosByUser = async (req, res) => {
    try {
        const { username } = req.params;
        const todos = await Todo.find({ createdBy: username }).sort({ createdAt: -1 });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch todos', message: err.message });
    }
};

// Update a Todo
const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update todo', message: err.message });
    }
};

// Delete a Todo
const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete todo', message: err.message });
    }
};

// Add a Note to a Todo
const addNoteToTodo = async (req, res) => {
    try {
        const { note } = req.body;
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ error: 'Todo not found' });

        todo.notes.push(note);
        const updated = await todo.save();
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add note', message: err.message });
    }
};

module.exports = {
    createTodo,
    getTodosByUser,
    updateTodo,
    deleteTodo,
    addNoteToTodo,
};
