const express = require('express');
const router = express.Router();
const User = require('../Model/User');

// ✅ Create a new user
router.post('/', async (req, res) => {
    try {
        const { username } = req.body;

        if (!username) {
            return res.status(400).json({ error: 'Username is required' });
        }

        const newUser = new User({ username });
        await newUser.save();

        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user', message: err.message });
    }
});

// ✅ Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users', message: err.message });
    }
});

module.exports = router;
